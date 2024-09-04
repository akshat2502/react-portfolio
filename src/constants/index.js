import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";

export const HERO_CONTENT = `Hi, I'm Akshat, a Software Engineer from Delhi, I specialize in crafting innovative web applications. With a strong foundation in React, Next.js, Node.js, and various databases, I'm dedicated to delivering high-quality solutions that drive business growth. `;

export const ABOUT_TEXT = ["🐱‍🏍 Currently in my Final year of B.Tech in Computer Science.","🌇 Delhi Native, with a passion for creating and developing software that addresses real-world problems.","🌱 I’m currently learning system design.","👯 I’m looking to collaborate on mern stack based projects.","📫 Reach out to me if you have some amazing opportunity or project ideas at akshatarora411@gmail.com.", "⚡ Fun fact:  I craft web applications by day and melodies by night – I'm not just a coding enthusiast, but also a passionate guitarist! 🎶"];


export const PROJECTS = [
  {
    title: "Financely",
    image: project1,
    description:
    "Created a personal finance app with React and Firebase, offering real-time transaction tracking, CSV import/export, and interactive charts for financial insights.",
    technologies: ["React", "Ant Design", "Rechart", "Firebase"],
    link: "https://financelyy.vercel.app"
  },
  {
    title: "Book Notes",
    image: project2,
    description:
    "Developed a web app for organizing and tracking book notes, featuring book cover integration, rating system, and sorting functionality.",
    technologies: ["EJS", "Node", "RestAPIs", "Postgresql"],
    link: "https://github.com/akshat2502/BookNotes"
  },
  {
    title: "Travel Advisor",
    image: project3,
    description:
    "Created a travel advisory app using React and Google Maps, offering interactive maps and personalized recommendations for restaurants and hotels.",
    technologies: ["React", "Bootstrap", "APIs"],
    link: "https://awaye.netlify.app/"
  },
  {
    title: "Pdf Fusion",
    image: project4,
    description:
    "Created a web application that allows users to upload and combine multiple PDF files into a single, downloadable document.",
    technologies: ["Bootstrap", "Node", "Express", "mysql"],
    link: "https://github.com/akshat2502/pdf-fusion-plus"
  },
];

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Senior Full Stack Developer",
    company: "Google Inc.",
    description: `Led a team in developing and maintaining web applications using JavaScript, React.js, and Node.js. Implemented RESTful APIs and integrated with MongoDB databases. Collaborated with stakeholders to define project requirements and timelines.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  }
];

export const CONTACT = {
  address: "Delhi, India ",
  phoneNo: "+91 9540913274 ",
  email: "akshatarora411@gmail.com",
};
