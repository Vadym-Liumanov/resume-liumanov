import React from "react"

import personPhoto from './../img/photo.png'
import { facebook, instagram, twitter } from './../img/icons'

// import "./styles.css"

const Person = () => {
  return (
    <section className="person">
      <img className="person__photo" src={personPhoto} alt="photo" />
      <h3 className="person__header primary-header">Anna <span>Karenina</span></h3>
      <span className="person__label">Front-End Developer</span>
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