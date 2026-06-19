import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Mobile Tyre Fitting – Is It Worth It? Benefits, Costs & Ease of Use Explained.',
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
      <div className="bg-[#0B1528] pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/blogs-images/Is%20Mobile%20Tyre%20Fitting%20Worth%20It%20All%20UK%20Drivers%20Need%20to%20Know.webp')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FB7E10] font-bold hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-300 mb-6">
            <span className="bg-[#FB7E10] text-white px-3 py-1 rounded-full uppercase tracking-wider">Guides</span>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> June 19, 2026</div>
            <div className="flex items-center gap-1.5"><Clock size={16} /> 6 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            Is Mobile Tyre Fitting Worth It? All UK Drivers Need to Know
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-4xl">
            Find out why mobile tyre fitting is taking the UK by storm. Explore the pros, cons, and how roadside assistance saves you time and hassle.
          </p>
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
              What is Mobile Fitting?
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
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How it Works
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
            Suppose you’re on your way to a big meeting, a family trip, or just your daily commute and you find a flat tyre. Normally, this would mean calling out a tow truck, detouring to a garage, and hanging around for hours waiting for your car to be fixed. Thankfully, <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold underline hover:text-[#0B1528]">mobile tyre fitting</Link> has changed the way drivers across the UK deal with problems relating to tyres.
          </p>

          <p className="mb-6 text-[#0B1528] font-bold text-lg md:text-xl">
            But is mobile tyre fitting really worth it?
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            <strong>Yes, the short answer is.</strong> For many drivers, having tyres fitted by a mobile service is unbeatable for convenience, saving time, and getting a professional service without the need to visit a garage. If you are in need of an <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold underline hover:text-[#0B1528]">emergency mobile tyre fitting service</Link>, a roadside tyre fitting service, or a same-day tyre fitting appointment, mobile tyre specialists can come to your location and get you back on the road quickly.
          </p>

          <p className="mb-8 text-slate-600 leading-relaxed text-base md:text-lg">
            In this guide, we’ll take you through everything you need to know about mobile tyre fitting, why more UK drivers are taking advantage of this convenient alternative, its benefits, and its costs.
          </p>

          {/* Section 1 */}
          <h2 id="what-is-it" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What is Mobile Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre fitting is a service where professional tyre technicians come to you to replace, repair, or fit tyres. The tyre centre comes to you, instead of you going to a tyre centre.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Whether at home, at work, in a car park, or stuck on the side of the road in regions like <strong>London</strong>, <strong>Surrey</strong>, <strong>Hampshire</strong>, or <strong>Berkshire</strong>, a mobile tyre fitting service can help with the latest fully equipped service vehicles.
          </p>

          <p className="mb-4 font-bold text-[#0B1528] text-lg">Services usually include:</p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Mobile tyre replacement</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><Link href="/services/puncture-repair" className="text-[#FB7E10] font-bold hover:underline">Puncture Repair</Link></span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Precision wheel balancing</span>
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
            Tyre failure can happen at any time. If you experience a flat tyre late at night, a blowout on the motorway, or unexpected tyre damage right before a big appointment, our 24/7 emergency service is always on call. We dispatch local technicians across <Link href="/locations" className="text-[#FB7E10] font-bold hover:underline">our coverage areas</Link> to secure your vehicle.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">4. Increased Safety</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Driving on a damaged tyre increases the risk of a severe blowout. With mobile tyre fitting, you don’t have to drive on unsafe tyres. Professional technicians assess and fix the problem on-site, drastically reducing road risks.
          </p>

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
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Fuel & Travel Cost</td>
                  <td className="px-6 py-4 text-green-600 font-medium">£0 (No driving required)</td>
                  <td className="px-6 py-4">Varies depending on garage distance</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Downtime / Loss of Work</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Minimal (Continue working)</td>
                  <td className="px-6 py-4">High (1-3 hours waiting/travel)</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Emergency Towing</td>
                  <td className="px-6 py-4 text-green-600 font-medium">Not Required</td>
                  <td className="px-6 py-4">Required if tyre is flat (£80-£150)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Section 5 */}
          <h2 id="when-to-consider" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">When to Consider Mobile Tyre Replacement?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre replacement is perfect for a number of scenarios:
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li><strong>Flat Tyres at Home:</strong> Avoid trying to mount a spare or waiting hours for recovery in your driveway.</li>
            <li><strong>Tyre Damage at Work:</strong> Let us change your tyres in the company car park while you work.</li>
            <li><strong>Roadside Emergencies:</strong> If you suffer a puncture on motorways like the M25 or M3, call us for rapid safety assistance.</li>
            <li><strong>Company Fleets:</strong> Keep business vehicles moving with pre-arranged site visits.</li>
          </ul>

          {/* Section 6 */}
          <h2 id="how-it-works" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How Does Mobile Tyre Fitting Work?</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">01</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Book Online</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Select your required tyre sizes and choose a preferred appointment slot.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">02</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Technician Arrives</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">A fully equipped service van is dispatched directly to your location.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">03</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Fitting & Balance</h4>
              <p className="text-xs text-slate-500 m-0 leading-relaxed">Your tyres are professionally fitted, balanced, and safety checked.</p>
            </div>
          </div>

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
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How long is a mobile tyre fitting?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Typically, replacing a single tyre takes about 30 to 45 minutes. A full set of four tyres is usually completed in about an hour.</p>
            </div>
          </div>

          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">Final Thoughts</h2>
          <p className="mb-0 text-slate-600 leading-relaxed text-base md:text-lg">
            The benefits of mobile tyre fitting far outweigh the cost. From saving valuable time to avoiding the hassle of visiting a traditional garage, it offers a modern solution to tyre maintenance. If you are stuck with a puncture or need new tyres, contact <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">Mobile Tyre Champions</Link> today to get back on the move quickly and safely.
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
