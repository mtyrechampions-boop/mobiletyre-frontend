import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Mobile Tyre Fitting – Is It Worth It? Benefits, Costs & Ease of Use Explained',
  description: 'Find out why mobile tyre fitting is taking the UK by storm. Find out the pros, cons and how emergency mobile tyre fitting can save you time and hassle.',
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I get my tyres fitted at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Tyres can be fitted directly at your home by professional technicians from Mobile Tyre Champions who carry all necessary specialist equipment and follow strict industry safety standards."
      }
    },
    {
      "@type": "Question",
      "name": "Do mobile tyre fitters balance wheels?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, wheel balancing is standard. Most mobile tyre fitters (including Mobile Tyre Champions) will balance your wheels as part of the tyre fitting service."
      }
    },
    {
      "@type": "Question",
      "name": "Do mobile tyre fitters work in the evening?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, many providers like Mobile Tyre Champions offer a 24-hour emergency mobile tyre fitting service to assist you during night-time punctures or roadside emergencies."
      }
    },
    {
      "@type": "Question",
      "name": "How long does mobile tyre fitting take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most appointments are completed within 30 to 60 minutes depending on the vehicle type, number of tyres being replaced, and specific tyre requirements."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have a tyre changed at work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mobile tyre fitting services are designed to fit your schedule. Technicians can replace or repair tyres at your workplace, home, or any other secure location while you continue your day."
      }
    }
  ]
};

export default function BlogPostWorthIt() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Banner image with a sleek gradient overlay */}
        <div className="absolute inset-0 bg-[url('/blogs-images/mobile-tyre-fitting-worth-it-banner.webp')] bg-cover bg-center opacity-30 mix-blend-overlay"></div>
        {/* Dark mask overlay to make text highly readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1528] via-[#0B1528]/80 to-[#0B1528]/45"></div>
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
            <div className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FB7E10]" /> June 19, 2026</div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#FB7E10]" /> 8 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-0 tracking-tight drop-shadow-md">
            Is Mobile Tyre Fitting <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7E10] to-[#ffaa55]">Worth It?</span> <br className="hidden md:inline" />All UK Drivers Need to Know
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
            <a href="#what-is-it" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              What is Mobile Tyre Fitting?
            </a>
            <a href="#why-popular" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Is It Popular?
            </a>
            <a href="#advantages" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Major Advantages
            </a>
            <a href="#cost" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Is It More Expensive?
            </a>
            <a href="#when-to-consider" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              When to Consider
            </a>
            <a href="#same-day" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Same Day Fitting
            </a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How It Works
            </a>
            <a href="#vs-garages" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Mobile vs Traditional Garages
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

          {/* Intro */}
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Suppose you're on your way to a big meeting, a family trip, or just your daily commute and you find a flat tyre. Normally, this would mean calling out a tow truck, detouring to a garage, and hanging around for hours waiting for your car to be fixed. Thankfully, <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold underline hover:text-[#0B1528]">mobile tyre fitting</Link> has changed the way drivers across the UK deal with tyre problems.
          </p>

          <p className="mb-6 text-[#0B1528] font-bold text-lg md:text-xl">
            But is mobile tyre fitting really worth it?
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            <strong>The short answer is yes.</strong> For many drivers, having tyres fitted by a mobile service is unbeatable for convenience, saving time, and getting a professional service without the need to visit a garage. If you are in need of an <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold underline hover:text-[#0B1528]">emergency mobile tyre fitting service</Link>, a roadside tyre fitting service, or a same-day tyre fitting appointment, mobile tyre specialists can come to your location and get you back on the road quickly.
          </p>

          <p className="mb-8 text-slate-600 leading-relaxed text-base md:text-lg">
            In this guide, we'll take you through everything you need to know about mobile tyre fitting, why more UK drivers are taking advantage of this convenient alternative, its benefits, and its costs.
          </p>

          {/* Image 1 — after intro (~250 words) */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/mobile-tyre-fitting-worth-it/mobile-tyre-fitting-van.webp"
              alt="Mobile Tyre Champions service van fully equipped with new tyres arriving at a customer location in the UK"
              className="w-full h-72 object-cover"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              A Mobile Tyre Champions technician arrives fully equipped to your home, office or roadside — no garage trip needed.
            </figcaption>
          </figure>

          {/* Section 1 */}
          <h2 id="what-is-it" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What is Mobile Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre fitting is a service where professional tyre technicians come to you to replace, repair, or fit tyres. The tyre centre comes to you, instead of you going to a tyre centre.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Whether at home, at work, in a car park, or stuck on the side of the road in regions like <Link href="/locations/surrey" className="text-[#FB7E10] font-bold hover:underline">Surrey</Link>, <Link href="/locations/hampshire" className="text-[#FB7E10] font-bold hover:underline">Hampshire</Link>, or <Link href="/locations/berkshire" className="text-[#FB7E10] font-bold hover:underline">Berkshire</Link>, a mobile tyre fitting service can help with the latest fully equipped service vehicles.
          </p>

          <p className="mb-4 font-bold text-[#0B1528] text-lg">Services usually include:</p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Mobile tyre replacement</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><Link href="/services/puncture-repair" className="text-[#FB7E10] font-bold hover:underline">Puncture repair</Link></span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><Link href="/services/precision-wheel-balancing" className="text-[#FB7E10] font-bold hover:underline">Precision wheel balancing</Link></span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Tyre pressure calibration</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Seasonal tyre swaps</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Roadside tyre assistance</span>
            </li>
          </ul>

          {/* Section 2 */}
          <h2 id="why-popular" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why Is Mobile Tyre Fitting Becoming Popular?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The increasing demand for mobile tyre fitting across the UK is mainly down to convenience. Today's drivers are busy and have little time. Often, taking a car to a traditional garage involves:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li>Scheduling appointments several days ahead</li>
            <li>Driving on worn out, illegal, or dangerous tyres</li>
            <li>Waiting in cold waiting rooms for the service to finish</li>
            <li>Organising alternative transportation or lifts</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre fitting makes these problems disappear. Our professional technicians from <Link href="/" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link> will come to your preferred location and do the work safely, allowing you to go about your day without interruption.
          </p>


          {/* Section 3 */}
          <h2 id="advantages" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">The Major Advantages of Mobile Tyre Fitting</h2>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">1. Save Precious Time</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A typical garage visit can take several hours from start to finish. However, a mobile tyre fitting appointment means you can stay productive. If you work from home, manage a business, or are spending time with family, you can avoid unnecessary travel and waiting times.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">2. Fits Around Your Schedule</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The ability to have tyres fitted at home or work is considered a major benefit by many UK motorists. No longer do you have to adjust your schedule to visit a local tyre centre. The service comes directly to you at your convenience, making it easier than ever to maintain your tyres.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">3. Emergency Help When You Need It Most</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyre failure can happen at any time. If you experience a flat tyre late at night, a blowout on the motorway, or unexpected tyre damage right before a big appointment, our <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">24/7 emergency tyre fitting service</Link> is always on call. We dispatch local technicians across <Link href="/locations" className="text-[#FB7E10] font-bold hover:underline">our coverage areas</Link> to secure your vehicle quickly.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">4. Increased Safety</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Driving on a damaged tyre increases the risk of a severe blowout. With mobile tyre fitting, you don't have to drive on unsafe tyres. Professional technicians assess and fix the problem on-site, drastically reducing road risks.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">5. Professional Equipment and Knowledge</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Many drivers assume mobile services are lower quality than conventional garages. In reality, today's mobile tyre fitting vehicles are outfitted with advanced, professional-grade tools. Qualified technicians carry out:
          </p>
          <ul className="list-disc pl-6 space-y-2 my-4 text-slate-600 text-base md:text-[17px]">
            <li>Tyre fitting and mounting</li>
            <li>Wheel balancing</li>
            <li>Pressure monitoring</li>
            <li>Safety inspections</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The service quality is often comparable to a dedicated tyre centre — and far more convenient.
          </p>

          {/* Image 2 — after advantages section (~280 words) */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/mobile-tyre-fitting-worth-it/tyre-balancing-guide.webp"
              alt="A professional wheel balancing guide representing standard procedure included in Mobile Tyre Champions services"
              className="w-full h-72 object-cover"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              Precision wheel balancing is included as standard with every tyre fitting — helping you enjoy a smoother, safer drive and extend tyre life.
            </figcaption>
          </figure>

          {/* Section 4 */}
          <h2 id="cost" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Is Mobile Tyre Fitting More Expensive?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            One of the things drivers worry about is whether mobile tyre fitting is more expensive than going to a garage. The cost can vary with location, tyre type, and time of service, but the difference is often small.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            When calculating the total value, don't forget to take into account:
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Factor</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Mobile Tyre Fitting</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Traditional Garage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Fuel &amp; Travel Cost</td>
                  <td className="px-6 py-4 text-green-600 font-medium">£0 (No driving required)</td>
                  <td className="px-6 py-4">Varies depending on garage distance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Downtime / Loss of Work</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Minimal (Continue working)</td>
                  <td className="px-6 py-4">High (1–3 hours waiting/travel)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Emergency Towing</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Not Required</td>
                  <td className="px-6 py-4">Required if tyre is flat (£80–£150)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Scheduling Flexibility</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Same-day or 24/7 available</td>
                  <td className="px-6 py-4">Days in advance, limited hours</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            For most motorists, the small extra cost of a mobile service is easily justified by the significant savings in time and convenience.
          </p>

          {/* Section 5 */}
          <h2 id="when-to-consider" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">When to Consider Mobile Tyre Replacement?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre replacement is perfect for a number of scenarios. Use our <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">tyre finder</Link> to check available sizes for your vehicle before booking:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li><strong>Flat Tyres at Home:</strong> Avoid trying to mount a spare or waiting hours for recovery in your driveway. Our <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting service</Link> comes directly to you.</li>
            <li><strong>Tyre Damage at Work:</strong> Let us change your tyres in the company car park while you work.</li>
            <li><strong>Roadside Emergencies:</strong> If you suffer a puncture on motorways like the M25 or M3, call our <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">24/7 emergency tyre fitting team</Link> for rapid safety assistance.</li>
            <li><strong>Company Fleets:</strong> Keep business vehicles moving with pre-arranged site visits. <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">Get in touch</Link> to discuss a fleet service plan.</li>
          </ul>


          {/* Section 6 */}
          <h2 id="same-day" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Same Day Tyre Fitting: A Busy Driver's Best Friend</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Vehicle downtime can be genuinely disruptive. That's why same-day tyre fitting services have become incredibly popular across the UK. Many mobile tyre suppliers can source the correct tyres and fit them within just a few hours of booking.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The speed of response allows drivers to avoid delays and keep to schedule without interruption. Whether you're setting off on a long trip or dealing with sudden tyre damage, same-day tyre fitting is a practical, stress-free solution that puts you back in control.
          </p>

          {/* Section 7 */}
          <h2 id="how-it-works" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How Does Mobile Tyre Fitting Work?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">01</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Book Online</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Visit our <Link href="/booking" className="text-[#FB7E10] font-bold hover:underline">booking page</Link>, select your tyre sizes using the <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">tyre finder</Link>, and choose your preferred appointment slot.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">02</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Technician Arrives</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">A fully equipped service van is dispatched directly to your location — home, office, or roadside.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">03</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Tyre Check</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">The technician inspects the tyre and agrees on what work needs to be done before starting.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">04</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Fitting &amp; Balancing</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">The new tyre is professionally fitted, balanced, and torqued to manufacturer specifications.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">05</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Safety Sign-Off</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Final safety checks are completed to confirm your vehicle is fully roadworthy before the technician leaves.</p>
            </div>
          </div>

          {/* Image 3 — after how it works (~260 words) */}
          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/mobile-tyre-fitting-worth-it/mobile-tyre-fitting-process.webp"
              alt="Step-by-step mobile tyre fitting and balancing process completed on-site by a Mobile Tyre Champions technician"
              className="w-full h-72 object-cover"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              From booking to safety sign-off — the entire mobile tyre fitting process is designed to be fast, professional, and completely hassle-free.
            </figcaption>
          </figure>

          {/* Section 8 */}
          <h2 id="vs-garages" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">The Rise of Mobile Tyre Fitters Versus Traditional UK Garages</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The automotive industry is adopting convenience-focused services at a faster pace than ever before. Just as grocery delivery and mobile mechanics have become mainstream, <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting</Link> is now the preferred choice for a growing number of UK drivers.
          </p>
          <p className="mb-4 font-bold text-[#0B1528] text-lg">The benefits driving this shift include:</p>
          <ul className="list-none pl-0 space-y-3 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Less vehicle downtime</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Increased scheduling flexibility</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Fully professional service standard</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>24/7 emergency assistance</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Greater road safety through on-site repair</span>
            </li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            With ever-improving technology and expanding service coverage, mobile tyre fitting is set to become even more popular across the UK. <Link href="/" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link> is at the forefront of this shift, serving drivers across <Link href="/locations/surrey" className="text-[#FB7E10] font-bold hover:underline">Surrey</Link>, <Link href="/locations/hampshire" className="text-[#FB7E10] font-bold hover:underline">Hampshire</Link>, <Link href="/locations/berkshire" className="text-[#FB7E10] font-bold hover:underline">Berkshire</Link>, and London.
          </p>

          {/* FAQs Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-16 mb-8 scroll-mt-28 flex items-center gap-2 border-t border-slate-100 pt-8">
            <HelpCircle className="text-[#FB7E10]" size={28} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can I get my tyres fitted at home?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Tyres can be fitted directly at your property. Professional technicians arrive with state-of-the-art jacks and balancing machines to complete the work safely.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Do mobile tyre fitters balance wheels?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Wheel balancing is an integral part of the tyre replacement process to ensure a smooth ride and prevent premature wear.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Do mobile tyre fitters work in the evening?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Mobile Tyre Champions provides 24-hour emergency tyre fitting across our coverage areas for late-night blowouts and flat tyres.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How long does a mobile tyre fitting take?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Typically, replacing a single tyre takes about 30 to 45 minutes. A full set of four tyres is usually completed in about an hour.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can I have a tyre changed at work?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Of course. Mobile tyre fitting services are available to suit your schedule and can be performed at home, work, or another convenient location while you carry on with your day.</p>
            </div>
          </div>

          {/* Final Thoughts */}
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">Final Thoughts</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The benefits of <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting</Link> far outweigh the cost. From saving valuable time to avoiding the hassle of visiting a traditional garage, it offers a modern solution to tyre maintenance. If you are stuck with a puncture or need new tyres, <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">contact Mobile Tyre Champions</Link> today or use our <Link href="/find-tyres" className="text-[#FB7E10] font-bold hover:underline">tyre finder tool</Link> to get the right fit quickly.
          </p>
          <p className="mb-0 text-slate-600 leading-relaxed text-base md:text-lg">
            Already dealing with a flat? Read our step-by-step guide: <Link href="/blogs/emergency-mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">Emergency Mobile Tyre Fitting — What to Do When You Get a Flat Tyre</Link> for safety tips and what to do next.
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
