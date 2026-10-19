"use client";

import React, { useEffect, useRef, useState } from "react";

const SELECTOR = ".sk-ww-google-reviews";
const EMBED_ID = "25696814";
const LOADER_SRC = "https://widgets.sociablekit.com/google-reviews/widget.js";

/*
 * Styles that can't be expressed as widget theme variables (see
 * googleReviews.css) and have to live inside the shadow root. The widget's own
 * rules come from adoptedStyleSheets, which are applied before a <style>
 * element in the shadow tree, so appending this wins ties without !important.
 * If SociableKIT renames a class these rules simply stop matching — the widget
 * still renders, it just loses the polish.
 */
const SHADOW_CSS = `
  /* The card body is a fixed height with overflow:hidden, which chops the last
     line mid-sentence. Fade it out instead. Only cards whose text actually
     overflows are marked (see markOverflowingCards), otherwise the fade would
     wash out short reviews. It becomes scrollable on hover, so the fade is
     dropped there. */
  .sk-card__body[data-mtc-clip] {
    -webkit-mask-image: linear-gradient(to bottom, #000 calc(100% - 32px), transparent 100%);
    mask-image: linear-gradient(to bottom, #000 calc(100% - 32px), transparent 100%);
  }
  .sk-card__body[data-mtc-clip]:hover {
    -webkit-mask-image: none;
    mask-image: none;
  }

  /* Lift the card slightly on hover to match the rest of the site */
  .sk-card {
    transition: transform .18s ease-out, box-shadow .18s ease-out !important;
  }
  .sk-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 2px 4px rgba(15,23,42,.05), 0 18px 36px -16px rgba(15,23,42,.28) !important;
    border-color: #cbd5e1 !important;
  }

  /* Bigger, easier arrow targets on touch */
  .sk-slider__btn {
    --sk-control-size: 44px !important;
    box-shadow: 0 6px 16px -6px rgba(251,126,16,.65) !important;
  }
  .sk-slider__btn:hover { transform: translateY(-50%) scale(1.06); }

  /* The carousel sizes itself as post-height + 20px gap + 64px arrow strip, but
     with a hard 384px floor — so short reviews sit in a tall empty box on a
     single-column phone layout. Same formula, without the floor. */
  .sk-carousel {
    height: calc(var(--post-height) + 84px) !important;
    min-height: 0 !important;
  }

  /* 50+ pagination dots is noise next to the arrows */
  .sk-dots { display: none !important; }

  /* Keep the attribution link, but stop it shouting in blue */
  .sk_branding { padding: 18px 0 0 !important; }
  .sk_branding .tutorial_link {
    color: #94a3b8 !important;
    font-size: 11px !important;
    letter-spacing: .04em;
    text-decoration: none !important;
  }
  .sk_branding .tutorial_link:hover { color: #64748b !important; }
`;

type Stats = { rating: number; count: number; link: string };

// The widget renders into a shadow root, so a plain childList check isn't
// enough — we poll for either a shadow root or a real (non-spinner) child.
function isWidgetMounted(el: HTMLElement) {
  if (el.shadowRoot) return true;
  for (const child of Array.from(el.children)) {
    if (!child.classList.contains("sk-widget-loader")) return true;
  }
  return false;
}

function applyShadowStyles(el: HTMLElement) {
  const root = el.shadowRoot;
  if (!root || root.querySelector("style[data-mtc-theme]")) return;

  const style = document.createElement("style");
  style.setAttribute("data-mtc-theme", "");
  style.textContent = SHADOW_CSS;
  root.appendChild(style);
}

// Only fade the bottom of cards whose review is actually cut off.
function markOverflowingCards(el: HTMLElement) {
  const root = el.shadowRoot;
  if (!root) return;

  root.querySelectorAll<HTMLElement>(".sk-card__body").forEach((body) => {
    const clipped = body.scrollHeight - body.clientHeight > 4;
    if (clipped) body.setAttribute("data-mtc-clip", "");
    else body.removeAttribute("data-mtc-clip");
  });
}

export default function GoogleReviewsWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [stats, setStats] = useState<Stats | null>(null);

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

  // Swap the skeleton for the widget once it has actually painted, and style
  // the shadow root as soon as it exists.
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Re-measured a few times after mount: web fonts and avatars land late and
    // can change whether a review overflows.
    const remeasure = [300, 1200, 3000].map((delay) =>
      window.setTimeout(() => markOverflowingCards(container), delay)
    );

    const tick = () => {
      applyShadowStyles(container);
      if (isWidgetMounted(container)) {
        setIsLoading(false);
        markOverflowingCards(container);
        return true;
      }
      return false;
    };

    if (tick()) return () => remeasure.forEach(window.clearTimeout);

    const poll = window.setInterval(() => {
      if (tick()) window.clearInterval(poll);
    }, 150);

    // Never leave the skeleton up forever if detection misses.
    const bail = window.setTimeout(() => {
      setIsLoading(false);
      window.clearInterval(poll);
    }, 10000);

    return () => {
      window.clearInterval(poll);
      window.clearTimeout(bail);
      remeasure.forEach(window.clearTimeout);
    };
  }, []);

  // The loader already fetches the feed and caches the promise on
  // window.sk_embed_feed, so the rating summary costs no extra request.
  useEffect(() => {
    let cancelled = false;

    const read = () => {
      const feed = (window as any).sk_embed_feed?.[EMBED_ID];
      if (!feed?.then) return false;

      feed
        .then((data: any) => {
          const bio = data?.bio;
          if (cancelled || !bio?.overall_star_rating) return;
          setStats({
            rating: Number(bio.overall_star_rating),
            count: Number(bio.rating_count) || 0,
            link: bio.link || "",
          });
        })
        .catch(() => {});

      return true;
    };

    if (read()) return;

    const poll = window.setInterval(() => {
      if (read()) window.clearInterval(poll);
    }, 200);
    const stop = window.setTimeout(() => window.clearInterval(poll), 12000);

    return () => {
      cancelled = true;
      window.clearInterval(poll);
      window.clearTimeout(stop);
    };
  }, []);

  return (
    <>
      {/* Aggregate rating — reserved height so it can't shift the layout */}
      <div className="mb-8 flex min-h-[76px] items-center justify-center">
        <div
          className={`flex flex-col items-center gap-4 rounded-2xl border border-slate-200/70 bg-white px-6 py-4 shadow-[0_2px_12px_-6px_rgba(15,23,42,0.15)] transition-opacity duration-500 sm:flex-row sm:gap-6 sm:px-8 ${
            stats ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3">
            <svg viewBox="0 0 24 24" className="h-7 w-7" aria-hidden="true">
              <path
                fill="#4285F4"
                d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.4a5.5 5.5 0 01-2.4 3.6v3h3.9c2.3-2.1 3.6-5.2 3.6-8.8z"
              />
              <path
                fill="#34A853"
                d="M12 24c3.2 0 5.9-1.1 7.9-2.9l-3.9-3a7.2 7.2 0 01-10.7-3.8H1.3v3.1A12 12 0 0012 24z"
              />
              <path
                fill="#FBBC04"
                d="M5.3 14.3a7.1 7.1 0 010-4.6V6.6H1.3a12 12 0 000 10.8l4-3.1z"
              />
              <path
                fill="#EA4335"
                d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.4-3.4A12 12 0 001.3 6.6l4 3.1A7.2 7.2 0 0112 4.8z"
              />
            </svg>
            <span className="text-3xl leading-none font-black text-slate-900">
              {stats ? stats.rating.toFixed(1) : "—"}
            </span>
          </div>

          <div className="hidden h-10 w-px bg-slate-200 sm:block" />

          <div className="flex flex-col items-center gap-1 sm:items-start">
            <div className="flex gap-0.5" aria-hidden="true">
              {[1, 2, 3, 4, 5].map((n) => (
                <svg key={n} viewBox="0 0 20 20" className="h-4 w-4 fill-[#FBBC04]">
                  <path d="M10 1.5l2.6 5.3 5.9.9-4.3 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
                </svg>
              ))}
            </div>
            <p className="text-xs font-semibold text-slate-500">
              Based on {stats?.count ?? 0} Google reviews
            </p>
          </div>

          {stats?.link && (
            <a
              href={stats.link}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-900 px-5 py-2 text-xs font-bold text-white transition-colors hover:bg-slate-800 sm:ml-2"
            >
              Read all reviews
            </a>
          )}
        </div>
      </div>

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
              <div className="flex items-center gap-4 mb-5">
                <div className="w-11 h-11 rounded-full bg-slate-200" />
                <div className="flex-1">
                  <div className="h-4 bg-slate-200 rounded w-28 mb-2" />
                  <div className="h-3 bg-slate-200 rounded w-16" />
                </div>
              </div>
              <div className="flex gap-1 mb-4">
                {[1, 2, 3, 4, 5].map((s) => (
                  <div key={s} className="w-4 h-4 bg-slate-200 rounded-full" />
                ))}
              </div>
              <div className="h-4 bg-slate-200 rounded w-full mb-2" />
              <div className="h-4 bg-slate-200 rounded w-5/6 mb-2" />
              <div className="h-4 bg-slate-200 rounded w-2/3 mb-6" />
              <div className="h-4 bg-slate-200 rounded w-32 pt-4 border-t border-slate-100" />
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
