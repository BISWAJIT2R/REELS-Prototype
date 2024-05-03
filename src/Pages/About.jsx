import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import Part2 from "../ui/About/ui/Part2";
import Part3 from "../ui/About/ui/Part3";
import { Header, HelpBox, Hero } from "../utils/index";
import TechStack from "../ui/About/Skils/TechStack";
import Timline from "../ui/About/Skils/Timline";
gsap.registerPlugin(ScrollTrigger);

function About() {
  const container = useRef();
  const TextBox = useRef();
  const HelpBox = useRef();
  useGSAP(
    () => {
      function animateBasedOnSize() {
        if (window.innerWidth < 768) {

          // Mobile animation
          // partone here 
          const heroBox = gsap.timeline({
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
          const bio = new SplitType(".sub", { types: "chars" })
          heroBox.from(bio.chars, {
            scale: 1.2,
            opacity:0.1,
            stagger: 0.5
          })
           // part2 start here
          const timelineOnMobile = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
              trigger: ".part2",
              // markers: true,
              start: "10% 10%",
              end: "200% 50%",
              scrub: 2,
              pin: true,
            },
          });
         
          const part2Heading = new SplitType(".content-heding", { types: "chars" })
          timelineOnMobile.from(part2Heading.chars, {
            // translateY: -180,
            scale: 0,
            opacity: 0.7,
            duration: .2,
            // onComplete: ()=> {
            //   gsap.set
            // }
          })
          gsap.set(".anime-box", { scale: 0 })
           
          timelineOnMobile.from(".card", {
            scaleX: 0,
            stagger:0.2
          })
          const cardH1 = new SplitType(".card-h1", { types: "chars" })
        
          timelineOnMobile.from(cardH1.chars, {
            y: -100,
            stagger: 0.2
          })
          const cardP = new SplitType(".card-p", { types: "words" })
          timelineOnMobile.from(cardP.words, {
            y: 120,
            opacity:0.3,
            stagger: 0.5
          })
          // part2 end here
          // part3 here 
          const part3OnMobile = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
              trigger: ".part3",
              // markers: true,
              start: "top 10%",
              end: "300% 50%",
              scrub: 2,
              pin: true,
            },
          });
          const part3H1 = new SplitType(".part3-h1", { types: "chars" })

          part3OnMobile.from(part3H1.chars, {
            y:100,
            opacity:0,
            stagger:0.2
          })
          part3OnMobile.from(".timeline", {
            y:100,
            opacity: 0
            // stagger:0.2
          })
          // part3 end here
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

          // ^ part2 start here 
          const timelineOnDesktop = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
              trigger: ".part2",
              // markers: true,
              start: "10% 10%",
              end: "200% 50%",
              scrub: 2,
              pin: true,
            },
          });

          const part2Heading = new SplitType(".content-heding", { types: "chars" })
          timelineOnDesktop.from(part2Heading.chars, {
            // translateY: -180,
            opacity: 0,
            // duration: 0.5,
            stagger: 0.5
            // onComplete: ()=> {
            //   gsap.set
            // }
          })
          gsap.set(".anime-box", { scale: 0 })
           
          timelineOnDesktop.from(".card", {
            scaleX: 0,
            stagger:0.55
          })
          const cardH1 = new SplitType(".card-h1", { types: "chars" })
        
          timelineOnDesktop.from(cardH1.chars, {
            y: -100,
            stagger: 0.2
          })
          const cardP = new SplitType(".card-p", { types: "chars" })
          timelineOnDesktop.from(cardP.chars, {
            opacity:0.1,
            stagger: 0.5
          })

          // endHere
          // part3 
          const part3OnDesktop = gsap.timeline({
            delay: 0.5,
            scrollTrigger: {
              trigger: ".part3",
              // markers: true,
              start: "20% 10%",
              end: "300% 50%",
              scrub: 2,
              pin: true,
            },
          });
          const part3H1 = new SplitType(".part3-h1", { types: "chars" })

          part3OnDesktop.from(part3H1.chars, {
            y:100,
            opacity:0,
            stagger:0.2
          })
          part3OnDesktop.from(".timeline", {
            y:100,
            opacity: 0
            // stagger:0.2
          })
        }
      }

      animateBasedOnSize();
      window.addEventListener("resize", animateBasedOnSize);
      return () => {
        window.removeEventListener("resize", animateBasedOnSize);
      };
    },
    { dependencies: [], scope: container }
  );
  return (
    <>
      <div ref={container} className="h-full w-full">
        <Hero TextBox={TextBox} />
        <Part2 />
        <Part3 />
      </div>
    </>
  );
}

export default About;
