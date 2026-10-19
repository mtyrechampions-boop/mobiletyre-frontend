import React from "react";
import { preconnect } from "react-dom";
import GoogleReviewsWidget from "./GoogleReviewsWidget";
import "./googleReviews.css";

const LOADER_SRC = "https://widgets.sociablekit.com/google-reviews/widget.js";

export default function GoogleReviewsSection() {
  // The widget loads in three hops: this loader, then a ~200KB widget bundle
  // from the same host, then the review feed from data.accentapi.com. Warming
  // both connections up front removes the DNS + TLS cost from the chain.
  preconnect("https://widgets.sociablekit.com");
  preconnect("https://data.accentapi.com");

  return (
    <section
      id="reviews"
      className="bg-slate-50 px-4 sm:px-10 lg:px-20 py-12 md:py-20 relative overflow-hidden border-y border-slate-100/50"
    >
      {/* Decorative background blurs to match the design system */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Block */}
        <div className="flex flex-col items-center justify-center mb-10 text-center">
          <div className="inline-flex items-center gap-2 bg-white border border-slate-200/60 px-4 py-1.5 rounded-full mb-4 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Google Reviews
            </span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1] mb-4">
            Trusted by Drivers Across Surrey &amp; Hampshire
          </h2>

          <p className="text-slate-500 text-sm md:text-base max-w-2xl">
            See why customers rate Mobile Tyre Champions 5 stars for fast,
            reliable mobile tyre fitting services.
          </p>
        </div>

        <GoogleReviewsWidget />

        {/* Rendered straight into the server HTML (not via next/script) so the
            browser downloads it while parsing the page instead of waiting for
            hydration. React 19 hoists and de-duplicates async scripts. */}
        <script src={LOADER_SRC} async />
      </div>
    </section>
  );
}
