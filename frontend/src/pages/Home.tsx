import { Fragment } from "react/jsx-runtime"
import { HeroSection, PersonalOdysseyHero, PostSection } from "../components"

export const Home = () => {
  return (
    <Fragment>
      <div className="w-full">
        <HeroSection />
        <PersonalOdysseyHero />
        <PostSection />
      </div>
    </Fragment>
  )
} 
