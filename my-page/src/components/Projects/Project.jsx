import React, { useState } from "react";
import "../../css/project.component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const Project = ({ title, description, url, git, poster, poster2 }) => {
  const [imgSrc, setImgSrc] = useState(poster);

  const altPoster = () => {
    setTimeout(()=> {
      setImgSrc(poster2)

    },200)
  }
  const defPoster = () => {
    setImgSrc(poster)
  }

  return (
    <div className="project-card">
      <div className="project-card_poster">
        <img src={imgSrc} alt="" onMouseEnter={altPoster} onMouseLeave={defPoster} />
      </div>
      <div className="project-card_desc">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
      <div className="project-card_links">
        <a href={url}>
          <button className="bn30">
            <FontAwesomeIcon icon={faGlobe} className="icon" />
          </button>
        </a>
        <a href={git}>
          <button className="bn30">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </button>
        </a>
      </div>
    </div>
  );
};

export default Project;
