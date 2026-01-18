import { useState, useEffect, useRef, use } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { features } from "../data/data";
const FeaturesSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const intervalRef = useRef(null);

  //Autoplay
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % features.length);
      }, 4000);
    }

    return () => clearInterval(intervalRef.current);
  }, [isPaused]);

  //if user hovers , pause autoplay
  const handleHover = (index) => {
    setIsPaused(true);
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setIsPaused(false);
  };

  return (
    <section className="container mx-auto px-4 py-24">
      {/* title */}
      <div className="max-w-2xl mb-20">
        <h2 className="text-5xl md:text-6xl mb-6 tracking-tight clash-display">
          Create. Upload.{" "}
          <span className="text-indigo-300 font-medium "> Get Paid</span>
        </h2>

        <p className="text-lg text-zinc-300/80">
          Think of ClipEarn as your creative marketplace. Brands post campaigns,
          you pick the ones you love, create authentic content, and get paid
          fast. It's really that simple. Your creativity, your schedule, your
          income.
        </p>
      </div>

      {/* Features content */}
      <div className="w-full">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* left :Tab Triggers */}
          <div className="md:col-span-5 space-y-3">
            <div className="col w-full h-auto p-0 space-y-3 ">
              {features.map((feature, index) => (
                <div
                  key={index}
                  onMouseEnter={() => handleHover(index)}
                  onMouseLeave={() => handleLeave}
                  onClick={() => setActiveIndex(index)}
                  className={`centered-row gap-4 cursor-pointer hover:bg-indigo-500/10 p-2 transition-all duration-300 ease-out border rounded-xl ${
                    activeIndex === index
                      ? "border-indigo-400/40 bg-indigo-500/10"
                      : "border-transparent"
                  }`}
                >
                  {/* icon */}
                  <div className="">{feature.icon}</div>

                  {/* content */}
                  <div className="col gap-1 ">
                    <h3 className="text-base clash-display text-indigo-300">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-zinc-300/80">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
              {/* item */}
            </div>
          </div>

          {/* Right: Tab Images */}
          <div className="md:col-span-7 min-h-[320px] centered-row">
            <AnimatePresence mode="wait">
              <motion.div 
                key={features[activeIndex].title}
                initial={{
                  opacity: 0 , y:60
                }}
                animate={{
                  opacity: 1 , y:0
                }}
                exit={{
                  opacity:0 , x:-60
                }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut"
                }}
                className="glass rounded-xl overflow-hidden w-full relative">
                <div className=" inset-0 bg-gradient-to-br from-indigo-500 to-transparent">
                  <img
                    src={features[activeIndex].image}
                    alt="features_image"
                    className="w-full h-full object-contain relative z-10"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
