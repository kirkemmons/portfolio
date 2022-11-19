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
    "I'm a Front-end Web Developer with a passion for building projects that look clean and crisp. I specialize in VueJs and most recently Nuxt.js. Former hospitality professional who's eager to enhance a company's user experience.",
  links: {
    linkedin: "https://www.linkedin.com/in/kirk-emmons/",
    github: "https://github.com/kirkemmons",
    gmail: "https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=kirkemmons2@gmail.com",
    resume:
      "https://drive.google.com/file/d/10ad2sPuUTnCW1u7NF4zZB8k3gnXBoayK/view?usp=sharing"
  },
  education: [
    {
      name: "Hobart & William Smith Colleges",
      place: "Geneva, NY",
      date: "August, 2009 - May, 2013",
      degree: "Economics & Public Policy",
      gpa: "3.1/4.0",

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
        "Express",
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
      position: "Full Stack Web Developer",
      description:
        "",
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
        "HTML5"

      ],
      icon: "fa fa-code"
    },
    {
      title: "data frameworks",
      info: [
        "Pillow"
      ],
      icon: "fa fa-cubes"
    },
    {
      title: "web technologies",
      info: ["Vue.js",  "React.js", "Node.js", "HTML", "CSS"],
      icon: "fas fa-laptop-code"
    },
    {
      title: "databases",
      info: ["MongoDB", "MySQL", "OracleSQL",],
      icon: "fa fa-database"
    },
    {
      title: "operating systems & tools",
      info: [
        "MacOS",
        "Windows",
        "Android",
        "Scrum",
        "Heroku",
        "Firebase",
        "AWS S3"
      ],
      icon: "fas fa-tools"
    },
    {
      title: "design",
      info: ["Illustrator", "XD", "Photoshop", "Final Cut Pro"],
      icon: "fa fa-pencil-square-o"
    }
  ],
  portfolio: [

    {
      name: "Todo-application",
      pictures: [

        {
          img: require("./src/assets/portfolio/todo-application/one.png")
        },
        {
          img: require("./src/assets/portfolio/todo-application/two.png")
        },

      ],
      technologies: ["JavaScript", "HTML5", "Netlify"],
      category: "web todo list  app ",
      github: "https://github.com/Natain/todo-application",
      visit: "https://natainbogdan.netlify.app/",
      description:
        "Todo Application was made to help me with the learning schedule and it seams was doing a great job this app helping me to organize all the daily tasks."
    },



    {
      name: "Grocery-listing-react",
      pictures: [
        // {
        //   img: require("./src/assets/portfolio/clumpr/logo.png")
        // },
        {
          img: require("./src/assets/portfolio/grocery/one.png")
        },
        {
          img: require("./src/assets/portfolio/grocery/two.png")
        }
      ],
      technologies: ["CSS", "JavaScript","React.js", "HTML5",],
      category: "Web App",
      github: "https://github.com/Natain/grocery-listing-react",
      date: "",
      visit: "https://grocery-listing-react.netlify.app/",
      description:  "Grocery-listing-react it's a simple app that can help you doing shoppings.",
    },
    {
      name: "Gitscores",
      pictures: [
        {
          img: require("./src/assets/portfolio/Gitscores/one.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/two.png")
        },
        {
          img: require("./src/assets/portfolio/Gitscores/three.png")
        },

      ],
      technologies: ["JavaScript", "CSS", "EJS", "Herokuapp"],
      category: "Scoring app for Github",
      github: "https://github.com/Natain/gitscores",
      date: "Aug, 2021 - Sep, 2021",
      visit: "https://gitscores.herokuapp.com/",
      description:
        "Gitscores v1.0.2 was updated from the orginal with more tools that let you personalize the app on your desingn."
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
