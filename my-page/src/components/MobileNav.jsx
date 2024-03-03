import React from "react";
import { Link } from "react-scroll";
import "../css/mobile-nav.component.css";
export const MobileNav = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <div className="initials">KK</div>
          <ul>
            <li>
              <Link
                to="home"
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                className="menu-item"
                onClick={toggleMenu}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-110}
                duration={500}
                className="menu-item"
                onClick={toggleMenu}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu-item"
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                className="menu-item"
                onClick={toggleMenu}
              >
                Contact Me
              </Link>
            </li>
            <button className="resume-btn">My Resume</button>
          </ul>
        </div>
      </div>
    </>
  );
};
