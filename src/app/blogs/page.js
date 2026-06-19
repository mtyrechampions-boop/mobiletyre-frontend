import { Suspense } from 'react';
import BlogsClientPage from './BlogsClientPage';

export const metadata = {
  title: 'Blog | Mobile Tyre Champions',
  description: 'Read the latest tips, guides, and news about mobile tyre fitting, puncture repairs, and roadside assistance from Mobile Tyre Champions.',
};

async function getAPIBlogs() {
  try {
    const res = await fetch('https://admins.mobiletyrechampions.com/api/blogs', {
      next: { revalidate: 60 },
    });
    if (!res.ok) return [];
    const json = await res.json();
    const data = json.data || [];

    return data
      .filter(item => {
        const attrs = item.attributes || item;
        return attrs.slug; // only include items with a slug
      })
      .map(item => {
        const attrs = item.attributes || item;

        // Extract image URL
        let imageUrl = '/images/emergency.webp';
        if (attrs.image?.data?.attributes?.url) {
          imageUrl = attrs.image.data.attributes.url;
          if (!imageUrl.startsWith('http')) {
            imageUrl = `https://admins.mobiletyrechampions.com${imageUrl}`;
          }
        } else if (typeof attrs.image === 'string' && attrs.image) {
          imageUrl = attrs.image;
        }

        return {
          title: attrs.title || 'Untitled Post',
          slug: attrs.slug,
          excerpt:
            attrs.excerpt ||
            (attrs.content ? attrs.content.replace(/<[^>]+>/g, '').substring(0, 160) + '…' : ''),
          date: attrs.publishedAt
            ? new Date(attrs.publishedAt).toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              })
            : attrs.date || 'June 2026',
          readTime: attrs.readTime || '5 min read',
          image: imageUrl,
          category: attrs.category || 'Guides',
        };
      });
  } catch {
    return [];
  }
}

export default async function BlogsPage() {
  const apiBlogs = await getAPIBlogs();
  return (
    <Suspense fallback={<div className="bg-[#0B1528] min-h-screen" />}>
      <BlogsClientPage apiBlogs={apiBlogs} />
    </Suspense>
  );
}
