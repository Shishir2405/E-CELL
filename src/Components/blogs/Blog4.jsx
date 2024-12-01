import React from "react";
import "../../App.css";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import BlogImage from "../../assets/blog-images/blog4.webp";


function Blog4() {
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
          {/* Reversed line positions */}
          <span className="h-[1px] w-36 bg-white absolute -top-2 -right-9" />
          <span className="h-[1px] w-36 bg-white absolute -bottom-2 -left-9" />
          <motion.h2
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center`}
          >
            <span className="bg-gradient-to-r from-green-500 to-teal-500 bg-clip-text text-transparent ml-2 text-2xl">
              The Evolution of Entrepreneurship: Lessons from the Past
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Animated Image at the Top */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={imageVariant}
        className="w-full max-w-lg mb-6"
      >
        <img
          src={BlogImage} // Replace with actual image URL
          alt="Evolution of Entrepreneurship"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Animated Paragraphs */}
      <motion.p
        initial="hidden"
        whileInView="show"https://www.example.com/entrepreneurship-evoluti
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Entrepreneurship has undergone a remarkable transformation over the years, shaped by economic, social, and technological changes. This blog will take readers on a journey through the evolution of entrepreneurship, beginning with the days of small-town artisans and traders who laid the foundation for commerce. The industrial revolution ushered in an era of mass production and corporations, fundamentally altering the scale and scope of businesses. 
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Fast forward to the 20th century, when Silicon Valley emerged as the hub for tech-driven entrepreneurship. It became the birthplace of giants like Apple and Microsoft. Today, we see the rise of the gig economy, digital platforms, and AI-driven startups representing the latest chapter in the ongoing evolution of entrepreneurship. These changes highlight the importance of adaptability and agility in seizing new opportunities as industries and technologies evolve.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        By analyzing these shifts, readers can gain a deeper understanding of the lessons learned through history. Entrepreneurs today can draw inspiration from historical examples, learning how to balance innovation with resilience while navigating modern challenges such as globalization, climate change, and shifting economic landscapes.
      </motion.p>
    </div>
  );
}

export default Blog4;
