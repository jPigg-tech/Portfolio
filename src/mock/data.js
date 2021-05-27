import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Jeff Pigg | Developer', 
  lang: ' ', // e.g: en, es, fr, jp
  description: ' ', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: ' ',
  name: 'Jeff Pigg',
  subtitle: 'Software Developer',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'We are only here for so long, so it really makes sense to love what we do! The core reason I transitioned into tech is because of its everyday use and the feel that I am just scratching the surface! I am constantly being drawn in the deeper I dive and more I begin to understand about software engineering.',
  paragraphTwo: 'Being able to create usable art out of thin air, continuously learning to improve my code, and understanding algorithms, data structures, and bugs within software is a dream come true!',
  paragraphThree: ' ',
  resume: 'https://drive.google.com/file/d/115P3Q4k_3RtqhvJuCjfq73fFP3qBhADl/view?usp=sharing'
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'Project1.png',
    title: 'KnowCal',
    info: '(Solo Project, 10 day sprint) KnowCal is a user- friendly calorie tracking RESTful API, that generates recommended calorie consumption based on user input, stores daily food diary broken down into meals and snacks, in a database, shows data visualization and analysis of calorie consumption through charts, and gives the user a better experience with the implementation of third party APIs.',
    info2: 'Technologies: C#, ASP.Net Core/MVC, Entity Framework, JavaScript, HMTL5/CSS, Bootstrap,  SQL, Chart.js, Postman, SendGrid API, Nutritionix API ',
    url: 'https://github.com/jPigg-tech/KnowCal.git',
    repo: 'https://github.com/jPigg-tech/KnowCal.git', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project2.png',
    title: 'Movie Library',
    info: '(Group Project, 4 day sprint) A Web Application list database of movies from our self built RESTful API. Giving the user the options to GET, POST, PUT, DELETE to the SQL database.',
    info2: 'Technologies: ASP.NET MVC, HTML, CSS, JavaScript, AJAX, jQuery, Postman',
    url: 'https://github.com/kyledobash/Movie_Library_Git_KD_KP_JP',
    repo: 'https://github.com/kyledobash/Movie_Library_Git_KD_KP_JP', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'Project3.png',
    title: 'Video Game Data',
    info: '(Group Project, 5 day sprint) Uses Python Flask to mine, analyze, and visualize data regarding video games from a RESTful API with over 30,000 video games. The analysis answers various evaluation questions regarding what console system is the best to invest in based on video game data.',
    info2: 'Technologies: Python, Flask, HTML, CSS/Bootstrap, Postman, Chart.js',
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
