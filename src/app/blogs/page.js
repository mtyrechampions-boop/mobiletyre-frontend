import Link from 'next/link';
import { Calendar, Clock, ChevronRight } from 'lucide-react';

export const metadata = {
  title: 'Blog | Mobile Tyre Champions',
  description: 'Read the latest tips, guides, and news about mobile tyre fitting, puncture repairs, and roadside assistance from Mobile Tyre Champions.',
};

// Fallback / Static Blogs to display alongside API blogs
const staticBlogs = [
  {
    title: 'Is Mobile Tyre Fitting Worth It? All UK Drivers Need to Know',
    slug: 'mobile-tyre-fitting-worth-it',
    excerpt: 'Find out why mobile tyre fitting is taking the UK by storm. Find out the pros, cons and how emergency mobile tyre fitting can save you time and hassle.',
    date: 'June 19, 2026',
    readTime: '6 min read',
    image: '/blogs-images/Is Mobile Tyre Fitting Worth It All UK Drivers Need to Know.webp',
    category: 'Guides'
  },
  {
    title: 'Emergency Mobile Tyre Fitting: What to Do When You Get a Flat Tyre',
    slug: 'emergency-mobile-tyre-fitting',
    excerpt: 'Few driving situations are more frustrating than discovering a flat tyre. Learn how emergency mobile tyre fitting services get you back on the road safely.',
    date: 'June 19, 2026',
    readTime: '5 min read',
    image: '/blogs-images/Emergency Mobile Tyre Fitting What to Do When You Get a Flat Tyre.webp',
    category: 'Safety'
  }
];

async function getAPIBlogs() {
  try {
    const res = await fetch('https://admins.mobiletyrechampions.com/api/blogs', { 
      next: { revalidate: 60 } // Cache and revalidate every 60 seconds
    });
    if (!res.ok) return [];
    const json = await res.json();
    const data = json.data || [];
    
    // Normalize data (handle both Strapi attributes structure and flat structure)
    return data.map(item => {
      const attrs = item.attributes || item;
      
      // Extract image URL from Strapi format or fallback to default
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
        slug: attrs.slug || '',
        excerpt: attrs.excerpt || attrs.content?.substring(0, 150) + '...' || '',
        date: attrs.publishedAt ? new Date(attrs.publishedAt).toLocaleDateString('en-GB', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }) : (attrs.date || 'June 19, 2026'),
        readTime: attrs.readTime || '5 min read',
        image: imageUrl,
        category: attrs.category || 'Guides'
      };
    });
  } catch (error) {
    console.error('Error fetching blogs from API:', error);
    return [];
  }
}

export default async function BlogsPage() {
  const apiBlogs = await getAPIBlogs();
  
  // Merge API blogs and static ones (avoiding duplicates)
  const allBlogsMap = new Map();
  staticBlogs.forEach(blog => allBlogsMap.set(blog.slug, blog));
  apiBlogs.forEach(blog => {
    if (blog.slug) {
      allBlogsMap.set(blog.slug, blog);
    }
  });

  const blogs = Array.from(allBlogsMap.values());

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-[#0B1528] py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/emergency.webp')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6">
            Our <span className="text-[#FB7E10]">Blog</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto">
            Expert advice, safety tips, and the latest news from the mobile tyre fitting industry.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 mt-16">
        {blogs.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-2xl mx-auto px-6">
            <h3 className="text-2xl font-black text-[#0B1528] mb-2">No Articles Found</h3>
            <p className="text-slate-500">We are busy writing new content! Check back soon for the latest guides and updates.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <Link key={blog.slug} href={`/blogs/${blog.slug}`} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col h-full hover:-translate-y-1">
                {/* Image Container */}
                <div className="relative h-60 w-full overflow-hidden bg-slate-200">
                  <div className="absolute inset-0 bg-[#0B1528]/20 group-hover:bg-transparent transition-all duration-500 z-10"></div>
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-[#FB7E10] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-md">
                      {blog.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} className="text-[#FB7E10]" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} className="text-[#FB7E10]" />
                      {blog.readTime}
                    </div>
                  </div>

                  <h2 className="text-xl font-black text-[#0B1528] mb-3 group-hover:text-[#FB7E10] transition-colors line-clamp-2">
                    {blog.title}
                  </h2>
                  
                  <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                    {blog.excerpt}
                  </p>

                  <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between text-[#FB7E10] font-bold text-sm">
                    <span>Read Article</span>
                    <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center group-hover:bg-[#FB7E10] group-hover:text-white transition-colors">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
