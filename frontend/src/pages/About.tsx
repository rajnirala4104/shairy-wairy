import { Fragment } from "react/jsx-runtime"
import { AboutHeroSection, AboutQuoteSection, AboutSomething, AboutTheCompany } from "../components"

export const About = () => {
  return(
    <Fragment>
      <AboutHeroSection />
      <AboutTheCompany /> 
      <AboutQuoteSection />
      <AboutSomething />
    </Fragment>
  )
}
