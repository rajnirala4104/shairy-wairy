import { Fragment } from "react/jsx-runtime"
import { allImages } from "../assets"

const HeroSection = () => {
  return (
    <Fragment>
    <section
      className="h-screen w-full flex justify-center items-center text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${allImages.bg}') center center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
        {/* Content Container */}
      <div className="relative z-10 flex min-h-screen items-center text-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-3xl">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">
              Empower Your Journey to Inspiration
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
              Discover a wealth of motivational content, resources, and a supportive 
              community to fuel your personal growth.
            </p>

            {/* CTA Button */}
            <button className="cursor-pointer bg-blue-400 hover:bg-blue-500 text-white font-semibold px-8 py-3.5 rounded-full text-base sm:text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              JOIN NOW
            </button>
          </div>    
        </div>
        </div>
          </section>
    </Fragment>
  )
}

export default HeroSection;
