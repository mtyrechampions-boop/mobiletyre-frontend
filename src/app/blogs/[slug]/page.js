import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, ArrowLeft } from 'lucide-react';
import CTA from '@/components/CTA';

async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`https://admins.mobiletyrechampions.com/api/blogs?filters[slug][$eq]=${slug}`, {
      next: { revalidate: 60 }
    });
    if (!res.ok) return null;
    const json = await res.json();
    const data = json.data || [];
    if (data.length === 0) return null;
    
    const item = data[0];
    const attrs = item.attributes || item;
    
    let imageUrl = '/images/emergency.webp';
    if (attrs.image?.data?.attributes?.url) {
      imageUrl = attrs.image.data.attributes.url;
      if (!imageUrl.startsWith('http')) {
        imageUrl = `https://admins.mobiletyrechampions.com${imageUrl}`;
      }
    } else if (attrs.image) {
      imageUrl = attrs.image;
    }
    
    return {
      title: attrs.title || 'Untitled Post',
      content: attrs.content || '',
      excerpt: attrs.excerpt || '',
      date: attrs.publishedAt ? new Date(attrs.publishedAt).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      }) : (attrs.date || 'June 19, 2026'),
      readTime: attrs.readTime || '5 min read',
      image: imageUrl,
      category: attrs.category || 'Guides'
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) {
    return {
      title: 'Blog Post Not Found | Mobile Tyre Champions',
    };
  }
  return {
    title: `${blog.title} | Mobile Tyre Champions`,
    description: blog.excerpt || blog.title,
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  
  if (!blog) {
    notFound();
  }

  // Generate a basic Table of Contents based on H2s in content if present
  // Otherwise default to standard sections or hide TOC
  const headingRegex = /<h2[^>]*>(.*?)<\/h2>|##\s+(.*)/g;
  const headings = [];
  let match;
  let index = 1;
  
  while ((match = headingRegex.exec(blog.content)) !== null) {
    const text = match[1] || match[2];
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    headings.push({ text, id, label: `${index}. ${text}` });
    index++;
  }

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/emergency.webp')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FB7E10] font-bold hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-300 mb-6">
            <span className="bg-[#FB7E10] text-white px-3 py-1 rounded-full uppercase tracking-wider">{blog.category}</span>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> {blog.date}</div>
            <div className="flex items-center gap-1.5"><Clock size={16} /> {blog.readTime}</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-0">
            {blog.title}
          </h1>
        </div>
      </div>

      {/* Grid Layout for Article + TOC */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">
        
        {/* Table of Contents Sidebar (only if headings found) */}
        {headings.length > 0 && (
          <aside className="lg:col-span-1 lg:sticky lg:top-28 h-fit bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
            <h3 className="font-black text-[#0B1528] text-lg mb-4 pb-2 border-b border-slate-100">
              Table of Contents
            </h3>
            <nav className="flex flex-col gap-3">
              {headings.map((h, i) => (
                <a key={i} href={`#${h.id}`} className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
                  {h.text}
                </a>
              ))}
            </nav>
          </aside>
        )}

        {/* Main Article Content */}
        <article className={`${headings.length > 0 ? 'lg:col-span-3' : 'lg:col-span-4'} bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none`}>
          <img 
            src={blog.image} 
            alt={blog.title} 
            className="w-full h-[400px] object-cover rounded-2xl mb-10"
            onError={(e) => {
              e.target.src = '/images/emergency.webp';
            }}
          />

          {/* Render content. Supports rendering as HTML or simple split lines for basic text */}
          {blog.content.includes('<') && blog.content.includes('>') ? (
            <div dangerouslySetInnerHTML={{ __html: blog.content }} />
          ) : (
            <div className="space-y-6">
              {blog.content.split('\n\n').map((paragraph, index) => {
                // If it starts with ##, render as heading
                if (paragraph.startsWith('## ')) {
                  const headingText = paragraph.replace('## ', '');
                  const headingId = headingText.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                  return <h2 key={index} id={headingId} className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">{headingText}</h2>;
                }
                
                // If paragraph seems like a table structure, we can format it dynamically (not strictly required since basic markdown usually won't contain tables in API, but supports rich typography)
                return <p key={index} className="text-slate-700 leading-relaxed">{paragraph}</p>;
              })}
            </div>
          )}
        </article>
      </div>
      <div className="mt-12">
        <CTA />
      </div>
    </div>
  );
}
