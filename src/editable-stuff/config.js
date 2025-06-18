// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#96BBBB, #618985, #414535, #A8763E, #C19875",
  firstName: "Nicolás",
  middleName: "Alberto",
  lastName: "Sira",
  message: "Transforming data into strategic decisions, one line of code at a time.",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nasd0408",
    },
  
    {
      image: "fa-linkedin",
      url: "https://www.linkedin.com/in/nicolas-sira/",
    },
    {
      image: "fas fa-envelope",
      url: "mailto:nasd0408@gmail.com",
    },
  
  ],
};

// ABOUT SECTION
// If you want the About Section to show a profile picture you can fill the profilePictureLink either with:
//a) your Instagram username
//      i.e:profilePictureLink:"johnDoe123",
//b) a link to an hosted image
//      i.e:profilePictureLink:"www.picturesonline.com/johnDoeFancyAvatar.jpg",
//c) image in "editable-stuff" directory and use require("") to import here,
//      i.e: profilePictureLink: require("../editable-stuff/Nicolas.png"),
//d) If you do not want any picture to be displayed, just leave it empty :)
//      i.e: profilePictureLink: "",
// For Resume either provide link to your resume or import from "editable-stuff" directory
//     i.e resume: require("../editable-stuff/resume.pdf"),
//         resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",

const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Nicolas.png"),
  imageSize: 375,
  message1: "I'm Nicolás Sira, a Computer Engineer with a strong passion for transforming complex data into strategic business insights. Graduated in 2024, I bring nearly two years of hands-on experience leading an IT Department in the distribution sector in Barquisimeto, Venezuela",
  message2: "My expertise includes ERP system migrations, developing Power BI dashboards for data-driven decision-making, and implementing Python-based automation solutions that significantly boosted operational efficiency. I also excelled in technical support for a 60-person team and vendor management.",
  message3:"With solid skills in Python, SQL, and Power BI, complemented by experience in JavaScript frameworks like React and Vue, I'm now seeking Data Analyst roles where I can leverage my technical proficiency and leadership abilities to drive impactful solutions and contribute to organizational growth.",
  resume: "https://drive.google.com/file/d/1ceQAksKBauo8aL8HT-G8gP0EhPn0GJLT/view?usp=sharing",
};

// PROJECTS SECTION
// Setting up project lenght will automatically fetch your that number of recently updated projects, or you can set this field 0 to show none.
//      i.e: reposLength: 0,
// If you want to display specfic projects, add the repository names,
//      i.e ["repository-1", "repo-2"]
const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "nasd0408", //i.e."johnDoe12Gh"
  reposLength: 4,
  specificRepos: [],
};

// Leadership SECTION
const leadership = {
  show: false,
  heading: "Leadership",
  message:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae auctor eu augue ut lectus arcu bibendum at varius. Libero justo laoreet sit amet cursus sit amet. Imperdiet dui accumsan sit amet nulla facilisi morbi. At auctor urna nunc id. Iaculis urna id volutpat lacus laoreet non curabitur gravida. Et magnis dis parturient montes nascetur ridiculus mus mauris. In nisl nisi scelerisque eu ultrices vitae auctor. Mattis nunc sed blandit libero volutpat sed cras ornare. Pulvinar neque laoreet suspendisse interdum consectetur libero.",
  images: [
    { 
      img: require("../editable-stuff/Nicolas.png"), 
      label: "First slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
    { 
      img: require("../editable-stuff/Nicolas.png"), 
      label: "Second slide label", 
      paragraph: "Nulla vitae elit libero, a pharetra augue mollis interdum." 
    },
  ],
  imageSize: {
    width:"615",
    height:"450"
  }
};

// SKILLS SECTION
const skills = {
    show: true,
    heading: "My Skills", // A more personal heading
    hardSkills: [
        { name: "Python", value: 90 }, // Strong for automation and data
        { name: "SQL", value: 85 },    // Key for data and ERP
        { name: "Power BI", value: 80 }, // Direct experience building dashboards
        { name: "JavaScript", value: 70 }, // Good understanding, base for frameworks
        { name: "React.js", value: 65 }, // Experience with frameworks
        { name: "Vue.js", value: 60 },   // Experience with frameworks
        { name: "Express.js", value: 55 }, // Experience with JS backend
        { name: "MS SQL Server", value: 75 }, // Direct use in your experience
        { name: "HTML & CSS", value: 65 }, // Necessary for front-end and dashboards
        { name: "Process Automation", value: 80 }, // Direct experience
        { name: "Data Analysis", value: 85 }, // Your core focus
        { name: "ERP System Migration", value: 70 } // Specific skill from your experience
    ],
    softSkills: [
        { name: "Leadership", value: 95 }, // You were a department head
        { name: "Project Management", value: 90 }, // ERP migration, automations
        { name: "Problem Solving", value: 95 },
        { name: "Interpersonal Communication", value: 90 }, // Managing 60 people, vendors
        { name: "Technological Adaptability", value: 90 }, // Staying up-to-date
        { name: "Results-Oriented", value: 95 },
        { name: "Team Collaboration", value: 85 },
        { name: "Vendor Management", value: 80 } // Direct skill from your experience
    ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "I'm currently looking for full-time Software Engineering or web develpment opportunities! If you know of any positions available, if you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "nasd0408@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Head IT, Super Cauchos Mercabar',// Here Add Company Name
      companylogo: "https://gruposupercauchos.com/wp-content/uploads/2024/01/Grupo-Super-Cauchos-Fondo-negro-e1704911957923-1024x661.png",
      date: 'October 2023-  June - 2025',
    },
    {
      role: 'ERP consultant, Multillantas colombia',
      companylogo:"https://gruposupercauchos.com/wp-content/uploads/2024/01/LOGOMLLSINFONDO-08-4-1-e1706644335197.png",
      date: 'January 2023 – June 2025',
    },
    {
      role: 'Head IT, Super Lub',
      companylogo:"https://gruposupercauchos.com/wp-content/uploads/2024/01/industrial-2.3-e1705075526678.png",
      date: 'October 2023-  June - 2025',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
