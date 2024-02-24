import React from "react";
import "../css/skill-card.component.css";

const SkillCard = ({ title, iconUrl, isActive, onClick }) => {
  function changeSkill() {}
  return (
    <div
      className={`skills-card ${isActive ? "active" : ""}`}
      onClick={changeSkill()}
    >
        <div className="skill-icon">
            <img src={iconUrl} alt="techskill-icon" />
        </div>

        <span>{title}</span>
    </div>
  );
};

export default SkillCard;
