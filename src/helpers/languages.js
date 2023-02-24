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
          skillName: "React.js"
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
          skillName: "Comunication"
        },
        {
          id: "5",
          skillName: "Self-management"
        },
        {
          id: "6",
          skillName: "Result thinking"
        },
        {
          id: "7",
          skillName: "Learn&Improve"
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
          language: "English - Intermediate B1"
        },
      ]
    },

    profile: {
      header: "Profile",
      text: "I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects."
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
          itemSubHeader: "March 2022 - up now",
          text: `Creating responsive websites of various types.\n
            Improvement of functionality and fixing bugs in customer's projects.\n
            Debugging, refactoring and optimizing code.\n
            Technologies: HTML5, CSS3, Scss, JavaScript, Git, React.JS, Redux, Redux-Thunk, Axios.`
        },

        {
          id: "2",
          itemHeader: {
            position: "Frontend Developer",
            company: "SysGears"
          },
          itemSubHeader: "September 2021 - February 2022",
          text: `Designing responsive and cross-browser sites of varying complexity using HTML5, CSS3 and Javascript.\n
            Development new product's client side.\n
            SPA development with React.js, Redux, REST API, react-router.\n
            Refactoring of  an existing code.\n
            Collaboration with designers and developers.\n
            Technologies: HTML5, CSS3, Scss, AntDesign, JavaScript, Ajax, Git, React.JS, TypeScript, Redux, Redux-Thunk, Axios.`
        },
        {
          id: "3",
          itemHeader: {
            position: "Frontend Developer",
            company: "Freelance"
          },
          itemSubHeader: "October 2020 - August 2021",
          text: `Creating responsive websites of various types: online stores, landing pages, catalogs, blogs.\n
            Layout based on layouts using HTML, CSS, SCSS.\n
            Developing Applications with React.JS using class and functional components.\n
            Debugging in browser.`
        },
      ]
    },

    education: {
      header: "Education",
      list: [
        {
          id: "1",
          itemHeader: "Frontend developer courses",
          itemSubHeader: "February 2020 - September 2020",
          text: `Mastered technologies: HTML, CSS, SCSS, BEM, adaptive, responsive and cross-browser layout, JavaScript, React.js, Redux, Redux-thunk, TypeScript, Node.js, REST API, Git, debugging in browser.\n
            Developed a multi-page social network site (non-commercial project) for communication between software developers. Technologies used: HTML/CSS; JavaScript/Typescript React.js, Redux, Redux-thunk REST API.`
        },
        {
          id: "2",
          itemHeader: "Eastern Ukrainian National University",
          itemSubHeader: "September 1998 - June 2002",
          text: `Passed training at the university in the specialty of consumer electronic equipment.\n
            Received a specialist’s degree in electronics with a GPA of 4.8.`
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
          skillName: "React.js"
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
          skillName: "Обучаемость и совершенствование"
        },
        {
          id: "8",
          skillName: "Конструктивность"
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
          language: "English - Intermediate B1"
        },
      ]
    },

    profile: {
      header: "Профиль",
      text: "Я увлеченный и внимательный к деталям инженер-программист, ищу работу в компании, чтобы использовать свои навыки в написании кода, решения сложных задач и оказания помощи в своевременном завершении проектов."
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
          text: `Создание адаптивных сайтов различных типов.\n
            Доработка функционала и исправление багов в проектах заказчика.\n
            Отладка, рефакторинг и оптимизация кода.\n
            Технологии: HTML5, CSS3, Scss, JavaScript, Git, React.JS, Redux, Redux-Thunk, Axios.`
        },

        {
          id: "2",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "SysGears"
          },
          itemSubHeader: "Сентябрь 2021 - Февраль 2022",
          text: `Верстка адаптивных и кросбраузерных сайтов разной сложности с использованием HTML5, CSS3 и Javascript.\n
            Разработка клиентской части новых продуктов (React.js).\n
            Разработка SPA на React.js, Redux, REST API, react-router.\n
            Рефакторинг существующего кода.\n
            Взаимодействие с дизайнерами и разработчиками.\n
            Технологии: HTML5, CSS3, Scss, AntDesign, JavaScript, Ajax, Git, React.JS, TypeScript, Redux, Redux-Thunk, Axios.`
        },

        {
          id: "3",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "Фриланс"
          },
          itemSubHeader: "Октябрь 2020 - Август 2021",
          text: `Создание адаптивных сайтов различных типов: интернет-магазинов, лендингов, каталогов, блогов.\n
            Верстка по макетам c использованием HTML, CSS, SCSS.\n
            Разработка приложений на React.JS с использованием классовых и функциональных компонентов.\n
            Отладка в браузере.`
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
          text: `Освоил технологии: HTML, CSS, SCSS, BEM, адаптивная, отзывчивая и кроссбраузерная верстка, JavaScript, React.js, Redux, Redux-thunk, TypeScript, Node.js, REST API, Git, debugging in browser.\n
            Разработал многостраничный сайт социальной сети (не коммерческий проект) для общения разработчиков программного обеспечения. Технологии: HTML/CSS; JavaScript/Typescript React.js, Redux, Redux-thunk REST API.`
        },
        {
          id: "2",
          itemHeader: "Восточноукраинский национальный университет",
          itemSubHeader: "Сентябрь 1998 - Июнь 2002",
          text: `Прошел обучение в университете по специальности бытовой электронной аппаратуры.\n
            Получил диплом специалиста в области электроники со средним баллом 4.8.`
        },
      ]
    }
  },
}

export default languages