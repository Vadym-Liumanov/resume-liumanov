import React from "react"
import AsideBlock from "../../components/asideBblock/AsideBlock"
import MainBlock from "../../components/mainBlock/MainBlock"

import languages from "../../helpers/languages"

import rightImage from './../../images/abstract_1.svg'
import leftImage from './../../images/abstract_2.svg'

const Main = () => {

  const language = 'en'

  const { person, contacts, techSkills, softSkills, profile, experience, education } = languages[language]

  return (
    <>
      <div className="container">
        <img className="right-image abstract-image" src={rightImage} alt="abstract_1" title="abstract_1" />
        <img className="left-image abstract-image" src={leftImage} alt="abstract_2" title="abstract_2" />
        <AsideBlock
          person={person}
          contacts={contacts}
          techSkills={techSkills}
          softSkills={softSkills}
        />
        <MainBlock
          profile={profile}
          experience={experience}
          education={education}
        />
      </div>

      <div className="invisible">
        <p>resolution below 320px is not supported</p>
      </div>
    </>
  )
}

export default Main