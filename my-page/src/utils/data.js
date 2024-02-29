import { faCode, faServer, faScrewdriverWrench, faHandshake } from '@fortawesome/free-solid-svg-icons'
import woof_poster from '../assets/images/woof_1.png'
import woof_poster2 from '../assets/images/woof_2.png'
import movie_poster from '../assets/images/movie_1.png'
import movie_poster2 from '../assets/images/movie_2.png'
import van_poster from '../assets/images/van_1.png'
import van_poster2 from '../assets/images/van_2.png'

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

export const PROJECTS = [
  {
    title: "WOOF",
    description: "Application for searching and displaying information about your favourite breed of dog",
    url: "https://woof-api.netlify.app/",
    poster: woof_poster,
    poster2: woof_poster2,
    git: "https://github.com/zexcv/WOOF",
  },
  {
    title: "Movie Watchlist",
    description: "Application for finding movies you want to watch and adding them to your watchlist",
    url: "https://my-movie-watchlist-api.netlify.app/",
    poster: movie_poster,
    poster2: movie_poster2,
    git: "https://github.com/zexcv/MovieWatchList",
  },
  {
    title: "Vanlife",
    description: "The van rental application. Part of the Frontend Developer Path course on Scrimba.com",
    url: "https://van-rent-project.netlify.app/",
    poster: van_poster,
    poster2: van_poster2,
    git: "https://github.com/zexcv/VAN",
  },
];
