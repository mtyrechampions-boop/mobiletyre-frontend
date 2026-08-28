import React from 'react';

const Features = () => {
  const brandLogos = [
    // Ford
    { src: "/images/car-logos/ford.svg", name: "Ford" },
    // Volkswagen
    { src: "/images/car-logos/volkswagen.svg", name: "Volkswagen" },
    // Toyota
    { src: "/images/car-logos/toyota.svg", name: "Toyota" },
    // Renault
    { src: "/images/car-logos/renault.svg", name: "Renault" },
    // Peugeot
    { src: "/images/car-logos/peugeot.svg", name: "Peugeot" },
    // Skoda
    { src: "/images/car-logos/skoda.svg", name: "Skoda" },
    // SEAT
    { src: "/images/car-logos/seat.svg", name: "SEAT" },
    // --- Premium Brands ---
    // BMW
    { src: "/images/car-logos/bmw.svg", name: "BMW" },
    // Mercedes-Benz
    { src: "/images/car-logos/mercedes.svg", name: "Mercedes-Benz" },
    // Porsche
    { src: "/images/porsche.png", name: "Porsche" },
    // Lexus
    { src: "/images/car-logos/lexus.svg", name: "Lexus" },
    // --- Luxury Brands ---
    // Bentley
    { src: "/images/car-logos/bentley.svg", name: "Bentley" },
    // Rolls-Royce
    { src: "/images/car-logos/rolls-royce.svg", name: "Rolls-Royce" },
    // Jaguar
    { src: "/images/car-logos/jaguar.svg", name: "Jaguar" },
    // Mini
    { src: "/images/car-logos/mini.svg", name: "Mini" },
    // Aston Martin
    { src: "/images/car-logos/aston-martin.svg", name: "Aston Martin" },
  ];

  return (
    <div className="bg-[#f8fafc] py-8 xs:py-10 sm:py-12 md:py-5 lg:py-10 px-4 sm:px-10 lg:px-20 overflow-hidden relative border-y border-slate-100/50">
      {/* Dynamic Background Texture */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none z-0" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>

      {/* Premium Brands Trust Section */}
      <div className="relative z-10 w-full mb-4 md:mb-6">
        <div className="flex flex-col items-center justify-center mb-8 text-center">
          <div className="inline-flex items-center gap-2.5 bg-white border border-slate-200/60 px-4 py-1.5 rounded-full mb-6 shadow-[0_2px_10px_-3px_rgba(0,0,0,0.05)]">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
            </span>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">Official Partners</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 leading-[0.9] mb-4">
            Trusted by the <span className="text-[#FB7E10]">Best in Motion</span>
          </h2>
         
          <p className="text-slate-400 text-xs md:text-sm font-bold uppercase tracking-widest max-w-lg">
            We stock and fit tyres from the brands UK drivers trust — Bridgestone, Goodyear, Continental and more.
           </p>
        </div>

        {/* The Marquee Track */}
        <div className="relative group max-w-[1400px] mx-auto">
          {/* Solid Container for Marquee - Highlighted orange track */}
          <div className="absolute inset-x-[-100vw] inset-y-0 bg-[#FB7E10] z-0"></div>

          {/* Scrolling edges fade */}
          <div className="absolute inset-y-0 left-0 w-32 md:w-80 bg-gradient-to-r from-[#FB7E10] via-[#FB7E10]/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-32 md:w-80 bg-gradient-to-l from-[#FB7E10] via-[#FB7E10]/80 to-transparent z-10 pointer-events-none"></div>

          {/* Single Row: Forward Motion */}
          <div className="flex w-max animate-marquee-slow items-center py-6 relative z-10">
            {[...brandLogos, ...brandLogos].map((logo, i) => (
              <div
                key={`r1-${i}`}
                className="mx-4 md:mx-6 flex flex-col items-center justify-center bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-white hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-1 w-28 h-24 md:w-40 md:h-36 flex-shrink-0"
              >
                <div className="h-10 md:h-14 flex items-center justify-center w-full px-4">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className={`max-h-full max-w-full object-contain transition-all duration-500 hover:scale-110 ${logo.name?.includes('Kia') ? 'brightness-0' : ''}`}
                  />
                </div>
                <span className="mt-2 text-[9px] md:text-[10px] font-black uppercase tracking-widest text-slate-400 whitespace-nowrap">{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className="mb-10 md:mb-16 text-center md:text-left flex flex-col items-center md:items-start group">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight leading-tight text-black max-w-xl">
          Precision Engineering.<br className="hidden sm:block" />Roadside Reality.
        </h2>
        <p className="mt-4 text-slate-500 text-sm md:text-lg font-bold max-w-2xl leading-relaxed">
          Great tyres, fitted by people who know what they're doing, wherever you happen to be.
        </p>
      </div>

      {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {/* Card 1: Ultra-Rapid Deployment (Span 2) */}
          <div className="bg-[#1c3b7f] rounded-2xl md:rounded-3xl p-6 relative overflow-hidden group hover:shadow-lg transition-all h-full">
          <div className="absolute right-0 bottom-0 pointer-events-none opacity-5 translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-96 h-96 text-white">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
            </svg>
          </div>

          <div className="relative z-10">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-8 border border-blue-400">
              <svg className="w-6 h-6 text-[#1c3b7f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 12L16 10" />
                <path d="M12 7V12" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold tracking-tight mb-4 text-white">Ultra-Rapid Deployment</h3>
            <p className="text-white/90 font-medium leading-relaxed max-w-md">
             When you're stuck, every minute counts. We keep technicians spread across Surrey and Hampshire so we reach you fast — and we give you a realistic arrival time and stick to it.   </p>
          </div>
        </div>

        {/* Card 2: Expertise Guaranteed */}
          <div className="bg-[#0B1528] rounded-2xl md:rounded-3xl p-6 text-white hover:shadow-xl transition-all h-full">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white/10 rounded-xl flex items-center justify-center mb-6 md:mb-8">
            <svg className="w-6 h-6 text-[#1c3b7f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 15L15 21L21 21L18 15" />
              <path d="M9 15L6 21L0 21L3 15" />
              <circle cx="12" cy="9" r="6" />
              <path d="M12 6L12 12" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold tracking-tight mb-4">Expertise Guaranteed</h3>
          <p className="text-gray-400 font-medium leading-relaxed mb-10">
            Cars, SUVs, vans, 4x4s — our trained technicians handle them all. You get main-dealer quality without ever having to leave your home or the roadside.  </p>
          
        </div>

        {/* Card 3: 24/7 Kinetic Support */}
          <div className="bg-[#1c3b7f] rounded-2xl md:rounded-3xl p-6 hover:shadow-lg transition-all h-full">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 md:mb-8 border border-blue-400">
            <svg className="w-6 h-6 text-[#1c3b7f]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <circle cx="12" cy="12" r="10" />
              <path d="M12 6V12L16 14" />
            </svg>
          </div>
          <h3 className="text-2xl font-black uppercase tracking-tight mb-4 text-white">24/7 Kinetic Support</h3>
          <p className="text-white/90 font-medium leading-relaxed">
            You'll speak to a real person who gives you a straight answer — no jargon, no upselling, just honest advice about what your tyres need and what it'll cost.  </p>
        </div>

      </div>
    </div>
  );
};

export default Features;






