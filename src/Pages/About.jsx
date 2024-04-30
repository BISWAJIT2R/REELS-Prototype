import React, { useRef } from "react";
import { gsap } from "gsap";
import { hacker, img3, funny } from "../utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useDeviceType from './../helper/Hooks'
;
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef();
   const x = useDeviceType();
  console.log(x);
  useGSAP(
    () => {
    // BioGraphy section
    
    },
    { dependencies: [], scope: container } 
  );
  return (
    <>
      <div ref={container} className="h-full w-full">
        <div className="box1 h-[100vh] w-full relative md:flex bg-blue-500">
          <div className="left-container overflow-hidden relative h-full w-full px-5  xl:px-12">
            <div className="text-box bg-red-500  py-5 ">
              <h1 className="head font-secondary font-bold capitalize text-4xl">
                Biography
              </h1>
              <p className="sub font-primary text-xl  mt-2 md:text-lg xl:text-2xl">
                Hi, I’m{" "}
                <strong className="font-secondary text-xl bg-img xl:text-3xl">
                  Biswajit das
                </strong>
                , a frontend developer with a passion for creating engaging,
                efficient, and user-friendly digital interfaces. With{" "}
                <strong className="font-secondary text-xl bg-img xl:text-3xl">
                  2
                </strong>{" "}
                years of experience, I specialize in these{" "}
                <strong className="font-secondary text-xl bg-img xl:text-3xl">
                  HTML5, CSS3, JavaScript, React, Next.js, Three.js
                </strong>
                . I focus on translating design concepts into functional and
                aesthetically pleasing web applications. My goal is to improve
                user experiences by making websites not only visually appealing
                but also accessible and easy to navigate. I’m always eager to
                take on new challenges and stay updated with the latest trends
                in web technologies.
              </p>

              <div className="btn-box w-full flex gap-5 mt-6">
                <button className="relative h-14 w-32 border-2 border-black uppercase outline-none rounded-xl font-primary text-xl ">
                  ok
                </button>
                <button className="relative h-14 w-32  border-2 border-black uppercase outline-none rounded-xl font-primary text-xl ">
                  ok
                </button>
              </div>
            </div>
          </div>
         
        </div>
        <div className="boxXy h-screen w-full bg-green-500 px-5">
         <h1 className="content-heding relative font-secondary  text-5xl py-5 font-extrabold tracking-widest overflow-hidden">Skils</h1>
           
        </div>
        <div className="box3 h-screen w-full bg-slate-500"></div>
      </div>
    </>
  );
}

export default About;
