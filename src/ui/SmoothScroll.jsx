import ReactLenis from "lenis/react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

function SmoothScroll({ children }) {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => {
      gsap.ticker.remove(update);
    };
  });

  return <ReactLenis className="warpper" ref={lenisRef} autoRaf={false}>{children}</ReactLenis>;
}

export default SmoothScroll;
