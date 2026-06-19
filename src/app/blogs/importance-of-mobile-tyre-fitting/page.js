import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, CheckCircle2 } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'The Importance of Mobile Tyre Fitting in Emergencies | Mobile Tyre Champions',
  description: 'Discover why having a reliable mobile tyre fitting service on speed dial is crucial for unexpected roadside emergencies.',
};

export default function BlogPost1() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/emergency.webp')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FB7E10] font-bold hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-300 mb-6">
            <span className="bg-[#FB7E10] text-white px-3 py-1 rounded-full uppercase tracking-wider">Guides</span>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> June 18, 2026</div>
            <div className="flex items-center gap-1.5"><Clock size={16} /> 5 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            The Importance of Mobile Tyre Fitting in Emergencies
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-4xl">
            Discover why having a reliable mobile tyre fitting service on speed dial is crucial for unexpected roadside emergencies and how it can save you time and money.
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
            <a href="#convenience" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              1. Convenience & Time-Saving
            </a>
            <a href="#safety" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              2. Safety First
            </a>
            <a href="#comparison" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              3. Service Comparison
            </a>
            <a href="#availability" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              4. 24/7 Availability
            </a>
            <a href="#equipment" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              5. Expertise & Equipment
            </a>
          </nav>
        </aside>

        {/* Main Article Content */}
        <article className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">
          <img 
            src="/images/emergency.webp" 
            alt="Mobile tyre fitting van arriving at an emergency breakdown" 
            className="w-full h-[400px] object-cover rounded-2xl mb-10"
          />

          <p>
            Picture this: you are driving home from work, or perhaps heading out for a long-awaited weekend getaway. Suddenly, you hear that dreaded flapping sound. Your car starts to pull to one side. You've got a flat tyre. In these high-stress situations, a mobile tyre fitting service isn't just a convenience; it's a lifeline.
          </p>

          <h2 id="convenience" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">1. Unmatched Convenience and Time-Saving</h2>
          <p>
            The traditional route of dealing with a puncture involves either struggling to fit a spare wheel on the hard shoulder or waiting hours for a tow truck to take you to a local garage. With mobile tyre fitting, the garage comes to you. Whether you're stuck at home, at work, or on the roadside, expert technicians arrive fully equipped to replace or repair your tyre on the spot.
          </p>

          <h2 id="safety" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">2. Safety First</h2>
          <p>
            Changing a tyre on the side of a busy road or motorway is incredibly dangerous. According to road safety statistics, hard shoulders are high-risk environments. Mobile tyre fitters are trained to handle roadside replacements safely. Their vans are equipped with high-visibility markings and flashing beacons to alert other drivers, creating a safer environment for the repair to take place.
          </p>

          <div className="bg-orange-50 border-l-4 border-[#FB7E10] p-6 rounded-r-2xl my-8">
            <h3 className="text-xl font-bold text-[#0B1528] mb-2">Did You Know?</h3>
            <p className="text-slate-700 m-0">
              Many modern cars no longer come with a spare wheel, providing only a repair kit which is often ineffective for larger punctures or blowouts. This makes mobile tyre fitting services even more essential.
            </p>
          </div>

          <h2 id="comparison" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">3. Mobile Tyre Fitting vs. Traditional Garage</h2>
          <p>
            Here is a quick look at how calling a mobile tyre technician compares to visiting a local garage:
          </p>

          {/* Responsive Table wrapper */}
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Feature</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Mobile Tyre Fitting</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Traditional Garage</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Location</td>
                  <td className="px-6 py-4">Your home, work, or roadside</td>
                  <td className="px-6 py-4">Must travel to their physical workshop</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Towing Cost</td>
                  <td className="px-6 py-4 text-green-600 font-medium">£0 (No towing needed)</td>
                  <td className="px-6 py-4">Can cost £80 - £150+ for recovery</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Hours</td>
                  <td className="px-6 py-4">24/7 emergency dispatch</td>
                  <td className="px-6 py-4">Standard business hours only</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Waiting Time</td>
                  <td className="px-6 py-4">Usually 30-60 mins locally</td>
                  <td className="px-6 py-4">Often hours or booked days in advance</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 id="availability" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">4. 24/7 Availability</h2>
          <p>
            Emergencies don't stick to a 9-to-5 schedule. Punctures can happen in the dead of night or during a bank holiday weekend. Services like Mobile Tyre Champions operate 24/7, ensuring that no matter when disaster strikes, you won't be left stranded.
          </p>

          <h2 id="equipment" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">5. Professional Expertise and Equipment</h2>
          <p>
            Mobile tyre fitting vans are essentially garages on wheels. They carry advanced pneumatic jacks, balancing machines, and a wide range of tyre sizes. This means you aren't just getting a temporary fix; you're getting a professional, permanent replacement or repair, perfectly balanced and ready for the road.
          </p>

          <ul className="list-none pl-0 space-y-4 my-8">
            {[
              "Immediate dispatch to your location",
              "Access to premium, mid-range, and budget tyres",
              "Professional wheel balancing included",
              "Safe disposal of your old, damaged tyre"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-[#FB7E10] flex-shrink-0 mt-1" size={20} />
                <span className="text-slate-700">{item}</span>
              </li>
            ))}
          </ul>

          <h2 className="text-2xl font-black text-[#0B1528] mt-8 mb-4">Conclusion</h2>
          <p>
            Having the number of a trusted mobile tyre fitting service saved in your phone is as important as having insurance. It provides peace of mind, knowing that if the worst happens, you're only a phone call away from getting back on the road safely and swiftly.
          </p>
        </article>
      </div>
      <div className="mt-12">
        <CTA />
      </div>
    </div>
  );
}
