import React from "react"

import { textDevider } from '../../../utils/utils'
import InfoBlock from "../Infoblock/Infoblock"

// Компонент для вывода листа с данными об опыте работы или об образовании

const ExperienceList = ({ list, isScreenSmall }) => {
  return (
    <ul className="experience__list">
      {
        list.map((item) => {
          return (
            <InfoBlock className={`experience__list-item ${isScreenSmall ? 'spoiler-mode' : ''}`} key={item.id} tagType="li">
              {/* Если у элемента есть подполе должность (position) - то выдаст подзаголовок к листингу опыта,
              в противном случае - в формате подзаголовка к блоку образование*/}
              <div>
                {item['itemHeader']['position']
                  ? <h3 className="experience__subheader">
                    {`${item.id}. ${item['itemHeader']['position']}`} - <span>{item['itemHeader']['company']}</span>
                  </h3>
                  : <h3 className="experience__subheader">
                    {item['itemHeader']}
                  </h3>
                }
                <p className="experience__pre-text">{item.itemSubHeader}</p>
              </div>
              {/* Возвращает массив абзацев с текстом (перегоняет текст в абзацы по разделителям \n) */}
              {textDevider(item.text)}
            </InfoBlock>
          )
        })
      }
    </ul>
  )
}

export default ExperienceList