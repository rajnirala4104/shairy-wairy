import React from 'react';
import { allImages } from '../assets';

const NewsletterSection: React.FC = () => {
  return (
    <section className="relative w-full min-h-[400px] flex items-center justify-start overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={allImages.bg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-6 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* Small Heading */}
          <p className="text-white/90 text-xs sm:text-sm font-semibold tracking-widest uppercase mb-4 sm:mb-6">
            Stay Connected with our Inspiring Updates
          </p>

          {/* Main Heading */}
          <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight mb-8 sm:mb-10">
            Join our Newsletter for Regular Doses of Inspiration
          </h2>

          {/* CTA Button */}
          <button className="bg-[#ff751d] hover:bg-amber-600 text-white font-semibold text-sm sm:text-base px-8 sm:px-10 py-3 sm:py-4 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide">
            Subscribe Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
