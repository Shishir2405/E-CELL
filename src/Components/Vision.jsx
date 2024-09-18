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
        <div className="relative w-fit mx-auto mb-5 xs:mt-5">
          <span className="h-[1px] w-36 bg-white absolute -bottom-2 -right-9" />
          <span className="h-[1px] w-36 bg-white absolute -top-2 -left-9" />
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Vision
            </span>
          </motion.h1>
        </div>
        <div className="flex w-full justify-center items-center">
          <motion.div
            variants={slideIn("left", "spring", 1.5, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="flex flex-wrap lg:w-4/5 justify-center items-center"
          >
            <p
              className={`${styles.sectionSubText} indent-4 tracking-widest leading-7 lg:leading-9 text-sm md:text-base mb-6 lg:text-lg`}
            >
              The Entrepreneurship Cell strives to build a vibrant platform that
              nurtures innovation, fosters an entrepreneurial mindset, and
              empowers students to turn their ideas into impactful ventures.
              Through mentorship, skill development, and a collaborative
              community, we aim to develop leaders who are driven by creativity,
              social responsibility, and a commitment to sustainable growth. Our
              vision is to inspire and equip the next generation of
              entrepreneurs to make meaningful contributions to society and
              the global economy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Vision;
