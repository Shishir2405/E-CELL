import React from "react";
import "../../App.css";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import BlogImage from "../../assets/blog-images/blog9.webp";

function Blog9() {
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
              Leveraging AI and Technology for Innovative Business Solutions
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
          src={BlogImage} // Choose an image relevant to AI or technology
          alt="AI and Technology"
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
        The rapid evolution of artificial intelligence (AI) and other cutting-edge technologies has dramatically reshaped the business world, offering new opportunities and tools that were previously unthinkable. AI, especially, is revolutionizing how businesses operate, from automating processes to creating personalized experiences for customers.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        For instance, startups are increasingly utilizing AI-driven chatbots to provide 24/7 customer service, while machine learning algorithms are helping businesses fine-tune their marketing strategies by analyzing consumer behavior.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        In addition to AI, other emerging technologies such as blockchain, Internet of Things (IoT), and augmented reality (AR) are fostering innovation across various industries. These technologies are not only improving efficiencies but are also enabling businesses to offer more personalized and responsive products and services, creating a competitive edge in the market.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Entrepreneurs now have the opportunity to leverage these technologies to streamline operations, enhance customer experiences, reduce operational costs, and stay ahead of market trends. This blog will explore how startups, regardless of their size or sector, can integrate AI and emerging technologies into their business models.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        By doing so, they can position themselves for success in a rapidly evolving digital landscape.
      </motion.p>
    </div>
  );
}

export default Blog9;
