import type React from "react";
import { Link } from "react-router-dom";
import { Fragment } from "react/jsx-runtime"
import { HiMenu, HiX } from 'react-icons/hi';
import { useState } from "react";

const Navbar:React.FC = () => {

  // const {pathname} = useLocation()

  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' }
  ];

  return (
    <Fragment>
      <section className="sticky top-0">
 <nav className="bg-gradient-to-r from-white to-blue-200 shadow-lg">
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex justify-between items-center h-18">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-slate-900 tracking-tight hover:text-slate-950 transition-colors">
              BigDreamo
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-900 hover:text-slate-950 px-3 py-2 text-lg font-medium transition-colors relative group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-slate-950 group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-slate-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600 rounded-md p-2"
              aria-label="Toggle menu"
            >
              {isOpen ? <HiX size={24} /> : <HiMenu size={24} />} 
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-slate-900 hover:bg-blue-100 block px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
      </section>
    </Fragment>
  )
}

export default Navbar;
