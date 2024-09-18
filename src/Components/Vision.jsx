import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

function Vision() {
  return (
    <section id="vision" className="w-full h-fit mx-auto lg:h-screen px-8">
      <div className={`${styles.paddingX}`}>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroHeadText} flex justify-center m-16`}
        >
          Our Vision
        </motion.h1>
        <div className="flex w-full justify-center items-center">
          <motion.div
            variants={slideIn("left", "spring", 1.2, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="flex flex-wrap lg:w-1/2 justify-center items-center"
          >
            <p
              className={`${styles.sectionSubText} indent-4 tracking-widest leading-9`}
            >
              To be a leading student-driven organization that creates a
              thriving ecosystem for entrepreneurship, inspiring students to
              turn innovative ideas into successful ventures and contributing to
              the growth of the startup culture both within IPS Academy and
              beyond.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
