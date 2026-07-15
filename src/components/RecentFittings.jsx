"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const fittings = [
  { src: "/recent-fittings/porsche-mobile-tyre-champions.webp",          alt: "Porsche undergoing on-site tyre replacement by Mobile Tyre Champions",         url: "/booking" },
  { src: "/recent-fittings/porsche-mtc.webp",                            alt: "Porsche receiving professional mobile tyre fitting service",                    url: "/booking" },
  { src: "/recent-fittings/premium-car-service-mobile-tyre-champions.webp", alt: "Premium car service by Mobile Tyre Champions on-site",                       url: "/booking" },
  { src: "/recent-fittings/premium-tyre-service-mobile-tyre-champions.webp", alt: "Premium tyre replacement service in progress",                              url: "/booking" },
  { src: "/recent-fittings/range-rover-mobile-tyre-champions.webp",      alt: "Range Rover receiving specialized mobile tyre fitting",                         url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-1.webp",           alt: "Mobile tyre fitting service van replacing a car tyre on-site",                  url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-2.webp",           alt: "Professional technician fitting a new tyre to a passenger vehicle",             url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-3.webp",           alt: "Close-up of a new tyre mounted on an alloy wheel by Mobile Tyre Champions",     url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-4.webp",           alt: "On-site tyre replacement process using state-of-the-art mobile tools",          url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-5.webp",           alt: "Mobile tyre replacement for a vehicle parked in a residential driveway",        url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-6.webp",           alt: "Emergency mobile tyre fitting roadside assistance vehicle in the UK",           url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-7.webp",           alt: "Technician performing precision wheel balancing on a newly fitted tyre",         url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-8.webp",           alt: "High-quality new tyres ready to be fitted to a customer car on-site",           url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-9.webp",           alt: "Qualified mobile tyre specialist inspecting a car wheel before fitting",        url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-10.webp",          alt: "Same-day mobile tyre replacement and valve check in action",                    url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-11.webp",          alt: "Alloy wheel with brand new tyre fitted and balanced by mobile service",         url: "/booking" },
  { src: "/recent-fittings/mobile-tyre-fitting-recent-12.webp",          alt: "Mobile Tyre Champions service van responding to an emergency call",             url: "/booking" },
];

const PER_PAGE = 6;
const totalPages = Math.ceil(fittings.length / PER_PAGE);

const ChevronLeft = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const ChevronRight = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const RecentFittings = () => {
  const [page, setPage] = useState(1);

  const start = (page - 1) * PER_PAGE;
  const visible = fittings.slice(start, start + PER_PAGE);

  const goTo = (p) => {
    setPage(p);
    // Scroll smoothly to the section top
    document.getElementById('recent-fittings-section')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="recent-fittings-section" className="bg-white py-12 md:py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* ── Header ── */}
        <div className="mb-10 md:mb-14 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3">
          <div className="text-center sm:text-left">
            <p className="text-[#FB7E10] font-bold uppercase tracking-widest text-sm mb-2">
              — Recent Fittings —
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
              See Our <span className="text-[#FB7E10]">Latest Work</span>
            </h2>
          </div>
          <p className="text-sm text-gray-400 font-medium text-center sm:text-right self-end">
            Showing {start + 1}–{Math.min(start + PER_PAGE, fittings.length)} of {fittings.length} fittings
          </p>
        </div>

        {/* ── Grid ── */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 min-h-[400px]">
          {visible.map((item, index) => (
            <Link
              key={`${page}-${index}`}
              href={item.url}
              className="group aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-[#FB7E10]/30 transition-all duration-300 relative block"
              style={{ animation: `fadeSlideIn 0.35s ease both`, animationDelay: `${index * 45}ms` }}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0B1528]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <span className="bg-[#FB7E10] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Book Fitting
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* ── Pagination ── */}
        <div className="mt-10 flex items-center justify-center gap-2">
          {/* Prev */}
          <button
            onClick={() => goTo(page - 1)}
            disabled={page === 1}
            aria-label="Previous page"
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#FB7E10] hover:text-[#FB7E10] hover:bg-orange-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronLeft />
          </button>

          {/* Page numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goTo(p)}
              aria-label={`Page ${p}`}
              aria-current={p === page ? 'page' : undefined}
              className={`w-10 h-10 rounded-full text-sm font-bold border-2 transition-all duration-200 ${
                p === page
                  ? 'bg-[#FB7E10] border-[#FB7E10] text-white shadow-md shadow-orange-200 scale-110'
                  : 'border-gray-200 text-gray-500 hover:border-[#FB7E10] hover:text-[#FB7E10] hover:bg-orange-50'
              }`}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => goTo(page + 1)}
            disabled={page === totalPages}
            aria-label="Next page"
            className="w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center text-gray-500 hover:border-[#FB7E10] hover:text-[#FB7E10] hover:bg-orange-50 disabled:opacity-30 disabled:cursor-not-allowed transition-all duration-200"
          >
            <ChevronRight />
          </button>
        </div>

      </div>

      {/* Fade-in keyframe */}
      <style>{`
        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default RecentFittings;

