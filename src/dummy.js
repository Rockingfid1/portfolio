import forkify from "./assets/images/forkify-app.png";
import foodOrder from "./assets/images/food-order-app.png";
import foodMpa from "./assets/images/food-mpa.png";
import meetupApp from "./assets/images/meetup-app.png";
import reminderAppLogo from "./assets/images/reminder-app-logo.png";
import ticTacToe from "./assets/images/tic-tac-toe.png";
import thspian from "./assets/images/thspian.png";

import html from "./assets/images/html.png";
import css from "./assets/images/css.png";
import framer from "./assets/images/framer.png";
import js from "./assets/images/JS.png";
import nextjs from "./assets/images/nextjs.png";
import npm from "./assets/images/npm.png";
import nodejs from "./assets/images/nodejs.png";
import photoshop from "./assets/images/photoshop.png";
import ts from "./assets/images/TS.png";
import reactImage from "./assets/images/React.png";
import responsive from "./assets/images/responsive.png";
import mui from "./assets/images/mui.png";
import native from "./assets/images/native.png";

function imageSwitch(imageUrl) {
  switch (imageUrl) {
    case "images/forkify-app.png":
      return forkify;
    case "images/food-order-app.png":
      return foodOrder;
    case "images/food-mpa-app.png":
      return foodMpa;
    case "images/meetup-app.png":
      return meetupApp;
    case "images/reminder-app-logo.png":
      return reminderAppLogo;
    case "images/thspian.png":
      return thspian;

    default:
      return ticTacToe;
  }
}

function skillSwitch(skillImage) {
  switch (skillImage) {
    case "images/html.png":
      return html;
    case "images/css.png":
      return css;
    case "images/JS.png":
      return js;
    case "images/framer.png":
      return framer;
    case "images/next.png":
      return nextjs;
    case "images/npm.png":
      return npm;
    case "images/node.png":
      return nodejs;
    case "images/TS.png":
      return ts;
    case "images/react.png":
      return reactImage;
    case "images/responsive.png":
      return responsive;
    case "images/mui.png":
      return mui;
    case "images/native.png":
      return native;
    default:
      return photoshop;
  }
}

export const DUMMY_DATA = [
  {
    url: "https://www.thspian.com/discovery",
    image: imageSwitch("images/thspian.png"),
    name: "Thspian",
    description:
      "A social media platform that allows content creators from all over the world to interact with eachother, create job postings, hire talent, and share their content.",
  },
  {
    url: "https://forkify-michaelfrank.netlify.app/",
    image: imageSwitch("images/forkify-app.png"),
    name: "Forkify",
    description:
      "An app that allows you to retrieve hundreds of recipes from a backend and add your own recipes as well. (Non-responsive)",
  },
  {
    url: "https://react-food-app-proj.netlify.app/",
    image: imageSwitch("images/food-order-app.png"),
    name: "React Food",
    description:
      "An app that allows you to place food orders and send them to a backend to be processed. (Non-responsive)",
  },
  {
    url: "https://tic-tac-toe-app-michael.netlify.app/",
    image: imageSwitch("images/tic-tac-toe.png"),
    name: "React Tic-Tac-Toe",
    description:
      "Play a simple game of tic-tac-toe built with React.js and Vite. (Partially Responsive)",
  },
  {
    url: "https://project-reminder.netlify.app/",
    image: imageSwitch("images/reminder-app-logo.png"),
    name: "Project Reminder App",
    description:
      "An app that allows you to set deadlines and tasks individually or for a team. (Responsive)",
  },
  {
    url: "https://food-mpa.vercel.app/",
    image: imageSwitch("images/food-mpa-app.png"),
    name: "Next.js Food app",
    description:
      "A multi-page application that allows individuals to share and view recipes within a community using a third-party backend API. (Non-responsive)",
  },
  {
    url: "https://simple-meetup-application-nextjs.vercel.app/",
    image: imageSwitch("images/meetup-app.png"),
    name: "Meetup App",
    description:
      "An app that allows you to add your favorite locations and retrieve them from a backend. (Non-responsive)",
  },
];

export const SKILLS_DATA = [
  {
    name: "HTML 5",
    image: skillSwitch("images/html.png"),
    value: 90,
  },
  {
    name: "CSS",
    image: skillSwitch("images/css.png"),
    value: 85,
  },
  {
    name: "JavaScript",
    image: skillSwitch("images/JS.png"),
    value: 95,
  },
  {
    name: "React",
    image: skillSwitch("images/react.png"),
    value: 90,
  },
  {
    name: "Framer Motion",
    image: skillSwitch("images/framer.png"),
    value: 85,
  },
  {
    name: "Material UI",
    image: skillSwitch("images/mui.png"),
    value: 90,
  },
  {
    name: "React Native",
    image: skillSwitch("images/native.png"),
    value: 90,
  },
  {
    name: "Next.js",
    image: skillSwitch("images/next.png"),
    value: 85,
  },
  {
    name: "Node.js",
    image: skillSwitch("images/node.png"),
    value: 85,
  },
  {
    name: "Photoshop",
    image: skillSwitch("images/photoshop.png"),
    value: 90,
  },
  {
    name: "NPM",
    image: skillSwitch("images/npm.png"),
  },
  {
    name: "TypeScript",
    image: skillSwitch("images/TS.png"),
  },
  { name: "Responsive Design", image: skillSwitch("images/responsive.png") },
];
