import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import {Header, HelpBox, Hero} from "../utils/index"
gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef();
  const TextBox = useRef();

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
          const textHeading1 = new SplitType(".head", { types: "chars" });

          // gsap hero timeline,
          const desk = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
              trigger: ".hero",
              // markers: true,
              start: "12% 10%",
              end: "200% 50%",
              scrub: 2,
              pin: true,
            },
          });
          desk.to(".hidden-txt", {
            y: -100,
            opacity: 0,
            display: "none",
          });
          desk.to(textHeading1.chars, {
            y: 0,
            stagger: 0.05,
            delay: 0.6,
            duration: 0.1,
          });
          if (TextBox.current) {
            const items = TextBox.current.querySelectorAll("h1");
            items.forEach((item) => {
              const text = new SplitType(item, { types: "chars" });

              desk.from(text.chars, {
                scale: 0,
                opacity: 0.2,
                stagger: 0.02,
                duration: 0.5,
              });
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
       <Hero TextBox={TextBox}/>
        <div className="boxXy h-screen w-full  px-5 bg-[#E9EAEB] md:px-28 md:py-20 xl:py-5">
           <Header/>
           <HelpBox/>
        </div>
        <div className="box3 h-screen w-full bg-slate-500"></div>
      </div>
    </>
  );
}

export default About;
