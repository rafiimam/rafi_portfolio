import bookStore from "./assets/bookStore.png"
import photoGallery from "./assets/photoGallery.png"
import wordPress from "./assets/wordPress.png"
import wordPress2 from "./assets/wordPress2.png"
import portfolio from "./assets/portfolio.png"
import panda from "./assets/panda.png"
import todo from "./assets/todo.png"

interface Project {
  id: number;
  category: string;
  img: string;
  title: string;
  technology:string;
  liveLink:string,
  githubRepo:string,
}

export const projects: Project[] = [
  {
    id: 0,
    category: "uiUx",
    img: bookStore,
    title: "Online Book Store",
    technology: "MERN",
    liveLink:"https://book-client-s60s.onrender.com",
    githubRepo:"https://github.com/rafiimam/Book-Client",
  },
  {
    id: 1,
    category: "uiUx",
    img: portfolio,
    title: "Portfolio",
    technology: "TypeScript, React, Tailwind CSS, Framer-Motion",
    liveLink:"",
    githubRepo:"",
  },
  {
    id: 2,
    category: "uiUx",
    img: photoGallery,
    title: "Draggable Photo Gallery",
    technology: "JavaScript, React, Tailwind CSS, Framer-Motion",
    liveLink:"https://rafiimam.github.io/react-js-task/",
    githubRepo:"https://github.com/rafiimam/react-js-task",
  },
  {
    id: 3,
    category: "uiUx",
    img: todo,
    title: "To-do List",
    technology: "TypeScript, React, HTML, CSS",
    liveLink:"",
    githubRepo:"https://github.com/rafiimam/todo_list_react_typescript",
  },
  {
    id: 4,
    category: "uiUx",
    img: panda,
    title: "Panda Commerce",
    technology: "HTML, CSS, Bootstrap",
    liveLink:"https://rafiimam.github.io/panda-commerce/",
    githubRepo:"https://github.com/rafiimam/panda-commerce",
  },
  {
    id: 5,
    category: "web",
    img: wordPress2,
    title: "Guardian Family Law",
    technology: "WordPress",
    liveLink:"http://guardianfamilylaw.com/",
    githubRepo:"",
  },
  {
    id: 6,
    category: "web",
    img: wordPress,
    title: "BBS Cost Reduction",
    technology: "WordPress",
    liveLink:"https://bbs-cost-reduction.com/",
    githubRepo:"",
  },
];