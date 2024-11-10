import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Blog() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Button click handler for redirect
  const handleRedirect = () => {
    window.scrollTo(0, 0);
    navigate("/blog1"); // Navigate to the specified route
  };
  return (
    <div id="blog" className="flex flex-col items-center p-6 space-y-8">
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
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Blog
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Clickable Card Section */}
      <div className="flex flex-col md:flex-row items-center bg-white text-gray-900 border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
  
  {/* Image */}
  <div className="w-full h-48 md:w-1/3 md:h-auto">
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqF9IID-hStEaWulqZM6_v3DzjeguBlrZSLK1sKI2sGUVMKqpsHR6x1k&s=10"
      alt="Blog image"
      className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
    />
  </div>

  {/* Text Content */}
  <div className="p-6 md:w-2/3 flex flex-col">
    <h4 className="text-lg font-semibold mb-2">
      Empowering Bharat: Insights into Entrepreneurship and Innovation
    </h4>
    <p className="text-sm text-gray-600 mb-4">
      Bharat's entrepreneurial landscape is evolving, creating opportunities 
      for aspiring entrepreneurs. Our blog explores trends, shares alumni 
      success stories, and provides tips on essential skills, E-Cell resources, 
      and networking strategies for startups.
    </p>
    
    {/* Button */}
    <button className="self-start mt-auto bg-indigo-600 hover:bg-indigo-500 shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
    onClick={handleRedirect}>
      Read More
    </button>
  </div>
</div>

    </div>
  );
}

export default Blog;
