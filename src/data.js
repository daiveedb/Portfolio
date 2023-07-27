import htmlcss from "./projectSvgs/htmlcss.svg";
import tailwind from "./projectSvgs/tailwind.svg";
import reactsvg from "./projectSvgs/reactsvg.svg";
import teamwork from "./projectSvgs/teamwork.svg";
import collaboration from "./projectSvgs/collaboration.svg";
import collaboration2 from "./projectSvgs/collaboration2.svg";
import critical from "./projectSvgs/critical.svg";
import javascriptsvg from "./projectSvgs/javascriptsvg.svg";

import netflixapp from "./projectSvgs/netflixapp.png";
import coffeejunkieapp from "./projectSvgs/coffeejunkieapp.png";
import unimaginaryapp from "./projectSvgs/unimaginaryapp.png";
import bootcampapp from "./projectSvgs/bootcampapp.png";
import blackjackapp from "./projectSvgs/blackjackapp.png";
import traveljournal from "./projectSvgs/traveljournal.png";
import airbnbapp from "./projectSvgs/airbnbapp.png";
import quizzical from "./projectSvgs/quizzicalapp.png";
import memeapp from "./projectSvgs/memeapp.png";
import tenziesapp from "./projectSvgs/tenziesapp.png";
import notesapp from "./projectSvgs/notesapp.png";
import cloudnine from './projectSvgs/cloudNineScrsht.png'

export const ProjectList = [
  {
    id: 12,
    title: "Cloud Nine",
    coverImgUrl: cloudnine,
    projectUrl: "https://cloudnineweatherapp.netlify.app/",
    description: "A wether app with live weather data from 40 major cities around the world",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
      "Lottie-react",
      "React-Router",
    ],
  },
  {
    id: 1,
    title: "Netflix Clone",
    coverImgUrl: netflixapp,
    projectUrl: "https://netflixdaiveed.netlify.app/",
    description: "A clone of the popular streaming site Netflix",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind",
      "Firebase",
      "React-Router",
    ],
  },
  {
    id: 8,
    title: "Quizzical",
    coverImgUrl: quizzical,
    projectUrl: "https://quizzicaldaiveed.netlify.app/",
    description: "Test your general knowledge with this interactive quiz app!",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    title: "Coffee Junkie",
    coverImgUrl: coffeejunkieapp,
    projectUrl: "https://coffeejunkiedaiveed.netlify.app/",
    description: "A Small Website for an Imaginary Coffee Shop",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 3,
    title: "UnImaginary",
    coverImgUrl: unimaginaryapp,
    projectUrl: "https://unimaginarydaiveed.netlify.app/",
    description: "An advertising website for an Imaginary University",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    title: "Front End Bootcamp",
    coverImgUrl: bootcampapp,
    projectUrl: "https://bootcampdaiveed.netlify.app/",
    description: "A website for a Bootcamp for front end developer students.",
    skills: ["HTML", "CSS", "JavaScript", "BootStrap"],
  },
  {
    id: 9,
    title: "Meme Generator",
    coverImgUrl: memeapp,
    projectUrl: "https://memegeneratordaiveed.netlify.app/",
    description:
      "Generate fun meme images and customize them to make funny memes",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 11,
    title: "Notes",
    coverImgUrl: notesapp,
    projectUrl: "https://notesappdaiveed.netlify.app/",
    description: "An app for creating and storing quick notes",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    title: "BlackJack Game",
    coverImgUrl: blackjackapp,
    projectUrl: "https://blackjackdaiveed.netlify.app/",
    description: "A mini and very interactive BlackJack (21) game",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    id: 10,
    title: "Tenzies",
    coverImgUrl: tenziesapp,
    projectUrl: "https://tenziesdaiveed.netlify.app/",
    description:
      "Play a fun game of tenzies. How fast can you freeze all your dice?",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 6,
    title: "AirBnB Experiences",
    coverImgUrl: airbnbapp,
    projectUrl: "https://airbnbdaiveed.netlify.app/",
    description: "A Website for AirBnB and Online Experiences",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    title: "Travel Journal",
    coverImgUrl: traveljournal,
    projectUrl: "https://traveljournaldaiveed.netlify.app/",
    description: "A Travel Journal Website",
    skills: ["React", "HTML", "CSS", "JavaScript"],
  },
];

export const ProjectSkills = [
  {
    id: 1,
    skill: "HTML & CSS",
    img: htmlcss,
  },
  {
    id: 3,
    skill: "Bootstrap & Tailwind",
    img: tailwind,
  },
  {
    id: 4,
    skill: "JavaScript",
    img: javascriptsvg,
  },
  {
    id: 5,
    skill: "React Js",
    img: reactsvg,
  },
  {
    id: 6,
    skill: "Teamwork",
    img: teamwork,
  },
  {
    id: 7,
    skill: "Communication",
    img: collaboration2,
  },
  {
    id: 8,
    skill: "Leadership",
    img: collaboration,
  },
  {
    id: 2,
    skill: "Critical Thinking",
    img: critical,
  },
];
