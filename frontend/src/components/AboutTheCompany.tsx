import React from 'react';
import { allImages } from '../assets';

const AboutTheCompany: React.FC = () => {
  return (
    <div className="min-h-screen bg-white p-8 md:p-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="relative flex justify-center items-center flex-col">
            <img
              src={allImages.omKishanLogo}
              alt="Person on beach with laptop"
              className="rounded-2xl shadow-lg w-[60%] h-auto object-cover"
            />
            <img 
              src={allImages.bigDreamoLogo}
              alt="bigDreamoLogo"
              className="rounded-2xl shadow-lg w-[60%] h-auto object-cover my-3"
            />
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4">
                About The Company
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Embark on the Journey to Self-Discovery
              </h1>
            </div>

            <div className="space-y-6">
              <p className="text-gray-600 leading-relaxed">
                In this section, we will write about your company mission. We will further highlight the impact you aim to make and the values that drive your efforts.
              </p>

              <p className="text-gray-600 leading-relaxed">
                In this section, we will tell readers about your long-term goals. We will write about the company goals you're aiming for and how you plan to achieve it.
              </p>

              <p className="text-gray-600 leading-relaxed">
                In this section, we will highlight the awards and recognitions you or your business has earned. We will use this section to highlight your personal or company achievements in order to build credibility in the minds of website visitors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTheCompany;
