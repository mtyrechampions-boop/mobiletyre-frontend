import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2, User, HelpCircle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'Mobile Tyre Fitting – How Long Does It Take? 2026 UK Guide',
  description: 'How long does it take to fit tyres on a mobile basis? What makes the fitting process faster? Why are UK drivers opting for mobile tyre services to replace their tyres faster',
};

// FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does a mobile tyre change take?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Standard appointments usually take between 30 to 90 minutes, depending on the car and number of tyres."
      }
    },
    {
      "@type": "Question",
      "name": "Can I have tyres fitted at home?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. One of the biggest benefits of mobile tyre services is fitting tyres at home."
      }
    },
    {
      "@type": "Question",
      "name": "Can I get my tyres fitted at work on a mobile?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Many drivers opt for workplace tyre fitting because it saves time."
      }
    },
    {
      "@type": "Question",
      "name": "Can you fit tyres on the same day?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes if available and depending on location."
      }
    },
    {
      "@type": "Question",
      "name": "Is mobile tyre fitting safe?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Mobile tyre technicians have specialist equipment and procedures for safety."
      }
    }
  ]
};

export default function BlogPostMobileTyreFittingTime() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-32 pb-24 px-4 relative overflow-hidden">
        {/* Banner image with full opacity to prevent the blue background from bleeding through */}
        <div className="absolute inset-0 bg-[url('/blogs-images/how-long-does-mobile-tyre-fitting-take-banner.png')] bg-cover bg-center opacity-100"></div>
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
            <div className="flex items-center gap-1.5"><Calendar size={14} className="text-[#FB7E10]" /> July 8, 2026</div>
            <span className="w-1.5 h-1.5 rounded-full bg-white/20 hidden sm:inline-block"></span>
            <div className="flex items-center gap-1.5"><Clock size={14} className="text-[#FB7E10]" /> 5 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-white leading-tight mb-0 tracking-tight drop-shadow-md">
            How Long Does a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FB7E10] to-[#ffaa55]">Mobile Tyre Fitting Take?</span> <br className="hidden md:inline" />The Complete Guide For UK Drivers
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
            <a href="#average-time" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Average Fitting Time
            </a>
            <a href="#what-to-expect" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              What to Expect
            </a>
            <a href="#influencing-factors" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Influencing Factors
            </a>
            <a href="#saving-time" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Mobile vs Garage
            </a>
            <a href="#same-day-service" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Same Day Tyre Fitting
            </a>
            <a href="#emergency-timescale" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Emergency Mobile Timescale
            </a>
            <a href="#where-fitting" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Where Can Tyres Be Fitted?
            </a>
            <a href="#why-opt" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              Why Choose Mobile Fitting?
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
            One of the first questions most drivers will ask when it comes to getting new tyres for their vehicle is: <strong>"How long does it take to fit a tyre on a mobile?"</strong>
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The time factor is of utmost significance in choosing a tyre service. People don't have hours to hang around a garage, particularly if they've got work or family commitments or an important trip planned.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Here, <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre fitting UK</Link> provides a convenient alternative. Rather than taking your vehicle to a tyre centre, a professional tyre technician will come to you and complete the work at a time that suits you.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Whether you require a single <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">mobile tyre replacement</Link>, an entire set of tyres, or you’re in need of urgent assistance, mobile tyre fitting will assist you to save valuable time and get professional service.
          </p>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            In this guide we’ll cover how long mobile tyre fitting typically takes, what affects fitting time, and why more UK drivers are opting for mobile tyre services.
          </p>

          {/* Section 1 */}
          <h2 id="average-time" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Mobile Tyre Fitting Average Time</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            In most cases, a standard mobile tyre fitting appointment will take about:
          </p>
          <ul className="list-none pl-0 space-y-3.5 my-6">
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>30–60 minutes</strong> for 1 or 2 tyres</span>
            </li>
            <li className="flex items-start gap-3 text-slate-600 text-base md:text-[17px]">
              <CheckCircle2 className="text-[#FB7E10] mt-1 flex-shrink-0" size={18} />
              <span><strong>60–90 minutes</strong> for multiple tyre replacement</span>
            </li>
          </ul>

          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            It depends on a number of factors, including the tyre fitted count, the type of vehicle, the condition of the tyre, wheelchair accessibility, and any additional services required. A professional mobile tyre fitter will always try to get the job done fast and safely fitting the tyres.
          </p>

          <div className="my-8">
            <img
              src="/blogs-images/How long does it take for mobile tyre fitting Full Guide For Drivers In The UK/mobile-tyre-fitting-van-uk-service.webp"
              alt="Mobile Tyre Champions fully equipped service van ready for 24/7 mobile tyre fitting in the UK"
              className="w-full rounded-2xl shadow-md"
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              A fully equipped Mobile Tyre Champions van arrives at your location with all the tools needed for professional tyre fitting.
            </p>
          </div>

          {/* Section 2 */}
          <h2 id="what-to-expect" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What To Expect At Your Mobile Tyre Fitting Appointment?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Understanding the process can help to explain why mobile tyre fitting is usually quick and efficient.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 1: Your Doorstep Technology</h3>
          <p className="mb-4 text-slate-600 leading-relaxed text-base md:text-lg">
            The technician will arrive at your preferred location:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600 text-base md:text-[17px]">
            <li>Home</li>
            <li>Office / Workplace</li>
            <li>Driveway</li>
            <li>Parking lot</li>
            <li>Secure roadside placement</li>
          </ul>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            All the tools needed to complete the fitting are carried on a fully equipped mobile tyre vehicle.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 2: Check the Tyres</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Before starting the fit, the technician checks the state of the tyres, wheel condition, right tyre size, and any potential safety issues to make sure you receive the right tyre solution.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 3: Remove the Old Tyres</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Professional equipment is used to carefully remove the damaged or worn tyre from the wheel rim without causing any damage.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 4: Installing New Tyres</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            The replacement tyre is fitted and inspected. This includes proper fitting, tyre pressure correction, and inspection for safety.
          </p>

          <div className="my-8">
            <img
              src="/blogs-images/How long does it take for mobile tyre fitting Full Guide For Drivers In The UK/mobile-tyre-technician-fitting-tyre.webp"
              alt="Mobile tyre technician in high-visibility vest fitting a new tyre on a jacked-up car"
              className="w-full rounded-2xl shadow-md"
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              A qualified mobile tyre technician carefully fitting a replacement tyre at your chosen location.
            </p>
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Step 5: Wheel Balancing and Final Checks</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Wheel balancing helps make sure driving is easy, vibration is reduced, and tyre wear is kept to a minimum. When this is completed, your vehicle is safe to continue.
          </p>

          {/* Section 3 */}
          <h2 id="influencing-factors" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What Can Influence the Time for Mobile Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Most appointments are handled quickly, but some things can take a little longer.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Number of Tyres Changed</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Obviously changing one tyre is quicker than changing all four. For instance, a single tyre change takes less time than a lengthier four-tyre change appointment.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Vehicle Type</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Different vehicles require different lengths of time. Fitting times may be quicker for small cars, while SUVs might require bigger tyres and additional checks, and commercial vans may require specialist tyre handling.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Tyres Available</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If you require a specific tyre brand, size, or specification, tyre availability may affect how quickly the service can be completed. Booking in advance will help ensure the correct tyre is ready.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Additional Services</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Other work such as inspection of punctures, balancing wheels, valve substitution, and general tyre checks may add extra time to the appointment.
          </p>

          {/* Section 4 */}
          <h2 id="saving-time" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">How Mobile Tyre Fitting Saves Time Compared To a Garage</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            When you go to the garage, the actual time taken is more than just the fitting process. You have to consider the time spent driving to the garage, waiting for your appointment, waiting for your car to be ready, and returning back. A garage tyre fitting appointment can easily take up a few hours of your day.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Mobile tyre fitting means we come to you. You can go about your normal business at home or in the office while your tyres are changed.
          </p>

          {/* Section 5 */}
          <h2 id="same-day-service" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Can I Have Same Day Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Yes, many mobile tyre services offer <Link href="/booking" className="text-[#FB7E10] font-bold hover:underline">same day tyre fitting</Link> depending on where you live, the availability of tyres, and the availability of technicians.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Same-day service is particularly useful when your tyre is suddenly damaged, you have a long journey ahead of you, or your vehicle cannot continue safely. It's a quicker solution than waiting days for an appointment at a garage.
          </p>

          {/* Section 6 */}
          <h2 id="emergency-timescale" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">What is the Timescale for an Emergency Mobile Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Crisis situations are a little different. If you have a blown tyre, a tyre blowout, or tyre damage on the roadside, the total time is a function of where you are located, the current traffic situation, technician availability, and the compulsory tyre size.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            An emergency <Link href="/services/emergency-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">roadside tyre fitting</Link> gets you back on the road safely and as quickly as possible.
          </p>

          <div className="my-8">
            <img
              src="/blogs-images/How long does it take for mobile tyre fitting Full Guide For Drivers In The UK/wheel-bolt-tightening-tyre-fitting.webp"
              alt="Close-up of a technician tightening wheel bolts during professional mobile tyre fitting"
              className="w-full rounded-2xl shadow-md"
            />
            <p className="text-xs text-slate-400 mt-2 text-center italic">
              Precision wheel bolt tightening ensures your new tyre is securely fitted and safe for the road.
            </p>
          </div>

          {/* Section 7 */}
          <h2 id="where-fitting" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Where Can I Get a Mobile Tyre Fitting?</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            One of the great things about mobile tyre fitting UK services is the flexibility. Tyres can often be fitted at:
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Home</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            A driver favourite for those who like convenience and comfort.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Workplace</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            Many professionals prefer to choose workplace tyre fitting to avoid disturbing their busy schedule.
          </p>

          <h3 className="text-xl md:text-2xl font-bold text-[#0B1528] mt-8 mb-4">Roadside</h3>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If you have a problem with your tyre, roadside tyre fitting can help you get back on the road. The place should always be safe and fit for the technician to work.
          </p>

          {/* Section 8 */}
          <h2 id="why-opt" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6 scroll-mt-28">Why Opt for Mobile Tyre Fitting?</h2>
          <p className="mb-4 text-slate-600 leading-relaxed text-base md:text-lg">
            Drivers choose mobile tyre services because they provide:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-6 text-slate-600 text-base md:text-[17px]">
            <li><strong>Ease of Use:</strong> The service comes directly to you.</li>
            <li><strong>Save Time:</strong> No needless garage visits or hours of waiting.</li>
            <li><strong>Flexibility:</strong> Appointments can be scheduled at your convenience.</li>
            <li><strong>Relief from Disaster:</strong> Facing tyre trouble? Emergency services can assist.</li>
            <li><strong>Professional Service:</strong> Specialist equipment is used by qualified technicians.</li>
          </ul>

          {/* FAQs Section */}
          <h2 id="faq" className="text-2xl md:text-3xl font-black text-[#0B1528] mt-16 mb-8 scroll-mt-28 flex items-center gap-2 border-t border-slate-100 pt-8">
            <HelpCircle className="text-[#FB7E10]" size={28} />
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">How long does a mobile tyre change take?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Standard appointments usually take between 30 to 90 minutes, depending on the car and number of tyres.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can I have tyres fitted at home?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. One of the biggest benefits of mobile tyre services is fitting tyres at home.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can I get my tyres fitted at work on a mobile?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Many drivers opt for workplace tyre fitting because it saves time.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Can you fit tyres on the same day?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes if available and depending on location.</p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 shadow-sm">
              <h4 className="font-bold text-[#0B1528] text-base md:text-lg mb-2">Is mobile tyre fitting safe?</h4>
              <p className="text-sm md:text-base text-slate-600 m-0 leading-relaxed">Yes. Mobile tyre technicians have specialist equipment and procedures for safety.</p>
            </div>
          </div>

          {/* Conclusion */}
          <h2 className="text-2xl md:text-3xl font-black text-[#0B1528] mt-12 mb-6">Conclusion</h2>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            How long does a mobile tyre fitting take? For most UK drivers, the process is usually completed in about an hour depending on the service required. The biggest advantage isn't just the fitting time, but the time saved from unnecessary trips to the garage.
          </p>
          <p className="mb-6 text-slate-600 leading-relaxed text-base md:text-lg">
            If you need a routine <Link href="/services/mobile-tyre-fitting" className="text-[#FB7E10] font-bold hover:underline">tyre fitting near me</Link> option, same day tyre fitting, or urgent assistance, mobile tyre fitting offers a convenient way to keep your vehicle safe and road-ready. If you are a driver who wants a quicker and easier tyre solution, then a professional mobile tyre service can make the entire experience simple and stress-free.
          </p>

          {/* Helpful Links */}
          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="font-black text-[#0B1528] text-lg mb-4">Helpful Links</h3>
            <ul className="list-disc pl-6 space-y-2 text-slate-600 text-sm md:text-base">
              <li>
                <strong>Mobile Tyre Champions Website:</strong>{' '}
                <Link href="/" className="text-[#FB7E10] hover:underline">
                  https://www.mobiletyrechampions.com/
                </Link>
              </li>
              <li>
                <strong>Contact Mobile Tyre Champions:</strong>{' '}
                <Link href="/contact" className="text-[#FB7E10] hover:underline">
                  https://www.mobiletyrechampions.com/contact
                </Link>
              </li>
              <li>
                <strong>About Mobile Tyre Champions:</strong>{' '}
                <Link href="/about" className="text-[#FB7E10] hover:underline">
                  https://www.mobiletyrechampions.com/about
                </Link>
              </li>
            </ul>
          </div>
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
