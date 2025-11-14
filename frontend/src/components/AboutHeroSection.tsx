import { Fragment } from "react/jsx-runtime"
import { allImages } from "../assets"

const AboutHeroSection = () => {
  return (
    <Fragment>
    <section
      className="h-[36rem] w-full flex justify-center items-center text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url('${allImages.bg}') center center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
        {/* Content Container */}
      <div className="relative z-5 flex min-h-screen items-center text-center">
        <div className="container mx-auto px-6 sm:px-8 lg:px-12">
          <div className="max-w-4xl ">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-4">
              Discover the Creator Within
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
              Unleashing potential through inspiration, growth, and support.
            </p>
          </div>    
        </div>
      </div>
    </section>
    </Fragment>
  )
}

export default AboutHeroSection;
