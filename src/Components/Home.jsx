import React from "react";
import { StarsCanvas } from "./canvas";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { logo } from "../assets";
import { slideIn } from "../utils/motion";

function Home() {
  return (
    <section id="home" className="relative w-screen h-screen mx-auto my-20">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[70px] max-w-7xl mx-auto flex flex-col items-start gap-5 my-19`}
      >
        <motion.div variants={slideIn("up", "spring", 0.2, 1)}
        initial="hidden"
        whileInView="show"
        viewport={{once:true}}
        >
          <img className="h-28" src={logo} alt=""/>
          <motion.h1 className={`${styles.heroHeadText}text-white-100 my-4`}>
            E-CELL | IPS ACADEMY
          </motion.h1>
          <h2 className={`${styles.heroSubText} mt-2  text-white-100`}>
            <i> E-cell x IIT Bombay </i>
          </h2>
          <h6 className={` ${styles.heroSubText} mt-2  text-white-100 `}>
            <i className="text-lg"> - where E-cell's passion meets IIT Bombay innovation </i>
          </h6>
        </motion.div>
        <motion.div
          variants={slideIn("down", "spring", 0.2, 1)}
          initial="hidden"
         whileInView="show"
         viewport={{once:true}}
          className="p-2 border-none"
          whileHover={{transition:{delay:1}}}
        >
         <button className="border-2 px-6 py-2 text-base text-white rounded-lg font-medium hover:bg-white/10">Register</button>
        </motion.div>
      </div>
      <StarsCanvas />
    </section>
  );
}

export default Home;