import React from 'react'
import '../../css/skill-info.component.css'

const SkillsInfo = ({heading, skills}) => {
  return (
    <div className='skills-info-card'>
        <h5>{heading}</h5>
        <div className="skills-info-content">
            {skills.map((item, index) => (
                <React.Fragment key={`skill_${index}`}>
                    <div className='skill-info'>
                        <p>{item.skill}</p>
                        <p className='precentage'>{item.precentage}</p>
                    </div>
                    {item.precentage && <div className="skill-progress-bg">
                        <div className='skill-progress' style={{width: item.precentage}}></div>
                    </div>}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

export default SkillsInfo