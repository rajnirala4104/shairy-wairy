import { FiArrowUp } from "react-icons/fi"
import { Fragment } from "react/jsx-runtime"

const ScrollUpButton:React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Fragment>
      <button
        onClick={scrollToTop}
        className="fixed cursor-pointer bottom-6 right-6 w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center hover:bg-[#1a252f] transition-colors duration-300 shadow-lg z-50"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="text-xl" />
      </button>
    </Fragment>
  )
}

export default ScrollUpButton;
