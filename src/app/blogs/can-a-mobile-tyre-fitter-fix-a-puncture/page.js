import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle, AlertTriangle, ShieldCheck, Wrench, Clock3, ThumbsUp, XCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Can a Mobile Tyre Fitter Fix a Puncture? UK Guide 2026 | Mobile Tyre Champions',
  description: 'Can a mobile tyre fitter fix a puncture at home or roadside? Discover UK BS AU 159 safety standards, repairable vs unrepairable tyres, repair times, and expert costs.',
  openGraph: {
    title: 'Can a Mobile Tyre Fitter Fix a Puncture? Guide 2026: What You Must Know As A Driver In The UK',
    description: 'Discovering a flat tyre? Learn when a mobile tyre fitter can safely repair your tyre on-site, when it must be replaced, and UK safety regulations.',
    type: 'article',
    url: 'https://mobiletyrechampions.com/blogs/can-a-mobile-tyre-fitter-fix-a-puncture',
    images: [
      {
        url: 'https://mobiletyrechampions.com/blogs-images/can-a-mobile-tyre-fitter-fix-a-puncture-banner.webp',
        width: 1920,
        height: 1080,
        alt: 'Mobile Tyre Champions technician carrying out a mobile tyre inspection and puncture repair on a vehicle in the UK',
      },
    ],
  },
};

// FAQ Schema for Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can a mobile tyre fitter fix a puncture?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A mobile tyre fitter can repair a punctured tyre on-site at your home, workplace, or roadside as long as the damage complies with British Standard BS AU 159 (minor repair area, maximum 6mm puncture diameter, legal tread depth, and no sidewall or structural internal damage)."
      }
    },
    {
      "@type": "Question",
      "name": "Are all tyre punctures repairable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Punctures located in the tyre sidewall or shoulder, punctures larger than 6mm in diameter, tyres driven while flat, or tyres with tread depth below the 1.6mm UK legal limit cannot be repaired safely and must be replaced."
      }
    },
    {
      "@type": "Question",
      "name": "Which is cheaper: repairing a puncture or replacing the tyre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Repairing a puncture is significantly cheaper than buying a brand-new tyre. If your tyre is within legal safety limits, a professional puncture repair can restore it to full safe operating condition at a fraction of the cost."
      }
    },
    {
      "@type": "Question",
      "name": "Can mobile tyre fitting repair punctures at home or work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mobile tyre fitting vans are fully equipped with pneumatic tyre changers, wheel balancers, and vulcanising repair equipment, allowing technicians to inspect and safely repair eligible punctures anywhere you are parked."
      }
    },
    {
      "@type": "Question",
      "name": "How long does a mobile tyre puncture repair take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A professional mobile tyre puncture repair typically takes between 20 and 40 minutes per tyre, including removal, internal inspection, patch-plug vulcanisation, rebalancing, and refitting to the vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "Can you drive with a flat tyre to a garage?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No, you should never drive on a flat tyre. Even driving short distances on a flat tyre will crush the tyre sidewall, destroy the internal carcass, ruin your alloy wheel rim, and make an otherwise repairable puncture impossible to fix."
      }
    }
  ]
};

export default function BlogPostCanMobileTyreFitterFixPuncture() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* ── Article Header ────────────────────────────────────────── */}
      <div className="bg-[#0B1528] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Banner image background */}
        <div className="absolute inset-0 bg-[url('/blogs-images/can-a-mobile-tyre-fitter-fix-a-puncture-banner.webp')] bg-cover bg-center opacity-90"></div>
        {/* Dark gradient mask for optimal text contrast */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/85 to-[#0B1528]/60"></div>
        {/* Glow accent */}
        <div className="absolute -top-40 left-1/4 w-[500px] h-[300px] bg-[#FB7E10]/15 blur-[120px] rounded-full pointer-events-none" />
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <Link
            href="/blogs"
            className="inline-flex items-center gap-2 text-[#FB7E10] font-black text-sm uppercase tracking-wider hover:text-white transition-all mb-8 group bg-[#FB7E10]/10 hover:bg-[#FB7E10] border border-[#FB7E10]/20 hover:border-transparent px-5 py-2.5 rounded-full"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300 mb-6">
            <span className="bg-gradient-to-r from-[#FB7E10] to-[#ff9838] text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/20">
              Puncture Repair
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5">
              <Calendar size={14} className="text-[#FB7E10]" /> August 17, 2026
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5">
              <Clock size={14} className="text-[#FB7E10]" /> 6 min read
            </div>
          </div>

          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-4 tracking-tight drop-shadow-md">
            Can a Mobile Tyre Fitter <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7E10] to-[#ffaa55]">Fix a Puncture?</span> <br className="hidden md:inline" />
            Guide 2026: What You Must Know As A Driver In The UK
          </h1>

          <p className="text-slate-300 text-base md:text-xl max-w-3xl leading-relaxed">
            Everything you need to know about on-site puncture repairs, British safety standards, when a tyre can be saved, and when replacement is the only safe option.
          </p>
        </div>
      </div>

      {/* ── Main Layout: TOC Sidebar + Article Body ─────────────── */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* ── Table of Contents Sidebar ──────────────────────────── */}
        <aside className="lg:col-span-1 lg:sticky lg:top-28 h-fit bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-black text-[#0B1528] text-lg mb-4 pb-2 border-b border-slate-100">
            Table of Contents
          </h3>
          <nav className="flex flex-col gap-3">
            <a href="#can-they-fix-it" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Can Mobile Fitters Fix Punctures?
            </a>
            <a href="#inspection-checks" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              The Multi-Point Safety Inspection
            </a>
            <a href="#when-repairable" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              When Can You Repair a Tyre? (BS AU 159)
            </a>
            <a href="#visual-comparison" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Repairable vs Unrepairable Damage
            </a>
            <a href="#when-to-replace" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              When Must You Replace the Tyre?
            </a>
            <a href="#why-no-sidewall-repairs" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Sidewall Damage Cannot Be Fixed
            </a>
            <a href="#mobile-benefits" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Benefits of Mobile Puncture Repair
            </a>
            <a href="#how-long-it-takes" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How Long Does the Repair Take?
            </a>
            <a href="#can-you-drive-flat" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Can You Drive on a Flat Tyre?
            </a>
            <a href="#warning-signs" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Signs of a Puncture
            </a>
            <a href="#why-choose-mtc" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Mobile Tyre Champions?
            </a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Frequently Asked Questions
            </a>
          </nav>

          {/* Author Box */}
          <div className="mt-8 pt-6 border-t border-slate-100 flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-orange-100 text-[#FB7E10] flex items-center justify-center">
              <User size={20} />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">Written By</p>
              <p className="text-sm font-black text-[#0B1528]">Mobile Tyre Champions Team</p>
            </div>
          </div>
        </aside>

        {/* ── Main Article Content ───────────────────────────────── */}
        <article className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 max-w-none">

          {/* Intro Paragraphs */}
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Discovering a flat tyre just before you are about to leave for work, pick the children up from school, or set off on a weekend getaway is one of the most frustrating experiences a driver can face. For many UK motorists, the immediate panic leads to two urgent questions: <em>&ldquo;Who can help me quickly?&rdquo;</em> and <em>&ldquo;Can this tyre actually be repaired, or am I facing an expensive replacement?&rdquo;</em>
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The good news is that a punctured tyre does <strong>not</strong> always need to be binned. A professional <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting service</Link> can often perform an on-site, road-legal puncture repair safely—saving you valuable time, unnecessary hassle, and substantial money.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            However, not every puncture can—or legally should—be fixed. In this comprehensive 2026 guide, we&apos;ll explain how UK safety standards determine whether your tyre can be repaired, when a replacement is essential, and how a mobile tyre technician gets you back on the road without you ever having to visit a static garage.
          </p>

          {/* ── Section 1: Can a Mobile Tyre Fitter Fix a Puncture? ──── */}
          <h2 id="can-they-fix-it" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            Can a Mobile Tyre Fitter Fix a Puncture?
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            <strong>Yes, absolutely</strong>—provided the puncture damage falls strictly within UK automotive safety standards.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Modern mobile tyre fitting vans are fully equipped mobile garages. They carry the exact same commercial-grade bead-breaking tools, pneumatic demounters, wheel balancers, and vulcanising puncture repair materials found in high-end static tyre centres.
          </p>

          {/* ── Section 2: Safety Checks ───────────────────────────── */}
          <h3 id="inspection-checks" className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">
            The On-Site Multi-Point Safety Inspection
          </h3>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            When a technician from <Link href="/" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link> arrives at your home, office, or roadside location, the tyre is never blindly plugged from the outside. In compliance with strict British Standard <strong>BS AU 159</strong>, the wheel is removed from your vehicle, the tyre is demounted from the rim, and a thorough multi-point inspection is carried out:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <ShieldCheck className="text-[#FB7E10]" size={20} />
                <h4 className="font-bold text-[#0B1528] text-base">1. Puncture Location</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-500 m-0">The damage must be situated within the central 60–70% of the tyre tread (the minor repair zone).</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <Wrench className="text-[#FB7E10]" size={20} />
                <h4 className="font-bold text-[#0B1528] text-base">2. Penetration Size &amp; Angle</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-500 m-0">The puncture hole cannot exceed 6mm in diameter and must enter at a perpendicular or near-straight angle.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <CheckCircle2 className="text-[#FB7E10]" size={20} />
                <h4 className="font-bold text-[#0B1528] text-base">3. Legal Tread Depth</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-500 m-0">Tread must be above the UK legal minimum limit of 1.6mm across the central three-quarters of the tyre.</p>
            </div>

            <div className="bg-slate-50 p-5 rounded-2xl border border-slate-100">
              <div className="flex items-center gap-3 mb-2">
                <AlertTriangle className="text-[#FB7E10]" size={20} />
                <h4 className="font-bold text-[#0B1528] text-base">4. Internal Structural Integrity</h4>
              </div>
              <p className="text-xs md:text-sm text-slate-500 m-0">Checking the inner carcass for rubber powdering, marbling, or crushed cords caused by driving flat.</p>
            </div>
          </div>

          {/* Highlight Quote */}
          <div className="my-8 p-6 bg-gradient-to-r from-orange-500/10 to-amber-500/5 border-l-4 border-[#FB7E10] rounded-r-2xl">
            <p className="text-lg font-black text-[#0B1528] italic m-0">
              &ldquo;Safety always comes first, followed by saving you money. If a tyre can be repaired safely to British Standards, we will repair it. If not, we will recommend a certified replacement.&rdquo;
            </p>
          </div>

          {/* ── Section 3: When Can You Repair a Tyre? ─────────────── */}
          <h2 id="when-repairable" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            When Can You Repair a Tyre? (British Standard BS AU 159)
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Not every flat tyre requires a brand-new replacement. Under UK law and the British Tyre Manufacturers&apos; Association (BTMA) guidelines, a professional <Link href="/services/puncture-repair" className="text-[#FB7E10] font-bold hover:underline">puncture repair</Link> is permissible when all of the following conditions are met:
          </p>

          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span><strong>Central Tread Location:</strong> The puncture is located in the central 60% to 70% of the tyre tread (known as the minor repair area).</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span><strong>Small Entry Hole:</strong> The hole caused by a nail, screw, or small debris is <strong>6mm or smaller</strong> in diameter.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span><strong>No Sidewall Damage:</strong> The sidewalls are completely free from bulging, cuts, cracking, or exposed cords.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span><strong>Sufficient Tread Remaining:</strong> The tyre has at least 1.6mm of legal tread depth remaining throughout (learn more in our <Link href="/blogs/when-to-change-car-tyres" className="text-[#FB7E10] font-bold hover:underline">guide on when to change car tyres</Link>).</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-green-600 mt-1 flex-shrink-0" size={18} />
              <span><strong>No Secondary Internal Deterioration:</strong> The tyre has not been driven upon while deflated, leaving the interior butyl liner and steel belts undamaged.</span>
            </li>
          </ul>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            When all these criteria pass, a technician installs an internal vulcanised combination patch-plug (often called a &ldquo;mushroom plug&rdquo;). This permanently seals both the puncture channel and the internal liner, restoring the tyre to its original speed rating and roadworthiness.
          </p>

          {/* ── Image 2: Visual Comparison (Repairable vs Unrepairable) ─ */}
          <figure id="visual-comparison" className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm scroll-mt-28">
            <img
              src="/blogs-images/can-a-mobile-tyre-fitter-fix-a-puncture/tyre-puncture-repairable-tread-vs-unrepairable-sidewall-damage.webp"
              alt="Comparison showing a repairable nail puncture in tyre centre tread versus dangerous unrepairable sidewall bulging damage"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-slate-50 px-5 py-3.5 text-sm text-slate-600 text-center leading-relaxed font-medium">
              Comparison between a repairable centre-tread screw puncture (left) and dangerous, unrepairable sidewall bulging damage (right).
            </figcaption>
          </figure>

          {/* ── Table: Repairable vs Unrepairable Summary ──────────── */}
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Tyre Condition</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Repairable?</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Required Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Nail/Screw in central tread (≤ 6mm)</td>
                  <td className="px-6 py-4 text-green-600 font-bold flex items-center gap-1.5">
                    <CheckCircle2 size={16} /> Yes (BS AU 159)
                  </td>
                  <td className="px-6 py-4">Professional on-site combi-plug repair</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Puncture in sidewall or shoulder</td>
                  <td className="px-6 py-4 text-red-600 font-bold flex items-center gap-1.5">
                    <XCircle size={16} /> No (Illegal)
                  </td>
                  <td className="px-6 py-4">Immediate tyre replacement</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Driven on flat (run-flat damage)</td>
                  <td className="px-6 py-4 text-red-600 font-bold flex items-center gap-1.5">
                    <XCircle size={16} /> No
                  </td>
                  <td className="px-6 py-4">Internal cords crushed; must be replaced</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Tread depth under 1.6mm legal limit</td>
                  <td className="px-6 py-4 text-red-600 font-bold flex items-center gap-1.5">
                    <XCircle size={16} /> No
                  </td>
                  <td className="px-6 py-4">Replace tyre to restore legal road safety</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Multiple punctures close together (&lt;400mm)</td>
                  <td className="px-6 py-4 text-red-600 font-bold flex items-center gap-1.5">
                    <XCircle size={16} /> No
                  </td>
                  <td className="px-6 py-4">Structural integrity compromised; replace tyre</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* ── Section 4: When Should I Change a Tyre? ────────────── */}
          <h2 id="when-to-replace" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            When Should You Replace the Tyre Instead of Repairing?
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Sometimes, fitting a brand-new tyre is the only safe and legal path forward. A tyre must be condemned and replaced if any of the following exist:
          </p>

          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span><strong>Sidewall or Shoulder Damage:</strong> Cuts, tears, bulges, or punctures located outside the central tread area.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span><strong>Run-Flat Internal Rupture:</strong> If the vehicle was driven while deflated, the tyre&apos;s internal lining will have disintegrated into black rubber dust and structural ply cords will be broken.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span><strong>Large Cuts or Tears:</strong> Damage greater than 6mm caused by metal shards, road bolts, or broken glass.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span><strong>Exposed Metal Cords:</strong> Any visible steel belts or internal ply cords visible through the rubber.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <XCircle className="text-red-500 mt-1 flex-shrink-0" size={18} />
              <span><strong>Ageing or Perished Rubber:</strong> Extensive dry rot or sidewall cracking, regardless of remaining tread.</span>
            </li>
          </ul>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A tyre might appear intact from the outside, but hidden internal structural fractures can cause sudden catastrophic failure at motorway speeds. This is why a certified technician must always remove and inspect the tyre internally before making a recommendation. If you need a replacement, our online <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">tyre finder tool</Link> makes it easy to select the right specification for your vehicle.
          </p>

          {/* ── Section 5: Why Sidewall Damage Cannot Be Fixed ──────── */}
          <h2 id="why-no-sidewall-repairs" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            Why Sidewall Damage Cannot Be Fixed
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A common question drivers ask is: <em>&ldquo;Why can&apos;t a technician simply patch a small screw hole or scrape in the sidewall?&rdquo;</em>
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The answer lies in tyre engineering and physics. While the tread area is reinforced with rigid steel belts designed to stay flat against the road, the <strong>sidewall is in constant, dynamic flexion</strong> with every single wheel rotation. It supports the vehicle&apos;s entire weight, absorbs road shocks, and resists massive lateral forces whenever you steer or brake.
          </p>

          {/* Alert Box */}
          <div className="my-8 flex items-start gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <AlertTriangle className="text-[#FB7E10] flex-shrink-0 mt-0.5" size={24} />
            <div>
              <h4 className="font-bold text-[#0B1528] text-base mb-1">High Risk of High-Speed Blowouts</h4>
              <p className="m-0 text-slate-600 leading-relaxed text-sm md:text-base">
                Any patch applied to a sidewall will quickly weaken and peel off under intense flex and heat. Furthermore, punctures in the sidewall sever the load-bearing vertical cords, creating weak points that can suddenly burst under pressure. For this reason, UK safety standards strictly prohibit sidewall repairs.
              </p>
            </div>
          </div>

          {/* ── Section 6: Benefits of Selecting Mobile Tyre Puncture Repair ─ */}
          <h2 id="mobile-benefits" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            Benefits of Selecting Mobile Tyre Puncture Repair
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Instead of risking driving on a flat, struggling with dangerous scissor jacks on the roadside, or waiting hours for a breakdown recovery truck, a <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting service</Link> brings the complete garage directly to your doorstep.
          </p>

          {/* Image 1: Roadside assistance van */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/can-a-mobile-tyre-fitter-fix-a-puncture/mobile-tyre-champions-roadside-puncture-assistance.webp"
              alt="Mobile Tyre Champions 24/7 mobile tyre fitting van arriving to assist a stranded driver with a roadside flat tyre in wet weather"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-slate-50 px-5 py-3.5 text-sm text-slate-600 text-center leading-relaxed font-medium">
              Mobile Tyre Champions 24/7 mobile tyre fitting vans deliver rapid on-site puncture repairs and emergency tyre replacement across the UK.
            </figcaption>
          </figure>

          {/* 4 Feature Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">01</span>
              <h4 className="font-bold text-[#0B1528] text-lg mt-2 mb-1 flex items-center gap-2">
                <ThumbsUp size={18} className="text-[#FB7E10]" /> Ultimate Convenience
              </h4>
              <p className="text-sm text-slate-500 m-0 leading-relaxed">
                Whether you&apos;re parked in your driveway at home, in the office car park, or stranded safely on a roadside verge, our technicians arrive equipped to handle the job on the spot.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">02</span>
              <h4 className="font-bold text-[#0B1528] text-lg mt-2 mb-1 flex items-center gap-2">
                <Clock3 size={18} className="text-[#FB7E10]" /> Huge Time Savings
              </h4>
              <p className="text-sm text-slate-500 m-0 leading-relaxed">
                No waiting in queue at static tyre shops, no taking time off work, and no losing your weekend. Carry on with your daily routine while we complete the repair outside.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">03</span>
              <h4 className="font-bold text-[#0B1528] text-lg mt-2 mb-1 flex items-center gap-2">
                <Wrench size={18} className="text-[#FB7E10]" /> Specialised On-Board Equipment
              </h4>
              <p className="text-sm text-slate-500 m-0 leading-relaxed">
                Our custom vans carry electronic wheel balancers, heavy-duty jacks, high-capacity compressors, and <Link href="/services/locking-wheel-nut-removal" className="text-[#FB7E10] font-bold hover:underline">locking wheel nut removal</Link> tools.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">04</span>
              <h4 className="font-bold text-[#0B1528] text-lg mt-2 mb-1 flex items-center gap-2">
                <ShieldCheck size={18} className="text-[#FB7E10]" /> Honest, Transparent Advice
              </h4>
              <p className="text-sm text-slate-500 m-0 leading-relaxed">
                We believe in straightforward, honest customer care. We never push unnecessary tyre replacements if your puncture can be safely and economically repaired to BS AU 159 standards.
              </p>
            </div>
          </div>

          {/* ── Section 7: How Long Does It Take? ──────────────────── */}
          <h2 id="how-long-it-takes" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            How Long Does It Take to Repair a Mobile Tyre?
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A professional on-site puncture repair takes between <strong>20 and 40 minutes</strong> from arrival to completion.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            This duration includes safe jacking of the vehicle, wheel removal, tyre demounting, puncture preparation and internal vulcanisation, remounting, <Link href="/services/precision-wheel-balancing" className="text-[#FB7E10] font-bold hover:underline">precision wheel balancing</Link>, refitting to the hub, and torquing wheel bolts to exact vehicle manufacturer specifications.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If the inspection reveals that the tyre cannot be safely repaired and requires a fresh replacement, our technician can fit and balance a brand-new tyre in around <strong>30 to 45 minutes</strong>. For a deeper breakdown of appointment timings, read our guide on <Link href="/blogs/how-long-does-tyre-fitting-take-mobile-service" className="text-[#FB7E10] font-bold hover:underline">how long mobile tyre fitting takes</Link>.
          </p>

          {/* ── Section 8: Can You Drive With a Flat Tyre? ─────────── */}
          <h2 id="can-you-drive-flat" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            Can You Drive With a Flat Tyre?
          </h2>

          <p className="mb-6 text-[#0B1528] font-bold text-lg md:text-xl">
            <strong>Never drive on a flat or significantly deflated tyre.</strong>
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Even driving a few hundred yards to reach a petrol station can have devastating consequences:
          </p>

          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li><strong>Destroys Repairability:</strong> The heavy weight of the vehicle pinches the deflated tyre between the rim and the tarmac, shredding the internal cords and turning an inexpensive £30–£40 puncture repair into a compulsory £100+ tyre replacement.</li>
            <li><strong>Bends and Cracks Alloy Wheels:</strong> Without a cushion of compressed air, potholes and road bumps hit your alloy wheel rims directly, causing expensive warping or structural cracks.</li>
            <li><strong>Severely Degrades Braking &amp; Handling:</strong> A deflated tyre pulls hard to one side, increases stopping distances dramatically, and creates an extreme risk of spinning out.</li>
            <li><strong>Risk of Complete Blowout:</strong> Friction creates intense heat in deflated tyres, leading to sudden tread delamination and total tyre failure.</li>
          </ul>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If you suspect you have a puncture, pull over safely as soon as it is safe to do so, turn on your hazard lights, and contact an emergency mobile technician. Check our advice on <Link href="/blogs/emergency-mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">what to do when you get a flat tyre</Link> for roadside safety procedures.
          </p>

          {/* ── Section 9: Warning Signs of a Puncture ──────────────── */}
          <h2 id="warning-signs" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            Warning Signs You Have a Slow Puncture or Flat Tyre
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Not all punctures cause an immediate blowout. Slow punctures can lose air gradually over several days or weeks. Keep an eye out for these telltale red flags:
          </p>

          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Persistent Pressure Drops:</strong> Having to top up air in one specific tyre every week.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>TPMS Dashboard Warning Light:</strong> An illuminated yellow horseshoe icon with an exclamation mark.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Vehicle Pulling to One Side:</strong> The car constantly drifting left or right on straight roads.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Vibration or Clicking Sound:</strong> A rhythmic ticking or rattling noise that increases with road speed (usually a screw or stone lodged in the tread).</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Spongy or Sluggish Steering:</strong> The car feels heavy or unresponsive when cornering.</span>
            </li>
          </ul>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The sooner a slow puncture is inspected, the higher the chance it can be repaired safely before internal structural damage takes place!
          </p>

          {/* ── Section 10: Why Mobile Tyre Champions? ──────────────── */}
          <h2 id="why-choose-mtc" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">
            Why Choose Mobile Tyre Champions?
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyre troubles never happen at a convenient time. That&apos;s why at <Link href="/" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link>, we provide round-the-clock mobile puncture repair and fitting services across our primary service regions:
          </p>

          <div className="flex flex-wrap gap-2.5 my-6">
            <Link href="/locations/surrey" className="bg-slate-100 hover:bg-[#FB7E10] hover:text-white px-4 py-2 rounded-xl text-xs font-bold text-slate-700 transition-colors">Surrey Mobile Fitting</Link>
            <Link href="/locations/hampshire" className="bg-slate-100 hover:bg-[#FB7E10] hover:text-white px-4 py-2 rounded-xl text-xs font-bold text-slate-700 transition-colors">Hampshire Mobile Fitting</Link>
            <Link href="/locations/berkshire" className="bg-slate-100 hover:bg-[#FB7E10] hover:text-white px-4 py-2 rounded-xl text-xs font-bold text-slate-700 transition-colors">Berkshire Mobile Fitting</Link>
            <Link href="/locations/reading" className="bg-slate-100 hover:bg-[#FB7E10] hover:text-white px-4 py-2 rounded-xl text-xs font-bold text-slate-700 transition-colors">Reading Mobile Fitting</Link>
            <Link href="/locations" className="bg-slate-100 hover:bg-[#FB7E10] hover:text-white px-4 py-2 rounded-xl text-xs font-bold text-slate-700 transition-colors">All UK Locations</Link>
          </div>

          <p className="mb-4 font-bold text-[#0B1528] text-lg">What makes our service the #1 choice for UK drivers:</p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Rapid Response Time:</strong> Emergency technicians dispatched swiftly to minimize your downtime.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Premium &amp; Budget Brand Range:</strong> We stock tyres from Michelin, Continental, Pirelli, Goodyear, Dunlop, and dependable budget options.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>BS AU 159 Compliant Repairs:</strong> Every puncture repair is executed with internal combi-plug vulcanisation for maximum safety.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Specialist Services:</strong> From <Link href="/services/van-tyres" className="text-[#FB7E10] font-bold hover:underline">commercial van tyres</Link> and 4x4s to locking wheel nut removals and tyre pressure sensor diagnostics.</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Eco-Friendly Disposal:</strong> Worn or unrepairable tyres are recycled responsibly through licensed <Link href="/services/tyre-recycling" className="text-[#FB7E10] font-bold hover:underline">tyre recycling</Link> facilities.</span>
            </li>
          </ul>

          {/* ── Section 11: FAQs ───────────────────────────────────── */}
          <h2 id="faq" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-16 mb-8 scroll-mt-28 flex items-center gap-2 border-t border-slate-100 pt-8">
            <HelpCircle className="text-[#FB7E10]" size={28} />
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can a mobile tyre fitter repair a puncture at my house or work?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">
                Yes! Mobile mechanics carry self-contained workshops inside their vans. As long as there is safe, level ground to park and work on your car, punctures can be inspected, repaired, and re-balanced at your home, workplace, or roadside.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Are all punctures repairable with sealant or temporary plugs?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">
                No. DIY tyre foam sealants and external rope plugs are strictly temporary emergency stop-gaps to help you move away from danger. Under British Standards (BS AU 159), a permanent repair requires the tyre to be removed from the wheel rim, inspected inside, and sealed with a vulcanised patch-plug from the inside out.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Which is cheaper: fixing a puncture or buying a new tyre?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">
                Fixing a puncture is considerably cheaper. A professional mobile puncture repair costs a fraction of the price of a replacement premium tyre, making it the most economical choice whenever safety parameters allow.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How do you know if a tyre needs repair or replacement?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">
                Only a professional internal inspection can definitively verify whether a tyre is safe to repair. If the puncture is in the central tread and the internal carcass has no run-flat damage, it can usually be repaired. If the sidewall is damaged, tread is under 1.6mm, or the tyre was driven on flat, it must be replaced.
              </p>
            </div>

            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can run-flat tyres with punctures be repaired?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">
                Most run-flat tyre manufacturers (including Bridgestone, Continental, and Pirelli) recommend replacing run-flat tyres after a puncture because the reinforced sidewall masks internal thermal breakdown that occurs while driving deflated. Our technicians can inspect your run-flat tyres and advise on the safest option.
              </p>
            </div>
          </div>

          {/* ── Section 12: Conclusion ─────────────────────────────── */}
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">
            Conclusion: Keep Moving Safely
          </h2>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Discovering a flat tyre doesn&apos;t automatically mean you must purchase a costly replacement. In many cases, an experienced mobile tyre technician can safely repair the puncture on-site, saving you both time and money.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The key is to act promptly and <strong>never drive on a flat tyre</strong>. Doing so destroys the tyre&apos;s internal carcass and turns a simple repair into an unavoidable replacement.
          </p>

          <p className="mb-0 text-slate-600 leading-relaxed text-base md:text-lg">
            If you have a flat tyre or suspect a slow puncture, book an on-site inspection today with <Link href="/" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link>. Use our <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">online tyre finder</Link>, head directly to our <Link href="/booking" className="text-[#FB7E10] font-bold hover:underline">booking system</Link>, or <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">contact our friendly support team</Link> for rapid, 24/7 mobile assistance across the UK.
          </p>
        </article>
      </div>

      {/* CTA Component */}
      <div className="mt-12">
        <CTA />
      </div>

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  );
}
