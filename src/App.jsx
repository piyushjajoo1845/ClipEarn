import Navbar from "./components/Navbar"
import HomePage from "./pages/HomePage";

//smooth scroll
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";
import {useRef ,useEffect } from "react";


const  App = () => {

  const contentRef = useRef(null)

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger , ScrollSmoother)
        const smoother = ScrollSmoother.create({
            content:"#smooth-content",
            smooth: 2,
            effects:true
        })
        return () => {
          smoother && smoother.kill()
          ScrollTrigger.getAll().forEach((t)=>t.kill());
        }
    },[])
  

  return (
    <>
     <div className="text-zinc-100  bg-black p-4">
        <Navbar/>
        <div id="smooth-content" ref={contentRef}>
            <HomePage/>
        </div>
        
     </div>
    </>
  )
}

export default App
