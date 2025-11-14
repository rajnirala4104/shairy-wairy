import React from 'react';
import { FaQuoteRight } from 'react-icons/fa';
import { allImages } from '../assets';

const AboutQuoteSection: React.FC = () => {
  return (
    <div className="relative w-full h-96 overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: allImages.bg,
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-slate-800 bg-opacity-75"></div>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Every dream fulfilled begins with a simple belief in oneself.
          </h2>
          <p className="text-cyan-400 text-sm md:text-base font-semibold tracking-wider uppercase">
            Aria Bloom
          </p>
        </div>

        {/* Quote Icon */}
        <div className="hidden lg:block">
          <FaQuoteRight className="text-white text-8xl opacity-80" />
        </div>
      </div>
    </div>
  );
};

export default AboutQuoteSection;
