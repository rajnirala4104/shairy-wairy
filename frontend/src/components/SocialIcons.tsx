import { Fragment } from "react/jsx-runtime"
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Tooltip from "./Tooltip";

const SocialIcons = () => {
  return (
    <Fragment>
        <div className="flex justify-evenly items-center text-2xl text-slate-800">
          <Tooltip content="Facebook" position="bottom">
            <FaFacebook className="cursor-pointer hover:text-slate-950"/>
          </Tooltip>
          <Tooltip content="Instagram" position="bottom">
            <FaInstagram className="cursor-pointer hover:text-slate-950"/>
          </Tooltip>
          <Tooltip content="Youtube" position="bottom">
            <FaYoutube className="cursor-pointer hover:text-slate-950"/>
          </Tooltip>
        </div>
    </Fragment>
  )
}

export default SocialIcons;
