import React from "react"
import Education from "./education/Education"
import Experience from "./experience/Experience"
import Profile from "./profile/Profile"

// import "./styles.css"

const MainBlock = ({ profile, experience, education }) => {
  return (
    <main className="main">
      <Profile profile={profile} />
      <section className="exp-and-edu-block">
        <Experience experience={experience} />
        <Education education={education} />
      </section>
    </main>
  )
}

export default MainBlock