import React from "react";
import "../../App.css";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import BlogImage from "../../assets/blog-images/blog3.webp";


function Blog3() {
  const paragraphVariantLeft = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const paragraphVariantRight = {
    hidden: { opacity: 0, x: 100 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.6 } },
  };

  return (
    <div className="flex flex-col items-center p-6 space-y-8 mt-20">
      <div className={`${styles.heroHeadText} flex justify-center items-center`}>
        <div className="relative w-fit mx-auto">
          <span className="h-[1px] w-36 bg-white absolute -top-2 -right-9" />
          <span className="h-[1px] w-36 bg-white absolute -bottom-2 -left-9" />
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center`}
          >
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2 text-2xl">
              From Ideas to Reality: How to Start Your Entrepreneurial Journey
            </span>
          </motion.h2>
        </div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={imageVariant}
        className="w-full max-w-lg mb-6"
      >
        <img
          src={BlogImage}
          alt="Entrepreneurial Journey"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Every entrepreneurial journey begins with an idea, but turning that idea into reality requires thorough research and planning. Validating the idea through market analysis, target audience research, and competitor evaluation lays the foundation for success.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Creating a detailed business plan is the next step, acting as a roadmap with objectives, strategies, and financial projections. Securing funding through bootstrapping, angel investors, or government schemes is equally important, along with leveraging networking opportunities.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Execution is where many falter. Starting small, testing, and adapting to feedback ensures steady progress. Flexibility and persistence are key to transforming an idea into a thriving venture, creating an impactful entrepreneurial journey.
      </motion.p>
    </div>
  );
}

export default Blog3;
