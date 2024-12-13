import React, { useState } from "react";
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
import BlogImage8 from "../assets/blog-images/blog8.webp";
import BlogImage9 from "../assets/blog-images/blog9.webp";
import BlogImage10 from "../assets/blog-images/blog10.webp";

function Blog() {
  const navigate = useNavigate();

  const handleRedirect = (path) => {
    window.scrollTo(0, 0);
    navigate(path);
  };

  const blogs = [
    {
      id: 1,
      title: "Empowering Bharat: Insights into Entrepreneurship and Innovation",
      description:
        "Bharat's entrepreneurial landscape is evolving, creating opportunities for aspiring entrepreneurs. Our blog explores trends, shares alumni success stories, and provides tips on essential skills, E-Cell resources, and networking strategies for startups.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGqF9IID-hStEaWulqZM6_v3DzjeguBlrZSLK1sKI2sGUVMKqpsHR6x1k&s=10",
      path: "/blog1",
    },
    {
      id: 2,
      title: "Building a Startup Team: Why People Matter More Than Ideas",
      description:
        "Success hinges on the team, not just the idea. Learn how to build and retain a collaborative and skilled team to drive startup growth.",
      image: BlogImage2,
      path: "/blog2",
    },
    {
      id: 3,
      title: "Overcoming Challenges in the Startup Ecosystem",
      description:
        "Discover actionable strategies to tackle common challenges startups face, from funding to market penetration.",
      image: BlogImage3,
      path: "/blog3",
    },
    {
      id: 4,
      title: "Sustainability and Startups: The Green Frontier",
      description:
        "Explore how startups are contributing to sustainability and learn about opportunities in the green tech space.",
      image: BlogImage4,
      path: "/blog4",
    },
    {
      id: 5,
      title: "The Role of Mentorship in Startup Success",
      description:
        "Understand the critical role mentorship plays in shaping the success of startups and how to find the right mentor for your venture.",
      image: BlogImage5,
      path: "/blog5",
    },
    {
      id: 6,
      title: "Financial Planning for Startups: Tips for Longevity",
      description:
        "Learn how to manage finances effectively in the initial stages of your startup to ensure sustainability and growth.",
      image: BlogImage6,
      path: "/blog6",
    },
    {
      id: 7,
      title: "The Power of Networking in the Startup World",
      description:
        "Networking is crucial for startup success. Discover strategies to expand your professional circle effectively.",
      image: BlogImage7,
      path: "/blog7",
    },
    {
      id: 8,
      title: "The Impact of Technology on Modern Startups",
      description:
        "Explore how cutting-edge technologies like AI and blockchain are revolutionizing the startup ecosystem.",
      image: BlogImage8,
      path: "/blog8",
    },
    {
      id: 9,
      title: "Navigating Legalities: A Startup's Guide to Compliance",
      description:
        "Legal compliance can be complex for startups. Learn about essential legal frameworks and how to navigate them.",
      image: BlogImage9,
      path: "/blog9",
    },
    {
      id: 10,
      title: "Scaling Strategies for Startups: Moving to the Next Level",
      description:
        "Discover how to scale your startup effectively without losing sight of your core values and mission.",
      image: BlogImage10,
      path: "/blog10",
    },
  ];

  const [showAll, setShowAll] = useState(false);

  const toggleShowAll = () => {
    setShowAll((prev) => !prev);
  };

  return (
    <div id="blog" className="min-h-screen p-6 space-y-8 bg-gray-900 text-white">
      {/* Header Section */}
      <div className={`${styles.heroHeadText} flex justify-center items-center`}>
        <motion.h2
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={textVariant()}
          className="text-center text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500"
        >
          Blog
        </motion.h2>
      </div>

      {/* Cards Section */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {(showAll ? blogs : blogs.slice(0, 3)).map((blog) => (
          <div
            key={blog.id}
            className="flex flex-col bg-transparent border border-gray-200 rounded-2xl shadow-md overflow-hidden transition-transform duration-300 transform hover:scale-105"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="object-cover h-48 w-full"
            />
            <div className="p-6">
              <h4 className="text-lg font-semibold mb-2">{blog.title}</h4>
              <p className="text-sm mb-4">{blog.description}</p>
              <button
                className="border border-white shadow-sm rounded-full py-2 px-5 text-xs font-semibold transition-all duration-200"
                onClick={() => handleRedirect(blog.path)}
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More/Less Button */}
      <div className="flex justify-center mt-6">
        <button
          className="border border-white shadow-sm rounded-full py-2 px-6 text-sm font-semibold transition-all duration-200 hover:bg-white hover:text-gray-900"
          onClick={toggleShowAll}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}

export default Blog;
