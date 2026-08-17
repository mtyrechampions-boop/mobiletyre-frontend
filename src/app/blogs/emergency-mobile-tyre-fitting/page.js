import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Emergency Mobile Tyre Fitting | What To Do With Flat Tyre',
  description: 'Find out what to do when you get a flat tyre and how emergency mobile tyre fitting services can get you safely back on the road anywhere in the UK.',
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How fast can emergency mobile tyre fitting reach you?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Response times vary by location and demand, but many providers like Mobile Tyre Champions aim to reach customers as fast as they can, often within 30-60 minutes."
      }
    },
    {
      "@type": "Question",
      "name": "Can you change the tyres at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, mobile tyre fitting services can be carried out at your home, at work, or at most safe locations."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fit a tyre, in an emergency, at night?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, for urgent situations, Mobile Tyre Champions offers 24-hour a day mobile tyre fitting."
      }
    },
    {
      "@type": "Question",
      "name": "Do I need to know the size of my tyre?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Not necessarily. Usually a technician can find the right tyres with just the registration details of your vehicle."
      }
    },
    {
      "@type": "Question",
      "name": "Is roadside tyre fitting safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Professional technicians have specialized tools and safety procedures to carry out the work safely on the roadside."
      }
    }
  ]
};

export default function BlogPostEmergency() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Banner image with full opacity to prevent the blue background from bleeding through */}
        <div className="absolute inset-0 bg-[url('/blogs-images/emergency-mobile-tyre-fitting-banner.webp')] bg-cover bg-center opacity-100"></div>
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
            <span className="bg-gradient-to-r from-[#FB7E10] to-[#ff9838] text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/20">Safety</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FB7E10]" /> June 19, 2026</div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#FB7E10]" /> 5 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-0 tracking-tight drop-shadow-md">
            Emergency Mobile <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7E10] to-[#ffaa55]">Tyre Fitting:</span> <br className="hidden md:inline" />What to Do When You Get a Flat Tyre
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
            <a href="#why-deflate" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Do Tyres Deflate?
            </a>
            <a href="#what-to-do" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              What to Do
            </a>
            <a href="#why-choose-emergency" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Choose Mobile Fitting?
            </a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How It Works
            </a>
            <a href="#when-to-call" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              When to Call
            </a>
            <a href="#benefits-emergency" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Benefits in Emergency
            </a>
            <a href="#vs-recovery" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Fitting vs Recovery
            </a>
            <a href="#puncture-repair" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Puncture Repair
            </a>
            <a href="#faq" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Common Questions
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
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Few driving situations are more frustrating than discovering a flat tyre, especially if you’re running late, carrying the family, or driving in unfamiliar surroundings. Whether you’re parked at home, stuck at work, or stranded on the side of the road, a flat tyre can quickly turn a routine event into a stressful situation.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The good news is that <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold underline hover:text-[#0B1528]">emergency mobile tyre fitting services</Link> are the fast, easy, and professional answer. Qualified tyre technicians will come to you and change or repair your tyre on the spot rather than waiting for recovery services or trying to fix your tyre yourself on the side of the road (which can be dangerous).
          </p>

          <p className="mb-8 text-slate-600 leading-relaxed text-base md:text-lg">
            In this guide, we’ll explain exactly what to do if you get a flat tyre, when to call an emergency mobile tyre fitting service, and how professional mobile tyre specialists can get you back on the road safely.
          </p>

          {/* Image 1 — after intro */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/emergency-mobile-tyre-fitting/roadside-emergency-tyre-fitting.webp"
              alt="Roadside emergency tyre fitting service van replacing a flat tyre for a motorist stranded on the side of the road"
              className="w-full h-auto"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              When stranded with a flat tyre, professional roadside assistance comes directly to your location.
            </figcaption>
          </figure>

          {/* Section 1 */}
          <h2 id="why-deflate" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why Do Tyres Deflate?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyres can fail for many reasons, often without any warning. Some of the more common reasons are:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li>Pointy objects such as nails, screws, or sharp debris</li>
            <li>Pothole impact damage and road craters</li>
            <li>Sidewall cuts and slices</li>
            <li>Over-wearing of tyres past legal limits</li>
            <li>Incorrect tyre pressure leading to blowouts</li>
            <li>Hitting curbs at speed</li>
            <li>Broken or leaking tyre valves</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Some punctures can be repaired on-site, while others may need a complete <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre replacement</Link>, depending on the severity and location of the damage.
          </p>

          {/* Section 2 */}
          <h2 id="what-to-do" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What to Do When You Get a Flat Tyre</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Safety should always be your first concern. Follow these steps:
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 1: Locate a Safe Place</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If possible, safely slow down and remove your vehicle from the active road. Good stopping places include:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4 text-slate-600 text-base md:text-[17px]">
            <li>Hard shoulder zones on motorways</li>
            <li>Dedicated lay-bys</li>
            <li>Quiet side streets</li>
            <li>Safe roadside parking bays</li>
            <li>Off-road car parks</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Remember: <strong>Do not brake suddenly</strong> and do not steer sharply.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 2: Turn on Hazard Warning Lights</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Hazard lights help other road users see your vehicle and drastically reduce the chances of a secondary collision. If it is dark, keep your sidelights switched on too.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 3: Assess the Situation</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Look at the tyre from a safe distance. Inspect the wheel for tell-tale signs like:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4 text-slate-600 text-base md:text-[17px]">
            <li>Complete deflation (tyre resting flat on the rim)</li>
            <li>Sidewall bulging or visible tearing</li>
            <li>Large tears or gaping holes</li>
            <li>Exposed cords or shredding rubber</li>
            <li>Foreign objects embedded in the tread</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If the tyre looks structural or badly damaged, do not attempt to drive on it.
          </p>
          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 4: Contact Emergency Mobile Tyre Fitting</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Don't risk further vehicle damage or accident by driving to a garage. Call a professional <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">emergency mobile tyre fitter</Link>. A technician can come to your home, workplace, or roadside right away. You can <Link href="/booking" className="text-[#FB7E10] font-bold hover:underline">book an appointment online</Link> or <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">contact us directly</Link> for immediate assistance.
          </p>

          {/* Image 2 — after steps */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/emergency-mobile-tyre-fitting/emergency-tyre-safety-guide.webp"
              alt="Safety checklist guide for emergency mobile tyre fitting at home or roadside"
              className="w-full h-auto"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              By calling emergency mobile tyre fitting, you bypass the hazards of the roadside and remain safe while the replacement is done.
            </figcaption>
          </figure>

          {/* Section 3 */}
          <h2 id="why-choose-emergency" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why Emergency Mobile Tyre Fitting is the Way to Go</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Many drivers try to limp slowly to the nearest garage after getting a puncture. Unfortunately, this can cause significant additional issues. Driving on a flat tyre can:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li>Destroy your expensive alloy wheels</li>
            <li>Negatively impact vehicle steering and braking control</li>
            <li>Increase vehicle stopping distances dangerously</li>
            <li>Lead to complete tyre shredding and blowout</li>
            <li>Cause expensive suspension or bodywork damage</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Emergency mobile tyre fitting completely resolves this. Professional technicians arrive directly at your location in areas like <Link href="/locations/surrey" className="text-[#FB7E10] font-bold hover:underline">Surrey</Link>, <Link href="/locations/hampshire" className="text-[#FB7E10] font-bold hover:underline">Hampshire</Link>, <Link href="/locations/berkshire" className="text-[#FB7E10] font-bold hover:underline">Berkshire</Link>, or <strong>London</strong>, saving you time and money.
          </p>

          {/* Section 4 */}
          <h2 id="how-it-works" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How Emergency Mobile Tyre Fitting Works</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The process is simple and designed to keep you safe:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-black text-[#FB7E10]">01</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Book Dispatch</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Tell us your location, vehicle details, and tyre size (or registration number).</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-black text-[#FB7E10]">02</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Tech Dispatched</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">A certified technician with tools and replacements is sent immediately.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-black text-[#FB7E10]">03</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">On-Site Fitting</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">The tyre is assessed, then either repaired or replaced on-site.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-2xl font-black text-[#FB7E10]">04</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Balancing & Check</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">We perform <Link href="/services/precision-wheel-balancing" className="text-[#FB7E10] font-bold hover:underline">precision wheel balancing</Link> and safety inspections to ensure roadworthiness.</p>
            </div>
          </div>

          {/* Section 5 */}
          <h2 id="when-to-call" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Emergency Mobile Tyre Fitting: When to Call</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            There are many situations where calling mobile help is the best option:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li><strong>You’re on the Roadside:</strong> Avoid the danger of replacing a tyre yourself next to high-speed traffic.</li>
            <li><strong>No Spare Tyre (or Bad Spare):</strong> Many modern vehicles do not carry a spare tyre, only a foam inflation kit which cannot seal major punctures.</li>
            <li><strong>After Hours:</strong> Standard workshops close at 5 PM. Our 24/7 support ensures you are covered any hour of the day.</li>
            <li><strong>Minimize Disruption:</strong> Same-day fitting helps keep your business meetings or family travel plans on track.</li>
          </ul>

          {/* Section 6 — Benefits */}
          <h2 id="benefits-emergency" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Benefits of Mobile Tyre Fitting in Emergency</h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">1. Faster Response Times</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Professional technicians are typically faster to reach your location. You get much less waiting time compared to traditional breakdown recovery options.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">2. User-Friendly &amp; Safe</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            There is no need to arrange towing or wait for hours in a cold tyre centre. Don't gamble with damaged or unsafe tyres by trying to drive them to a garage.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">3. Professional Services</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Qualified technicians use industry-standard procedures and specialized mobile equipment to mount, fit, and balance tyres directly on-site.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">4. Less Stress &amp; Peace of Mind</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Having expert help come straight to your location provides complete peace of mind, dramatically reducing stress during unexpected tyre emergencies.
          </p>

          {/* Image 3 — after benefits */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/emergency-mobile-tyre-fitting/mobile-tyre-technician-action.webp"
              alt="Professional mobile tyre fitting technician balancing and fitting a new tyre on-site in Surrey"
              className="w-full h-auto"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              Mobile technicians are equipped with advanced tools to balance and fit new tyres quickly and safely.
            </figcaption>
          </figure>

          {/* Breakdown Recovery vs Mobile Fitting Table */}
          <h2 id="vs-recovery" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Emergency Mobile Tyre Fitting vs. Breakdown Recovery</h2>
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Service</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Mobile Tyre Fitting</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Breakdown Recovery</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Outcome</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Fixed on the spot, drive away</td>
                  <td className="px-6 py-4">Towed to a nearby workshop or home</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Total Delay</td>
                  <td className="px-6 py-4">30 - 60 minutes</td>
                  <td className="px-6 py-4">Can take several hours (recovery + garage wait)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Extra Cost</td>
                  <td className="px-6 py-4">Standard fitting charge</td>
                  <td className="px-6 py-4">High recovery and towing fees (£80+)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Puncture Repair Section */}
          <h2 id="puncture-repair" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Can a Mobile Tyre Fitter Repair a Puncture?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Yes. Our <Link href="/services/puncture-repair" className="text-[#FB7E10] font-bold hover:underline">professional puncture repair service</Link> can fix punctures located within the central three-quarters of the tyre tread using standard BS AU 159 plug-patches. Read our comprehensive <Link href="/blogs/can-a-mobile-tyre-fitter-fix-a-puncture" className="text-[#FB7E10] font-bold hover:underline">guide on mobile puncture repairs</Link> to learn the exact criteria for when a tyre can be saved versus when a complete <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre replacement</Link> is required for safety.
          </p>

          {/* FAQs Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-16 mb-8 scroll-mt-28 flex items-center gap-2 border-t border-slate-100 pt-8">
            <HelpCircle className="text-[#FB7E10]" size={28} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How fast can emergency mobile tyre fitting reach you?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Response times vary by location, but our dispatch team aims to have a local technician on-site in Surrey, Hampshire, and Berkshire within 30 to 60 minutes.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can you change the tyres at home?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Our mobile vans are fitted with all tools needed to replace or repair tyres in your home driveway or garage.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can you fit a tyre, in an emergency, at night?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Mobile Tyre Champions operates a 24-hour service to ensure help is available when standard shops are closed.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Do I need to know the size of my tyre?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Knowing the size helps, but we can look up your tyre parameters using your vehicle registration number when you book.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Is roadside tyre fitting safe?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Our vans use commercial beacon lighting and our technicians wear full high-visibility protective gear to establish a safe working zone.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">In Summary</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A flat tyre can happen anytime, but it doesn't have to ruin your day. <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">Emergency mobile tyre fitting</Link> is a fast, safe, and convenient solution for drivers across the UK. Whether you're stuck at home, at work, or on the roadside, you can get expert help from professional technicians without the need to visit a garage.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Considering switching to mobile tyre services altogether? Read our guide on <Link href="/blogs/mobile-tyre-fitting-worth-it" className="text-[#FB7E10] font-bold hover:underline">Is Mobile Tyre Fitting Worth It?</Link> to understand the benefits, costs, and convenience compared to traditional garages.
          </p>
          <p className="mb-0 text-slate-600 leading-relaxed text-base md:text-lg">
            If you are unlucky enough to suffer a puncture or blowout, <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">contact Mobile Tyre Champions</Link> today or <Link href="/booking" className="text-[#FB7E10] font-bold hover:underline">book your appointment online</Link> to get back on the road safely and quickly.
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
