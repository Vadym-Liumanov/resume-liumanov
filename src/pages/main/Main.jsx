import React, { useEffect, useState } from "react"
import AsideBlock from "../../components/asideBblock/AsideBlock"
import LanguageBlock from "../../components/languageBlock/LanguageBlock"
import MainBlock from "../../components/mainBlock/MainBlock"

import { useLocalStorage } from "../../utils/useLocalStorage"

import languages from "../../helpers/languages"

import rightImage from './../../images/abstract_1.svg'
import leftImage from './../../images/abstract_2.svg'

const Main = () => {

  const [lng, setLng] = useLocalStorage('language', 'en')

  const [lngData, setLngData] = useState(languages[lng])

  const toggleLng = () => {
    setLng((prevValue) => prevValue === 'en' ? 'ru' : 'en')
  }

  useEffect(() => {
    setLngData(() => languages[lng])
  }, [lng])

  const { person, contacts, techSkills, softSkills, profile, experience, education } = lngData
  
  return (
    <>
      <div className="container">
        <img className="right-image abstract-image" src={rightImage} alt="abstract_1" title="abstract_1" />
        <img className="left-image abstract-image" src={leftImage} alt="abstract_2" title="abstract_2" />

        <div className="row-wrapper top-row">
          <LanguageBlock toggleLng={toggleLng} lng={lng} />
        </div>

        <div className="row-wrapper middle-row">
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


      </div>

      <div className="invisible">
        <p>resolution below 320px is not supported</p>
      </div>
    </>
  )
}

export default Main