import React from "react"

import { skillsOutput } from "../../../utils/renderTextArr"

import { email as emailIcon, phone as phoneIcon, download as downloadIcon } from '../../../images/icons'

// import "./styles.css"

const About = ({ contacts, techSkills, softSkills, languagesList }) => {

  const techSkillsList = skillsOutput(techSkills.list, 'skillName')
  const softSkillsList = skillsOutput(softSkills.list, 'skillName')
  const renderedLanguagesList = skillsOutput(languagesList.list, 'language')

  return (
    <section className="about">

      <div className="about__contacts">
        <h4 className="about__header accented-header">{contacts.header}</h4>
        <div className="about__contacts-link">
          <img src={phoneIcon} alt="tel" />
          <a href="tel:+79202049920">+7 920 204 99 20</a>
        </div>
        <div className="about__contacts-link">
          <img src={emailIcon} alt="email" />
          <a href="mailto:vliumanov@gmail.com">vliumanov@gmail.com</a>
        </div>
      </div>

      <div className="about__skills">
        <h4 className="about__header accented-header">{techSkills.header}</h4>
        <ul className="about__skills-list">
          {techSkillsList}
        </ul>
      </div>

      <div className="about__skills">
        <h4 className="about__header accented-header">{softSkills.header}</h4>
        <ul className="about__skills-list">
          {softSkillsList}
        </ul>
      </div>

      <div className="about__skills">
        <h4 className="about__header accented-header">{languagesList.header}</h4>
        <ul className="about__skills-list">
          {renderedLanguagesList}
        </ul>
      </div>

      <div className="about__cv">
        <a
          href="#"
          download
          target="_blank"
          className="about__cv-btn"
        >
          <img src={downloadIcon} alt="download CV" />
          Download CV
        </a>
      </div>

    </section>
  )
}

export default About