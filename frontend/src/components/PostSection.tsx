import React, { useState } from 'react';
import { FiArrowRight, FiArrowUp } from 'react-icons/fi';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  link: string;
}

const PostSection: React.FC = () => {

  const [isAtTop, setIsAtTop] = useState<Boolean>(true)

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Hello world!',
      excerpt: 'Welcome to WordPress. This is your first post. Edit or delete it, then start writing!',
      image: 'https://images.unsplash.com/photo-1551244072-5d12893278ab?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 2,
      title: 'Demo Post 1',
      excerpt: "Engaging Introductions: Capturing Your Audience's Interest The initial impression your blog post makes is crucial....",
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800&h=600&fit=crop',
      link: '#'
    },
    {
      id: 3,
      title: 'Demo Post 2',
      excerpt: "Engaging Introductions: Capturing Your Audience's Interest The initial impression your blog post makes is crucial....",
      image: 'https://images.unsplash.com/photo-1502933691298-84fc14542831?w=800&h=600&fit=crop',
      link: '#'
    }
  ];

  window.addEventListener('scroll', () => {
    if (window.scrollY === 0) {
      setIsAtTop(true);
    } else {
      console.log('User has scrolled down');
      setIsAtTop(false);
    }
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 md:mb-12 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2c3e50]">
            Explore the Latest Inspirations
          </h2>
          <a
            href="#all"
            className="inline-flex items-center gap-2 text-blue-950 font-medium text-sm md:text-base uppercase tracking-wide hover:text-blue-950 transition-colors duration-300 group"
          >
            View All
            <FiArrowRight className="text-lg group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="group cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl md:text-2xl font-bold text-[#2c3e50] group-hover:text-blue-950 transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm md:text-base leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                <a
                  href={post.link}
                  className="inline-block text-blue-950 font-medium text-sm uppercase tracking-wide hover:text-blue-950 transition-colors duration-300"
                >
                  Continue Reading
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Scroll to Top Button */}
        {!isAtTop ? (
          <button
            onClick={scrollToTop}
            className="fixed cursor-pointer bottom-6 right-6 w-12 h-12 bg-[#2c3e50] text-white rounded-full flex items-center justify-center hover:bg-[#1a252f] transition-colors duration-300 shadow-lg z-50"
            aria-label="Scroll to top"
          >
            <FiArrowUp className="text-xl" />
          </button>
        ) : (
          ""
          )}
       </div>
    </section>
  );
};

export default PostSection;
