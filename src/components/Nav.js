import { useState } from "react";
import scrollToElement from "../scripts/scrollToElement";
import menuIcon from "../images/icons/menu.svg";
import icon from "../images/logo/github.svg";
// import logo from "../images/sentinel_logo/PNGs/Sentinel_graphic_color.png";
import logo from "../images/sentinel_logo/PNGs/Sentinel_logo_on_dark_circle.png";

function Nav() {
  const navItemStyle = "hover:bg-gray-100 hover:border-gray-300 active:bg-green-200 active:border-green-300 border-l-4 border-white py-2.5 pl-4 text-left";
  const [showMenu, setShowMenu] = useState(false);

  const navigateTo = (elementId) => {
    scrollToElement(elementId, -50);
    setShowMenu(false);
  }

  return (
    <header>
      <div id="header" className="z-50 items-center bg-slate fixed border-b border-gray-200 h-20 w-full flex justify-between">
        <a href="/">
          <img src={logo} alt="the Sentinel logo" className="h-20" />
        </a>
        <nav className="hidden lg:flex bg-slate h-full justify-between items-center text-center text-lg text-gray-500 font-medium">
          <button className="mx-4 hover:text-raisin" onClick={() => navigateTo("landing")}>Start Here</button>
          <button className="mx-4 hover:text-raisin" onClick={() => navigateTo("case-study")}>Case Study</button>
          <button className="mx-4 hover:text-raisin" onClick={() => navigateTo("presentation")}>Presentation</button>
          <button className="mx-4 hover:text-raisin" onClick={() => navigateTo("our-team")}>Our Team</button>
          <a href="https://github.com/Sentinel-PaaS/Sentinel-cli/tree/main/sentinel" className="mx-4 hover:text-raisin">Docs</a>
          <a href="https://github.com/Sentinel-PaaS" className="mx-4 w-20"><img src={icon} className="w-full h-10" alt="The github logo" /></a>
        </nav>
        <img src={menuIcon} alt="a dropdown menu icon" className="lg:hidden block w-8 h-8 mr-6" onClick={() => setShowMenu(!showMenu)} />
      </div>
      <div id="mobile-menu" className={`lg:hidden ${showMenu ? "translate-y-20" : "-translate-y-full"} z-0 bg-white fixed flex flex-col text-xl text-gray-800 w-full gap-1 transform transition duration-500 ease-in-out`}>
        <button onClick={() => navigateTo("landing")} className={`${navItemStyle} mt-1 hover:text-raisin`}>Start Here</button>
        <button onClick={() => navigateTo("case-study")} className={`${navItemStyle} hover:text-raisin`}>Case Study</button>
        <button onClick={() => navigateTo("presentation")} className={`${navItemStyle} hover:text-raisin`}>Presentation</button>
        <button onClick={() => navigateTo("our-team")} className={`${navItemStyle} hover:text-raisin`}>Our Team</button>
        <a href="https://github.com/Sentinel-PaaS/Sentinel-cli/tree/main/sentinel" className={`${navItemStyle} hover:text-raisin`}>Docs</a>
        <a href="https://github.com/Sentinel-PaaS" className={`${navItemStyle} mb-1 hover:text-raisin`}><i className=""></i> GitHub</a>
      </div>
    </header>
  );
}
export default Nav;
