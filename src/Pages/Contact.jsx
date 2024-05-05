// import React from 'react'
import { useGSAP } from "@gsap/react";
import From from "../ui/Contact/From";
import { funny } from "../utils";
import { gsap } from "gsap";
import { useRef } from "react";
import SplitType from "split-type";
function Contact() {

   const container = useRef();
  const formContainer = useRef();

  useGSAP(() => {
    const Tl = gsap.timeline({delay: 0.5});
     
    const txt = new SplitType(".h-txt", {types: "chars"}) 
    Tl.from(txt.chars, {
       opacity: 0,
       stagger: 0.2
    }, "a1");
     
    Tl.from(".funny", {
      scaleX: 0,
      transformOrigin: "left",
      duration:0.5
    }, "a2")

    if (formContainer.current) {
      console.clear()
     const p =formContainer.current.querySelectorAll("p");
     const inputTag =formContainer.current.querySelectorAll("input");
      p.forEach((elem) => {
        const text = new SplitType(elem, {types: "chars"});

        Tl.from(text.chars, {
          opacity: 0.1,
          stagger: 0.2,
          ease: "power3.inOut"
       }, "a1");
      });

      inputTag.forEach((el) => {
        Tl.from(el, {
          scaleX:0,
          transformOrigin: "right",
          overflow: "hidden"
        })
      }, "a2")
    }
  }, {dependencies: [], scope: container})
  return <div className=" h-full w-full relative " ref={container}>
     <div className="h-full w-full overflow-hidden px-5 py-16 flex md:py-5">
      <div className="left hidden h-full md:w-1/2 md:block xl:px-10">
      <div className="relative w-full overflow-hidden text-box">
        <h1 className="h-txt md:text-9xl font-sign border-b-2">
          <div className="over-hidden border-b-2">
            let's get 
          </div>
          <br/>
          <div className=" pl-12 overflow-hidden border-b-2">
            started.
          </div>
        </h1>

      </div>
        <img src={funny} alt="Not Found" className="funny relative h-[15rem] ml-24 mt-10 hidden md:block"/>
      </div>
      <div className="right relative  h-full w-full md:w-1/2 overflow-hidden">
          <From containerBox={formContainer}/>
      </div>
     </div>
  </div>;
}

export default Contact;