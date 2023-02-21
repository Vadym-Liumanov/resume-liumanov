import React from "react"
import Education from "./education/Education"
import Experience from "./experience/Experience"
import Profile from "./profile/Profile"

// import "./styles.css"

const MainBlock = () => {
  return (
    <div className="main-block column-container">
      <Profile />
      <section className="exp-and-edu-block">
        <Experience />
        <Education />
      </section>
    </div>
  )
}

export default MainBlock