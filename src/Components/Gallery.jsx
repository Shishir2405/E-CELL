import React, { useState } from "react";
import "../App.css";
import CloseIcon from "@mui/icons-material/Close";
import Img1 from "../assets/Gallery/IMG_0014.JPG";
import Img2 from "../assets/Gallery/img1.JPG";
import Img3 from "../assets/Gallery/IMG_7722.JPG";
import Img4 from "../assets/Gallery/IMG_0049.JPG";
import Img5 from "../assets/Gallery/IMG_20240927_162927.jpg"
import Img6 from "../assets/Gallery/IMG_20240927_153851.jpg"
import { motion } from "framer-motion";
import { styles } from "../styles";
import { textVariant, slideIn } from "../utils/motion";

const Gallery = () => {
  let data = [
    {
      id: 1,
      imgSrc: Img4,
    },
    {
      id: 3,
      imgSrc: Img3,
    },
    {
      id: 2,
      imgSrc: Img1,
    },
    {
      id: 2,
      imgSrc: Img5,
    },
    {
      id: 2,
      imgSrc: Img6,
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
        <div className="relative w-fit mx-auto">
          <span className="h-[1px] w-36 bg-white absolute -bottom-2 -right-9" />
          <span className="h-[1px] w-36 bg-white absolute -top-2 -left-9" />
          <motion.h1
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={textVariant()}
            className={`${styles.heroHeadText} flex justify-center m-16 `}
          >
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Gallery
            </span>{" "}
          </motion.h1>
        </div>
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
        <img src={tempimgSrc} className="rounded-sm" />
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
              <img src={item.imgSrc} style={{ width: "100%" }} loading="lazy" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Gallery;
