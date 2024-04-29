import LinkedIn from "../ui/LinkedIn"
import FaceBook from "../ui/FaceBook"
import Twitter from "../ui/Twitter"
import Github from "../ui/Github"

import Home from "../Pages/Home"
import About from "../Pages/About"
import Portfolio from "../Pages/Portfolio"
import Contact from "../Pages/Contact"
import PageNotFound from "../Pages/PageNotFound"
import AppLayout from "../ui/AppLayout";
import NavBar from "../ui/NavBar";
import homeImg from "../assets/Image/img2.png"

export default homeImg;
export  {Home, About, PageNotFound,Portfolio,Contact,  AppLayout, NavBar};

export const TabLinks = [ "home", "about","portfolio","contact"];
export const icons = [{"to":"", "Element": LinkedIn},{"to":"", "Element": FaceBook},{"to":"", "Element": Twitter},{"to":"", "Element": Github},]

export const topVarient = {
    closed: {
        rotate: 0,
        backgeound: "#000",
    },

    opened: {
        rotate: 40,
        background: "#fff",
    }
}
export const botomVarient = {
    closed: {
        rotate: 0,
        backgeound: "#000",
    },

    opened: {
        rotate: -40,
        background: "#fff",
    }
}

export const midVarient = {
    closed: {
        opacity: 1,
        backgeound: "#000",

    },

    opened: {
        opacity: 0,
        background: "#fff",
    }
}