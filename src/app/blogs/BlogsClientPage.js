'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, Calendar, Clock, ArrowRight, ChevronRight } from 'lucide-react';

// Static blogs always present
const staticBlogs = [
  {
    title: 'Is Mobile Tyre Fitting Worth It? All UK Drivers Need to Know',
    slug: 'mobile-tyre-fitting-worth-it',
    excerpt:
      'Find out why mobile tyre fitting is taking the UK by storm. Explore the pros, cons and how emergency mobile tyre fitting can save you time and hassle.',
    date: 'June 19, 2026',
    readTime: '6 min read',
    image: '/blogs-images/Is Mobile Tyre Fitting Worth It All UK Drivers Need to Know.webp',
    category: 'Guides',
  },
  {
    title: 'Emergency Mobile Tyre Fitting: What to Do When You Get a Flat Tyre',
    slug: 'emergency-mobile-tyre-fitting',
    excerpt:
      'Few driving situations are more frustrating than discovering a flat tyre. Learn how emergency mobile tyre fitting services get you back on the road safely.',
    date: 'June 19, 2026',
    readTime: '5 min read',
    image: '/blogs-images/Emergency Mobile Tyre Fitting What to Do When You Get a Flat Tyre.webp',
    category: 'Safety',
  },
];

const ITEMS_PER_PAGE = 6;

export default function BlogsClientPage({ apiBlogs = [] }) {
  const [query, setQuery] = useState('');
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_PAGE);

  // Merge: static first, then API blogs (deduplicated by slug)
  const allBlogs = useMemo(() => {
    const map = new Map();
    staticBlogs.forEach(b => map.set(b.slug, b));
    apiBlogs.forEach(b => { if (b.slug) map.set(b.slug, b); });
    return Array.from(map.values());
  }, [apiBlogs]);

  const filtered = useMemo(() => {
    const q = query.toLowerCase().trim();
    if (!q) return allBlogs;
    return allBlogs.filter(
      b =>
        b.title.toLowerCase().includes(q) ||
        b.excerpt.toLowerCase().includes(q) ||
        b.category.toLowerCase().includes(q)
    );
  }, [query, allBlogs]);

  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;

  return (
    <div className="bg-slate-50 min-h-screen">

      {/* ── Hero (dark, matching other pages) ───────────── */}
      <div className="bg-[#0B1528] pt-28 pb-20 px-4 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-5 bg-[url('/images/emergency.webp')] bg-cover bg-center" />
        {/* Orange glow accent */}
        <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FB7E10]/10 blur-[100px] rounded-full" />

        <div className="max-w-7xl mx-auto relative z-10 text-center">
          {/* Eyebrow */}
          <span className="inline-block mb-5 text-[11px] font-black uppercase tracking-[0.22em] text-[#FB7E10] bg-[#FB7E10]/10 border border-[#FB7E10]/20 px-5 py-2 rounded-full">
            Resources &amp; Guides
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-5">
            Our Expert <span className="text-[#FB7E10]">Blog</span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Expert tips, safety guides, and the latest news straight from the Mobile Tyre Champions team.
          </p>

          {/* Search bar */}
          <div className="relative max-w-md mx-auto">
            <input
              id="blog-search"
              type="text"
              value={query}
              onChange={e => {
                setQuery(e.target.value);
                setVisibleCount(ITEMS_PER_PAGE);
              }}
              placeholder="Search articles…"
              className="w-full bg-white/8 border border-white/15 rounded-2xl pl-5 pr-16 py-4 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#FB7E10]/40 focus:border-[#FB7E10]/40 transition-all"
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-[#FB7E10] hover:bg-orange-500 rounded-xl flex items-center justify-center cursor-pointer transition-colors">
              <Search size={15} className="text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* ── Blog Grid (light background) ─────────────────── */}
      <div className="max-w-7xl mx-auto px-4 py-16">

        {/* Result count when searching */}
        {query && (
          <p className="text-slate-500 text-sm mb-6">
            {filtered.length} result{filtered.length !== 1 ? 's' : ''} for{' '}
            <span className="text-[#FB7E10] font-semibold">&ldquo;{query}&rdquo;</span>
          </p>
        )}

        {/* Empty state */}
        {visible.length === 0 && (
          <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm max-w-xl mx-auto">
            <p className="text-slate-500 text-lg px-6">
              No articles match &ldquo;{query}&rdquo;. Try a different search term.
            </p>
          </div>
        )}

        {/* Cards grid */}
        {visible.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {visible.map((blog) => (
              <article
                key={blog.slug}
                className="group bg-white border border-slate-100 rounded-3xl overflow-hidden flex flex-col shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Image banner */}
                <div className="relative h-56 overflow-hidden flex-shrink-0 bg-slate-100">
                  <div className="absolute inset-0 bg-[#0B1528]/15 group-hover:bg-transparent transition-all duration-500 z-10" />
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => { e.currentTarget.src = '/images/emergency.webp'; }}
                  />
                  {/* Category pill */}
                  <span className="absolute top-4 left-4 z-20 bg-[#FB7E10] text-white text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-md">
                    {blog.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Meta row */}
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={13} className="text-[#FB7E10]" />
                      {blog.date}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={13} className="text-[#FB7E10]" />
                      {blog.readTime}
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="text-[#0B1528] font-black text-lg leading-snug mb-3 line-clamp-2 group-hover:text-[#FB7E10] transition-colors duration-200">
                    {blog.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 flex-grow mb-6">
                    {blog.excerpt}
                  </p>

                  {/* Footer: View More + arrow */}
                  <div className="mt-auto pt-5 border-t border-slate-100 flex items-center justify-between">
                    <Link
                      href={`/blogs/${blog.slug}`}
                      className="inline-flex items-center gap-1.5 text-[#FB7E10] font-black text-sm uppercase tracking-wide hover:gap-3 transition-all duration-200"
                    >
                      View More
                    </Link>
                    <div className="w-9 h-9 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center text-[#FB7E10] group-hover:bg-[#FB7E10] group-hover:text-white group-hover:border-[#FB7E10] transition-all duration-300">
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Load More */}
        {hasMore && (
          <div className="mt-14 flex justify-center">
            <button
              onClick={() => setVisibleCount(v => v + ITEMS_PER_PAGE)}
              className="inline-flex items-center gap-2 bg-[#0B1528] hover:bg-[#FB7E10] text-white font-black uppercase tracking-widest text-sm px-10 py-4 rounded-2xl shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
            >
              Load more articles
              <ArrowRight size={16} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
