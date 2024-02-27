import { faCode, faServer, faScrewdriverWrench, faHandshake } from '@fortawesome/free-solid-svg-icons'

export const SKILLS = [
  {
    title: "Frontend",
    icon: faCode,
    skills: [
      { skill: "HTML5", precentage: "70%" },
      { skill: "CSS3 (SCSS)", precentage: "75%" },
      { skill: "JavaScript", precentage: "65%" },
      { skill: "React.js", precentage: "70%" },
    ],
  },
  {
    title: "Backend",
    icon: faServer,
    skills: [
      { skill: "Nothin to be proud of yet", precentage: "0%" },
    ],
  },
  {
    title: "Tools",
    icon: faScrewdriverWrench,
    skills: [
      { skill: "Rest API", precentage: "65%" },
      { skill: "Git & Github", precentage: "80%" },
      { skill: "Visual Studio Code", precentage: "75%" },
      { skill: "Figma", precentage: "85%" },
      { skill: "Responsive Design", precentage: "65%" },
    ],
  },
  {
    title: "Soft Skills",
    icon: faHandshake,
    skills: [
      { skill: "Problem Solving" },
      { skill: "Collaboration" },
      { skill: "Attention to detail" },
      { skill: "Creativity" },
      { skill: "UX/UI" },
    ],
  },
];
