import React from "react";
import profileImg from "../assets/images/colored2.jpg";
import css3 from "../assets/icons/css3-alt.png";
import html5 from "../assets/icons/html5.png";
import react from "../assets/icons/react.png";
import sass from "../assets/icons/sass.png";
import js from "../assets/icons/js.png";
import '../css/profile.component.css';

const Profile = () => {
  return (
    <section className="profile-container">

      <div className="profile-content">
        <p>Hi, my name is</p>
        <h1>Kasper Kufel</h1>
        <h2>I'm a Junior Frontend Developer</h2>
      </div>

      <div className="tech-img">
        <div className="tech-icon">
          <img src={react} alt="react" />
        </div>
        <div className="tech-icon">
          <img src={js} alt="javascript" />
        </div>
        <div className="tech-icon">
          <img src={html5} alt="html" />
        </div>
        <div className="tech-icon">
          <img src={css3} alt="css" />
        </div>
        <div className="tech-icon">
          <img src={sass} alt="sass" />
        </div>
      </div>
      <img src={profileImg} className="profile-img" alt="profile" />
    </section>
  );
};

export default Profile;