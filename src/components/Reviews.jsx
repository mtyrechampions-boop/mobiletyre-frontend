'use client';

import React, { useState } from 'react';
import { Star } from 'lucide-react';

const dummyReviews = [
  {
    id: 1,
    name: "Stefania Tudor",
    date: "4 days ago",
    content: "Super friendly customer service and explained the condition of the rest of my tyres, very helpful. Also came super quick and got the job done efficiently. Recommend :)",
    rating: 5
  },
  {
    id: 2,
    name: "Lucille Metcalfe",
    date: "5 days ago",
    content: "Punctual, courteous service, going the extra mile to make sure I was happy with everything. Thoroughly reccomended service.",
    rating: 5
  },
  {
    id: 3,
    name: "Jbd London",
    date: "2 weeks ago",
    content: "Excellent service from the mobile tyre champion Mr Gill Arrived on time, was professional and friendly throughout, and replaced the tyre quickly with no hassle. Really convenient not having to visit a garage, and the pricing was fair too. Everything was explained clearly and the work was completed efficiently. Highly recommend for anyone needing fast and reliable tyre replacement at home or roadside.",
    rating: 5
  },
    {
    id: 4,
    name: "Sahil Kataria",
    date: "4 weeks ago",
    content: "Absolutely legends. I stuck on a roadside they came in less than 30 minutes and sort my tyre. Thanks and highly recommend",
    rating: 5
  },
  {
    id: 5,
    name: "Aradhna Sharma",
    date: "4 weeks ago",
    content: "Excellent service. Extremely happy with the service and the company. Really professional and would use again.",
    rating: 5
  },
  {
    id: 6,
    name: "Lokesh Kumar",
    date: "4 weeks ago",
    content: "I had a flat tyre on A31 and the service I received was absolutely outstanding. They came in approx 20 minutes and fix my tyre. The price was also genuine, thank you so much Gill. I highly recommend everyone",
    rating: 5
  }
];

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});

  const toggleReview = (id) => {
    setExpandedReviews(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section className="bg-slate-50 py-16 md:py-24 px-4 sm:px-10 lg:px-20 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full blur-[100px] opacity-60"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-[120px] opacity-40"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-[#FB7E10] fill-[#FB7E10]" />
            ))}
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">
            Trusted by Our Customers
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-lg font-medium">
            Don't just take our word for it. Here is what drivers across London, Surrey, and Hampshire have to say about our mobile tyre fitting service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {dummyReviews.map((review) => (
            <div 
              key={review.id} 
              className="bg-white p-6 md:p-8 rounded-2xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300 flex flex-col justify-between h-full"
            >
              <div>
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FB7E10] fill-[#FB7E10]" />
                  ))}
                </div>
                <p className={`text-slate-700 italic leading-relaxed font-medium ${expandedReviews[review.id] ? 'mb-6' : 'line-clamp-4 mb-2'}`}>
                  "{review.content}"
                </p>
                {review.content.length > 140 && !expandedReviews[review.id] && (
                  <button 
                    onClick={() => toggleReview(review.id)}
                    className="text-sm font-bold text-[#FB7E10] hover:text-orange-600 mb-6 transition-colors text-left"
                  >
                    Read full review
                  </button>
                )}
                {review.content.length > 140 && expandedReviews[review.id] && (
                  <button 
                    onClick={() => toggleReview(review.id)}
                    className="text-sm font-bold text-[#FB7E10] hover:text-orange-600 mt-2 mb-6 transition-colors text-left"
                  >
                    Show less
                  </button>
                )}
              </div>
              
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-slate-50">
                <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center font-bold text-slate-400">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight">{review.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span>{review.date}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
