import React from "react";
import {Link} from 'react-scroll';
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
      <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
      <nav className="nav-wrapper">
        <div className="nav-content">
          <div className="initials">KK</div>
          <ul>
            <li>
              <Link to="home" spy={true} smooth={true} offset={-120} duration={500} className="menu-item">
                Home
              </Link>
            </li>
            <li>
              <Link to="skills" spy={true} smooth={true} offset={-110} duration={500} className="menu-item">
                Skills
              </Link>
            </li>
            <li>
              <Link to="projects" spy={true} smooth={true} offset={-120} duration={500} className="menu-item">
                Projects
              </Link>
            </li>
            <li>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500} className="menu-item">
                Contact Me
              </Link>
            </li>
            <button className="resume-btn">My Resume</button>
          </ul>
          <button className="menu-btn" onClick={toggleMenu}>
            <FontAwesomeIcon icon={openMenu ? faX : faBars} />
          </button>
        </div>
      </nav>
    </>
  );
}