import React from "react"

import { skillsOutput } from "../../../utils/renderTextArr"

import { email as emailIcon, phone as phoneIcon } from '../../../images/icons'

// import "./styles.css"

const About = ({ contacts, techSkills, softSkills }) => {

  const techSkillsList = skillsOutput(techSkills.list)
  const softSkillsList = skillsOutput(softSkills.list)

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
        <ol className="about__skills-list">
          {softSkillsList}
        </ol>
      </div>
      <div className="about__skills">
        <h4 className="about__header accented-header">{"Languages"}</h4>
        <ul className="about__skills-list">
          {techSkillsList}
        </ul>
      </div>

    </section>
  )
}

export default About