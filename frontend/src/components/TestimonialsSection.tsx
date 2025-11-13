import React from 'react';

interface Testimonial {
  id: number;
  text: string;
  name: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "InspiroSurge is my go-to platform for motivation and self-improvement. The content here truly ignites a positive change in my life.",
      name: "Sophia Adams",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 2,
      text: "The support and encouragement from the InspiroSurge community have helped me overcome challenges and set new goals with confidence.",
      name: "Amelia Jones",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&h=150&q=80"
    },
    {
      id: 3,
      text: "InspiroSurge has been a pivotal resource in my journey of growth. The shared experiences and insights have inspired me every day.",
      name: "Ethan Parker",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80"
    }
  ];

  return (
    <section className="w-full bg-gray-50 py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-slate-800 text-3xl sm:text-4xl lg:text-5xl font-serif font-normal mb-12 sm:mb-16 lg:mb-20">
          Words From Our Inspired Community
        </h2>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-10 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              {/* Testimonial Text */}
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed mb-8">
                {testimonial.text}
              </p>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover ring-2 ring-amber-500/20"
                />
                <h3 className="text-slate-800 text-lg font-semibold">
                  {testimonial.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
