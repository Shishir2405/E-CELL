import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

function About() {
  return (
    <section id="about" className="w-full h-fit mx-auto lg:h-screen px-8">
      <div className={`${styles.paddingX}`}>
        <div className="relative w-fit mx-auto">
          <span className="h-[1px] w-36 bg-white absolute -bottom-2 -right-9" />
          <span className="h-[1px] w-36 bg-white absolute -top-2 -left-9" />
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center m-16`}
          >
            About {" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Us
            </span>
          </motion.h1>
        </div>

        <div className="flex w-full flex-col gap-10  lg:flex-row ">
          <motion.div
            variants={slideIn("right", "spring", 0.2, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="flex w-1/2 h-auto"
          >
            <img className="w-full h-auto" src={aboutLogo} alt="about" />
          </motion.div>
          <motion.div
            variants={slideIn("left", "spring", 1.2, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="flex flex-wrap lg:w-1/2 justify-center items-center"
          >
            <p
              className={`${styles.sectionSubText} indent-4 tracking-widest leading-7 lg:leading-9 text-sm md:text-base mb-6 lg:text-lg`}
            >
              Entrepreneurship Cell(E-Cell) is a non-profit organisation run by
              students of IPS Academy, Indore. We create awareness among the
              students about Entrepreneurship through our various programs like
              workshops, speaker session and other such events. We support the
              upcoming Entrepreneurs by providing them necessary resources such
              mentors, consultancy, seed fund and networking.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;
