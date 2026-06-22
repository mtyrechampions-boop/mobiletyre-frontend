import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: '24 Hour Emergency Mobile Tyre Fitting UK | Emergency Tyre Replacement Anytime',
  description: 'Urgent Tyres explains the 24 hour mobile tyre fitting service, the benefits of emergency tyre services and why drivers in UK choose mobile tyre specialists.',
};

// FAQ Schema based on text
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Are you a 24 hour mobile tyre fitter 7 days a week?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most providers have support available 24/7 even on weekends and off business hours."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have a mobile tyre fitting service at my home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, we can fit tyres to your car at your home, work or other safe location."
      }
    },
    {
      "@type": "Question",
      "name": "Would you do me a favour and change a wheel on the side of the road?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Roadside tyre fitting services are emergency services for drivers who cannot continue their journey safely."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to fit a tyre on a vehicle?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The time taken will depend on the vehicle and the tyre requirement but once the technician has arrived many standard replacements can be done quickly."
      }
    }
  ]
};

export default function BlogPost24HourMobileTyre() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Banner image with full opacity to prevent the blue background from bleeding through */}
        <div className="absolute inset-0 bg-[url('/blogs-images/24-hour-mobile-tyre-fitting.png')] bg-cover bg-center opacity-100"></div>
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
            <span className="bg-gradient-to-r from-[#FB7E10] to-[#ff9838] text-white font-black text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-orange-500/20">Emergency</span>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FB7E10]" /> June 22, 2026</div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#FB7E10]" /> 5 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-0 tracking-tight drop-shadow-md">
            24 Hour Mobile Tyre Fitting:<br className="hidden md:inline" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7E10] to-[#ffaa55]">When You Need It and How It Works</span>
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
              What is 24 Hour Mobile Tyre Fitting?
            </a>
            <a href="#why-drivers" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Do Drivers Require It?
            </a>
            <a href="#how-it-works" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              How Does It Work?
            </a>
            <a href="#benefits" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Benefits of 24 Hour Tyre Fitting
            </a>
            <a href="#cost" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Is It Expensive?
            </a>
            <a href="#vs-garage" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Mobile Tyre Fitting vs Garage Service
            </a>
            <a href="#when-to-book" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              When to Book a Replacement?
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
            It’s seldom convenient when a tire goes flat or blows out. You might be on the road at some ungodly hour of the morning, returning late at night, heading to work or stranded somewhere foreign. If you have a problem with your tyre and it is outside normal garage opening hours, you can’t always wait until the next day.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Here is one of the most crucial of services for UK drivers: <strong>24 hour mobile tyre fitting.</strong> A good mobile tyre technician will come to you and you won’t need to hunt for an expensive vehicle recovery or a free garage.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If you have a tyre problem – puncture, tyre damage, tyre blowout or need an emergency replacement – a <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">24 hour mobile tyre fitting service</Link> provides a quick and convenient solution.
          </p>

          {/* Section 1 */}
          <h2 id="what-is-it" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What is a Mobile Tyre Fitting 24 Hour Service?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The 24 hour mobile tyre fitting service allows drivers to get professional tyre assistance any time of the day or night. Unlike traditional tyre centres, which operate to fixed opening hours, <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre specialists</Link> bring the equipment to your door.
          </p>
          <p className="mb-4 font-bold text-[#0B1528] text-lg">You can get assistance at:</p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li>Work site</li>
            <li>Home</li>
            <li>Parking lots</li>
            <li>Roadside / Roadside service station</li>
            <li>Safe place to turn around</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Fully equipped mobile tyre vans are equipped with all the tools necessary to inspect, replace, fit and balance tyres.
          </p>

          {/* Section 2 */}
          <h2 id="why-drivers" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why Do Drivers Require 24 Hour Mobile Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Tyre problems are a lottery. Things can still go wrong even if you look after your car to the letter. Drivers may require emergency tyre assistance in some of the following situations:
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Flat tire on the street</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Punctures can be caused by sharp objects, nails, screws, road damage or potholes. If a tyre suddenly goes down it can damage the wheel and create a safety hazard and you should not continue to drive.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A professional emergency mobile tyre fitting technician will be able to inspect the tyre and make the decision as to whether it needs to be repaired or replaced.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Road Blow Out</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            One of the most stressful things a driver can experience is a tire blowout. This could be because of:
          </p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Worn tyres</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Wrong tyre pressure</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Damage to tyre structure</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Excess heat</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span>Impact damage</span>
            </li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            In this situation it is dangerous to try to drive on. A roadside tyre fitting service means a technician will come to you and change the damaged tyre safely.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Garage shut when tyre trouble strikes</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Many tyre problems arise after normal garage hours. Drivers have few options for weekend breakdowns, early morning trips and late night emergencies. With a 24 hour mobile tyre fitting service you can always get help from a professional. Mobile tyre companies across the UK offer a 24/7 service for drivers with emergency tyre problems.
          </p>

          {/* Section 3 */}
          <h2 id="how-it-works" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How does 24-hour tire fitting work?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            It’s simple and will take all the stress out of it.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 my-8">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">Step 1</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Locate a Mobile Tyre Expert</h4>
              <p className="text-sm text-slate-600 m-0 leading-relaxed">Provide information such as your location, vehicle registration, tyre size (if known), and the type of tyre issue. If you’re not sure of your tyre size, a technician can usually tell you the right tyre from your vehicle’s details.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">Step 2</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Technician Goes To Your Location</h4>
              <p className="text-sm text-slate-600 m-0 leading-relaxed">A tyre technician will come to you, with all the tools necessary to get the job done. Unlike traditional garages, you won't need to hang about in a garage or arrange for transportation.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">Step 3</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Tyre Inspection</h4>
              <p className="text-sm text-slate-600 m-0 leading-relaxed">The tech will check the condition of your tires, puncture site, extent of damage, and general safety. They will tell you if your tyre can be repaired or if you need a replacement.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <span className="text-3xl font-black text-[#FB7E10]">Step 4</span>
              <h4 className="font-bold text-[#0B1528] mt-2 mb-1">Change or Repair Tire</h4>
              <p className="text-sm text-slate-600 m-0 leading-relaxed">If we need to replace it we can fit a new tyre on site. Here’s where <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre replacement</Link> saves precious time for drivers.</p>
            </div>
          </div>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            <strong>Final Safety Checks:</strong> Prior to completing the service, the technician will inspect proper tire fitment, tire inflation, wheel balancing, and overall safety. This will ensure your car is ready for the rest of your trip.
          </p>

          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/24-hour-mobile-tyre-fitting-images/24-hour-tyre-fitting-process.png"
              alt="24 Hour Mobile Tyre Fitting Process"
              className="w-full h-auto"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              Our professional technicians bring the tyre fitting process to you, any time of day or night.
            </figcaption>
          </figure>

          {/* Section 4 */}
          <h2 id="benefits" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Benefits of 24 Hour Tyre Fitting On The Go</h2>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Convenience Without Going To The Garage</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Convenience is everything. You do not have to drive on a flat tire, loaf in a garage reception area, alter your schedule, or organize your journey. This service is delivered direct to you.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Improved compared to standard solutions</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Standard tyre replacement may include booking appointments, waiting for availability to be confirmed, and visiting the repair shop. Many of these delays can be alleviated by mobile tyre fitting. <Link href="/contact" className="text-[#FB7E10] font-bold hover:underline">Same day tyre fitting</Link> can get drivers back on the road much quicker if you are in a hurry.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Safer roadside assistance</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Driving with a damaged tire increases your risk. The only safe way to fix the problem is with professional roadside tyre fitting using specialist equipment and trained technicians.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">When it matters</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Car trouble doesn’t keep regular hours. 24 hour tyre assistance gives you peace of mind whether it’s midnight, early morning or weekend.
          </p>

          <figure className="my-10 rounded-2xl overflow-hidden border border-slate-100 shadow-sm">
            <img
              src="/blogs-images/24-hour-mobile-tyre-fitting-images/24-hour-tyre-replacement-benefits.png"
              alt="Benefits of 24 Hour Tyre Replacement"
              className="w-full h-auto"
            />
            <figcaption className="bg-slate-50 px-5 py-3 text-sm text-slate-500 text-center leading-relaxed">
              Experience the benefits of fast, reliable, and convenient mobile tyre replacement services.
            </figcaption>
          </figure>

          {/* Section 5 */}
          <h2 id="cost" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Is mobile tyre fitting 24 hour expensive?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Many drivers find emergency tyre services very expensive. The price, however, depends upon the type of vehicle, type of tyre, type of repair, and time of service.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            But when thinking about cost, drivers should also think about the value of preventing repair costs, saving time, preventing further damage to the vehicle, and getting professional help immediately. Getting your tyres fitted on a mobile service is very convenient for drivers and is well worth considering.
          </p>

          {/* Section 6 */}
          <h2 id="vs-garage" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">24 Hour Mobile Tyre Fitting & Garage Service</h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Traditional Garage</h3>
          <p className="mb-2 font-bold text-[#0B1528] text-lg">Benefits:</p>
          <ul className="list-disc pl-6 space-y-2 mb-4 text-slate-600 text-base md:text-[17px]">
            <li>Tyres in stock</li>
            <li>Workshop facilities</li>
            <li>Appointments arranged</li>
          </ul>
          <p className="mb-2 font-bold text-[#0B1528] text-lg">Problems:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600 text-base md:text-[17px]">
            <li>Need to go to the garage</li>
            <li>Waiting time</li>
            <li>Closing early</li>
          </ul>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Mounting of Tires for Mobile</h3>
          <p className="mb-2 font-bold text-[#0B1528] text-lg">Benefits:</p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600 text-base md:text-[17px]">
            <li>Comes to you</li>
            <li>Flexible appointments</li>
            <li>On call availability</li>
            <li>Saves time</li>
            <li>For use in roadside situations</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre fitting is a modern alternative for the convenience seeking driver.
          </p>

          {/* Section 7 */}
          <h2 id="when-to-book" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">When to book a mobile tyre replacement?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            When should I consider changing my mobile tyres?
          </p>
          <ul className="list-disc pl-6 space-y-3 my-6 text-slate-600 text-base md:text-[17px]">
            <li>Your tire is badly damaged</li>
            <li>The tread depth is below the legal limit</li>
            <li>The tyre is not safe to repair</li>
            <li>You have more than one piercing</li>
            <li>Sidewall of your tire is damaged</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A pro tech can look at it and let you know what it’s like and what’s the safest option.
          </p>

          {/* FAQs Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-16 mb-8 scroll-mt-28 flex items-center gap-2 border-t border-slate-100 pt-8">
            <HelpCircle className="text-[#FB7E10]" size={28} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Are you a 24 hour mobile tyre fitter 7 days a week?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Most providers have support available 24/7 even on weekends and off business hours.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can I have a mobile tyre fitting service at my home?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes, we can fit tyres to your car at your home, work or other safe location.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Would you do me a favour and change a wheel on the side of the road?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Roadside tyre fitting services are emergency services for drivers who cannot continue their journey safely.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How long does it take to fit a tyre on a vehicle?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">The time taken will depend on the vehicle and the tyre requirement but once the technician has arrived many standard replacements can be done quickly.</p>
            </div>
          </div>

          {/* Summary Section */}
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">Summary</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A flat tyre can happen at any time, but help doesn't have to be stressful. <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">Mobile tyre fitting service 24 hours</Link> for UK drivers that can count on professional tyre support when it is needed. If you need a tyre fitted urgently or you break down on the side of the road, mobile tyre specialists offer a quicker and easier alternative to visiting a traditional garage.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A puncture, blowout or damaged tyre can leave you stranded, but by opting for a trusted mobile tyre fitting company you can be safely back on the road with minimum disruption.
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
