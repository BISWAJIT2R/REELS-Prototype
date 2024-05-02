import React from "react";
import Timline from "../Skils/Timline";
import HelpBox from "../Skils/HelpBox";

function Part3() {
  return (
    <div className=" relative part3 h-screen w-full relative  px-5  md:px-20 md:py-10 xl:py-20 xl:px-28 ">
      <div className=" relative overflow-hidden">
        <h1 className="part3-h1 overflow-hidden text-8xl font-secondary tracking-widest uppercase flex flex-col md:text-[25vw] xl:text-[25vw]">
          <div className="border-b-2 inline">Break</div>
          <div className="border-b-2 inline pl-8 relative">down</div>
        </h1>
      </div>
      <HelpBox>
        {/* <TechStack/> */}
        <Timline />
      </HelpBox>
    </div>
  );
}

export default Part3;
