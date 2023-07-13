import React, { useEffect, useState } from "react"
import AsideBlock from "../../components/asideBblock/AsideBlock"
import LanguageBlock from "../../components/languageBlock/LanguageBlock"
import MainBlock from "../../components/mainBlock/MainBlock"

import { useLocalStorage } from "../../utils/useLocalStorage"
import { useResize } from "../../utils/useResize"

import languages from "../../helpers/languages"

const Main = () => {
  // Определяемся с языковой локализацией.
  // Если в local storage нет ключа 'language', то он создастся с дефолтным значением 'en'
  const [lng, setLng] = useLocalStorage('language', 'en')

  // Задаем состояние текстового контента (может быть или на русском, или на английском)
  // При изменении языка содержимое перерисуется
  const [lngData, setLngData] = useState(languages[lng])

  // Ф-ция переключения языка локализации
  const toggleLng = () => {
    setLng((prevValue) => prevValue === 'en' ? 'ru' : 'en')
  }

  // Производим синхронизацию при изменении языка - обновляем state lngData
  useEffect(() => {
    setLngData(() => languages[lng])
  }, [lng])

  // Определяем ширину viewport для организации спойлеров.
  // Примем width < 576px для реализации спойлеров.
  // Используем кастомный хук useResize
  const widthLimit = 576

  const { width, isScreenSmall } = useResize(widthLimit)
  console.log(width, '===', isScreenSmall)

  // Декомпозицией выделяем необходимые ветки данных
  const { person, contacts, techSkills, softSkills, languagesList, downloadCvBtnText, profile, experience, education } = lngData

  return (
    <>
      <div className="wrapper">

        <div className="top-row">
          <LanguageBlock toggleLng={toggleLng} lng={lng} />
        </div>

        <div className="main-row">
          <AsideBlock
            person={person}
            contacts={contacts}
            techSkills={techSkills}
            softSkills={softSkills}
            languagesList={languagesList}
            lng={lng}
            downloadCvBtnText={downloadCvBtnText}
          />
          <MainBlock
            profile={profile}
            experience={experience}
            education={education}
          />
        </div>

      </div>

    </>
  )
}

export default Main