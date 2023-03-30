const languages = {
  en: {

    person: {
      name: {
        firstName: "Vadym",
        secondName: "Liumanov",
      },
      jobTitle: "Frontend Developer"
    },

    contacts: {
      header: "Contacts",
      list: null
    },

    techSkills: {
      header: "Tech Skills",
      list: [
        {
          id: "1",
          skillName: "Javascript/ES6"
        },
        {
          id: "2",
          skillName: "React"
        },
        {
          id: "3",
          skillName: "Redux"
        },
        {
          id: "4",
          skillName: "TypeScript"
        },
        {
          id: "5",
          skillName: "HTML5"
        },
        {
          id: "6",
          skillName: "CSS3/SCSS"
        },
        {
          id: "7",
          skillName: "Adaptive Design"
        },
        {
          id: "8",
          skillName: "Git"
        },
      ]
    },

    softSkills: {
      header: "Soft Skills",
      list: [
        {
          id: "1",
          skillName: "Team player"
        },
        {
          id: "2",
          skillName: "Responsibility"
        },
        {
          id: "3",
          skillName: "Attention to details"
        },
        {
          id: "4",
          skillName: "Communication"
        },
        {
          id: "5",
          skillName: "Self-management"
        },
        {
          id: "6",
          skillName: "Result-thinking"
        },
        {
          id: "7",
          skillName: "Learn and Improve"
        },
        {
          id: "8",
          skillName: "Proactive"
        }
      ]
    },

    languagesList: {
      header: "Languages",
      list: [
        {
          id: "1",
          language: "Russian - Native"
        },
        {
          id: "2",
          language: "English - B1 Intermediate"
        },
      ]
    },

    downloadCvBtnText: "Download CV",

    profile: {
      header: "Profile",
      text: `As a Frontend Software Engineer with a passion for coding, 
      I'm excited to contribute my skills to a company's projects and help 
      troubleshoot complex problems. I am seeking a position where I can utilize 
      my expertise in frontend development and ensure timely projects completion.`
    },

    experience: {
      header: "Work Experience",
      list: [
        {
          id: "1",
          itemHeader: {
            position: "Frontend Developer",
            company: "Freelance"
          },
          itemSubHeader: "March 2022 - Present",
          text: `Developed responsive websites for clients across various industries.\n
          Enhanced websites functionality and resolved any technical issues or bugs.\n
          Debugged, refactored, and optimized code for optimal performance.\n
          Utilized a variety of technologies including HTML5, CSS3, Tailwind, JavaScript, Git, React, Redux and TypeScript.`
        },

        {
          id: "2",
          itemHeader: {
            position: "Frontend Developer",
            company: "SysGears"
          },
          itemSubHeader: "September 2021 - February 2022",
          text: `Designed responsive and cross-browser compatible websites for a range of clients.\n
          Developed new client-side products and refactored an existing code.\n
          Collaborated with designers and developers to ensure seamless project delivery.\n
          Employed various technologies including HTML5, CSS3, SCSS AntDesign, JavaScript, React, Redux.`
        },
        {
          id: "3",
          itemHeader: {
            position: "Frontend Developer",
            company: "Freelance"
          },
          itemSubHeader: "October 2020 - August 2021",
          text: `Created responsive websites, including online stores, landing pages, catalogs, and blogs.\n
          Utilized HTML, CSS, and SCSS for website layout.\n
          Developed applications using React, including class and functional components.\n
          Debugged websites for optimal performance.`
        },
      ]
    },

    education: {
      header: "Education",
      list: [
        {
          id: "1",
          itemHeader: "Frontend Developer Courses",
          itemSubHeader: "February 2020 - September 2020",
          text: `Completed an intensive program focused on frontend development technologies and methodologies.\n
          Mastered technologies including HTML, CSS, SCSS, BEM, adaptive, responsive and cross-browser layout, JavaScript, React, Redux, Redux-thunk, TypeScript, Node, REST API, Git and debugging in browser.\n
          Developed a non-commercial project, a multi-page social network site for communication between software developers using HTML, CSS, JavaScript, Typescript, React, Redux, Redux-thunk and REST API.`
        },
        {
          id: "2",
          itemHeader: "Eastern Ukrainian National University",
          itemSubHeader: "September 1998 - June 2002",
          text: `Completed education in consumer electronic equipment.\n
          Obtained a specialist degree in electronics with a GPA of 4.8.`
        },
      ]
    }
  },

  ru: {

    person: {
      name: {
        firstName: "Вадим",
        secondName: "Люманов",
      },
      jobTitle: "Фронтэнд разработчик"
    },

    contacts: {
      header: "Контакты",
      list: null
    },

    techSkills: {
      header: "Технические навыки",
      list: [
        {
          id: "1",
          skillName: "Javascript/ES6"
        },
        {
          id: "2",
          skillName: "React"
        },
        {
          id: "3",
          skillName: "Redux"
        },
        {
          id: "4",
          skillName: "TypeScript"
        },
        {
          id: "5",
          skillName: "HTML5"
        },
        {
          id: "6",
          skillName: "CSS3/SCSS"
        },
        {
          id: "7",
          skillName: "Adaptive Design"
        },
        {
          id: "8",
          skillName: "Git"
        },
      ]
    },

    softSkills: {
      header: "Мягкие навыки",
      list: [
        {
          id: "1",
          skillName: "Командный игрок"
        },
        {
          id: "2",
          skillName: "Ответственность"
        },
        {
          id: "3",
          skillName: "Внимание к деталям"
        },
        {
          id: "4",
          skillName: "Коммуникабельность"
        },
        {
          id: "5",
          skillName: "Самоорганизация"
        },
        {
          id: "6",
          skillName: "Ориентированность на результат"
        },
        {
          id: "7",
          skillName: "Обучение и совершенствование"
        },
        {
          id: "8",
          skillName: "Конструктивность"
        }
      ]
    },

    languagesList: {
      header: "Языки",
      list: [
        {
          id: "1",
          language: "Русский - Родной"
        },
        {
          id: "2",
          language: "Английский - B1 Средний"
        },
      ]
    },

    downloadCvBtnText: "Скачать CV",

    profile: {
      header: "Профиль",
      text: `Как фронтэнд-программист, любящий свое дело, я рад внести свой вклад 
      в проекты компании и помочь в решении сложных задач. Ищу должность, на которой cмог бы использовать 
      свой опыт во фронтэнд разработке и обеспечивать своевременное завершение проектов.`
    },

    experience: {
      header: "Опыт работы",
      list: [
        {
          id: "1",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "Фриланс"
          },
          itemSubHeader: "Март 2022 - настоящее время",
          text: `Разработка адаптивных веб-сайт для клиентов из различных отраслей.\n
          Расширение функциональности веб-сайтов, устранение технических проблем и ошибок.\n
          Отладка, рефакторинг и оптимизация кода для обеспечения оптимальной производительности.\n
          Технологии: HTML5, CSS3, Tailwind, JavaScript, Git, React, Redux и TypeScript.`
        },

        {
          id: "2",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "SysGears"
          },
          itemSubHeader: "Сентябрь 2021 - Февраль 2022",
          text: `Разработка адаптивных и кросс-браузерных веб-сайтов для различных клиентов.\n
          Разработка клиентской части новых продуктов и рефакторинг существующего кода.\n
          Взаимодействие с дизайнерами и разработчиками для обеспечения бесперебойной реализации проекта.\n
          Технологии: HTML5, CSS3, SCSS, AntDesign, JavaScript, React, Redux.`
        },

        {
          id: "3",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "Фриланс"
          },
          itemSubHeader: "Октябрь 2020 - Август 2021",
          text: `Создание адаптивных веб-сайтов различных типов: интернет-магазинов, лендингов, каталогов, блогов.\n
          Верстка сайтов по макетам c использованием HTML, CSS, SCSS.\n
          Разработка приложений на React с использованием классовых и функциональных компонентов.\n
          Отладка работы сайтов для обеспечения оптимальной производительности.`
        },
      ]
    },

    education: {
      header: "Образование",
      list: [
        {
          id: "1",
          itemHeader: "Курсы фронтэнд разработчика",
          itemSubHeader: "Февраль 2020 - Сентябрь 2020",
          text: `Прошел интенсивную программу обучения технологиям фронтэнд-разработки.\n
          Овладел технологиями: HTML, CSS, SCSS, BEM, адаптивная, отзывчивая и кроссбраузерная верстка,
          JavaScript, React, Redux, Redux-thunk, TypeScript, Node, REST API, Git и debugging in browser.\n
          Разработал некоммерческий проект, многостраничную социальную сеть для взаимодействия разработчиков программного обеспечения.
          Технологии: HTML, CSS, JavaScript, Typescript, React, Redux, Redux-thunk и REST API.`
        },
        {
          id: "2",
          itemHeader: "Восточноукраинский национальный университет",
          itemSubHeader: "Сентябрь 1998 - Июнь 2002",
          text: `Прошел обучение по специальности бытовой электронной аппаратуры.\n
            Получил степень специалиста в области электронной аппаратуры со средним баллом 4.8.`
        },
      ]
    }
  },
}

export default languages