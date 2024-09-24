import React from "react";
import "../App.css";
import { logo } from "../assets";

function Footer() {
  return (
    <footer className="w-full pb-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto flex flex-col items-center ">
          <img src={logo} className="h-20"></img>
          <ul className="text-lg flex items-center justify-center flex-col gap-7 md:flex-row md:gap-12 transition-all duration-500 py-10 mb-10 border-b border-gray-200">
            <li>
              <a href="#about" className=" text-white/50 hover:text-white">
                About
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className=" text-white/50 hover:text-white"
              >
                Our Vision
              </a>
            </li>
            <li>
              <a
                href="javascript:;"
                className=" text-white/50 hover:text-white"
              >
                Mission
              </a>
            </li>
            <li>
              <a href="#gallery" className=" text-white/50 hover:text-white">
                Gallery
              </a>
            </li>
          </ul>
          <div className="w-5/6 flex space-x-10 justify-center items-center mb-10">
            <a
              href="https://x.com/ecell_ipsa?t=lS_OGZqLmNg5tBbqMakEyg&s=09"
              className="block text-white/75 transition-all duration-500 hover:text-sky-400 text-xl"
            >
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              href="https://www.instagram.com/ecell.ipsa/profilecard/?igsh=MWV6MnEwY2k2a3ZzaQ%3D%3D"
              className="block text-white/75 transition-all duration-500 hover:text-sky-400 text-xl"
            >
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://chat.whatsapp.com/GIMjiqXRJ6AFBNWq8YptIW"
              className="block text-white/75 transition-all duration-500 hover:text-sky-400 text-xl"
            >
              <i class="fa-brands fa-whatsapp"></i>
            </a>
            <a
              href="https://www.linkedin.com/company/e-cell-ips-academy/mycompany/"
              className="block text-white/75 transition-all duration-500 hover:text-sky-400 text-xl"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a
              href="mailto:ecellipsacademy@gmail.com"
              className="block text-white/75 transition-all duration-500 hover:text-sky-400 text-xl"
            >
              <i class="fa-regular fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
