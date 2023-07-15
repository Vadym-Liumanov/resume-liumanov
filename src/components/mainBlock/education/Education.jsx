import React from "react"
import ExperienceList from "../../common/ExperienceList/ExperienceList"

const Education = ({ education, isScreenSmall }) => {

  const { header, list } = education

  return (
    <section className="education">
      <h2 className="experience__header primary-header">{header}</h2>
      <ExperienceList list={list} isScreenSmall={isScreenSmall} />
    </section>
  )
}

export default Education