import React from "react";
import '../css/navbar.component.css'
import '../css/global.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <>
      {/* <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/> */}
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="initials">KK</div>
          <ul>
            <li>
              <a href="" className="menu-item">
                Home
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Skills
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Projects
              </a>
            </li>
            <li>
              <a href="" className="menu-item">
                Contact Me
              </a>
            </li>
            <button className="resume-btn">My Resume</button>
          </ul>
          {/* <button className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={openMenu ? faX : faBars} />
          </button> */}
        </div>
      </nav>
    </>
  );
}