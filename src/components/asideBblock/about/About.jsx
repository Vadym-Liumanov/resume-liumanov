import React from "react"

import { skillsOutput } from "../../../utils/renderTextArr"

import { email as emailIcon, phone as phoneIcon, download as downloadIcon } from '../../../images/icons'

import engCV from '../../../files/cv_eng.pdf'
import rusCV from '../../../files/cv_rus.pdf'

const About = ({ contacts, techSkills, softSkills, languagesList, downloadCvBtnText, lng }) => {
  const techSkillsList = skillsOutput(techSkills.list, 'skillName')
  const softSkillsList = skillsOutput(softSkills.list, 'skillName')
  const renderedLanguagesList = skillsOutput(languagesList.list, 'language')

  const actualCV = lng === 'en' ? engCV : rusCV
  const suggestedFileName = lng === 'en'
    ? 'liumanov_cv_eng'
    : 'liumanov_cv_rus'

  return (
    <section className="about">

      <div className="about__container">
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
            href={actualCV}
            download={suggestedFileName}
            target="_blank"
            className="about__cv-btn"
            rel="noreferrer"
          >
            <img src={downloadIcon} alt="download CV" />
            {downloadCvBtnText}
          </a>
        </div>
      </div>

    </section>
  )
}

export default About