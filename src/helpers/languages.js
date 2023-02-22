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
          text: {
            p1: "Creating responsive websites of various types",
            p2: "Improvement of functionality and fixing bugs in customer's projects.",
            p3: "Debugging, refactoring and optimizing code.",
            p4: "Technologies: HTML5, CSS3, Scss, JavaScript, Git, React.JS, Redux, Redux-Thunk, Axios."
          }
        },
        {
          id: "2",
          itemHeader: {
            position: "Frontend Developer",
            company: "SysGears"
          },
          itemSubHeader: "September 2021 - February 2022",
          text: {
            p1: "Designing responsive and cross-browser sites of varying complexity using HTML5, CSS3 and Javascript.",
            p2: "Development new product's client side",
            p3: "SPA development with React.js, Redux, REST API, react-router",
            p4: "Refactoring of  an existing code",
            p5: "Collaboration with designers and developers",
            p6: "Technologies: HTML5, CSS3, Scss, AntDesign, JavaScript, Ajax, Git, React.JS, TypeScript, Redux, Redux-Thunk, Axios."
          }
        },
        {
          id: "3",
          itemHeader: {
            position: "Frontend Developer",
            company: "Freelance"
          },
          itemSubHeader: "October 2020 - August 2021",
          text: {
            p1: "Creating responsive websites of various types: online stores, landing pages, catalogs, blogs.",
            p2: "Layout based on layouts using HTML, CSS, SCSS.",
            p3: "Developing Applications with React.JS using class and functional components",
            p4: "Debugging in browser"
          }
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
          text: {
            p1: "Mastered technologies: HTML, CSS, SCSS, BEM, adaptive, responsive and cross-browser layout, JavaScript, React.js, Redux, Redux-thunk, TypeScript, Node.js, REST API, Git, debugging in browser.",
            p2: "Developed a multi-page social network site (non-commercial project) for communication between software developers. Technologies used: HTML/CSS; JavaScript/Typescript React.js, Redux, Redux-thunk REST API.",
          }
        },
        {
          id: "2",
          itemHeader: "Eastern Ukrainian National University",
          itemSubHeader: "September 1998 - June 2002",
          text: {
            p1: "Passed training at the university in the specialty of consumer electronic equipment.",
            p2: "Received a specialist’s degree in electronics with a GPA of 4.8."
          }
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
          skillName: "Самостоятельность"
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
          text: {
            p1: "Создание адаптивных сайтов различных типов.",
            p2: "Доработка функционала и исправление багов в проектах заказчика.",
            p3: "Отладка, рефакторинг и оптимизация кода.",
            p4: "Технологии: HTML5, CSS3, Scss, JavaScript, Git, React.JS, Redux, Redux-Thunk, Axios."
          }
        },
        
        {
          id: "2",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "SysGears"
          },
          itemSubHeader: "Сентябрь 2021 - Февраль 2022",
          text: {
            p1: "Верстка адаптивных и кросбраузерных сайтов разной сложности с использованием HTML5, CSS3 и Javascript.",
            p2: "Разработка клиентской части новых продуктов (React.js)",
            p3: "Разработка SPA на React.js, Redux, REST API, react-router",
            p4: "Рефакторинг существующего кода",
            p5: "Сотрудничество с дизайнерами и разработчиками",
            p6: "Технологии: HTML5, CSS3, Scss, AntDesign, JavaScript, Ajax, Git, React.JS, TypeScript, Redux, Redux-Thunk, Axios."
          }

        },
        {
          id: "3",
          itemHeader: {
            position: "Фронтэнд разработчик",
            company: "Фриланс"
          },
          itemSubHeader: "October 2020 - August 2021",
          text: {
            p1: "Создание адаптивных сайтов различных типов: интернет-магазинов, лендингов, каталогов, блогов.",
            p2: "Верстка по макетам c использованием HTML, CSS, SCSS.",
            p3: "Разработка приложений на React.JS с использованием классовых и функциональных компонентов",
            p4: "Отладка в браузере"
          }
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
          text: {
            p1: "Освоил технологии: HTML, CSS, SCSS, BEM, адаптивная, отзывчивая и кроссбраузерная верстка, JavaScript, React.js, Redux, Redux-thunk, TypeScript, Node.js, REST API, Git, debugging in browser.",
            p2: "Разработал многостраничный сайт социальной сети (не коммерческий проект) для общения разработчиков программного обеспечения. Технологии: HTML/CSS; JavaScript/Typescript React.js, Redux, Redux-thunk REST API.",
          }
        },
        {
          id: "2",
          itemHeader: "Восточноукраинский национальный университет",
          itemSubHeader: "Сентябрь 1998 - Июнь 2002",
          text: {
            p1: "Прошел обучение в университете по специальности бытовой электронной аппаратуры.",
            p2: "Получил степень специалиста в области электроники со средним баллом 4.8."
          }
        },
      ]
    }
  },
}

export default languages