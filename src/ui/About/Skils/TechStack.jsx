import React from 'react'
// import { TfiHtml5 } from "react-icons/tfi";
// import { SiTailwindcss } from "react-icons/si";
// import { RiJavascriptFill } from "react-icons/ri";
// import { FaReact } from "react-icons/fa6";
import {HtmlSvg, tailwindsvg,react, Node, Js} from  "../../../utils/index"
function TechStack() {
  return (
    <div className='relative w-full border-t-2 bg-slate-200 px-5'>
      <h1 className='tech-stack relative p-2 text-3xl font-primary font-semibold border-b-2 border-slate-600'><span className='text-5xl '>T</span>ech Stack</h1>
      <div className='h-[35vh] w-full bg-black relative mt-3'>
        <img src={HtmlSvg} alt="NotFound" className=' absolute h-14  inline'/>
        <img src={tailwindsvg} alt="NotFound" className=' absolute h-12  inline left-[15%] p-2 rounded-full'/>
        <img src={Node} alt="NotFound" className=' absolute h-14  inline left-[35%] p-2 rounded-full'/>
        <img src={react} alt="NotFound" className=' absolute h-14  inline left-[50%] p-2 rounded-full'/>
        <img src={Js} alt="NotFound" className=' absolute h-14  inline right-[10%] p-2 rounded-full'/>
      </div>
    </div>
  )
}

export default TechStack;