const textDevider = (text) => text.split('\n').map((p, index) => {
  return (
    <p className="experience__text common-text" key={index}>
      {p}
    </p>
  )
})

export const listOutput = (list) => {
  return list.map((item) => {
    return (
      <li className="experience__list-item" key={item.id}>
        {item['itemHeader']['position']
          ? <h3 className="experience__subheader">
            {`${item.id}. ${item['itemHeader']['position']}`} | <span>{item['itemHeader']['company']}</span>
          </h3>
          : <h3 className="experience__subheader">
            {item['itemHeader']}
          </h3>
        }

        <p className="experience__pre-text">{item.itemSubHeader}</p>

        {textDevider(item.text)}

      </li>
    )
  })
}

export const skillsOutput = (skillsList, skillName) => skillsList.map((skill) => {
  return (
    <li key={skill.id} className="about__skills-list-item">{skill[skillName]}</li>
  )
})