import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

function Mission() {
  return (
    <section id="mission" className="w-full h-fit mx-auto lg:h-screen px-8">
      <div className={`${styles.paddingX}`}>
        <motion.h1
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className={`${styles.heroHeadText} flex justify-center m-16`}
        >
          Our Mission
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
              To foster an entrepreneurial mindset among students by providing a
              platform that nurtures innovation and empowers aspiring
              entrepreneurs with the necessary resources, knowledge, and skills.
              We aim to support the development of future business leaders
              through workshops, speaker sessions, and access to mentorship,
              consultancy, seed funding, and networking opportunities.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
