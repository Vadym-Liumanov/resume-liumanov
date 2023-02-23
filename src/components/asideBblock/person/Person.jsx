import React from "react"

import personPhoto from './../img/photo.jpg'
import { facebook, instagram, twitter } from './../img/icons'

// import "./styles.css"

const Person = ({ person }) => {
  const { name, jobTitle } = person

  return (
    <section className="person">
      <img className="person__photo" src={personPhoto} alt="photo" />
      <h3 className="person__header primary-header">{name.firstName} <span>{name.secondName}</span></h3>
      <span className="person__label">{jobTitle}</span>
      <div className="person__social">
        <a href="#" target="_blanc">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#" target="_blanc">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#" target="_blanc">
          <img src={instagram} alt="instagram" />
        </a>
      </div>
    </section>
  )
}

export default Person