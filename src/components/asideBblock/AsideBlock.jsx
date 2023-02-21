import React from "react"
import About from "./about/About"

import Person from "./person/Person"

// import "./styles.css"

const AsideBlock = () => {
  return (
    <div className="aside-block column-container">
      <Person />
      <About />
    </div>
  )
}

export default AsideBlock