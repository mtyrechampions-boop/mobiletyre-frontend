"use client";

import React, { useState, useEffect } from 'react';
import { SERVICE_AREAS_TEXT } from '@/lib/siteText';
import { Star, Loader2 } from 'lucide-react';

const Reviews = () => {
  const [expandedReviews, setExpandedReviews] = useState({});
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await fetch('https://admins.mobiletyrechampions.com/api/Reviews');
        const data = await response.json();
        if (data && data.data) {
          setReviews(data.data);
        }
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, []);

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
            Don't just take our word for it. Here is what drivers {SERVICE_AREAS_TEXT} have to say about our mobile tyre fitting service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {isLoading ? (
            <div className="col-span-full flex justify-center items-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-[#FB7E10]" />
            </div>
          ) : reviews.map((review) => (
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
                  "{review.reviewText}"
                </p>
                {review.reviewText?.length > 140 && !expandedReviews[review.id] && (
                  <button 
                    onClick={() => toggleReview(review.id)}
                    className="text-sm font-bold text-[#FB7E10] hover:text-orange-600 mb-6 transition-colors text-left"
                  >
                    Read full review
                  </button>
                )}
                {review.reviewText?.length > 140 && expandedReviews[review.id] && (
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
                  {review.reviewerName?.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm tracking-tight">{review.reviewerName}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
                    <span>{review.timeElapsed}</span>
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
