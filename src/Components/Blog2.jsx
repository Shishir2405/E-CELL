import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import BlogImage from "../assets/blog-images/blog2.webp";


function Blog2() {
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
              Building a Startup Team: Why People Matter More Than Ideas
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
          alt="Startup Team"
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
        In the startup world, success is often determined by the people who make up the team rather than the idea itself. A strong team, aligned with the founder's vision, can turn a groundbreaking concept into reality. Identifying key roles in technology, marketing, operations, and business development is crucial to executing the startup’s mission effectively.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Creating a collaborative work environment is essential for startups operating under high-pressure scenarios. Open communication, mutual respect, and a positive culture foster innovation and problem-solving. A team that trusts each other can stay committed through challenges, ensuring the business remains resilient.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        To retain talent, startups can offer equity, growth opportunities, and flexible arrangements. Recognizing contributions motivates the team and builds loyalty. Ultimately, a dedicated and skilled team is the backbone of any successful startup, driving its vision forward.
      </motion.p>
    </div>
  );
}

export default Blog2;
