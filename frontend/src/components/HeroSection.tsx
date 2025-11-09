import { Fragment } from "react/jsx-runtime"
import { allImages } from "../assets"

const HeroSection = () => {
  return (
    <Fragment>
    <section
      className="h-screen w-full flex justify-center items-center text-white"
      style={{
        background: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${allImages.bg_3}') center center/cover`,
        backgroundAttachment: "fixed",
      }}
    >
    </section>
    </Fragment>
  )
}

export default HeroSection;
