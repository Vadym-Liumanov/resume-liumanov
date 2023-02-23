import React from "react"

import "./styles.css"

const LanguageBlock = ({ toggleLng, lng }) => {

  const btnClassEn = "language-btn__en"
  const btnClassRu = "language-btn__ru"
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