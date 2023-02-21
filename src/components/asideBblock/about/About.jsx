import React from "react"

import { email as emailIcon, phone as phoneIcon } from './../img/icons'

// import "./styles.css"

const About = ({ contacts, techSkills, softSkills }) => {

  const techSkillsList = techSkills.list.map((skill) => {
    return (
      <li key={skill.id} className="about__skills-list-item">{skill.skillName}</li>
    )
  })

  const softSkillsList = softSkills.list.map((skill) => {
    return (
      <li key={skill.id} className="about__skills-list-item">{skill.skillName}</li>
    )
  })

  return (
    <section className="about">
      <div className="about__contacts">
        <h4 className="about__header accented-header">{contacts.header}</h4>
        <div className="about__contacts-link">
          <img src={phoneIcon} alt="tel" />
          <a href="tel:+380951234567">+38 095 123 45 67</a>
        </div>
        <div className="about__contacts-link">
          <img src={emailIcon} alt="email" />
          <a href="mailto:developer@gmail.com">developer@gmail.com</a>
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
    </section>
  )
}

export default About