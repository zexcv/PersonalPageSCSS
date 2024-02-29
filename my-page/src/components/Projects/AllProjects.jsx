import React from 'react'
import {PROJECTS} from '../../utils/data.js'
import Project from './Project.jsx'
import '../../css/all-projects.component.css'


const AllProjects = () => {
  return (
    <section className='all-projects-container'>
        <h4>Personal Projects</h4>
        <div className='projects'>
           {PROJECTS.map(project=>(
            <Project
                key={project.title}
                title={project.title}
                description={project.description}
                url={project.url}
                poster={project.poster}
                git={project.git}
            />
           ))}
        </div>
    </section>
  )
}

export default AllProjects