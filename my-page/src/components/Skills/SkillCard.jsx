import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../css/skill-card.component.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={()=>onClick()}
    >
      <div className="skill-icon">
        <FontAwesomeIcon icon={iconUrl} className="fa-icon" />
        <p>{title}</p>
      </div>
    </div>
  );
};

export default SkillCard;
