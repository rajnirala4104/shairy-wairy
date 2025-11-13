import React, { useState } from 'react';

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    // Add your newsletter subscription logic here
    alert(`Thank you for subscribing with: ${email}`);
    setEmail('');
  };

  return (
    <section className="w-full bg-gradient-to-r from-blue-300/90 via-blue-300/80 to-blue-200/60 py-16 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16">
          {/* Left Side - Connect With Us */}
          <div className="lg:w-1/4">
            <h3 className="text-slate-950 text-sm font-semibold tracking-widest uppercase">
              Connect With Us
            </h3>
            <div className="w-12 h-0.5 bg-amber-300 mt-2"></div>
          </div>

          {/* Right Side - Newsletter Form */}
          <div className="lg:w-3/4">
            {/* Heading */}
            <h2 className="text-slate-950 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal leading-tight mb-4 sm:mb-6">
              Let's Inspire Together – 
              <span className="bg-amber-300 px-5 py-2">
                Join our Community Now!
              </span>
            </h2>

            {/* Subheading */}
            <p className="text-slate-950/95 text-lg sm:text-xl leading-relaxed mb-8 sm:mb-10">
              Subscribe to our newsletter for the latest updates, events, and exclusive content.
            </p>

            {/* Form */}
            <div className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your Email Address"
                className="w-full max-w-2xl px-6 py-4 rounded-full border border-blue-900 text-blue-900 placeholder-blue-950 focus:outline-none focus:ring-2 focus:ring-blue-950/50 transition-all duration-300"
                required
              />
              <button
                onClick={handleSubmit}
                className="bg-[#ff751d] text-white font-semibold text-sm sm:text-base px-10 py-4 rounded-full hover:bg-amber-600 transition-all duration-300 transform hover:scale-105 hover:shadow-lg uppercase tracking-wide"
              >
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSignup;
