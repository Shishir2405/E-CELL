import React from "react";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { useNavigate } from "react-router-dom";
import BlogImage2 from "../assets/blog-images/blog2.webp";
import BlogImage3 from "../assets/blog-images/blog3.webp";
import BlogImage4 from "../assets/blog-images/blog4.webp";
import BlogImage5 from "../assets/blog-images/blog5.webp";
import BlogImage6 from "../assets/blog-images/blog6.webp";
import BlogImage7 from "../assets/blog-images/blog7.webp";

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
      className="min-h-screen flex flex-col items-center p-6 space-y-8 overflow-y-auto"
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
              src={BlogImage2}
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
              src={BlogImage3}
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

        <div className="space-y-6">
  {/* Card 4: The Evolution of Entrepreneurship: Lessons from the Past */}
  <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
    <div className="w-full h-48 md:w-1/3 md:h-auto">
      <img
        src={BlogImage4} // Replace with an image related to entrepreneurship evolution
        alt="The Evolution of Entrepreneurship"
        className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
      />
    </div>
    <div className="p-6 md:w-2/3 flex flex-col">
      <h4 className="text-lg font-semibold mb-2">
        The Evolution of Entrepreneurship: Lessons from the Past
      </h4>
      <p className="text-sm mb-4">
        Entrepreneurship has changed dramatically over the years, from small-town artisans to tech-driven startups. This blog takes a deep dive into the evolution of entrepreneurship, focusing on key moments in history—from the industrial revolution to the rise of Silicon Valley—and how today's entrepreneurs can learn from past lessons.
      </p>
      <button
        className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
        onClick={() => handleRedirect("/blog4")} // Path for blog 4
      >
        Read More
      </button>
    </div>
  </div>

  {/* Card 5: Sustainable Startups: The Business of Doing Good */}
  <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
    <div className="w-full h-48 md:w-1/3 md:h-auto">
      <img
        src={BlogImage5} // Replace with an image related to sustainability
        alt="Sustainable Startups"
        className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
      />
    </div>
    <div className="p-6 md:w-2/3 flex flex-col">
      <h4 className="text-lg font-semibold mb-2">
        Sustainable Startups: The Business of Doing Good
      </h4>
      <p className="text-sm mb-4">
        Sustainability is now an integral part of business success. This blog covers how entrepreneurs can build sustainable businesses that benefit both the planet and their bottom line. Learn from examples like Tesla and Patagonia and discover how to incorporate eco-friendly practices into your startup.
      </p>
      <button
        className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
        onClick={() => handleRedirect("/blog5")} // Path for blog 5
      >
        Read More
      </button>
    </div>
  </div>

  {/* Card 6: Overcoming the Fear of Failure: A Guide for First-Time Founders */}
  <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
    <div className="w-full h-48 md:w-1/3 md:h-auto">
      <img
        src={BlogImage6} // Replace with an image of overcoming failure or growth
        alt="Overcoming Failure"
        className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
      />
    </div>
    <div className="p-6 md:w-2/3 flex flex-col">
      <h4 className="text-lg font-semibold mb-2">
        Overcoming the Fear of Failure: A Guide for First-Time Founders
      </h4>
      <p className="text-sm mb-4">
        The fear of failure can stop many aspiring entrepreneurs from even starting. In this blog, we share how first-time founders can overcome this fear by learning from stories of entrepreneurs like Elon Musk and Sara Blakely. Failure is a part of the journey, and this blog will help you see it as a stepping stone to success.
      </p>
      <button
        className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
        onClick={() => handleRedirect("/blog6")} // Path for blog 6
      >
        Read More
      </button>
    </div>
  </div>

  {/* Card 7: The Role of Networking in Entrepreneurial Success */}
  <div className="flex flex-col md:flex-row items-center bg-transparent text-white border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105 w-full max-w-lg md:max-w-3xl mx-auto my-4">
    <div className="w-full h-48 md:w-1/3 md:h-auto">
      <img
        src={BlogImage7} // Replace with networking-related image
        alt="Networking Success"
        className="object-cover h-full w-full rounded-t-2xl md:rounded-t-none md:rounded-l-2xl"
      />
    </div>
    <div className="p-6 md:w-2/3 flex flex-col">
      <h4 className="text-lg font-semibold mb-2">
        The Role of Networking in Entrepreneurial Success
      </h4>
      <p className="text-sm mb-4">
        Networking is an essential tool for entrepreneurs. This blog covers how strong professional connections can open doors to opportunities, mentorship, funding, and business growth. Learn the importance of building and maintaining a network to succeed in the competitive world of entrepreneurship.
      </p>
      <button
        className="self-start mt-auto border border-white shadow-sm rounded-full py-2 px-5 text-xs text-white font-semibold transition-all duration-200"
        onClick={() => handleRedirect("/blog7")} // Path for blog 7
      >
        Read More
      </button>
    </div>
  </div>
</div>

      </div>
    </div>
  );
}

export default Blog;
