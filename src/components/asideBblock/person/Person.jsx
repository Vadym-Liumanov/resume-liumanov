import React from "react"

import SocialItem from "./socialItem/SocialItem"
import { socialList } from "../../../helpers/socialList"
import personPhoto from '../../../images/photo.jpg'

// import "./styles.css"

const Person = ({ person }) => {
  const { name, jobTitle } = person

  const socials = socialList.map((item) => {
    return (
      <SocialItem
        key={item.id}
        link={item.link}
        src={item.src}
        name={item.name}
      />
    )
  })

  return (
    <section className="person">
      <img className="person__photo" src={personPhoto} alt="frontend developer" />
      <h3 className="person__header primary-header">{name.firstName} <span>{name.secondName}</span></h3>
      <span className="person__label">{jobTitle}</span>
      <div className="person__social">
        {socials}
      </div>
    </section>
  )
}

export default Person