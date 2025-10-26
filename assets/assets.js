import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import ukraineFlag from './ukraine-flag.png';
import javascript from './javascript-icon.svg';
import typescript from './typescript.svg';
import html from './html.svg';
import css from './css.svg';
import react from './react.svg';
import nextjs from './nextjs.svg';
import tailwind from './tailwind.svg';
import redux from './redux.svg';
import vue from './vue.svg';
import angular from './angular.svg';
import node from './nodejs.svg';
import jest from './jest.svg';
import cypress from './cypress.svg';
import redux_icon from './redux-icon.png';
import github from './github-icon.svg';
import telegram from './telegram.svg';
import linkedIn from './linkedin-icon.svg';
import github_dark from './github-icon_dark.svg'

export const assets = {
  github_dark,
  linkedIn,
  github,
  telegram,
  redux_icon,
  cypress,
  jest,
  node,
  angular,
  redux,
  vue,
  typescript,
  tailwind,
  html,
  css,
  react,
  nextjs,
  ukraineFlag,
  javascript,
  user_image,
  code_icon,
  code_icon_dark,
  edu_icon,
  edu_icon_dark,
  project_icon,
  project_icon_dark,
  vscode,
  firebase,
  figma,
  git,
  mongodb,
  right_arrow_white,
  logo,
  logo_dark,
  mail_icon,
  mail_icon_dark,
  profile_img,
  download_icon,
  hand_icon,
  header_bg_color,
  moon_icon,
  sun_icon,
  arrow_icon,
  arrow_icon_dark,
  menu_black,
  menu_white,
  close_black,
  close_white,
  web_icon,
  mobile_icon,
  ui_icon,
  graphics_icon,
  right_arrow,
  send_icon,
  right_arrow_bold,
  right_arrow_bold_dark,
};

export const workData = [
  {
    name: 'React',
    title: 'Phone Catalog',
    description: 'Responsive E-commerce UI with dynamic filtering and URL state preservation.',
    bgImage: '/work-1.png',
    url: 'https://julyapetrovskaya.github.io/phone-catalog/',
    github: 'https://github.com/JulyaPetrovskaya/phone-catalog',
  },
  {
    name: 'Landing Page',
    title: 'Dia agency',
    description: 'A modern landing page implemented for a Strategic Agency concept.',
    bgImage: '/work-2.png', 
    url: 'https://julyapetrovskaya.github.io/Dia-landing',
    github:'https://github.com/JulyaPetrovskaya/Dia-landing',
  },
  {
    name: 'Landing Page',
    title: 'The-Met Museum',
    description:'A dedicated landing page UI for The Metropolitan Museum of Art.',
    bgImage: '/work-3.png',
    url: 'https://julyapetrovskaya.github.io/The-Met-landing',
    github: 'https://github.com/JulyaPetrovskaya/The-Met-landing',
    
  },
  {
    name: 'JS Logic',
    title: '2048 Game',
    description:'A pure JavaScript implementation showcasing game logic, event handling, and DOM manipulation.',
    bgImage: '/work-4.png',
    url: 'https://julyapetrovskaya.github.io/js_2048_game/',
    github: 'https://github.com/JulyaPetrovskaya/js-2048-game',
  },
  {
    name: 'Business Card',
    title: 'Astrologic',
    description:'Informational website developed for astrologer Olga Dzhumanova. Built using HTML5, CSS3, and JavaScript, the site provides a clean interface for viewing services and booking consultations.',
    bgImage: '/work-5.png',
    url: 'https://julyapetrovskaya.github.io/astrologic/',
    github: 'https://github.com/JulyaPetrovskaya/astrologic',
  },
    {
    name: 'Angular App',
    title: 'To do list',
    description:'A simple and responsive todo list application built with Angular 15. Users can add, delete, and mark tasks as completed.All tasks are stored in local storage, so they persist between sessions.',
    bgImage: '/work-6.png',
    url: 'https://julyapetrovskaya.github.io/angular-todo-app',
    github: 'https://github.com/JulyaPetrovskaya/angular-todo',
  },
];

export const serviceData = [
  {
    icon: assets.web_icon,
    title: 'Web design',
    description:
      'Proficient in design tools like Figma, I specialize in translating complex mockups into high-quality frontend architecture using React and Next.js',
    link: '',
  },
  {
    icon: assets.mobile_icon,
    title: 'Mobile app',
    description:
      'Developing responsive and mobile-first user interfaces (UI) that function flawlessly across all screen sizes and modern devices.',
    link: '',
  },
  {
    icon: assets.graphics_icon,
    title: 'UI/UX design',
    description:
      'Focusing on the pixel-perfect implementation of provided designs Figma into accessible, cross-browser compatible code.',
    link: '',
  },
  {
    icon: assets.redux_icon,
    title: 'State Management',
    description:
      'Implementing complex state management with Redux Toolkit to ensure predictable data flow and scalable application logic.',
    link: '',
  },
];

export const infoList = [
  {
    icon: assets.code_icon,
    iconDark: assets.code_icon_dark,
    title: 'Languages',
    description: 'HTML, CSS, JavaScript, TypesSript, React, Next.js',
  },
  {
    icon: assets.edu_icon,
    iconDark: assets.edu_icon_dark,
    title: 'Business Background',
    description: 'Background in ERP implementation and business analysis',
  },
  {
    icon: assets.project_icon,
    iconDark: assets.project_icon_dark,
    title: 'Projects',
    description: 'Portfolio of 5+ web applications',
  },
];

export const toolsData = [
  // { icon: assets.html, name: 'HTML5' },
  { icon: assets.vscode, name: 'VS Code' },
  { icon: assets.figma, name: 'Figma' },
  { icon: assets.css, name: 'CSS3' },
  { icon: assets.javascript, name: 'JavaScript' },
  { icon: assets.typescript, name: 'TypeScript' },
  { icon: assets.tailwind, name: 'Tailwind' },
  { icon: assets.react, name: 'React' },
  { icon: assets.nextjs, name: 'Next.js' },
  { icon: assets.redux, name: 'Redux' },
  { icon: assets.node, name: 'Node.js' },
  { icon: assets.vue, name: 'Vue.js' },
  { icon: assets.angular, name: 'Angular' },
  { icon: assets.git, name: 'Git' },
  { icon: assets.jest, name: 'Jest' },
  // { icon: assets.firebase, name: 'Firebase' },
  // { icon: assets.mongodb, name: 'MongoDB' },
  // { icon: assets.cypress, name: 'Cypress' },
];
