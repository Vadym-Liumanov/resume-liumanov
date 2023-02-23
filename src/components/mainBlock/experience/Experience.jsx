import React from "react"

import { listOutput } from "../../../utils/renderTextArr"

// import "./styles.css"

const Experience = ({ experience }) => {

  const { header, list } = experience

  const experienceList = listOutput(list)

  return (
    <section className="experience">
      <h2 className="experience__header primary-header">{header}</h2>
      <ol className="experience__list">
        {experienceList}
      </ol>
    </section>
  )
}

export default Experience