import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, AlertTriangle } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'What to Do When You Get a Tyre Puncture on the Highway | Mobile Tyre Champions',
  description: 'A step-by-step guide on how to safely handle a tyre blow-out or puncture while driving at high speeds on the motorway.',
};

export default function BlogPost2() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/flat-tyres.webp')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FB7E10] font-bold hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-300 mb-6">
            <span className="bg-[#FB7E10] text-white px-3 py-1 rounded-full uppercase tracking-wider">Safety</span>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> June 15, 2026</div>
            <div className="flex items-center gap-1.5"><Clock size={16} /> 4 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            What to Do When You Get a Tyre Puncture on the Highway
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-4xl">
            A step-by-step guide on how to safely handle a tyre blow-out or puncture while driving at high speeds on the motorway.
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
            <a href="#no-braking" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              1. Control & Braking
            </a>
            <a href="#move-safety" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              2. Signal & Move
            </a>
            <a href="#priority-checklist" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              3. Safety Checklist
            </a>
            <a href="#exit-vehicle" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              4. Exiting Safely
            </a>
            <a href="#professional-help" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              5. Professional Help
            </a>
          </nav>
        </aside>

        {/* Main Article Content */}
        <article className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">
          <img 
            src="/images/flat-tyres.webp" 
            alt="Safety on the highway during a breakdown" 
            className="w-full h-[400px] object-cover rounded-2xl mb-10"
          />

          <p>
            Experiencing a tyre puncture or blowout while driving at 70mph on a motorway is a terrifying experience. Your heart races, the steering wheel pulls aggressively, and panic sets in. However, knowing exactly how to react can mean the difference between a safe recovery and a serious accident.
          </p>

          <h2 id="no-braking" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">Step 1: Keep a Firm Grip and Don't Slam the Brakes</h2>
          <p>
            The instinctive reaction to a loud bang or sudden loss of control is to slam on the brakes. <strong>Do not do this.</strong> Sudden braking can cause the car to spin out of control. Instead, keep a firm grip on the steering wheel with both hands, ease your foot off the accelerator, and allow the engine to naturally slow the vehicle down.
          </p>

          <h2 id="move-safety" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">Step 2: Signal and Move to Safety</h2>
          <p>
            Once you have the vehicle under control and it has slowed down to a manageable speed, turn on your hazard lights. Check your mirrors and gently guide the car towards the hard shoulder or an emergency refuge area (ERA) if you are on a smart motorway.
          </p>

          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-2xl my-8 flex gap-4 items-start">
            <AlertTriangle className="text-red-500 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-[#0B1528] mb-2 mt-0">Smart Motorway Danger</h3>
              <p className="text-slate-700 m-0">
                If you are on a smart motorway with no hard shoulder and cannot reach an ERA, move to the leftmost lane, turn on your hazard lights, and stay in your vehicle with your seatbelt firmly fastened. Call 999 immediately.
              </p>
            </div>
          </div>

          <h2 id="priority-checklist" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">3. Highway Puncture Safety Checklist</h2>
          <p>
            Here is a priority list of actions and precautions to take immediately after stopping:
          </p>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Action</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Priority</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Safety Reason</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Turn Wheels Inwards</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-bold">CRITICAL</span></td>
                  <td className="px-6 py-4">Prevents the car from being pushed into traffic lanes if struck.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Exit via Passenger Side</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-bold">CRITICAL</span></td>
                  <td className="px-6 py-4">Keeps you away from high-speed oncoming traffic.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Stand Behind Barrier</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-bold">CRITICAL</span></td>
                  <td className="px-6 py-4">Protects you in case of a secondary collision on the shoulder.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Do Not Self-Replace</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-0.5 rounded-full font-bold">RECOMMENDED</span></td>
                  <td className="px-6 py-4">Changing a tyre on a live motorway hard shoulder is highly risky.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="exit-vehicle" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">Step 4: Exit the Vehicle Safely</h2>
          <p>
            If you have successfully stopped on a hard shoulder, turn the steering wheel so your wheels are pointing towards the verge (away from traffic). This ensures that if your car is hit from behind, it won't be pushed into the live lanes.
          </p>
          <p>
            Exit the vehicle using the passenger-side doors (the side away from moving traffic). Never attempt to exit on the driver's side if it opens directly onto a live lane. Move yourself and all passengers behind the safety barrier or up the embankment, standing well back from the road.
          </p>

          <h2 id="professional-help" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">Step 5: Call for Professional Help</h2>
          <p>
            Do not attempt to change a tyre on the hard shoulder yourself. It is incredibly dangerous. Instead, call a professional emergency mobile tyre fitting service like Mobile Tyre Champions. Our technicians are trained and equipped with the correct safety lighting and reflective gear to perform roadside repairs safely.
          </p>

          <h2 className="text-2xl font-black text-[#0B1528] mt-8 mb-4">In Summary</h2>
          <p>
            Preparation is key. Ensure your phone is always charged when travelling, and save the number for Mobile Tyre Champions (0207 101 3856) in your contacts. When a puncture happens on the highway, prioritize your personal safety above all else.
          </p>
        </article>
      </div>
      <div className="mt-12">
        <CTA />
      </div>
    </div>
  );
}
