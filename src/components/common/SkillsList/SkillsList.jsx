import React from "react"

// Компонент вывода скилов и языков по входящему списку скилов и названию группы скилов
const SkillsList = ({ skillsList, skillName }) => {
  return (
    <ul className="about__skills-list">
      {
        skillsList.map(skill => <li key={skill.id} className="about__skills-list-item">{skill[skillName]}</li>)
      }
    </ul>
  )
}

export default SkillsList