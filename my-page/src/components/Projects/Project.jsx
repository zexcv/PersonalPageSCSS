import React from 'react'
import '../../css/project.component.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub} from '@fortawesome/free-brands-svg-icons'




const Project = ({title, description, url, git, poster}) => {
  return (
    <div className='project-card'>
        <div className="project-card_poster">
            <img src={poster} alt="" /> 
        </div>
        <div className='project-card_desc'>
            <h1>{title}</h1>
            <p>{description}</p>
        </div>
        <div className="project-card_links">
            <a href={url}><FontAwesomeIcon icon={faGlobe} className='icon'/></a>
            <a href={git}><FontAwesomeIcon icon={faGithub} className='icon'/></a>
        </div>
    </div>
  )
}

export default Project