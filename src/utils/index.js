import { SiScrollreveal } from "react-icons/si";
import LinkedIn from "../ui/LinkedIn";
import FaceBook from "../ui/FaceBook";
import Twitter from "../ui/Twitter";
import Github from "../ui/Github";
import Header from "../ui/About/Skils/Header";
import HelpBox from "../ui/About/Skils/HelpBox";
import Hero from "../ui/About/Hero";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Portfolio from "../Pages/Protfolio";
import Contact from "../Pages/Contact";
import PageNotFound from "../Pages/PageNotFound";
import AppLayout from "../ui/AppLayout";
import NavBar from "../ui/NavBar";
import homeImg from "../assets/Image/img2.png";
import hacker from "../assets/Image/Evil Hacker.jpeg";
import img3 from "../assets/Image/download.jpeg";
import funny from "../assets/Image/download (2).jpeg";
import HtmlSvg from "../assets/SVG/html-1.svg";
import Js from "../assets/SVG/logo-javascript.svg";
import tailwindsvg from "../assets/SVG/tailwindcss.svg";
import react from "../assets/SVG/react-2.svg";
import Node from "../assets/SVG/nodejs-3.svg";
export default homeImg;
export { hacker, img3, funny };
export { Home, About, PageNotFound, Portfolio, Contact, AppLayout, NavBar };
export { SiScrollreveal };
export const TabLinks = ["home", "about", "portfolio", "contact"];
export const icons = [
  { to: "", Element: LinkedIn },
  { to: "", Element: FaceBook },
  { to: "", Element: Twitter },
  { to: "", Element: Github },
];

// Time line
export const timeLine = [
  {
    Date: "2022-2025",
    content:
      "Bachelor of Computer Applications (BCA) || MAULANA ABUL KALAM AZAD UNIVERSITY OF TECHNOLOGY, WEST BENGAL",
    YGPA: "8.9",
  },
  {
    Date: "2020-2022",
    content: "XII (WBCHSE) || RAJANGAR UNION HIGH SCHOOL (H.S), WEST BENGAL",
    YGPA: "83.4%",
  },
];
// end time line
export const topVarient = {
  closed: {
    rotate: 0,
    backgeound: "#000",
  },

  opened: {
    rotate: 40,
    background: "#fff",
  },
};
export const botomVarient = {
  closed: {
    rotate: 0,
    backgeound: "#000",
  },

  opened: {
    rotate: -40,
    background: "#fff",
  },
};

export const midVarient = {
  closed: {
    opacity: 1,
    backgeound: "#000",
  },

  opened: {
    opacity: 0,
    background: "#fff",
  },
};

export const projectArr = [
  {
    link: "sss",
    name: "part1",
    hoverImg:
      "https://i.pinimg.com/564x/2a/e4/23/2ae423d123d0d77aa6fb86c822dee04b.jpg",
  },
  {
    link: "sss",
    name: "part2",
    hoverImg:
      "https://i.pinimg.com/564x/2a/e4/23/2ae423d123d0d77aa6fb86c822dee04b.jpg",
  },
  {
    link: "sss",
    name: "part3",
    hoverImg:
      "https://i.pinimg.com/564x/2a/e4/23/2ae423d123d0d77aa6fb86c822dee04b.jpg",
  },
  {
    link: "sss",
    name: "part4",
    hoverImg:
      "https://i.pinimg.com/564x/2a/e4/23/2ae423d123d0d77aa6fb86c822dee04b.jpg",
  },
];
export { Header, HelpBox, Hero };

export { HtmlSvg, tailwindsvg, react, Node, Js };
