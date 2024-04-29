// import React from 'react'
import homeImg from "../utils";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";


gsap.registerPlugin(ScrollTrigger);

function Home() {
  const containerRef = useRef();
  
  useGSAP(()=> {
    const text = new SplitType('.main-txt')
    const text1 = new SplitType('.sub-txt')
    const tl = gsap.timeline({delay: 0.6});

    tl.from(text.chars, {
       y: -100,
      stagger: 0.2,
      duration: 0.5,
      ease: 'Power3.easeOut',
    }, "a1")
    tl.from(text1.chars, {
       x: -500,
      stagger: 0.2,
      duration: 0.2,
      ease: 'Power3.easeOut',
    }, "a1")
    tl.from(".dev-txt", {
      y: 500
    },"a1"),
    tl.from(".home-img", {
      
    }, "a1")
  }, {dependencies: [],scope: containerRef})
  return (
   <>
    <div ref={containerRef} className="container relative h-full w-full">
      
      <div className="text-box absolute  top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 xl:z-10  ">   
        <h3 className=" inline-block overflow-hidden main-txt text-2xl font-primary font-bold mb-2 md:text-3xl xl:text-6xl">Web</h3>
        <h1  className=" dev-txt  font-main text-5xl   bg-img overflow-hidden md:text-7xl xl:text-9xl">Developer</h1>
        <span className=" sub-txt overflow-hidden text-sm float-right mt-2 font-primary font-semibold text-black md:text-lg xl:text-2xl">From India,  working worldwide.</span>
      </div>
        {/* <h1 className=" text-white">Hello world</h1> */}
        <img src={homeImg} alt="Not Found" className="home-img  absolute h-[30rem] left-[35%] top-[45%] -translate-x-1/2 -translate-y-1/2 scale-[0.9] z-0 filter drop-shadow-lg sm:left-[40%] md:left-[42%] md:scale-100 md:top-[40%] xl:left-1/2 xl:top-1/2 xl:scale-125 xl:z-40"/>
    </div>
   </>
  )
}

export default Home;