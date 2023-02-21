const languages = {
  en: {

    person: {
      name: {
        firstName: 'Vadym',
        secondName: 'Liumanov',
      },
      jobTitle: 'Frontend Developer'
    },

    contacts: {
      header: 'Contacts',
      list: null
    },

    techSkills: {
      header: 'Tech Skills',
      list: [
        {
          id: '1',
          skillName: 'Javascript/ES6'
        },
        {
          id: '2',
          skillName: 'React.js'
        },
        {
          id: '3',
          skillName: 'Redux'
        },
        {
          id: '4',
          skillName: 'HTML5'
        },
        {
          id: '5',
          skillName: 'CSS3/SCSS'
        },
        {
          id: '6',
          skillName: 'Adaptive Design'
        },
        {
          id: '7',
          skillName: 'Git'
        },
      ]
    },

    softSkills: {
      header: 'Soft Skills',
      list: [
        {
          id: '1',
          skillName: 'Team player'
        },
        {
          id: '2',
          skillName: 'Responsibility'
        },
        {
          id: '3',
          skillName: 'Attention to details'
        },
        {
          id: '4',
          skillName: 'Comunication'
        },
        {
          id: '5',
          skillName: 'Self-management'
        },
        {
          id: '6',
          skillName: 'Result thinking'
        },
        {
          id: '7',
          skillName: 'Learn&Improve'
        },
        {
          id: '8',
          skillName: 'Proactive'
        }
      ]
    },

    profile: {
      header: 'Profile',
      text: "I'm an enthusiastic and detail-oriented Frontend Software Engineer seeking an position with Company to use my skills in coding, troubleshooting complex problems, and assisting in the timely completion of projects."
    },

    experience: {
      header: 'Work Experience',
      list: [
        {
          id: '1',
          itemHeader: {
            position: 'Frontend Developer',
            company: 'BESTWEB'
          },
          itemSubHeader: 'November 2022 - up now',
          text: 'Developed React.js, Redux, CSS, HTML5, and adaptive layout for web applications.'
        },
        {
          id: '2',
          itemHeader: {
            position: 'Frontend Developer',
            company: 'Reactive Media'
          },
          itemSubHeader: 'October 2021 - Novermber 2022',
          text: 'Built innovative user interfaces using React.js and Redux.'
        },
        {
          id: '3',
          itemHeader: {
            position: 'Frontend Developer',
            company: 'CloudMill'
          },
          itemSubHeader: 'June 2021 - September 2021',
          text: 'Developed React.js, Redux, CSS, HTML5 and adaptive layout for projects.'
        },
        {
          id: '4',
          itemHeader: {
            position: 'Frontend Developer',
            company: 'INSPIRO'
          },
          itemSubHeader: 'June 2021 - September 2021',
          text: 'Developed React.js, Redux, CSS, HTML5 and adaptive layout for projects.'
        },
      ]
    },

    education: {
      header: 'Education',
      list: [
        {
          id: '1',
          itemHeader: 'Kyiv National University',
          itemSubHeader: 'September 2015 - May 2019',
          text: "Passed training in a specialized university for the specialty of web development, which lasted 4 years. I received a bachelor's degree in information technology with a GPA of 4.7."
        }
      ]
    }
  },

  ru: null
}

export default languages