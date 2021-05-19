import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeff Pigg | Developer', 
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Jeff Pigg',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/115P3Q4k_3RtqhvJuCjfq73fFP3qBhADl/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'KnowCal',
    info: '',
    info2: '',
    url: 'https://github.com/jPigg-tech/KnowCal.git',
    repo: 'https://github.com/jPigg-tech/KnowCal.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Movie Library',
    info: '',
    info2: '',
    url: 'https://github.com/kyledobash/Movie_Library_Git_KD_KP_JP',
    repo: 'https://github.com/kyledobash/Movie_Library_Git_KD_KP_JP', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project3.jpg',
    title: 'Video Game Data',
    info: '',
    info2: '',
    url: 'https://github.com/jPigg-tech/VideoGameDataProj',
    repo: 'https://github.com/jPigg-tech/VideoGameDataProj', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    // {
    //   id: nanoid(),
    //   name: 'twitter',
    //   url: '',
    // },
    // {
    //   id: nanoid(),
    //   name: 'codepen',
    //   url: '',
    // },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/jeffery-pigg/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jPigg-tech',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
