import React from "react"
import About from "./about/About"

import Person from "./person/Person"

// import "./styles.css"

const AsideBlock = ({ person, contacts, techSkills, softSkills, languagesList, downloadCvBtnText, lng }) => {

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
      />
    </aside>
  )
}

export default AsideBlock