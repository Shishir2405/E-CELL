import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";

function Blog() {
  const navigate = useNavigate();

  // Button click handler for redirect
  const handleRedirect = (path) => {
    window.scrollTo(0, 0);
    navigate(path); // Navigate to the specified route
  };

  return (
    <div
      id="blog"
      className="h-screen flex flex-col items-center p-6 space-y-8 overflow-y-auto"
      style={{
        maxHeight: "100vh", // Limit the height to viewport height
      }}
    >
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
            <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
              Blog
            </span>
          </motion.h2>
        </div>
      </div>

      {/* Cards Section */}
      <div className="space-y-6">
        {/* Card 1 */}
        <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
          <div className="w-full h-48 md:w-1/3 md:h-auto">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqF9IID-hStEaWulqZM6_v3DzjeguBlrZSLK1sKI2sGUVMKqpsHR6x1k&s=10"
              alt="Blog image"
              className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col">
            <h4 className="text-lg font-semibold mb-2">
              Empowering Bharat: Insights into Entrepreneurship and Innovation
            </h4>
            <p className="text-sm mb-4">
              Bharat's entrepreneurial landscape is evolving, creating
              opportunities for aspiring entrepreneurs. Our blog explores trends,
              shares alumni success stories, and provides tips on essential
              skills, E-Cell resources, and networking strategies for startups.
            </p>
            <button
              className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
              onClick={() => handleRedirect("/blog1")}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Card 2 */}
        <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
          <div className="w-full h-48 md:w-1/3 md:h-auto">
            <img
              src="src\assets\blog-images\blog2.webp"
              alt="Blog image 2"
              className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col">
            <h4 className="text-lg font-semibold mb-2">
              Building a Startup Team: Why People Matter More Than Ideas
            </h4>
            <p className="text-sm mb-4">
              Success hinges on the team, not just the idea. Learn how to build
              and retain a collaborative and skilled team to drive startup growth.
            </p>
            <button
              className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
              onClick={() => handleRedirect("/blog2")}
            >
              Read More
            </button>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
          <div className="w-full h-48 md:w-1/3 md:h-auto">
            <img
              src="src\assets\blog-images\blog3.webp"
              alt="Blog image 3"
              className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
            />
          </div>
          <div className="p-6 md:w-2/3 flex flex-col">
            <h4 className="text-lg font-semibold mb-2">
              From Ideas to Reality: How to Start Your Entrepreneurial Journey
            </h4>
            <p className="text-sm mb-4">
              Learn the steps to transform your business idea into a reality, from
              planning and funding to execution and adaptability.
            </p>
            <button
              className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
              onClick={() => handleRedirect("/blog3")}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Blog;
