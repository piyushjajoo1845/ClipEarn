import React, { useEffect, useState } from "react";
import { Video } from "lucide-react";
import { Menu } from "lucide-react";
import {Link} from "react-scroll";
const Navbar = () => {

  const [isScrolled , setIsScrolled] = useState(false);

  //scroll effect on navbar
  useEffect(()=>{

    const handleScroll = ()=>{
      setIsScrolled(window.scrollY > 50)
    }

      window.addEventListener("scroll" , handleScroll)

      return() => window.removeEventListener("scroll" , handleScroll)
  },[])
  return (
    <header className={`fixed cursor-pointer top-3.5 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 rounded-full ${

      isScrolled ? "h-14 bg-[#1b1b1b]/40 backdrop-blur-xl border border-white/10 scale-95 w-[95%] max-w-2xl" : "h-14 bg-[#1b1b1b]  w-[95%] max-w-3xl"
    }`}>

      <div className="mx-auto h-full px-6 ">
        <nav className="centered-row justify-between h-full">
          {/* logo */}
          <div className="centered-row gap-2 ">
            <Video className="w-5 h-5" />

            <span className="font-bold text-base clash-display">ClipEarn</span>
          </div>
          {/* Desktop Navigation */}

          <div className="hidden md:centered-row gap-6">
            {["Features", "Prices", "Testimonials"].map((item, index) => (
              <a
                key={index}
                href="nav_link"
                className="font-bold text-sm text-zinc-400 hover:text-indigo-200 hover:-translate-y-1 ease-out transition-all duration-300"
              >
                {item}
              </a>
            ))}

            {/* Button */}
            <button className="clash-display text-base bg-gradient-to-r from-gray-400 to-indigo-600 px-4 py-2 rounded-full cursor-pointer hover:-translate-y-0.5 duration-200 transition-all ease-out hover:shadow-sm hover:shadow-white">
              Start Creating
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden glass p-1 rounded-md">
            <Menu className="w-8 " />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
