import Links from "../ui/Protfolio/Links";
import { projectArr } from "../utils/index";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import SplitType from "split-type";
function Protfolio() {
  const box = useRef();
  const hoverBox = useRef();
  console.clear();
  useGSAP(() => {
    const LinkBox = hoverBox.current.querySelectorAll(".wrapper .project-txt");
    function textAnimation (data) {
       gsap.from(data, {
        opacity:0,
        stagger: 0.2,
        delay: 0.7
       })
    }

    LinkBox.forEach((txt) => {
      const name = new SplitType(txt, {types: "chars"});
      textAnimation(name.chars)
    });
    
    hoverBox.current.addEventListener('mouseenter', textAnimation);
    
  }, { dependencies: [], scope: box });
  return (
    <div ref={box} className="h-full w-full py-5 xl:px-12">
      <ul ref={hoverBox} className=" list-none flex flex-col gap-5">
        {projectArr.map(({ name, hoverImg }, i) => (
          <li key={i}>
            <Links img={hoverImg} name={name} number={`0${i + 1}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Protfolio;
