import { useLocation, Outlet } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { gsap } from "gsap";
import { About, Home, NavBar } from "../utils/index";
function PageOut({ children }) {
  const mainContainer = useRef();

  useGSAP(
    () => {
      window.addEventListener("mousemove", (event) => {
        gsap.to(".mouse", {
          x: event.clientX,
          y: event.clientY,
          ease: "Power3.easeOut",
          duration: 0.3,
        });
      });

      return () => window.removeEventListener("mousemove", () => {});
    },
    { dependencies: [], scope: mainContainer }
  );
  const location = useLocation();
  let pathName = location.pathname;
  return (
    <AnimatePresence mode="wait">
      <div
        key={pathName}
        ref={mainContainer}
        className=" h-screen w-screen bg-[#FFFFFF]"
      >
        <motion.div
          className="h-screen w-screen fixed rounded-b-[100px] z-[80] bg-black"
          animate={{ height: "0vh", display: "none" }}
          exit={{ height: "140vh", display: "block" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        ></motion.div>

        <motion.div
          className="h-screen w-screen fixed rounded-t-[100px] bg-red-500 bottom-0 z-[70]"
          initial={{height: "140vh"}}
          animate={{height: "0vh", transition: {delay:  0.5}}}
        ></motion.div>

        <div className="mouse h-2 w-2 bg-black rounded-full pointer-events-none fixed inset-0"></div>
        <div className="header h-24 w-full border-b-2 border-slate-900 xl:border-none">
          <NavBar />
        </div>
        <div className=" show  nav-height w-full z-10">
          <Outlet />
        </div>
      </div>
    </AnimatePresence>
  );
}

export default PageOut;
