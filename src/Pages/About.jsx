import React, { useRef } from "react";
import { gsap } from "gsap";
import { hacker, img3, funny } from "../utils";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import useDeviceType from "./../helper/Hooks";
import SplitType from "split-type";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef();
  const TextBox = useRef();

  let x = document.querySelectorAll(" .text-box .sub h1");

  useGSAP(
    () => {
      function animateBasedOnSize() {
        if (window.innerWidth < 768) {
          // Mobile animation
          gsap.from(".sub", {
            scale: 0,
            rotation: 360,
            duration: 2,
            ease: "power1.out",
          });
        } else {
          // Desktop animation
          
          const desk = gsap.timeline({delay: 0.5, scrollTrigger: {
            trigger: ".hero",
            markers: true,
            start: "15% 10%",
            end: "200% 50%",
            scrub: 2,
            pin: true,
          }});

          if (TextBox.current) {
            const items = TextBox.current.querySelectorAll("h1");
            items.forEach((item) => {
              const text = new SplitType(item, {types: "chars"});

               desk.from(text.chars, {
                scale:0,
                opacity:0.2,
                stagger:0.02,
                duration: 0.5
               })
            });
          }
        }
      }

      animateBasedOnSize();
      window.addEventListener("resize", animateBasedOnSize);
      return window.removeEventListener("resize", animateBasedOnSize);
    },
    { dependencies: [], scope: container }
  );
  return (
    <>
      <div ref={container} className="h-full w-full">
        <div className="hero h-[100vh] w-full relative md:flex ">
          <div className="left-container overflow-hidden relative h-full w-full px-5  xl:px-28">
            <div className="text-box  py-20 md:py-12 overflow-hidden">
              <h1 className="head font-secondary font-bold capitalize text-4xl">
                Biography
              </h1>
              <div
                ref={TextBox}
                className="sub font-primary text-xl  mt-2 md:text-xl mxl:text-2xl xl:mt-10 overflow-hidden"
              >
                <h1 className=" relative inline md:inline-block md:text-3xl md:mb-3 overflow-hidden  xl:block  xl:font-extrabold ">
                  {" "}
                  Hi, I’m{" "}
                  <strong className="font-secondary text-2xl bg-img  md:text-4xl xl:text-3xl">
                    Biswajit das
                  </strong>
                  , a frontend developer with a passion for creating engaging,
                  efficient, and user-friendly digital interfaces.
                </h1>{" "}
                <h1 className=" inline md:inline-block md:text-3xl md:mb-3 overflow-hidden xl:block xl:font-extrabold">
                  {" "}
                  With{" "}
                  <strong className="font-secondary text-2xl bg-img  md:text-4xl xl:text-3xl">
                    2
                  </strong>{" "}
                  years of experience, I specialize in these{" "}
                  <strong className="font-secondary text-2xl bg-img  md:text-4xl xl:text-3xl">
                    HTML5, CSS3, JavaScript, React, Next.js, Three.js .
                  </strong>
                  
                </h1>{" "}
                <h1 className=" inline md:inline-block md:text-3xl md:mb-3 xl:block xl:font-extrabold overflow-hidden">
                  I focus on translating design concepts into functional and
                  aesthetically pleasing web applications.
                </h1>{" "}
                <h1 className=" inline md:inline-block md:text-3xl md:mb-3 overflow-hidden xl:block xl:font-extrabold">
                  My goal is to improve user experiences by making websites not
                  only visually appealing but also accessible and easy to
                  navigate.
                </h1>{" "}
                <h1 className=" inline md:inline-block md:text-3xl md:mb-3 overflow-hidden xl:block xl:font-extrabold">
                  I’m always eager to take on new challenges and stay updated
                  with the latest trends in web technologies.
                </h1>
              </div>
            </div>
          </div>
        </div>
        <div className="boxXy h-screen w-full bg-green-500 px-5">
          <h1 className="content-heding relative font-secondary  text-5xl py-5 font-extrabold tracking-widest overflow-hidden">
            Skils
          </h1>
        </div>
        <div className="box3 h-screen w-full bg-slate-500"></div>
      </div>
    </>
  );
}

export default About;
