import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

const getIcon = (id) => {
  switch (id) {
    case 'mobile-tyre-fitting':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="8" />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="2" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="22" y2="12" />
        </svg>
      );
    case 'puncture-repair':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="3" />
          <path d="M12 2a10 10 0 0 1 0 20" strokeDasharray="3 3" />
        </svg>
      );
    case 'premium-tyre-service':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="6" />
          <circle cx="12" cy="12" r="2" />
        </svg>
      );
    case 'precision-wheel-balancing':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case 'emergency-tyre-fitting':
    case '24-7-tyre-service':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
      );
    case 'locking-wheel-nut-removal':
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
          <path d="M7 11V7a5 5 0 0110 0v4" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <circle cx="12" cy="12" r="4" />
          <line x1="12" y1="2" x2="12" y2="8" />
          <line x1="12" y1="16" x2="12" y2="22" />
          <line x1="2" y1="12" x2="8" y2="12" />
          <line x1="16" y1="12" x2="22" y2="12" />
        </svg>
      );
  }
};

const Services = () => {
  // Take a selection of 6 services for the homepage grid
  const displayedServices = servicesData.slice(0, 6);

  return (
    <section className="bg-white py-12 md:py-20 px-4 sm:px-10 lg:px-20">
      {/* Heading */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-10 md:mb-14 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-black">
            Our <span className="text-[#FB7E10]">Services</span>
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-lg font-medium max-w-2xl leading-relaxed">
            Professional mobile tyre services at your home, work or roadside — available 24/7 across London, Surrey and Hampshire.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedServices.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-100 rounded-2xl p-6 md:p-8 hover:shadow-lg hover:border-gray-200 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Icon */}
              <div>
                <div className="w-12 h-12 bg-gray-50 border border-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#FB7E10]/10 group-hover:border-[#FB7E10]/20 transition-colors duration-300">
                  <div className="text-gray-700 group-hover:text-[#FB7E10] transition-colors duration-300">
                    {getIcon(service.id)}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-bold text-black mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* CTA */}
              <Link
                href={`/services/${service.id}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-[#FB7E10] transition-colors group/link"
              >
                Learn More
                <ArrowRight size={14} className="transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          ))}
        </div>

        {/* View All Services Link */}
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#FB7E10] hover:text-orange-600 uppercase tracking-widest transition-colors"
          >
            View All Services
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
