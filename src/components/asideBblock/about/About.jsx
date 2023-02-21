import React from "react"

import { email, phone } from './../img/icons'

// import "./styles.css"

const About = () => {
  return (
    <section className="about">
      <div className="about__contacts">
        <h4 className="about__header accented-header">Contacts</h4>
        <div className="about__contacts-link">
          <img src={phone} alt="tel" />
          <a href="tel:+380951234567">+38 095 123 45 67</a>
        </div>
        <div className="about__contacts-link">
          <img src={email} alt="email" />
          <a href="mailto:developer@gmail.com">developer@gmail.com</a>
        </div>
      </div>
      <div className="about__scills">
        <h4 className="about__header accented-header">Tech Scills</h4>
        <ul className="about__scills-list">
          <li className="about__scills-list-item">HTML5</li>
          <li className="about__scills-list-item">CSS</li>
          <li className="about__scills-list-item">GIT</li>
          <li className="about__scills-list-item">WebPack</li>
          <li className="about__scills-list-item">JS</li>
          <li className="about__scills-list-item">React.js</li>
        </ul>
      </div>
      <div className="about__scills">
        <h4 className="about__header accented-header">Soft Scills</h4>
        <ol className="about__scills-list">
          <li className="about__scills-list-item">Scrum</li>
          <li className="about__scills-list-item">Agile</li>
          <li className="about__scills-list-item">GTD</li>
          <li className="about__scills-list-item">Teamwork</li>
        </ol>
      </div>
    </section>
  )
}

export default About