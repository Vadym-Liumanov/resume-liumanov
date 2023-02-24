import React from "react"

// import "./styles.css"

const SocialItem = ({ link, src, name }) => {
  return (
    <a href={link} target="_blanc">
      <img src={src} alt={name} />
    </a>
  )
}

export default SocialItem