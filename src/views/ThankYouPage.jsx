'use client';

import React from 'react';
import Link from 'next/link';
import { CheckCircle, Phone, Home, Clock } from 'lucide-react';

const ThankYouPage = () => {
  return (
    <div className="bg-white min-h-screen pt-16 md:pt-24 pb-16 font-['Outfit']">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="bg-slate-50 rounded-[2rem] md:rounded-[3rem] border border-gray-100 shadow-xl p-8 md:p-16 text-center space-y-8">
          <div className="w-20 h-20 md:w-24 md:h-24 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto animate-bounce">
            <CheckCircle size={48} className="md:w-14 md:h-14" />
          </div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tight leading-tight">
              Thank <span className="text-[#FB7E10]">You!</span>
            </h1>
            <p className="text-gray-600 font-medium text-base md:text-lg max-w-xl mx-auto leading-relaxed">
              Your request has been received successfully. A member of our team will
              call you shortly to confirm the details of your service.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3 bg-orange-50 border border-orange-100 rounded-2xl px-6 py-4 max-w-md mx-auto">
            <Clock size={20} className="text-[#FB7E10] shrink-0" />
            <p className="text-sm font-bold text-gray-700 text-left">
              Typical response time: <span className="text-black">under 5 minutes</span> during working hours.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:02071013856"
              className="w-full sm:w-auto bg-[#FB7E10] hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <Phone size={18} fill="currentColor" />
              Call Us Now
            </a>
            <Link
              href="/"
              className="w-full sm:w-auto bg-[#0B1528] hover:bg-slate-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest transition-all active:scale-[0.98] flex items-center justify-center gap-3"
            >
              <Home size={18} />
              Back to Homepage
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYouPage;
