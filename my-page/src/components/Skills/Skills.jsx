import React, { useState } from 'react'
import '../../css/skills.component.css'
import SkillsInfo from './SkillsInfo.jsx'
import {SKILLS} from '../../utils/data.js'
import SkillCard from './SkillCard'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])

  function handleSelection(data) {
    setSelectedSkill(data)
  }
  return (
    <section name="skills" className='skills-container'>
        <h4>Technical Proficiency</h4>

        <div className='skills-content'>
            <div className='skills'>
                {SKILLS.map(item => (
                  <SkillCard 
                  key={item.title}
                  iconUrl={item.icon}
                  title={item.title}
                  isActive={selectedSkill.title === item.title}
                  onClick={() => {
                    handleSelection(item)
                  }}
                  />
                ))}
            </div>

            <div className='skills-info'> 
              <SkillsInfo
              heading={selectedSkill.title}
              skills={selectedSkill.skills}
              />
            </div>
        </div>
    </section>
  )
}

export default Skills