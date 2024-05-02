import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Header from "../Skils/Header";
import HelpBox from "../Skils/HelpBox";
import Card from "../Skils/Card";
import { useRef } from "react";

const HelperArr = [
  {
    heading: "Design",
    content:
      "With a solid track record in designing websites, I deliver strong and user-friendly digital designs. (Since 2024 only in combination with development)",
  },
  {
    heading: "Development",
    content:
      "I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction.",
  },
  {
    heading: "The full package",
    content:
      "A complete website from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects.",
  },
];

function Part2() {
  return (
    <div className="part2 h-screen w-full relative  px-5 bg-[#E9EAEB] md:px-20 md:py-20 xl:py-5">
      <Header />
      <HelpBox>
        {
            HelperArr.map(({heading, content}, i ) => <Card key={i} h1={heading} p={content} i={`0${i + 1}`}/>)
        }
      </HelpBox>
    </div>
  );
}

export default Part2;
