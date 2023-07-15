import React, { useEffect, useState } from "react"

// Компоненты
import AsideBlock from "../../components/asideBblock/AsideBlock"
import LanguageBlock from "../../components/languageBlock/LanguageBlock"
import MainBlock from "../../components/mainBlock/MainBlock"

// Кастомные хуки:
// Для хранения языковых настроек eng | ru
import { useLocalStorage } from "../../hooks/useLocalStorage"
// Для отслеживания ширины viewport
import { useResize } from "../../hooks/useResize"

// Хардовая база с текстом контента на 2 языках
import languages from "../../helpers/languages"

const Main = () => {
  // Определяемся с языковой локализацией.
  // Если в local storage нет ключа 'language', то он создастся с дефолтным значением 'en',
  // в прот. случае возьмет значение ключа из хранилища
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
  // Примем width < 576px для реализации спойлеров
  // Используем кастомный хук useResize - выдает ширину viewport и является ли она меньше widthLimit для
  // реализации спойлеров 
  const widthLimit = 576

  const { isScreenSmall } = useResize(widthLimit)

  // isScreenSmall передадим в пропсах для отрисовки информационных блоков в виде спойлеров (true) или как есть (false)

  // Декомпозицией выделяем необходимые ветки данных из базы контента
  const { person, contacts, techSkills, softSkills, languagesList,
    downloadCvBtnText, profile, experience, education } = lngData

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
            isScreenSmall={isScreenSmall}
          />
          <MainBlock
            profile={profile}
            experience={experience}
            education={education}
            isScreenSmall={isScreenSmall}
          />
        </div>

      </div>

    </>
  )
}

export default Main