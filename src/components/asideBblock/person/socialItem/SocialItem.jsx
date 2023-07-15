import React from "react"

// Компонент элемента для блока социальных ссылок
// Включает ссылку и иконку
const SocialItem = ({ link, src, name }) => {
  return (
    <a href={link} target="_blanc">
      <img src={src} alt={name} />
    </a>
  )
}

export default SocialItem