import React, { useRef } from "react";
import "../../css/all-projects.component.css";
import Project from "./Project.jsx";
import { PROJECTS } from "../../utils/data.js";
import Slider from "react-slick";

const AllProjects = () => {

  const sliderRef = useRef();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true
        },
      },
    ],
  };

  return (
    <section className="all-projects-container">
      <h4>Personal Projects</h4>
      <h3>Swipe to see more</h3>
        <Slider ref={sliderRef} {...settings}>
          {PROJECTS.map((project) => (
            <Project
              key={project.title}
              title={project.title}
              description={project.description}
              url={project.url}
              poster={project.poster}
              git={project.git}
            />
          ))}
        </Slider>
    </section>
  );
};

export default AllProjects;
