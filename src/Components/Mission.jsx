import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

function Mission() {
  return (
    <section id="mission" className="w-full h-fit mx-auto lg:h-screen px-8">
      <div className={`${styles.paddingX}`}>
        <div className="relative w-fit mx-auto">
          <span className="h-[1px] w-32 bg-white absolute -bottom-2 -right-9" />
          <span className="h-[1px] w-32 bg-white absolute -top-2 -left-9" />
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center mb-8`}
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Mission
            </span>
          </motion.h1>
        </div>
        <div className="flex w-full justify-center items-center">
          <motion.div
            variants={slideIn("left", "spring", 1.5, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="flex flex-wrap lg:w- justify-center items-center"
          >
            <p
              className={`${styles.sectionSubText} indent-4 tracking-widest leading-7 lg:leading-9 text-sm md:text-base mb-6 lg:text-lg`}
            >
              Our mission at the Entrepreneurship Cell is to ignite creativity
              and foster an entrepreneurial spirit by providing exceptional
              mentorship, resources, and opportunities for students to turn
              their ideas into impactful ventures. In our one-year tenure, we
              are committed to guide 100+ students and supporting 25+ startups
              to transform their ideas into reality. We are dedicated to
              organizing innovative workshops, building a collaborative network,
              and creating a thriving startup ecosystem. By supporting social
              entrepreneurship, enhancing leadership skills, and offering
              crucial funding and guidance, we aim to empower the next
              generation of leaders to drive change and contribute meaningfully
              to society and the global economy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Mission;
