import React, { useState } from "react"

import './styles.css'

/* Универсальная компонента без подзаголовка для отображения блока информации в виде потомков (порядок имеет значение):
  children[0]: заголовок (title)
  children[1]: текстовое поле блока(body).
  Пример использования в коде:
    <InfoBlock {...props} >
      <div> Title </div>
      <div> Body </div>
    </InfoBlock>
  Потомки могут иметь внутри себя своих потомков, т.е. заголовки (или тело блока) могут состоять из нескольких тэгов,
  ограниченных одним родителем.
  Блок arrow-icon будет показывать стрелку, если содержимое блока надо будет показать как спойлер (режим спойлеров 
    включится при заданном viewport)
*/

function InfoBlock(props) {
  // Состояние для открытого спойлера (когда режим spoiler-mode включен - spoiler-mode есть в строке классов блока)
  const [isSpoilerClosed, setIsSpoilerClosed] = useState(true)
  // Строка для добавления (или нет) в className элементов блока класса 'spoiler-mode' - в зависимости от переданных
  //  в пропсах классах
  const addedClass = (props.className.includes('spoiler-mode')) ? 'spoiler-mode' : ''
  // Строка добавления класса '_active' в элементы (если _active - то спойлер открыт, при отсутствии - закрыт)
  const addedSpoilerClass = isSpoilerClosed ? '' : '_active'

  // Обработчик события открытия-закрытия спойлера
  function onClickHandler(event) {
    setIsSpoilerClosed((prev) => !prev)
  }

  return (
    // Корневая оболочка является тэгом, который передан в InfoBlock через props.tagType
    // Также к внутренним классам компонента добавятся классы, переданные извне. 
    // Компонент InfoBlock что-то вроде HOK-а
    <props.tagType className={`info-block ${props.className}`}>
      <div className={`info-block__arrow ${addedClass} ${addedSpoilerClass}`}></div>
      {/* Проверка - если addedClass ('spoiler-mode' включен), то на заголовок будет повешен onClick */}
      {addedClass
        ? <div className={`info-block__title ${addedClass}`} onClick={onClickHandler}>{props.children[0]}</div>
        : <div className={`info-block__title ${addedClass}`}>{props.children[0]}</div>}
      <div className={`info-block__body ${addedClass} ${addedSpoilerClass}`}>
        {props.children[1]}
      </div>
    </props.tagType>
  )
}

export default InfoBlock