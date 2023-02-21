import React from "react"
import About from "./about/About"

import Person from "./person/Person"

// import "./styles.css"

const AsideBlock = ({ person, contacts, techSkills, softSkills }) => {
  
  return (
    <div className="aside-block column-container">
      <Person person={person} />
      <About
        contacts={contacts}
        techSkills={techSkills}
        softSkills={softSkills}
      />
    </div>
  )
}

export default AsideBlock