import React from "react"

// Ф-ция вывода скилов в установленном формате (разметке)
import SkillsList from "../../common/SkillsList/SkillsList"

// Иконки
import { email as emailIcon, phone as phoneIcon, download as downloadIcon } from '../../../images/icons'

// Универсальный кастомный компонент для форматированного вывода блоков информации. Поддерживает механизм
// трансформации блока в спойлер (при указании класса spoiler-mode) 
import InfoBlock from "../../common/Infoblock/Infoblock"

// Ссылки на файлы резюме в pdf для 2 языков
import engCV from '../../../files/cv_eng.pdf'
import rusCV from '../../../files/cv_rus.pdf'

const About = ({ contacts, techSkills, softSkills, languagesList, downloadCvBtnText, lng, isScreenSmall }) => {
  // Определяем необходимость наличия класса 'spoiler-mode' у элементов InfoBlock для отображения спойлеров 
  const spoilerModeClass = isScreenSmall ? 'spoiler-mode' : ''

  // Определяем актуальный pdf файл резюме (ссылку) для скачивания, кот. соответствует текущей языковой локализации
  const actualCV = lng === 'en' ? engCV : rusCV
  // Определяем название скачиваемого файла
  const suggestedFileName = lng === 'en'
    ? 'liumanov_cv_eng'
    : 'liumanov_cv_rus'

  // Создадим вспомогательную мини-компоненту для вывода однотипных (по форматированию) блоков хард-скилов, софт-скилов и языков
  function ScillsBlock({ header, skillsList, skillName }) {
    return (
      <InfoBlock className={"about__skills " + spoilerModeClass} tagType="div">
        <h4 className="about__header accented-header">{header}</h4>
        <SkillsList skillsList={skillsList} skillName={skillName} />
      </InfoBlock>
    )
  }

  return (
    <section className="about">

      <div className="about__container">

        {/* Блок контактов */}
        <InfoBlock className={"about__contacts " + spoilerModeClass} tagType="div">
          <h4 className="about__header accented-header">{contacts.header}</h4>
          <div className="about__contacts-list">
            <div className="about__contacts-link">
              <img src={phoneIcon} alt="tel" />
              <a href="tel:+79202049920">+7 920 204 99 20</a>
            </div>
            <div className="about__contacts-link">
              <img src={emailIcon} alt="email" />
              <a href="mailto:vliumanov@gmail.com">vliumanov@gmail.com</a>
            </div>
          </div>
        </InfoBlock>

        {/* Блок хард-скилов */}
        <ScillsBlock header={techSkills.header} skillsList={techSkills.list} skillName='skillName'/>

        {/* Блок софт-скилов */}
        <ScillsBlock header={softSkills.header} skillsList={softSkills.list} skillName='skillName'/>

        {/* Блок языков */}
        <ScillsBlock header={languagesList.header} skillsList={languagesList.list} skillName='language'/>

        {/* Кнопка скачивания резюме */}
        <div className="about__cv">
          <a
            href={actualCV}
            download={suggestedFileName}
            target="_blank"
            className="about__cv-btn"
            rel="noreferrer"
          >
            <img src={downloadIcon} alt="download CV" />
            {downloadCvBtnText}
          </a>
        </div>

      </div>

    </section>
  )
}

export default About