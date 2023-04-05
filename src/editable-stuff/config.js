// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#E3170A, #1ad7c0, #ff9b11, #9b59b6, #CE84AD, #ecf0f1",
  firstName: "Nicolás",
  middleName: "Alberto",
  lastName: "Sira",
  message: " Code that is beautiful to look at, is beautiful to use. ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/nasd0408",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/nasd_04/",
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
  message:
    "Hello there! My name is Nicolás Alberto Sira Delgado, and I am an enthusiastic student of computer engineering. My main goal is to enhance my skills and knowledge in the field of technology while seeking opportunities to grow and develop further. Throughout my academic journey, I have gained experience working collaboratively in teams and leading development groups. Additionally, I possess a sharp learning ability and stay up-to-date with the newest trends and advancements in the technology industry.",
  resume: "https://drive.google.com/file/d/1Fv5g6iFO0Pn2jWkx4qi7hpyEKr1zy3Gj/view?usp=sharing",
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
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "Django", value: 70 },
    { name: "SQL", value: 75 },
    { name: "NoSQL", value: 50 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "React Native", value: 80 },
    { name: "HTML/CSS", value: 55 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 100 },
    { name: "Leadership", value: 100 },
    { name: "Collaboration", value: 100 },
    { name: "Positivity", value: 100 },
    { name: "Adaptability", value: 100 },
    { name: "Problem Solving", value: 100 },
    { name: "Empathy", value: 100 },
    { name: "Organization", value: 100 },
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
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, leadership, getInTouch, experiences };
