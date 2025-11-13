import { Fragment } from "react/jsx-runtime"
import { HeroSection, NewsletterSection, NewsletterSignupSection, PersonalOdysseyHero, PostSection, TestimonialsSection } from "../components"

export const Home = () => {
  return (
    <Fragment>
      <div className="w-full">
        <HeroSection />
        <PersonalOdysseyHero />
        <PostSection />
        <NewsletterSection />
        <TestimonialsSection />
      </div>
    </Fragment>
  )
} 
