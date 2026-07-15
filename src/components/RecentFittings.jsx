import React from 'react';
import Link from 'next/link';

const RecentFittings = () => {
  const fittings = [
    {
      src: "/recent-fittings/porsche-mobile-tyre-champions.webp",
      alt: "Porsche undergoing on-site tyre replacement by Mobile Tyre Champions",
      url: "/booking"
    },
    {
      src: "/recent-fittings/porsche-mtc.webp",
      alt: "Porsche receiving professional mobile tyre fitting service",
      url: "/booking"
    },
    {
      src: "/recent-fittings/premium-car-service-mobile-tyre-champions.webp",
      alt: "Premium car service by Mobile Tyre Champions on-site",
      url: "/booking"
    },
    {
      src: "/recent-fittings/premium-tyre-service-mobile-tyre-champions.webp",
      alt: "Premium tyre replacement service in progress",
      url: "/booking"
    },
    {
      src: "/recent-fittings/range-rover-mobile-tyre-champions.webp",
      alt: "Range Rover receiving specialized mobile tyre fitting",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-1.webp",
      alt: "Mobile tyre fitting service van replacing a car tyre on-site",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-2.webp",
      alt: "Professional technician fitting a new tyre to a passenger vehicle",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-3.webp",
      alt: "Close-up of a new tyre mounted on an alloy wheel by Mobile Tyre Champions",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-4.webp",
      alt: "On-site tyre replacement process using state-of-the-art mobile tools",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-5.webp",
      alt: "Mobile tyre replacement for a vehicle parked in a residential driveway",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-6.webp",
      alt: "Emergency mobile tyre fitting roadside assistance vehicle in the UK",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-7.webp",
      alt: "Technician performing precision wheel balancing on a newly fitted tyre",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-8.webp",
      alt: "High-quality new tyres ready to be fitted to a customer car on-site",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-9.webp",
      alt: "Qualified mobile tyre specialist inspecting a car wheel before fitting",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-10.webp",
      alt: "Same-day mobile tyre replacement and valve check in action",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-11.webp",
      alt: "Alloy wheel with brand new tyre fitted and balanced by mobile service",
      url: "/booking"
    },
    {
      src: "/recent-fittings/mobile-tyre-fitting-recent-12.webp",
      alt: "Mobile Tyre Champions service van responding to an emergency call",
      url: "/booking"
    }
  ];

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 text-center">
          <p className="text-[#FB7E10] font-bold uppercase tracking-widest text-sm mb-2">
            — Recent Fittings —
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
            See Our <span className="text-[#FB7E10]">Latest Work</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {fittings.map((item, index) => (
            <Link 
              key={index} 
              href={item.url}
              className="group aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative block"
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-[#0B1528]/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                <span className="bg-[#FB7E10] text-white text-xs font-black uppercase tracking-wider px-4 py-2 rounded-xl shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  Book Fitting
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentFittings;
