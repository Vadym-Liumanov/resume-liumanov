import React from "react"

import ExperienceList from "../../common/ExperienceList/ExperienceList"

// Компонент опыта работы
const Experience = ({ experience, isScreenSmall }) => {

  const { header, list } = experience

  return (
    <section className="experience">
      <h2 className="experience__header primary-header">{header}</h2>
      <ExperienceList list={list} isScreenSmall={isScreenSmall} />
    </section>
  )
}

export default Experience