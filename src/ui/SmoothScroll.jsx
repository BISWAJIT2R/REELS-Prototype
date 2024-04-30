import { ReactLenis } from "@studio-freight/react-lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";
function SmoothScroll({ children }) {
    const lenisRef = useRef()
  
    useEffect(() => {
      function update(time) {
        lenisRef.current?.lenis?.raf(time * 1000)
      }
    
      gsap.ticker.add(update)
    
      return () => {
        gsap.ticker.remove(update)
      }
    }, [])
  return <ReactLenis ref={lenisRef}>{children}</ReactLenis>;
}

export default SmoothScroll;
