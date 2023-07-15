import React from "react"

// Компонент профиля - обычная текстовая инфа в оригинальном (не шаблонном) виде
const Profile = ({ profile }) => {

  return (
    <section className="profile">
      <h2 className="profile__header primary-header">{profile.header}</h2>
      <p className="profile__text common-text">
        {profile.text}
      </p>
    </section>
  )
}

export default Profile