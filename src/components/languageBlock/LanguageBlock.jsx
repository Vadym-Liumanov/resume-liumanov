import React from "react"
import "./styles.css"

// Компонент переключения языковой локализации
const LanguageBlock = ({ toggleLng, lng }) => {

  const btnClassEn = "language-block__btn language-block__btn_en"
  const btnClassRu = "language-block__btn language-block__btn_ru"
  const btnClass = lng === 'en' ? btnClassEn : btnClassRu

  return (
    <div className="language-block">
      <button className={btnClass} onClick={toggleLng}>
        {"< EN | RU >"}
      </button>
    </div>
  )
}

export default LanguageBlock