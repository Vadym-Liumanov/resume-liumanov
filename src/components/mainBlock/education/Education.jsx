import React from "react"

// import "./styles.css"

const Education = ({ education }) => {

  const { header, list } = education

  const educationList = list.map((item) => {
    return (
      <li className="experience__list-item" key={item.id}>
        <h3 className="experience__subheader">{item.itemHeader}</h3>
        <p className="experience__pre-text">{item.itemSubHeader}</p>
        {item.text.split('\n').map((p, index) => {
          return (
            <p className="experience__text common-text" key={index}>
              {p}
            </p>
          )
        })}
      </li>
    )
  })

  return (
    <section className="education">
      <h2 className="experience__header primary-header">{header}</h2>
      <ul className="experience__list">
        {educationList}
      </ul>
    </section>
  )
}

export default Education