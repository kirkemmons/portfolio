let info = {
  name: "Kirk Emmons",
  logo_name: "Emmons",
  flat_picture: require("./src/assets/portrait.png"),
  config: {
    use_cookies: true,
    navbar: {
      blur: false
    }
  },
  description:
    "I'm a Front-end Web Developer with a passion for building projects that are clean and crisp. I specialize in VueJs and most recently Nuxt.js. Former hospitality professional who's eager to enhance a company's user experience.",
  links: {
    linkedin: "https://www.linkedin.com/in/kirk-emmons/",
    github: "https://github.com/kirkemmons",
    gmail: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kirkemmons2@gmail.com",
    resume:
      "https://docs.google.com/document/d/1DqGFo1v-f1wUF0p_iJlnI9fc-4--evvVcD5uN5l0yCU/edit?usp=sharing"
  },
  education: [
    {
      name: "Hobart & William Smith Colleges",
      place: "Geneva, NY",
      date: "August, 2009 - May, 2013",
      degree: "Economics & Public Policy",
      gpa: "",

      skills: [
        // "Skills gained:",
        // "Design, conduct and interpret research and statistical analysis. ",
        // "Apply an evidence-based approach to problems.",
        // "Communicate findings using models, charts and graphs.",
        // "Communicate research findings using clear, accurate, concise writing.",


      ]
    },
    {
      name: "General Assembly",
      course:"Full Stack Developer",
      place: "Remote",
      date: "August, 2021 - March, 2022",
      degree: "Software Engineering Immersive Certificate",
      gpa: "",
      description:
        "Full-stack software engineering immersive student in an intensive, 24-week, 420+ hour program focused on product development fundamentals, object-oriented programming, MVC frameworks, data modeling, and team collaboration strategies.",
      skills: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Node.js",
        "JQuery",
        "Express.js",
        "React.js",
        "Bootstrap",
        "Python",
        "SQL",
        "OOP"
      ]
    }
  ],
  experience: [
    {
      name: "Freelance",
      place: "Remote",
      date: "March, 2022 - Present",
      position: "Front-end Web Developer",
      description:
        "I have extensive experience building and maintaining websites using Nuxt.js, a JavaScript framework based on Vue.js. I have used this technology to develop several marketing websites, including LaundryLuv, ShareGro, 464-Ranch, and ASP-Clips. In each of these projects, I was responsible for the full development process, including implementing new features and functionality, debugging, and troubleshooting. In addition, I regularly help maintain existing code bases, such as Alive and Well Austin, on a weekly basis. I have also built out new webpages for an existing code base called Prosthodontics of Texas, demonstrating my ability to work with and enhance existing code. I have a strong understanding of the Nuxt.js framework and have used it to create dynamic and responsive websites that meet the needs of my clients.",
        skills: [
          "Nuxt.js",
          "Vue.js",
          "JavaScript",
          "HTML5",
          "CSS3",
          "Bootstrap",
          "Vuetify",
          "Pug",
          "Netlify CMS"
      ]
    },
  ],
  skills: [
    {
      title: "languages",
      info: [
        "Javascript",
        "CSS",
        "HTML",
        "Python"

      ],
      icon: "fa fa-code"
    },
    // {
    //   title: "data frameworks",
    //   info: [
    //     ""
    //   ],
    //   icon: "fa fa-cubes"
    // },
    {
      title: "web technologies",
      info: ["Vue.js",  "Nuxt.js", "React.js", "Node.js", "Express.js", "Django", "HTML", "CSS", "HTTP", "REST"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "SQL", "PostgresSQL"],
      icon: "fa fa-database"
    },
    {
      title: "design",
      info: ["Illustrator", "Photoshop"],
      icon: "fa fa-pencil-square-o"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Windows",
        "Git",
        "Scrum",
        "Github",
        "Heroku",
        "Netlify",
        "Figma",
        "Trello",
        "CLI", 
        "VSCode"
      ],
      icon: "fas fa-tools"
    }
  ],
  portfolio: [

    {
      name: "ASP-Clips",
      pictures: [
        {
          img: require("./src/assets/portfolio/projects/clips1.png")
        },
        {
          img: require("./src/assets/portfolio/projects/clips3.png")
        },
        {
          img: require("./src/assets/portfolio/projects/clips2.png")
        }
      ],
      technologies: ["Nuxt.js", "Bootstrap","Scss", "Netlify CMS"],
      category: "Marketing Website",
      github: "",
      date: "August, 2022",
      visit: "https://www.aspclips.com/",
      description:
        "Marketing website that offers car parts repair and delivery services based in Texas. Built out with Nuxt.js."
    },
    {
      name: "DirectorsUncut",
      pictures: [
        
        {
          img: require("./src/assets/portfolio/projects/directorsUncut2.png")
        },
        {
          img: require("./src/assets/portfolio/projects/directorsUncut1.png")
        },

      ],
      technologies: ["React.js", "React Router", "Vanilla CSS", "Python", "Django", "PostgresSQL"],
      category: "Project",
      github: "https://github.com/kirkemmons/directors_client",
      visit: "https://kirkemmons.github.io/directors_client/",
      date: "February, 2022",
      description:
        "DirectorsUncut is a full stack CRUD (Create, Read, Update, and Delete) application that serves as an online database for movie enthusiasts to keep track of their favorite directors and films. The site allows users to authenticate themselves, enabling them to maintain a personalized list of directors and films that only they can access and modify. Users can use the application to perform CRUD operations on the information stored in their personal list. They can add new directors and films, update existing entries, and delete directors and films that they no longer wish to track."
    },
    {
      name: "ShareGro",
      pictures: [
        {
          img: require("./src/assets/portfolio/projects/ShareGro1.png")
        },
        {
          img: require("./src/assets/portfolio/projects/ShareGro2.png")
        }
      ],
      technologies: ["Nuxt.js", "Bootstrap","Scss", "Netlify CMS"],
      category: "Marketing Website",
      github: "",
      date: "July, 2022",
      visit: "https://sharegro.netlify.app/",
      description:
        "Marketing website that offers insight on building wealth through a new stock trading app called ShareGro. Built out with Nuxt.js."
    },
    {
      name: "Laundry Luv",
      pictures: [
        {
          img: require("./src/assets/portfolio/projects/laundryluv1.png")
        },
        {
          img: require("./src/assets/portfolio/projects/laundryluv2.png")
        }
      ],
      technologies: ["Nuxt.js", "Bootstrap","Scss", "Netlify CMS"],
      category: "Marketing Website",
      github: "",
      date: "April, 2022",
      visit: "https://www.laundryluv.com/",
      description:  "Laundrymat website that offers various business laundry services throughout Texas. Built out with Nuxt.js.",
    }
  ],
  //  recommendations: [
  //   {
  //     title:
  //       "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
  //     author: "Timothy Gray",
  //     position: "CTO",
  //     company: "Startup Norway As",
  //     location: " Oslo, Norway"
  //   },
  //   {
  //     title:
  //       "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
  //     author: "Hansley Jacob",
  //     position: "Project Manager",
  //     company: "Startup Norway As",
  //     location: "Oslo, Norway"
  //   }
  // ]
};

export default info;
