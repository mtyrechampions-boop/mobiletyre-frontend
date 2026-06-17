import React from 'react';

const RecentFittings = () => {
  const images = [
    "/recent fitings/1.webp",
    "/recent fitings/2.webp",
    "/recent fitings/3.webp",
    "/recent fitings/4.webp",
    "/recent fitings/5.webp",
    "/recent fitings/6.webp",
    "/recent fitings/7.webp",
    "/recent fitings/8.webp",
    "/recent fitings/9.webp",
    "/recent fitings/10.webp",
    "/recent fitings/11.webp",
    "/recent fitings/12.webp",
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
          {images.map((src, index) => (
            <div 
              key={index} 
              className="group aspect-[4/3] rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 relative"
            >
              <img
                src={src}
                alt={`Recent Fitting ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RecentFittings;
