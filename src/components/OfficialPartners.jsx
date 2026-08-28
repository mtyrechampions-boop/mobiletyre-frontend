"use client";

import React, { useEffect, useState } from 'react';

const OfficialPartners = () => {
  const brandLogos = [
    // Ford
    { src: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Ford_logo_flat.svg", name: "Ford", alt: "Ford automotive brand logo" },
    // Volkswagen
    { src: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg", name: "Volkswagen", alt: "Volkswagen automotive brand logo" },
    // Toyota
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Toyota.svg", name: "Toyota", alt: "Toyota automotive brand logo" },
    // Renault
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/49/Renault_2021.svg", name: "Renault", alt: "Renault automotive brand logo" },
    // Peugeot
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Peugeot_2021_Logo.svg", name: "Peugeot", alt: "Peugeot automotive brand logo" },
    // Skoda
    { src: "https://upload.wikimedia.org/wikipedia/commons/0/07/Skoda_Auto_logo_%282023%29.svg", name: "Skoda", alt: "Skoda automotive brand logo" },
    // SEAT
    { src: "https://upload.wikimedia.org/wikipedia/commons/f/f6/SEAT_Logo_2012.svg", name: "SEAT", alt: "SEAT automotive brand logo" },
    // BMW
    { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg", name: "BMW", alt: "BMW automotive brand logo" },
    // Mercedes-Benz
    { src: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg", name: "Mercedes-Benz", alt: "Mercedes-Benz logo" },
    // Porsche
    { src: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Porsche_logo.svg", name: "Porsche", alt: "Porsche automotive brand logo" },
    // Lexus
    { src: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Lexus_division_logo.svg", name: "Lexus", alt: "Lexus automotive brand logo" },
    // Bentley
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/10/Bentley_logo.svg", name: "Bentley", alt: "Bentley automotive brand logo" },
    // Rolls-Royce
    { src: "https://upload.wikimedia.org/wikipedia/commons/1/14/Rolls-Royce_Motor_Cars_logo.svg", name: "Rolls-Royce", alt: "Rolls-Royce luxury automotive brand logo" },
    // Jaguar
    { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Jaguar_Cars_logo.svg", name: "Jaguar", alt: "Jaguar automotive brand logo" },
    // Mini
    { src: "https://upload.wikimedia.org/wikipedia/commons/e/e9/MINI_logo.svg", name: "Mini", alt: "Mini automotive brand logo" },
    // Aston Martin
    { src: "https://upload.wikimedia.org/wikipedia/commons/c/c5/Aston_Martin_logo.svg", name: "Aston Martin", alt: "Aston Martin automotive brand logo" },
  ];

  const [logos, setLogos] = useState(brandLogos);

  useEffect(() => {
    setLogos([...brandLogos, ...brandLogos]);
  }, []);

  return (
    <div className="bg-[#f8fafc] py-12 px-4 sm:px-10 lg:px-20 overflow-hidden relative border-y border-slate-100/50">
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      <div className="relative z-10 w-full">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/60 px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 font-sans">Official Partners</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-4 font-sans uppercase">
            Trusted by the <span className="text-[#FB7E10]">Best in Motion</span>
          </h2>

          <p className="text-slate-400 text-[10px] md:text-xs font-bold uppercase tracking-widest max-w-xl font-sans">
            We stock and fit tyres from the brands UK drivers trust — Bridgestone, Goodyear, Continental and more.
          </p>
        </div>

        <div className="relative group max-w-[1400px] mx-auto overflow-hidden">
          {/* Orange track container */}
          <div className="absolute inset-x-[-100vw] inset-y-0 bg-[#FB7E10] z-0"></div>

          {/* Scrolling edges fade */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-80 bg-gradient-to-r from-[#FB7E10] via-[#FB7E10]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 md:w-80 bg-gradient-to-l from-[#FB7E10] via-[#FB7E10]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Row */}
          <div className="flex w-max animate-marquee-slow items-center py-6 relative z-10">
            {logos.map((logo, i) => (
              <div
                key={`partner-${i}`}
                className="mx-2 md:mx-6 flex flex-col items-center justify-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 w-24 h-20 md:w-40 md:h-36 flex-shrink-0"
              >
                <div className="h-10 md:h-14 flex items-center justify-center w-full px-4">
                  <img
                    src={logo.src}
                    alt={logo.alt || logo.name}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain transition-all duration-500 hover:scale-110"
                    onError={(e) => { e.currentTarget.style.opacity = '0.3'; }}
                  />
                </div>
                <span className="mt-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 font-sans whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfficialPartners;
