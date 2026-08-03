import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle, AlertTriangle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'When to Change Your Tyres on the Car? Complete UK Guide 2026',
  description: 'How often should you change your car tyres in the UK? Learn average tyre life, legal tread depth, warning signs of worn tyres and when to book a replacement.',
  openGraph: {
    title: 'When to Change Your Tyres on the Car? Complete UK Guide 2026',
    description: 'How often should you change your car tyres in the UK? Learn average tyre life, legal tread depth, warning signs of worn tyres and when to book a replacement.',
    type: 'article',
    url: 'https://mobiletyrechampions.com/blogs/when-to-change-car-tyres',
    images: [
      {
        url: 'https://mobiletyrechampions.com/blogs-images/when-to-change-car-tyres-banner.webp',
        width: 1456,
        height: 1092,
        alt: 'Mobile Tyre Champions technician changing a worn car tyre on a driveway in the UK',
      },
    ],
  },
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long do car tyres last?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most car tyres last somewhere between 20,000 and 40,000 miles, but this depends heavily on driving style, road conditions, tyre pressure and wheel alignment. Tyres should be checked regularly as they age, and many manufacturers recommend extra vigilance once tyres are around five years old."
      }
    },
    {
      "@type": "Question",
      "name": "Do tyres go off even with plenty of tread left?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Rubber is a natural product and it hardens and ages over time. Older tyres can offer less grip and be more prone to cracking even when the tread depth still looks fine."
      }
    },
    {
      "@type": "Question",
      "name": "What is the legal tyre tread depth in the UK?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The minimum legal tread depth in the UK is 1.6mm across the central three quarters of the tyre, around its entire circumference. Driving below this limit is an offence and can result in a fine and penalty points."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to replace all four tyres at the same time?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not always. If only one or two tyres are worn or damaged, a technician can advise the safest option for your vehicle based on the condition of the remaining tyres and whether your car is front, rear or four-wheel drive."
      }
    },
    {
      "@type": "Question",
      "name": "Can a mobile tyre fitter fit my tyres at my workplace?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mobile tyre fitting services will typically come to your workplace, home or another suitable location to inspect and fit your tyres while you carry on with your day."
      }
    }
  ]
};

export default function BlogPostWhenToChangeTyres() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Banner image with full opacity to prevent the blue background from bleeding through */}
        <div className="absolute inset-0 bg-[url('/blogs-images/when-to-change-car-tyres-banner.webp')] bg-cover bg-center opacity-100"></div>
        {/* Dark mask overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0B1528] via-[#0B1528]/80 to-transparent"></div>
        {/* Glow accent */}
        <div className="absolute -top-40 left-1/4 w-[500px] h-[300px] bg-[#FB7E10]/10 blur-[120px] rounded-full pointer-events-none" />
        {/* Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]"></div>

        <div className="max-w-7xl mx-auto relative z-10 text-center lg:text-left">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FB7E10] font-black text-sm uppercase tracking-wider hover:text-white transition-all mb-8 group bg-[#FB7E10]/10 hover:bg-[#FB7E10] border border-[#FB7E10]/20 hover:border-transparent px-5 py-2.5 rounded-full">
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-slate-300 mb-6">
            <span className="bg-gradient-to-r from-[#FB7E10] to-[#ff9838] text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/20">Guides</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FB7E10]" /> August 3, 2026</div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#FB7E10]" /> 7 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-0 tracking-tight drop-shadow-md">
            When to Change Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7E10] to-[#ffaa55]">Tyres</span> on the Car? <br className="hidden md:inline" />Complete UK Guide 2026
          </h1>
        </div>
      </div>

      {/* Grid Layout for Article + TOC */}
      <div className="max-w-7xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-4 gap-8">

        {/* Table of Contents Sidebar */}
        <aside className="lg:col-span-1 lg:sticky lg:top-28 h-fit bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="font-black text-[#0B1528] text-lg mb-4 pb-2 border-b border-slate-100">
            Table of Contents
          </h3>
          <nav className="flex flex-col gap-3">
            <a href="#how-long" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How Long Do Tyres Last?
            </a>
            <a href="#factors" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Factors Affecting Tyre Life
            </a>
            <a href="#tyre-age" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Does Tyre Age Matter?
            </a>
            <a href="#home-check" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How to Inspect Tyres at Home
            </a>
            <a href="#tread-depth" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              UK Legal Tread Depth
            </a>
            <a href="#warning-signs" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Signs You Need New Tyres
            </a>
            <a href="#risks" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Risks of Worn Tyres
            </a>
            <a href="#mobile-fitting" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Can Tyres Be Fitted at Home?
            </a>
            <a href="#why-mtc" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Mobile Tyre Champions
            </a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Frequently Asked Questions
            </a>
          </nav>

          {/* Author info */}
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

        {/* Main Article Content */}
        <article className="lg:col-span-3 bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 max-w-none">

          {/* Intro */}
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Your tyres are the only part of your car that ever touches the road. They influence everything from braking and steering to fuel economy and overall safety. Yet for many UK drivers, tyres aren&apos;t something they think about until a warning light appears on the dashboard or a tyre suddenly blows out.
          </p>

          <p className="mb-6 text-[#0B1528] font-bold text-lg md:text-xl">
            So how often should you actually change your car tyres?
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            It isn&apos;t simply a question of age. How long your tyres last depends on how much you drive, how you drive, the road conditions you face, how well the tyres are maintained, and even the weather. In this guide we&apos;ll look at how long tyres are likely to last, the signs that you need a replacement, and how regular inspections keep you safe — and save you a few quid along the way.
          </p>

          {/* Image 1 — after intro */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/when-to-change-car-tyres/car-tyre-tread-inspection-check.webp"
              alt="Technician inspecting a car tyre tread and sidewall condition during a mobile tyre check in the UK"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              A quick tread and sidewall inspection is the fastest way to tell whether your tyres are still safe to drive on.
            </figcaption>
          </figure>

          {/* Section 1 */}
          <h2 id="how-long" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How Long Do Tyres Last on a Car on Average?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyres don&apos;t come with a fixed replacement schedule. As a general rule, the average car tyre lasts somewhere between <strong>20,000 and 40,000 miles</strong>. Proper maintenance can push some premium tyres further still.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Drivers who spend most of their time on the motorway typically see less wear than those stuck in stop-start city traffic, where constant braking and acceleration eats into the tread far quicker.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            So don&apos;t just watch the odometer. Make a habit of checking your tyres for wear or damage on a regular basis — it takes two minutes and tells you far more than mileage alone. If you already know a replacement is due, our <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">tyre finder</Link> will show you which sizes fit your vehicle.
          </p>

          {/* Section 2 */}
          <h2 id="factors" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What Factors Influence the Life of Your Tyres?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Several factors decide how long your tyres stay safe and effective.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">1. Driving Style</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyre wear increases sharply with hard braking, aggressive acceleration and high-speed cornering. Drive a little more gently and your tyres will last considerably longer.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">2. Road Conditions</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Poor road surfaces damage tyres quickly. Potholes and badly maintained roads can cause sidewall damage or knock your wheels out of alignment in a single impact.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">3. Tyre Pressure</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Incorrect tyre pressure is one of the most common causes of premature wear. Over-inflated tyres wear through the centre of the tread, while under-inflated tyres wear at the shoulders and create more rolling resistance — costing you fuel too. Check your pressures at least once a month.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">4. Wheel Alignment</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Incorrect wheel alignment leads to uneven tyre wear. If your steering wheel isn&apos;t centred or the car pulls to one side, it&apos;s worth getting the alignment checked. Pairing this with regular <Link href="/services/precision-wheel-balancing" className="text-[#FB7E10] font-bold hover:underline">precision wheel balancing</Link> keeps wear even across all four corners.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">5. Load and Towing</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Carrying heavy loads — particularly on a regular basis — puts extra strain on your tyres and shortens their life. The same applies to trailers and caravans, which is why we also offer dedicated <Link href="/services/trailer-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">trailer tyre fitting</Link>.
          </p>

          {/* Image 2 */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/when-to-change-car-tyres/technician-changing-worn-car-tyre.webp"
              alt="Mobile tyre technician using a torque wrench to change a worn car tyre at the roadside in wet conditions"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              Worn tyres replaced on-site — every wheel is torqued to the manufacturer&apos;s specification before we leave.
            </figcaption>
          </figure>

          {/* Section 3 */}
          <h2 id="tyre-age" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Does Tyre Age Matter, Even With Plenty of Tread?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Yes — even tyres with plenty of tread remaining will eventually need replacing. Rubber hardens naturally over time, which reduces grip and increases the chance of cracking in the sidewall and tread grooves.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Depending on overall condition, many manufacturers suggest tyres should be professionally checked once they reach around <strong>five years old</strong>. Low-mileage cars are particularly affected: the tyres may look nearly new, but they&apos;re still ageing. If you&apos;re unsure how old your tyres are, a proper inspection will give you peace of mind.
          </p>

          {/* Section 4 */}
          <h2 id="home-check" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How to Inspect Your Tyres at Home</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A basic tyre check requires no special equipment. Walk around your car and look for:
          </p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Uneven tread wear</strong> — more wear on one edge usually points to alignment or pressure problems</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Cracked or perished rubber</strong> in the sidewall and between the tread blocks</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Bulges or blisters</strong> in the sidewall — these indicate internal damage and are urgent</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Nails, screws or other sharp objects</strong> embedded in the tread</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Cuts and splits</strong> anywhere on the tyre surface</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>Shallow tread depth</strong> or debris lodged in the grooves</span>
            </li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Any of these signs should be professionally inspected as soon as possible. If you spot an object lodged in the tread, don&apos;t pull it out — book a <Link href="/services/puncture-repair" className="text-[#FB7E10] font-bold hover:underline">puncture repair</Link> and let a technician assess whether the tyre can be safely repaired or needs replacing.
          </p>

          {/* Section 5 */}
          <h2 id="tread-depth" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Legal Tread Depth in the United Kingdom</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            In the UK the minimum legal tread depth is <strong>1.6mm</strong> across the central three quarters of the tyre, around its entire circumference.
          </p>

          {/* Warning callout */}
          <div className="my-8 flex items-start gap-4 bg-orange-50 border border-orange-100 rounded-2xl p-6">
            <AlertTriangle className="text-[#FB7E10] flex-shrink-0 mt-0.5" size={24} />
            <p className="m-0 text-slate-600 leading-relaxed text-base md:text-[17px]">
              It is an offence to drive on tyres below this limit. You could face a fine and penalty points <strong>per tyre</strong>, alongside significantly longer stopping distances.
            </p>
          </div>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Many safety organisations recommend replacing tyres <em>before</em> they reach the legal minimum — commonly at around 3mm — particularly if you regularly drive in wet weather. The more tread you have, the better the grip and the shorter your braking distance.
          </p>

          {/* Tread depth table */}
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Tread Depth</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">What to Do</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">8mm – 4mm</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Healthy</td>
                  <td className="px-6 py-4">Keep checking pressures monthly</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">3mm</td>
                  <td className="px-6 py-4 text-amber-600 font-medium">Start planning</td>
                  <td className="px-6 py-4">Wet braking performance drops noticeably</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">2mm</td>
                  <td className="px-6 py-4 text-orange-600 font-medium">Replace soon</td>
                  <td className="px-6 py-4">Book a replacement before it becomes illegal</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Below 1.6mm</td>
                  <td className="px-6 py-4 text-red-600 font-medium">Illegal &amp; unsafe</td>
                  <td className="px-6 py-4">Replace immediately — do not drive on it</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 6 */}
          <h2 id="warning-signs" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Signs It&apos;s Time to Replace Your Tyres</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyres usually give you plenty of warning before they become genuinely unsafe. Watch out for:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li>Tread depth at or below the 1.6mm legal limit</li>
            <li>Cracked, perished or hardened rubber</li>
            <li>A bulge or blister in the sidewall</li>
            <li>Increased vibration or road noise while driving</li>
            <li>Uneven wear across the tyre or between tyres</li>
            <li>Tyre pressure that drops repeatedly between checks</li>
            <li>Noticeably reduced grip in the wet</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Ignoring these signs can lead to a flat tyre or a full tyre failure at speed. If the worst does happen, our <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">24/7 emergency tyre fitting service</Link> can reach you at the roadside — read our guide on <Link href="/blogs/emergency-mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">what to do when you get a flat tyre</Link> for the safety steps to follow first.
          </p>

          {/* Section 7 */}
          <h2 id="risks" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why You Shouldn&apos;t Delay Changing Worn Tyres</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Stretching a set of tyres a few thousand miles further can look like a money-saving move, but it usually costs far more in the long run. Worn tyres:
          </p>
          <ul className="list-none pl-0 space-y-3 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Increase your stopping distance, especially in the wet</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Reduce steering response and overall control</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Raise the risk of aquaplaning on standing water</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Lower fuel efficiency through higher rolling resistance</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Are far more likely to puncture or blow out</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Put you, your passengers and other road users at risk</span>
            </li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Changing your tyres at the right time protects you and everyone else on the road — and it&apos;s almost always cheaper than the alternative.
          </p>

          {/* Section 8 */}
          <h2 id="mobile-fitting" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Can I Have My Tyres Fitted at Home?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Absolutely. The biggest advantage of a <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting service</Link> is convenience. Rather than driving to a garage and waiting around in a reception area, a professional technician comes to your home, workplace, or wherever your car happens to be.
          </p>
          <p className="mb-4 font-bold text-[#0B1528] text-lg">On arrival, your technician will:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">01</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Inspect Your Tyres</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">A full check of tread depth, sidewalls and pressures across all four wheels.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">02</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Recommend Replacements</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Suitable tyre options for your vehicle, budget and typical driving.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">03</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Fit &amp; Balance</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">New tyres fitted, balanced and torqued to manufacturer specification on-site.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">04</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Dispose of Old Tyres</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Your worn tyres are taken away and recycled responsibly — nothing left behind.</p>
            </div>
          </div>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            It saves a considerable amount of time and gets your car back to being safe to drive without disrupting your day. Curious how long it actually takes? See our guide to <Link href="/blogs/how-long-does-tyre-fitting-take-mobile-service" className="text-[#FB7E10] font-bold hover:underline">how long mobile tyre fitting takes</Link>, or compare your options in <Link href="/blogs/mobile-tyre-fitting-or-tyre-fitting-in-garage" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting vs garage fitting</Link>.
          </p>

          {/* Image 3 */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/when-to-change-car-tyres/mobile-tyre-fitting-van-uk-roadside.webp"
              alt="Mobile Tyre Champions fully equipped tyre fitting van parked on a wet UK road carrying replacement tyres"
              className="w-full h-auto"
              loading="lazy"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              Our fully equipped vans carry replacement tyres and balancing equipment directly to your home, office or roadside.
            </figcaption>
          </figure>

          {/* Section 9 */}
          <h2 id="why-mtc" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why Choose Mobile Tyre Champions?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            At <Link href="/" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link>, we know that changing tyres isn&apos;t always the simplest job to fit into a busy week. That&apos;s exactly what our mobile service is for — our experienced technicians come to you, anywhere across <Link href="/locations" className="text-[#FB7E10] font-bold hover:underline">our coverage areas</Link>.
          </p>
          <p className="mb-4 font-bold text-[#0B1528] text-lg">What we offer:</p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Professional tyre inspections and honest advice</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Quality tyres from trusted manufacturers</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Convenient fitting at home or at work</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><Link href="/services/locking-wheel-nut-removal" className="text-[#FB7E10] font-bold hover:underline">Locking wheel nut removal</Link> if your key has gone missing</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>A safe, reliable service backed by proper equipment</span>
            </li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            We&apos;re happy to replace just one tyre or all four, so you can get back on the road with confidence. We serve drivers across <Link href="/locations/surrey" className="text-[#FB7E10] font-bold hover:underline">Surrey</Link>, <Link href="/locations/hampshire" className="text-[#FB7E10] font-bold hover:underline">Hampshire</Link>, <Link href="/locations/berkshire" className="text-[#FB7E10] font-bold hover:underline">Berkshire</Link> and London.
          </p>

          {/* FAQs Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-16 mb-8 scroll-mt-28 flex items-center gap-2 border-t border-slate-100 pt-8">
            <HelpCircle className="text-[#FB7E10]" size={28} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How long do tyres last?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Most car tyres last between 20,000 and 40,000 miles, but mileage is only part of the picture. Tyres should be checked regularly as they age, and many manufacturers recommend extra vigilance once they reach around five years old.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Do tyres go off even with loads of tread left?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Rubber is a natural product and it ages. Older tyres can be less effective and more prone to cracking even when the tread still looks perfectly healthy.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">What is the legal tyre tread depth in the UK?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">1.6mm across the central three quarters of the tyre, around its full circumference. Driving below this is an offence and can result in a fine and penalty points for each tyre affected.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Do I need to replace all four tyres at the same time?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Not necessarily. If only one or two tyres need changing, a technician can advise the safest option for your vehicle based on the condition of the remaining tyres and your car&apos;s drivetrain.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can a mobile tyre fitter fit my tyres at my workplace?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Mobile tyre fitting services will come to your workplace, home or another suitable location to inspect and fit your tyres while you carry on with your day.</p>
            </div>
          </div>

          {/* Final Thoughts */}
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">Final Thoughts</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Knowing when to change your tyres is one of the easiest ways to stay safer, drive better and feel more at ease behind the wheel. Mileage and age are useful clues, but routine inspections are the best way to catch problems before they become serious.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Not sure what condition your tyres are in? Don&apos;t wait for a warning light or a puncture to leave you stranded. A professional inspection will tell you whether your tyres are still good or whether it&apos;s time for new ones.
          </p>
          <p className="mb-0 text-slate-600 leading-relaxed text-base md:text-lg">
            Ready to book? Use our <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">tyre finder</Link> to check sizes for your vehicle, head straight to our <Link href="/booking" className="text-[#FB7E10] font-bold hover:underline">booking page</Link>, or <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">get in touch with our team</Link> — in most cases you won&apos;t have to leave your home or workplace at all.
          </p>
        </article>
      </div>

      <div className="mt-12">
        <CTA />
      </div>

      {/* JSON-LD FAQ Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </div>
  );
}
