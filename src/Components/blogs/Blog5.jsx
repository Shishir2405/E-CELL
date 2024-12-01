import React from "react";
import "../../App.css";
import { styles } from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import BlogImage from "../../assets/blog-images/blog5.webp";

function Blog5() {
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
              Building a Sustainable Startup: Profitability and Responsibility
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
          src={BlogImage} // Consider using a more sustainability-oriented image
          alt="Sustainable Startup"
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
        In recent years, sustainability has evolved from a buzzword to a necessity. Businesses that prioritize sustainability are not only addressing global challenges like climate change, but also forming deeper connections with conscious consumers. Entrepreneurs can create sustainable startups by integrating eco-friendly practices while maintaining profitability.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Case studies like Tesla’s mission to accelerate the world’s transition to sustainable energy and Patagonia’s dedication to environmental activism demonstrate that profitability and responsibility can coexist. These companies prove that sustainability isn’t just an ethical choice, it’s also a competitive advantage in today’s market.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantLeft}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        For startups, choosing eco-friendly materials, reducing waste in supply chains, and adopting renewable energy are actionable steps that can make a significant impact. Additionally, government incentives and grants for green initiatives can provide the necessary financial support to foster growth for sustainability-focused entrepreneurs.
      </motion.p>

      <motion.p
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={paragraphVariantRight}
        style={{ color: "white" }}
        className="text-base leading-relaxed"
      >
        Sustainability is not just good for the planet—it is a powerful differentiator. By prioritizing environmental responsibility, startups can foster loyalty among consumers who care about the impact of their purchases. In a competitive marketplace, a commitment to sustainability can lead to long-term success.
      </motion.p>
    </div>
  );
}

export default Blog5;