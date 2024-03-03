import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import '../css/contact-me.component.css'

const ContactMe = () => {
  return (
    <section name="contact" className='contact-container'>
      <h4>Contact Me</h4>
      <div className="contact-container_info">
        <a href="https://github.com/zexcv"><FontAwesomeIcon icon={faGithub} className='info-icon'/></a>
        <a href="https://www.linkedin.com/in/kasper-kufel-a7a339185/"><FontAwesomeIcon icon={faLinkedin} className='info-icon'/></a>
        <a href="mailto:kufel.kasper@gmail.com"><FontAwesomeIcon icon={faEnvelope} className='info-icon'/></a>
      </div>

    </section>
  )
}

export default ContactMe