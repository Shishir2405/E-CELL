import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";

function Blog1() {
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
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2 text-2xl">
            Empowering Bharat: Insights into Entrepreneurship and Innovation
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
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqF9IID-hStEaWulqZM6_v3DzjeguBlrZSLK1sKI2sGUVMKqpsHR6x1k&s=10" // Replace with actual image URL
          alt="Image Description"
          className="w-full h-auto rounded-lg"
        />
      </motion.div>

      {/* Animated Paragraphs */}
      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        In Bharat, the entrepreneurial landscape is rapidly evolving with new opportunities and emerging industries that are transforming the nation’s economic future. A blog exploring these trends would give readers insights into the potential within India's startup ecosystem and highlight the promising path ahead for aspiring entrepreneurs. Another inspiring piece could feature success stories from our alumni who have made significant strides in their entrepreneurial journeys. By sharing their challenges, perseverance, and achievements, we aim to motivate current students to pursue their own ventures.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Equally important are the skills that every young entrepreneur should develop, such as leadership, innovation, and financial literacy. A blog that delves into these essential skills can provide actionable advice, helping students build a strong foundation for success. Meanwhile, our E-Cell offers an array of resources, mentorship programs, and workshops designed to support budding startups and provide a nurturing space for growth and learning. Detailing these resources could help students make the most of what the E-Cell has to offer.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Finally, networking is a crucial part of any entrepreneurial journey. A blog on effective networking techniques, including both online and offline methods, would equip aspiring entrepreneurs with practical tips to build valuable connections, foster partnerships, and unlock new opportunities. Together, these blog topics offer valuable insights and guidance, nurturing a spirit of innovation within our community.
      </motion.p>
    </div>
  );
}

export default Blog1;
