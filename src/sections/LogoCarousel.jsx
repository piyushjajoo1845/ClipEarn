import { motion } from "framer-motion";
const LogoCarousel = () => {
  const logos = [
    "/log1.png",
    "/log2.png",
    "/log3.png",
    "/log4.png",
    "/log5.png",
  ];

  const extendedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="overflow-hidden w-full cursor-pointer backdrop-blur-2xl py-12 mt-20 ">
      <motion.div
        initial={{
          opacity: 0,
          x: "0%",
        }}
        animate={{
          opacity: 1,
          x: "-50%",
        }}
        transition={{
          opacity: {
            duration: 0.5,
          },
          x: {
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 0.5,
          },
        }}
        className="flex space-x-16 "
        style={{
          width: "fit-content",
          display: "flex",
          gap: "4rem",
        }}
      >
        {extendedLogos.map((item, index) => (
          <motion.img
            initial={{
                opacity:0.5
            }}
            whileHover={{
                opacity:1,
                scale:1.05,
                transition: {duration: 0.2},
            }}
            key={index}
            src={item}
            alt="logo"
            className="h-8 object-contain"
          />
        ))}
      </motion.div>
    </div>
  );
};

export default LogoCarousel;
