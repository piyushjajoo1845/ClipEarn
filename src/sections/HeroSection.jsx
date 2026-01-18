import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import heroImage from "../assets/heroImage1.jpg";
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };
  return (
    <section className="relative px-4 sm:px-6 lg:px-8">
      {/* Main Container with max-width  */}
      <div className="max-w-7xl mx-auto">
        {/* main heading */}
        <motion.div
          className="flex items-center justify-center pt-24 sm:pt-32 md:pt-40"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            variants={itemVariants}
            className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight"
          >
            <span className="grad1 clash-display block mb-2">
              Turn Your Creativity into Cash.
            </span>

            <span className="clash-display block text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
              Making Shorts for Global Brands.
            </span>
          </motion.h1>
        </motion.div>

        {/* Buttons */}
        <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 md:pt-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.button
                variants={itemVariants}
                whileHover={{scale: 1.05 , y:-2}}
                whileTap={{scale: 0.95}}
                className="w-full sm:w-auto text-sm md:text-base bg-gradient-to-r from-gray-400 to to-indigo-600 clash-display px-6 md:px-8 py-3 md:py-3.5 rounded-full cursor-pointer transition-all duration-300 hover:shadow-indigo-500/50 font-medium"
            >
                Start Now
            </motion.button>

            <motion.button 
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto text-zinc-50 text-sm md:text-base clash-display glass px-6 md:px-8 py-3 md:py-3.5 rounded-full cursor-pointer transition-all duration-300 hover:bg-indigo-500/20 flex items-center justify-center gap-2 font-medium"
          >
            View Brands 
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
          </motion.button>

        </motion.div>

        {/* hero Image */}
        <motion.div
            className="relative mx-auto max-w-5xl mt-12 sm:mt-16 md:mt-20 px-4 sm:px-0 mb-30"    
            initial={{ opacity: 0 , y: 40}}
            animate={{ opacity: 1 , y:0}}
            transition={{duration:0.8 , delay:0.4 , ease: "easeOut"}}
        >
            <img src={heroImage} alt="hero-img" className="w-full h-auto" loading="lazy"/>
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-indigo-600/20 blur-3xl -z-10 rounded-full"/>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
