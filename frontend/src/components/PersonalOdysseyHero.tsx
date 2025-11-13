import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const PersonalOdysseyHero: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-l from-white to-blue-200 px-4 py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          {/* Left Column - Brand Name */}
          <div className="lg:pt-8">
            <h1 className="text-2xl md:text-3xl font-bold text-blue-950">
              Personal Odyssey
            </h1>
          </div>

          {/* Right Column - Main Content */}
          <div className="space-y-6 md:space-y-8">
            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c3e50] leading-tight">
              Our Journey Towards Pioneering Personal Growth
            </h2>

            {/* Description */}
            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
              In this part, we will introduce you or your business to website visitors. 
              We'll write about you, your organization, the products or services you offer, 
              and why your company exists.
            </p>

            {/* CTA Button */}
            <div>
              <a
                href="/about"
                className="inline-block text-blue-950 font-medium text-sm md:text-base uppercase tracking-wide border-b-2 border-blue-950 pb-1 hover:text-[#a07043] hover:border-[#a07043] transition-colors duration-300"
              >
                More About Me
              </a>
            </div>

            {/* Social Media Section */}
            <div className="pt-4 md:pt-8">
              <p className="text-sm md:text-base font-medium text-[#2c3e50] mb-4 uppercase tracking-wide">
                Connect with me on social media:
              </p>
              <div className="flex gap-4 md:gap-6">
                <a
                  href="#facebook"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1877f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                  aria-label="Facebook"
                >
                  <FaFacebook className="text-lg md:text-xl" />
                </a>
                <a
                  href="#twitter"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1da1f2] flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                  aria-label="Twitter"
                >
                  <FaTwitter className="text-lg md:text-xl" />
                </a>
                <a
                  href="#instagram"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-[#833ab4] via-[#fd1d1d] to-[#fcb045] flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-lg md:text-xl" />
                </a>
                <a
                  href="#linkedin"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0a66c2] flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin className="text-lg md:text-xl" />
                </a>
                <a
                  href="#youtube"
                  className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#ff0000] flex items-center justify-center text-white hover:opacity-80 transition-opacity duration-300"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-lg md:text-xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalOdysseyHero;
