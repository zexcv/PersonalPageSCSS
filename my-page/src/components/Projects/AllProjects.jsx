import React, { useState, useLayoutEffect } from "react";
import "../../css/all-projects.component.css";
import Project from "./Project.jsx";
import { PROJECTS } from "../../utils/data.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const AllProjects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentProject, setCurrentProject] = useState(0);

  useLayoutEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const projectsToShow = windowWidth < 1025 ? 1 : 3;

  const nextProject = () => {
    setCurrentProject((prevProject) => (prevProject + 1) % PROJECTS.length);
  };

  const prevProject = () => {
    setCurrentProject((prevProject) =>
      prevProject === 0 ? PROJECTS.length - 1 : prevProject - 1
    );
  };

  return (
    <section className="all-projects-container">
      <h4>Personal Projects</h4>
      <div className="projects">
        {PROJECTS.slice(currentProject, currentProject + projectsToShow).map(
          (project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              poster={project.poster}
              git={project.git}
            />
          )
        )}
        {windowWidth < 1025 && (
          <div className="project-navigation">
            <button className="bn30" onClick={prevProject}><FontAwesomeIcon icon={faArrowLeft} /></button>
            <button className="bn30" onClick={nextProject}><FontAwesomeIcon icon={faArrowRight} /></button>
          </div>
        )}
      </div>
    </section>
  );
};

export default AllProjects;
