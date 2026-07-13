"use client";

import React, { useEffect, useState, useRef } from "react";
import Script from "next/script";

export default function GoogleReviewsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [scriptKey, setScriptKey] = useState(0);

  // Force script reload on mount/navigation to ensure new DOM elements are processed
  useEffect(() => {
    setScriptKey((prev) => prev + 1);
  }, []);

  // Monitor the container element to see when the widget injects child elements
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check if the widget is already loaded (has children)
    if (container.children.length > 0) {
      setIsLoading(false);
      return;
    }

    const observer = new MutationObserver(() => {
      if (container.children.length > 0) {
        setIsLoading(false);
        observer.disconnect();
      }
    });

    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
    };
  }, [scriptKey]);

  return (
    <section className="bg-slate-50 px-4 sm:px-10 lg:px-20 py-12 md:py-20 relative overflow-hidden border-y border-slate-100/50">
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
            Trusted by Drivers Across Surrey & Hampshire
          </h2>

          <p className="text-slate-500 text-sm md:text-base max-w-2xl">
            See why customers rate Mobile Tyre Champions 5 stars for fast, reliable mobile tyre fitting services.
          </p>
        </div>

        {/* Skeleton Loader Container (prevents layout shift) */}
        {isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse mb-8 min-h-[300px]">
            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <div
                      key={s}
                      className="w-4 h-4 bg-slate-200 rounded-full"
                    />
                  ))}
                </div>
                <div className="h-4 bg-slate-200 rounded w-full mb-2" />
                <div className="h-4 bg-slate-200 rounded w-5/6 mb-6" />
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100">
                  <div className="w-10 h-10 rounded-full bg-slate-200" />
                  <div className="flex-1">
                    <div className="h-4 bg-slate-200 rounded w-24 mb-2" />
                    <div className="h-3 bg-slate-200 rounded w-16" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* SociableKIT Widget Container */}
        <div
          ref={containerRef}
          className={`sk-ww-google-reviews transition-opacity duration-500 ${
            isLoading ? "opacity-0 h-0 overflow-hidden" : "opacity-100"
          }`}
          data-embed-id="25696814"
        />

        {/* Load Widget Script */}
        <Script
          key={`sk-widget-script-${scriptKey}`}
          src="https://widgets.sociablekit.com/google-reviews/widget.js"
          strategy="afterInteractive"
        />
      </div>
    </section>
  );
}
