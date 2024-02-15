import React from "react";
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
        </div>
      </div>
    </>
  );
};