import React from "react"

// Компоненты
import Education from "./education/Education"
import Experience from "./experience/Experience"
import Profile from "./profile/Profile"

const MainBlock = ({ profile, experience, education, isScreenSmall }) => {
  return (
    <main className="main">
      <Profile profile={profile} />
      <section className="exp-and-edu-block">
        <Experience experience={experience} isScreenSmall={isScreenSmall} />
        <Education education={education} isScreenSmall={isScreenSmall} />
      </section>
    </main>
  )
}

export default MainBlock