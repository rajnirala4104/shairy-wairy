import type React from "react";
import { Link, useLocation } from "react-router-dom";
import { Fragment } from "react/jsx-runtime"
import { GiHamburgerMenu } from "react-icons/gi";
import { SocialIcons } from ".";

const Navbar:React.FC = () => {

  const {pathname} = useLocation()

  const navbarMenues = [
    {
      menuName:"Home",
      route:"/",
      activeClass: "text-slate-950"
    },{
      menuName:"About",
      route:"/about",
      activeClass: "text-slate-950 font-bold"
    },{
      menuName:"Contact",
      route: "/contact",
      activeClass: "text-slate-950"
    },{
      menuName:"Explore",
      route: "/explore",
      activeClass: "text-slate-950"
    }
  ]

  return (
    <Fragment>
      <section className="fixed w-full top-5 z-[100] bg-transparent flex justify-center items-center">
        <div className="lg:w-[80%] w-[90%] bg-white flex flex-col rounded-full justify-evenly items-center border shadow-lg">
          <div className="mainNavbar py-2 w-full h-[4rem] lg:h-[4rem] grid grid-cols-3 gap-3 place-content-center place-items-center">
            <div className="logo">
              <Link to="/" className="lg:text-2xl text-lg text-gray-700"><span className="font-bold">Big</span> Dream</Link>
            </div>
            <div className="menues hidden lg:flex w-[80%]">
              <ul className="flex justify-between items-center w-full">
                {navbarMenues.map(singleData => (
                  <Fragment>
                    <Link 
                      to={singleData.route}
                      className={`text-lg text-slate-800 ${pathname==singleData.route ? singleData.activeClass:""} ${pathname=="/" && singleData.menuName === "Home" ? "text-slate-950 font-bold":""}`}
                    >{singleData.menuName}</Link>
                  </Fragment>
                ))}
              </ul>
            </div>
            <div className="socialIcons w-[46%]">
              <SocialIcons />
            </div>
            <div className="lg:hidden">
              <span>
              <GiHamburgerMenu />
              </span>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}

export default Navbar;
