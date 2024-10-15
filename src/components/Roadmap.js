import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Exdplore from "./Exdplore";
import Question from "./Question";

const textVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0 },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0 },
};

const Roadmap = () => {
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [isVisible3, setIsVisible3] = useState(false);
  
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;

      const section1 = document.getElementById("section1");
      const section2 = document.getElementById("section2");
      const section3 = document.getElementById("section3");

      const section1Top = section1?.getBoundingClientRect().top;
      const section2Top = section2?.getBoundingClientRect().top;
      const section3Top = section3?.getBoundingClientRect().top;

      if (section1Top <= windowHeight * 0.8) {
        setIsVisible1(true);
        controls1.start("visible");
      }
      if (section2Top <= windowHeight * 0.8) {
        setIsVisible2(true);
        controls2.start("visible");
      }
      if (section3Top <= windowHeight * 0.8) {
        setIsVisible3(true);
        controls3.start("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [controls1, controls2, controls3]);

  return (
    <div className="flex flex-col items-center justify-center bg-dark text-white py-10">
      <h1 className="text-center text-4xl font-bold mb-10">Roadmap</h1>

      {/* First Section */}
      <div id="section1" className="flex flex-col md:flex-row justify-around items-center w-full gap-20">
        <motion.div
          className="main text-left space-y-4 max-w-md"
          initial="hidden"
          animate={isVisible1 ? controls1 : "hidden"}
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          <p className="bg-white text-black px-4 py-1 rounded-lg font-semibold inline-block">
            Phase 1
          </p>
          <h1 className="text-3xl font-bold">Kicking Off</h1>
          <h2 className="text-xl">Launch of EthAi Officially</h2>
          <h2 className="text-xl">Development of Core AI Agent</h2>
          <h2 className="text-xl">User Onboarding Campaign</h2>
          <h2 className="text-xl">Community Engagement Initiative</h2>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0"
          initial="hidden"
          animate={isVisible1 ? controls1 : "hidden"}
          transition={{ duration: 0.5 }}
          variants={imageVariants}
        >
          <img
            className="w-full md:w-96 rounded-lg shadow-lg"
            src="https://www.slidekit.com/wp-content/uploads/2023/02/Colorful-Semi-Circle-Roadmap-Template-In-PowerPoint-Dark-Theme-950x534.jpg"
            alt="Roadmap"
          />
        </motion.div>
      </div>

      {/* Second Section */}
      <div id="section2" className="flex flex-col md:flex-row justify-around items-center w-full gap-20 mt-20">
        <motion.div
          className="mt-8 md:mt-0"
          initial="hidden"
          animate={isVisible2 ? controls2 : "hidden"}
          transition={{ duration: 0.5 }}
          variants={imageVariants}
        >
          <img
            className="w-full md:w-96 rounded-lg shadow-lg"
            src="https://www.slidekit.com/wp-content/uploads/2023/02/Colorful-Semi-Circle-Roadmap-Template-In-PowerPoint-Dark-Theme-950x534.jpg"
            alt="Roadmap"
          />
        </motion.div>

        <motion.div
          className="main text-left space-y-4 max-w-md"
          initial="hidden"
          animate={isVisible2 ? controls2 : "hidden"}
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          <p className="bg-white text-black px-4 py-1 rounded-lg font-semibold inline-block">
            Phase 2
          </p>
          <h1 className="text-3xl font-bold">Bigger Insight</h1>
          <h2 className="text-xl">Development of Core AI Agent</h2>
          <h2 className="text-xl">User Onboarding Campaign</h2>
          <h2 className="text-xl">Community Engagement Initiative</h2>
        </motion.div>
      </div>

      {/* Third Section */}
      <div id="section3" className="flex flex-col md:flex-row justify-around items-center w-full gap-20 mt-20">
        <motion.div
          className="main text-left space-y-4 max-w-md"
          initial="hidden"
          animate={isVisible3 ? controls3 : "hidden"}
          transition={{ duration: 0.5 }}
          variants={textVariants}
        >
          <p className="bg-white text-black px-4 py-1 rounded-lg font-semibold inline-block">
            Phase 3
          </p>
          <h1 className="text-3xl font-bold">Full Power</h1>
          <h2 className="text-xl">Launch of EthAi Officially</h2>
          <h2 className="text-xl">Development of Core AI Agent</h2>
          <h2 className="text-xl">User Onboarding Campaign</h2>
          <h2 className="text-xl">Community Engagement Initiative</h2>
        </motion.div>

        <motion.div
          className="mt-8 md:mt-0"
          initial="hidden"
          animate={isVisible3 ? controls3 : "hidden"}
          transition={{ duration: 0.5 }}
          variants={imageVariants}
        >
          <img
            className="w-full md:w-96 rounded-lg shadow-lg"
            src="https://www.slidekit.com/wp-content/uploads/2023/02/Colorful-Semi-Circle-Roadmap-Template-In-PowerPoint-Dark-Theme-950x534.jpg"
            alt="Roadmap"
          />
        </motion.div>
      </div>
      
      <Question />
      <div style={{marginTop:"100px"}}>
        <Exdplore />
      </div>
    </div>
  );
};

export default Roadmap;
