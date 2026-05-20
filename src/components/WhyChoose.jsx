import React from 'react';
import { Clock, Zap, Wrench, DollarSign, Star } from 'lucide-react';

const cards = [
  {
    icon: <Zap className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Fast Response Times',
    desc: "We understand that a tyre problem doesn't wait for a convenient moment. Our technicians are dispatched quickly and aim to reach you within the hour for emergency call-outs.",
  },
  {
    icon: <Clock className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Available 24/7',
    desc: "Tyre emergencies don't follow business hours. Neither do we. Our service is available around the clock, every day of the year, including bank holidays.",
  },
  {
    icon: <Wrench className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Fully Equipped Mobile Vans',
    desc: "Every van in our fleet carries professional tyre fitting and balancing equipment. We don't just swap tyres — we do the job properly, with calibrated tools and manufacturer-specified torque settings.",
  },
  {
    icon: <DollarSign className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Transparent Pricing',
    desc: "You'll know exactly what you're paying before we arrive. No surprise charges, no upselling. Just honest pricing for a job done right.",
  },
  {
    icon: <Star className="w-6 h-6 text-[#FB7E10]" />,
    title: 'Premium & Budget Tyres',
    desc: "We carry tyres from the UK's most trusted brands alongside reliable budget options for those watching the pennies.",
  },
];

const WhyChoose = () => {
  return (
    <section className="bg-white px-4 sm:px-10 lg:px-20 py-10 md:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-black">Why Choose Mobile Tyre Champions?</h2>
          <p className="text-gray-600 mt-3 max-w-2xl">Fast response, honest pricing and fully equipped mobile vans — everything you need to be back on the road quickly and safely.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, i) => (
            <div key={i} className="rounded-2xl p-6 md:p-8 bg-white border border-gray-100 shadow-sm hover:shadow-lg transition-all h-full">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-[#FB7E10]/10 border border-[#FB7E10]/20">
                  {c.icon}
                </div>
                <div>
                  <h3 className="text-lg font-black mb-2">{c.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
