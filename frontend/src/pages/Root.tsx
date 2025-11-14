import type React from "react"
import { Outlet } from "react-router-dom"
import { Fragment } from "react/jsx-runtime"
import { Footer, Navbar, NewsletterSignupSection } from "../components"

export const Root:React.FC = () => {
  return (
    <Fragment>
      <Navbar />
      <Outlet/>
      <NewsletterSignupSection />
      <Footer />
    </Fragment>
  )
}
