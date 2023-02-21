import React from "react"

// import "./styles.css"

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="experience__header primary-header">Work Experience</h2>
      <ol className="experience__list">
        <li className="experience__list-item">
          <h3 className="experience__subheader">1. Front-End Developer <span>BESTWEB</span></h3>
          <p className="experience__pre-text">November 2022 - up now</p>
          <p className="experience__text common-text">
            Developed React.js, Redux, CSS, HTML5, and adaptive layout for web applications.
          </p>
        </li>
        <li className="experience__list-item">
          <h3 className="experience__subheader">2. Front-End Developer <span>Reactive Media</span></h3>
          <p className="experience__pre-text">October 2021 - Novermber 2022</p>
          <p className="experience__text common-text">
            Built innovative user interfaces using React.js and Redux.
          </p>
        </li>
        <li className="experience__list-item">
          <h3 className="experience__subheader">3. Front-End Developer <span>CloudMill</span></h3>
          <p className="experience__pre-text">September 2021 - October 2021</p>
          <p className="experience__text common-text">
            Developed React.js, Redux, CSS, HTML5 and adaptive layout for projects.
          </p>
        </li>
        <li className="experience__list-item">
          <h3 className="experience__subheader">4. Front-End Developer <span>INSPIRO</span></h3>
          <p className="experience__pre-text">June 2021 - September 2021</p>
          <p className="experience__text common-text">
            Developed React.js, Redux, CSS, HTML5 and adaptive layout for projects.
          </p>
        </li>
      </ol>
    </section>
  )
}

export default Experience