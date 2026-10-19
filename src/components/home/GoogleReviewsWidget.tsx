"use client";

import React, { useEffect, useRef, useState } from "react";

const SELECTOR = ".sk-ww-google-reviews";
const EMBED_ID = "25696814";
const LOADER_SRC = "https://widgets.sociablekit.com/google-reviews/widget.js";

// The widget renders into a shadow root, so a plain childList check isn't
// enough — we poll for either a shadow root or a real (non-spinner) child.
function isWidgetMounted(el: HTMLElement) {
  if (el.shadowRoot) return true;
  for (const child of Array.from(el.children)) {
    if (!child.classList.contains("sk-widget-loader")) return true;
  }
  return false;
}

export default function GoogleReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  // On a client-side navigation back to this page the loader script is already
  // in the document and won't re-run, so ask the widget to re-mount itself.
  useEffect(() => {
    const container = containerRef.current;
    if (!container || isWidgetMounted(container)) return;

    const remount = (window as any).sk_widget_mounts?.[SELECTOR];
    if (typeof remount === "function") {
      remount();
      return;
    }

    // First load: the script tag in the HTML is still in flight, so do nothing.
    // If it never arrived (blocked, failed), re-inject it as a fallback.
    const retry = window.setTimeout(() => {
      if (isWidgetMounted(container)) return;
      if (document.querySelector(`script[src="${LOADER_SRC}"]`)) return;

      const script = document.createElement("script");
      script.src = LOADER_SRC;
      script.async = true;
      document.head.appendChild(script);
    }, 2500);

    return () => window.clearTimeout(retry);
  }, []);

  // Swap the skeleton for the widget once it has actually painted.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    if (isWidgetMounted(container)) {
      setIsLoading(false);
      return;
    }

    const poll = window.setInterval(() => {
      if (isWidgetMounted(container)) {
        setIsLoading(false);
        window.clearInterval(poll);
      }
    }, 150);

    // Never leave the skeleton up forever if detection misses.
    const bail = window.setTimeout(() => {
      setIsLoading(false);
      window.clearInterval(poll);
    }, 10000);

    return () => {
      window.clearInterval(poll);
      window.clearTimeout(bail);
    };
  }, []);

  return (
    <>
      {/* Skeleton placeholder (prevents layout shift while the widget loads) */}
      {isLoading && (
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse mb-8 min-h-[300px]"
          aria-hidden="true"
        >
          {[1, 2, 3].map((n) => (
            <div
              key={n}
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm"
            >
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-4 h-4 bg-slate-200 rounded-full" />
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
        data-embed-id={EMBED_ID}
      />
    </>
  );
}
