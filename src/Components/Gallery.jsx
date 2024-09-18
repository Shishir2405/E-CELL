

import React, { useState } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "../assets/Gallery/IMG-20240905-WA0026.jpg";
import Img2 from "../assets/Gallery/img1.JPG";
import Img3 from "../assets/Gallery/IMG_7722.JPG";
import Img4 from "../assets/Gallery/b1.webp";
import Img5 from "../assets/Gallery/b2.webp";
import Img6 from "../assets/Gallery/b3.webp";
import Img7 from "../assets/Gallery/c1.webp";
import Img8 from "../assets/Gallery/c2.jpg";

import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img2,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
  ];
  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState("");
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };
  return (
    <section id="gallery" className="w-full h-fit mx-auto my-20">
      <div id="gallery" className={`${styles.paddingX}`}>
      <motion.h1
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroHeadText} flex justify-center`}
      >
        Gallery
      </motion.h1>
      <motion.h5
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={textVariant()}
        className={`${styles.heroSubText} flex justify-center mb-10`}
      >
        Memories of our Journey
      </motion.h5>
      </div>
      <div className={model ? "model open" : "model"}>
        <img src={tempimgSrc} />
        <CloseIcon onClick={() => setModel(false)} />
      </div>
      <div className="gallery">
        {data.map((item, index) => {
          return (
            <div
              className="pics"
              key={index}
              onClick={() => getImg(item.imgSrc)}
            >
              <img src={item.imgSrc} style={{ width: "100%" }} loading="lazy"/>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
