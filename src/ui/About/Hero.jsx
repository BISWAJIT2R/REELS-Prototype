import React from "react";

function Hero({TextBox}) {
  return (
    <div className="hero h-[100vh] w-full relative md:flex ">
      <div className="left-container overflow-hidden relative h-full w-full px-5  md:px-28">
        <p className="hidden-txt hidden md:block text-2xl font-secondary absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/3">
          Scroll down to see awsome thing.
        </p>
        <div className="text-box  py-20 md:py-12 overflow-hidden">
          <h1 className="head font-secondary font-bold capitalize text-4xl">
            Biography
          </h1>
          <div
            ref={TextBox}
            className="sub font-primary sm:font-sign text-xl  mt-2 md:text-xl xl:text-2xl xl:mt-10 overflow-hidden "
          >
            <h1 className=" relative inline md:inline-block md:text-3xl md:mb-3 overflow-hidden  xl:block  xl:font-semibold xl:text-[3rem] ">
              {" "}
              Hi, I’m{" "}
              <strong className="font-secondary text-2xl bg-img  md:text-4xl xl:text-3xl">
                Biswajit das
              </strong>
              , a frontend developer with a passion for creating engaging,
              efficient, and user-friendly digital interfaces.
            </h1>{" "}
            <h1 className=" inline md:inline-block md:text-3xl md:mb-3 overflow-hidden xl:block xl:font-extrabold xl:text-[3rem]">
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
            <h1 className=" inline md:inline-block md:text-3xl md:mb-3 xl:block xl:font-extrabold xl:text-[3rem] overflow-hidden">
              I focus on translating design concepts into functional and
              aesthetically pleasing web applications.
            </h1>{" "}
            <h1 className=" inline md:inline-block md:text-3xl md:mb-3 overflow-hidden xl:block xl:font-extrabold xl:text-[3rem]">
              My goal is to improve user experiences by making websites not only
              visually appealing but also accessible and easy to navigate.
            </h1>{" "}
            <h1 className=" inline md:inline-block md:text-3xl md:mb-3 overflow-hidden xl:block xl:font-extrabold xl:text-[3rem]">
              I’m always eager to take on new challenges and stay updated with
              the latest trends in web technologies.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
