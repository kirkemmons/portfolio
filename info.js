let info = {
  name: "Kirk Emmons",
  logo_name: "Emmons",
  // flat_picture: require("./src/assets/portrait.png"),
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
      name: "Freelancer",
      place: "Ithaca, NY",
      date: "March, 2022 - Present",
      position: "Front-end Web Developer (Remote)",
      description:
        "Contributed new and efficient code to live marketing websites including Austin, TX Alive and Well and Prosthodontics of Texas whilst buidling out new web pages and maintaining existing codebases. Also have built out from scratch various marketing websites that have been re-written with Nuxt.js that include LaundryLuv, ShareGro and ASP-Clips.",
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
          img: require("./src/assets/portfolio/projects/clips2.png")
        },
        {
          img: require("./src/assets/portfolio/projects/clips3.png")
        },
        {
          img: require("./src/assets/portfolio/projects/clips1.png")
        }
      ],
      technologies: ["Nuxt.js", "Bootstrap","SASS", "Netlify CMS"],
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
      technologies: ["React.js", "React Router", "Vanilla CSS", "Python", "Django"],
      category: "Project",
      github: "https://github.com/kirkemmons/directors_client",
      visit: "https://kirkemmons.github.io/directors_client/",
      date: "February, 2022",
      description:
        "DirectorsUncut is an online database where you can keep track of your favorite directors and movies. The application will feature information on each director and details about their films. The site is authenticated, which allows users to keep track of director and film information that only the signed in user has submitted. Users will be able to add, update and delete directors and films from their list."
    },
    {
      name: "ShareGro",
      pictures: [
        {
          img: require("./src/assets/portfolio/projects/ShareGro2.png")
        },
        {
          img: require("./src/assets/portfolio/projects/ShareGro1.png")
        }
      ],
      technologies: ["Nuxt.js", "Bootstrap","SASS", "Netlify CMS"],
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
      technologies: ["Nuxt.js", "Bootstrap","SASS", "Netlify CMS"],
      category: "Marketing Website",
      github: "",
      date: "April, 2022",
      visit: "https://www.laundryluv.com/",
      description:  "Laundrymat website that offers various business laundry services throughout Texas. Built out with Nuxt.js.",
    }
  ],
   recommendations: [
    {
      title:
        "In his internship, Bogdan Natain has demonstrated excellent learning ability, and with a dedicated, task oriented approach, he was able to complete his assignment ahead of time.",
      author: "Timothy Gray",
      position: "CTO",
      company: "Startup Norway As",
      location: " Oslo, Norway"
    },
    {
      title:
        "I feel his budding leadership abilities will become even more effective in a diverse and challenging environment.",
      author: "Hansley Jacob",
      position: "Project Manager",
      company: "Startup Norway As",
      location: "Oslo, Norway"
    }
  ]
};

export default info;
