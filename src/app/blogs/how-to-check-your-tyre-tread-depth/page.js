import Link from 'next/link';
import { Calendar, Clock, ArrowLeft, Wrench } from 'lucide-react';
import CTA from '@/components/CTA';

export const metadata = {
  title: 'How to Check Your Tyre Tread Depth at Home | Mobile Tyre Champions',
  description: 'Learn the simple 20p coin test and other easy methods to ensure your tyres are road-legal and safe before your next journey.',
};

export default function BlogPost3() {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      {/* Article Header */}
      <div className="bg-[#0B1528] pt-28 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('/images/tyre-guide.webp')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/blogs" className="inline-flex items-center gap-2 text-[#FB7E10] font-bold hover:text-white transition-colors mb-8">
            <ArrowLeft size={20} />
            Back to Blog
          </Link>
          <div className="flex items-center gap-4 text-sm font-semibold text-slate-300 mb-6">
            <span className="bg-[#FB7E10] text-white px-3 py-1 rounded-full uppercase tracking-wider">Maintenance</span>
            <div className="flex items-center gap-1.5"><Calendar size={16} /> June 10, 2026</div>
            <div className="flex items-center gap-1.5"><Clock size={16} /> 3 min read</div>
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-white leading-tight mb-6">
            How to Check Your Tyre Tread Depth at Home
          </h1>
          <p className="text-xl text-slate-300 font-medium max-w-4xl">
            Learn the simple 20p coin test and other easy methods to ensure your tyres are road-legal and safe before your next journey.
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
            <a href="#importance" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              1. Why Tread Matters
            </a>
            <a href="#tread-guide-table" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              2. Tread Depth Guide
            </a>
            <a href="#coin-test" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              3. The 20p Coin Test
            </a>
            <a href="#indicators" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              4. Wear Indicators
            </a>
            <a href="#depth-gauge" className="text-sm text-slate-600 hover:text-[#FB7E10] font-semibold transition-colors flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FB7E10]"></span>
              5. Using a Gauge
            </a>
          </nav>
        </aside>

        {/* Main Article Content */}
        <article className="lg:col-span-3 bg-white rounded-3xl p-6 md:p-12 shadow-sm border border-slate-100 prose prose-lg prose-slate max-w-none">
          <img 
            src="/images/tyre-guide.webp" 
            alt="Checking tyre tread depth" 
            className="w-full h-[400px] object-cover rounded-2xl mb-10"
          />

          <p id="importance">
            Tyre tread depth is not just about passing your MOT; it's a critical safety feature that determines your vehicle's stopping distance and its ability to grip the road, especially in wet conditions. In the UK, the legal minimum tyre tread depth is 1.6mm across the central three-quarters of the tyre. However, most experts recommend replacing tyres when they reach 3mm to maintain optimal safety.
          </p>

          <h2 id="tread-guide-table" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">2. Tyre Tread Depth Reference Table</h2>
          <p>
            Understanding tyre tread depth measurements and their safety implications:
          </p>

          {/* Responsive Table Wrapper */}
          <div className="overflow-x-auto my-8 border border-slate-100 rounded-2xl shadow-sm">
            <table className="min-w-full divide-y divide-slate-200">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Tread Depth</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FB7E10] uppercase tracking-wider">Condition Status</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Recommended Action</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-slate-100 text-sm text-slate-600">
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">8mm+</td>
                  <td className="px-6 py-4"><span className="bg-green-100 text-green-800 text-xs px-2.5 py-0.5 rounded-full font-bold">Excellent</span></td>
                  <td className="px-6 py-4">Brand new tyre depth. No action required.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">3mm - 7.9mm</td>
                  <td className="px-6 py-4"><span className="bg-blue-100 text-blue-800 text-xs px-2.5 py-0.5 rounded-full font-bold">Good / Safe</span></td>
                  <td className="px-6 py-4">Safe condition. Check monthly.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">1.6mm - 2.9mm</td>
                  <td className="px-6 py-4"><span className="bg-yellow-100 text-yellow-800 text-xs px-2.5 py-0.5 rounded-full font-bold">Warning / Borderline</span></td>
                  <td className="px-6 py-4">Stopping distance increases. Plan to replace tyres soon.</td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-semibold text-[#0B1528]">Under 1.6mm</td>
                  <td className="px-6 py-4"><span className="bg-red-100 text-red-800 text-xs px-2.5 py-0.5 rounded-full font-bold">ILLEGAL</span></td>
                  <td className="px-6 py-4 text-red-600 font-semibold">Do not drive. Replace tyres immediately to avoid fines.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            Checking your tread depth is easy and only takes a minute. Here are three simple ways to do it at home:
          </p>

          <h2 id="coin-test" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">3. The 20p Coin Test</h2>
          <p>
            This is the easiest and most common method used by UK drivers, requiring nothing more than a 20p coin.
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-8">
            <li>Take a 20p coin and insert it into the main tread grooves of your tyre.</li>
            <li>Look at the outer band of the coin.</li>
            <li>If the outer band of the 20p coin is completely hidden when inserted, your tread is above the legal limit.</li>
            <li>If you can see any part of the outer band, your tyres may be below the legal limit of 1.6mm and should be checked by a professional immediately.</li>
          </ul>
          <p>
            <strong>Pro Tip:</strong> Ensure you check the tread depth in at least three different places around the tyre, as tyres can wear unevenly.
          </p>

          <h2 id="indicators" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">4. Tyre Tread Wear Indicators</h2>
          <p>
            Most modern tyres have built-in tread wear indicators. These are small blocks of rubber moulded into the main grooves of the tyre. 
            When the surface of the tread rubber wears down to the same level as these indicators, your tyre has reached the legal limit of 1.6mm and must be replaced immediately. You can usually find where these indicators are by looking for a small arrow or triangle mark on the sidewall of the tyre.
          </p>

          <h2 id="depth-gauge" className="text-2xl font-black text-[#0B1528] mt-8 mb-4 scroll-mt-28">5. Using a Tread Depth Gauge</h2>
          <p>
            For the most accurate measurement, you can purchase a dedicated tyre tread depth gauge from most auto stores. They are inexpensive and easy to use. Simply push the probe into the groove of the tyre and press the shoulders of the gauge flat against the tread. Check the reading on the dial or digital screen.
          </p>

          <div className="bg-slate-50 border-l-4 border-slate-800 p-6 rounded-r-2xl my-8 flex gap-4 items-start">
            <Wrench className="text-slate-800 flex-shrink-0" size={28} />
            <div>
              <h3 className="text-xl font-bold text-[#0B1528] mb-2 mt-0">Don't Forget to Check for Damage</h3>
              <p className="text-slate-700 m-0">
                While checking the tread, take a moment to inspect the entire tyre for signs of uneven wear, cuts, bulges, or embedded objects like nails. If you spot any damage, call a mobile tyre fitter.
              </p>
            </div>
          </div>

          <h2 className="text-2xl font-black text-[#0B1528] mt-8 mb-4">Need New Tyres?</h2>
          <p>
            If your tyres fail the 20p test, it's time for new ones. Driving on bald tyres not only risks a £2,500 fine and 3 penalty points per tyre, but it puts your life in danger. Mobile Tyre Champions offers rapid mobile tyre fitting at your home, work, or roadside, ensuring your vehicle is safe and legal with minimal disruption to your day.
          </p>
        </article>
      </div>
      <div className="mt-12">
        <CTA />
      </div>
    </div>
  );
}
