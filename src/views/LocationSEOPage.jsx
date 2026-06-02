"use client";

import React from 'react';
import Link from 'next/link';
import { Phone, Shield, Clock, Zap, CheckCircle } from 'lucide-react';
import { locationSeoData } from '@/data/locationSeoData';

const LocationSEOPage = ({ location }) => {
    // Get unique data or use a fallback if somehow an unknown slug is accessed
    const normalizedLoc = location.toLowerCase();
    const data = locationSeoData[normalizedLoc] || {
        heroTitle: `24/7 Mobile Tyre Fitting in ${location}`,
        heroSubtitle: `Rapid roadside tyre replacement across ${location}. Our local technicians aim to reach you in 30-60 minutes.`,
        ctaText: "Book Local Fitter",
        trustIndicators: [
            { title: "Local Fleet", desc: `Based across ${location}` },
            { title: "Fast Response", desc: "Rapid dispatch" },
            { title: "Fully Equipped", desc: "All tyre sizes carried" }
        ],
        uniqueContent: {
            heading: `Why ${location} Drivers Choose Us`,
            paragraph1: `Navigating ${location} means tyre trouble can strike anywhere. Our dedicated mobile tyre fitting units are strategically stationed to guarantee the fastest possible dispatch.`,
            paragraph2: "We specialize in emergency puncture repairs, locking wheel nut removal, and complete mobile tyre replacements. Skip the garage wait times and let our local experts bring the tyre shop directly to your driveway, workplace, or roadside location."
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Unique SEO Hero Section */}
            <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 border-b border-gray-200 z-10 overflow-hidden shadow-sm bg-[#0B1528] text-white">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/mobile-tyre-champions-van1.webp"
                        alt={data.heroTitle}
                        className="w-full h-full object-cover opacity-20"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0B1528]/80 to-[#0B1528]"></div>
                </div>

                <div className="max-w-7xl mx-auto text-center space-y-8 relative z-10">
                    <div className="inline-flex items-center gap-2.5 bg-orange-500/10 border border-orange-500/20 px-4 py-2 rounded-xl shadow-sm backdrop-blur-sm">
                        <span className="text-[#FB7E10] font-black uppercase text-[10px] tracking-widest animate-pulse">24/7 {location} Coverage</span>
                    </div>
                    
                    <h1 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-tight">
                        {data.heroTitle}
                    </h1>
                    
                    <p className="text-gray-300 text-lg md:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                        {data.heroSubtitle}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
                        <a
                            href="tel:02071013856"
                            className="inline-flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-orange-600 transition-all shadow-lg active:scale-95"
                        >
                            <Phone size={18} /> {data.ctaText}
                        </a>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-3 bg-white text-[#0B1528] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-gray-100 transition-all shadow-lg active:scale-95"
                        >
                            Book Online
                        </Link>
                    </div>
                </div>
            </section>

            {/* Unique Trust Indicators */}
            <section className="bg-white py-12 border-b border-gray-100 px-6">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                    {data.trustIndicators.map((indicator, index) => {
                        const icons = [<Zap size={24} />, <Clock size={24} />, <Shield size={24} />];
                        const colors = ["bg-orange-50 text-[#FB7E10]", "bg-blue-50 text-blue-600", "bg-green-50 text-green-600"];
                        return (
                            <div key={index} className="flex items-center justify-center gap-4 group">
                                <div className={`w-12 h-12 rounded-full ${colors[index]} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                    {icons[index]}
                                </div>
                                <div className="text-left">
                                    <h4 className="font-black uppercase text-black text-sm">{indicator.title}</h4>
                                    <p className="text-gray-500 text-xs font-medium">{indicator.desc}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>

            {/* Unique Content Section to satisfy SEO without reusing Homepage components */}
            <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-orange-100/30 rounded-full blur-[100px] -mr-64 -mt-64"></div>
                
                <div className="max-w-4xl mx-auto relative z-10 text-center space-y-8">
                    <h2 className="text-3xl md:text-5xl font-black uppercase text-black tracking-tight">
                        {data.uniqueContent.heading}
                    </h2>
                    
                    <div className="space-y-6 text-gray-600 font-medium text-lg md:text-xl leading-relaxed text-left bg-white p-8 md:p-12 rounded-[2rem] shadow-xl border border-gray-100">
                        <p>{data.uniqueContent.paragraph1}</p>
                        <div className="w-16 h-1 bg-[#FB7E10] rounded-full mx-auto my-6"></div>
                        <p>{data.uniqueContent.paragraph2}</p>
                        
                        <div className="mt-8 pt-8 border-t border-gray-100">
                            <h4 className="text-xl font-bold text-black mb-4">Our Local Services:</h4>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {['Emergency Tyre Replacement', 'Mobile Puncture Repair', 'Locking Wheel Nut Removal', 'Wheel Balancing'].map(service => (
                                    <li key={service} className="flex items-center gap-3 text-sm text-gray-700">
                                        <CheckCircle size={18} className="text-green-500 flex-shrink-0" />
                                        {service}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bespoke Local CTA to replace shared component */}
            <section className="py-24 px-6 bg-[#0B1528] text-center border-t border-white/5">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">
                        READY FOR <span className="text-[#FB7E10]">DISPATCH?</span>
                    </h2>
                    <p className="text-gray-400 text-lg">
                        Don't let a flat tyre ruin your day. Call our direct dispatch line now for immediate assistance.
                    </p>
                    <a
                        href="tel:02071013856"
                        className="inline-flex items-center justify-center gap-3 bg-[#FB7E10] text-white px-10 py-5 rounded-2xl font-black uppercase tracking-widest text-lg hover:bg-orange-600 transition-all shadow-xl shadow-orange-900/30 active:scale-95"
                    >
                        <Phone size={22} fill="white" /> 0207 101 3856
                    </a>
                </div>
            </section>
        </div>
    );
};

export default LocationSEOPage;
