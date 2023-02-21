import React from "react"

// import "./styles.css"

const Experience = ({ experience }) => {

  const { header, list } = experience

  const experienceList = list.map((item) => {
    return (
      <li className="experience__list-item" key={item.id}>
        <h3 className="experience__subheader">{`${item.id}. ${item['itemHeader']['position']}`} | <span>{item['itemHeader']['company']}</span></h3>
        <p className="experience__pre-text">{item.itemSubHeader}</p>
        <p className="experience__text common-text">
          {item.text}
        </p>
      </li>
    )
  })

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