import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import BlogImage from "../assets/blog-images/blog6.webp";

function Blog6() {
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
              Overcoming the Fear of Failure: A Guide for First-Time Founders
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
          src={BlogImage} // You may want to choose an image related to entrepreneurship or overcoming challenges
          alt="Fear of Failure"
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
        For many aspiring entrepreneurs, the fear of failure is one of the biggest barriers to starting a venture. However, it’s important to remember that failure isn’t the end, but rather a critical part of the entrepreneurial journey. Every setback is an opportunity to learn and grow.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Stories of renowned entrepreneurs like Elon Musk and Sara Blakely show how failure can lead to eventual success. Elon Musk’s early ventures faced multiple setbacks before he achieved the success of SpaceX and Tesla. Sara Blakely, the founder of Spanx, faced many rejections before her product revolutionized the shapewear industry. Their journeys prove that resilience and learning from failure are often the keys to success.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Failure offers invaluable lessons that can help founders refine their strategies and develop the resilience needed to overcome future challenges. It is essential to approach failure as feedback rather than defeat, allowing it to shape better business practices.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        To manage the fear of failure, it’s important to set realistic goals, test ideas with minimal investment, and surround yourself with mentors and advisors. By taking small, calculated risks and gathering feedback, first-time founders can build confidence and gradually overcome their fears.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Cultivating a growth mindset is vital for overcoming fear. Embrace challenges as opportunities for growth and remember that every failure brings you closer to success. With determination and the right mindset, first-time founders can navigate the entrepreneurial journey with confidence.
      </motion.p>
    </div>
  );
}

export default Blog6;