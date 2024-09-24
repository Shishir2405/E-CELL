import React from "react";
import { aboutLogo } from "../assets";
import { motion } from "framer-motion";
import "../App.css";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

function EurekaRegister() {
  return (
    <section id="mission" className="w-full h-fit mx-auto lg:h-screen px-8">
      <div className={`${styles.paddingX}`}>
        <div className="relative w-fit mx-auto">
          <span className="h-[1px] w-36 bg-white absolute -bottom-2 -right-9" />
          <span className="h-[1px] w-36 bg-white absolute -top-2 -left-9" />
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center m-16`}
          >
            Pitching {" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Contest
            </span>
          </motion.h1>
        </div>
        <div className="flex w-full justify-center items-center flex-col">
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
              Organizing a pitching competition at IPS Academy by E-Cell to
              promote enterpreneurship and give early stage startups a chance to
              participate in{" "}
              <strong className="text-white font-extrabold">
                Eureka! 2024
              </strong>
              . The event will help students gain exposure, network with mentors
              and earn a fast tracked evaluation to Eureka's Zonal round .
            </p>

            <div className={`${styles.sectionSubText} w-full text-left`}>
              <p className="mb-4">
                Registration ends on <b className="text-white">26 Sep 2024</b>{" "}
              </p>
              <p  className="mb-4">
                Team size <b className="text-white">Maximum of 4 members,</b>{" "}
                or you can participate{" "}
                <b className="text-white">indivisually.</b>{" "}
              </p>
            </div>

            <div className="w-3/4 flex justify-evenly mt-8">
              {" "}
              <a href="https://forms.gle/CRgmYXCYoWwU2xGC9">
                <button className="border-2 px-6 py-2 text-base text-white rounded-lg font-medium hover:bg-white/10">
                  Register
                </button>
              </a>
              <a href="https://www.ecell.in/eureka/">
                <button className="border-2 px-6 py-2 text-base text-white rounded-lg font-medium hover:bg-white/10">
                  Explore
                </button>
              </a>
              <a href="">
                {" "}
                <button className="border-2 px-6 py-2 text-base text-white rounded-lg font-medium hover:bg-white/10">
                  Guildline
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default EurekaRegister;
