import React from "react"

import About from "./about/About"
import Person from "./person/Person"

// Боковой блок
const AsideBlock = ({ person, contacts, techSkills, softSkills,
  languagesList, downloadCvBtnText, lng, isScreenSmall }) => {

  return (
    <aside className="aside">
      <Person person={person} />
      <About
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
        languagesList={languagesList}
        lng={lng}
        downloadCvBtnText={downloadCvBtnText}
        isScreenSmall={isScreenSmall}
      />
    </aside>
  )
}

export default AsideBlock