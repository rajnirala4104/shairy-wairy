import React from 'react';
import { allImages } from '../assets';

const AboutSomething: React.FC = () => {
  return (
    <div className="bg-gray-50 py-16 px-8 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start ">
          {/* Left Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-4xl font-normal text-orange-400 leading-relaxed">
              Empowering individuals to embrace their unique narratives.
            </h2>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold text-blue-600 tracking-wider uppercase mb-4">
                Be Bold
              </p>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Philosophy of InspiroSurge
              </h3>
            </div>

            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Our philosophy centers on fostering growth, perseverance, and authenticity in every individual.
              </p>
              <p className="text-gray-700 leading-relaxed">
                We believe in the transformative power of self-reflection, positivity, and connectedness.
              </p>
            </div>

            {/* Image */}
            <div className="mt-8">
              <img
                src={allImages.bg}
                alt="Person on beach"
                className="rounded-2xl shadow-lg w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSomething;
