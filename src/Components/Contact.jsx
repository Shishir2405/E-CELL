import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../App.css";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { slideIn, textVariant } from "../utils/motion";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8977bkf",
        "template_0c916fa",
        form.current,
        "bN_v5H49BQ1zL814W"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="contact" className="body w-screen h-full mx-auto flex justify-center">
      <div className="contactUs p-10">
        <div
          className={`mt-0 ${styles.heroHeadText} flex justify-center items-center`}
        >
          <div className="relative w-fit mx-auto">
            <span className="h-[1px] w-36 bg-white absolute -bottom-2 -right-9" />
            <span className="h-[1px] w-36 bg-white absolute -top-2 -left-9" />
            <motion.h2
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={textVariant()}
              className={`${styles.heroHeadText} flex justify-center`}
            >
              Get In{" "}
              <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent ml-2">
                Touch
              </span>
            </motion.h2>
          </div>
        </div>
        <div className="w-screen ">
          <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="contact form"
          >
            <h3 className={styles.sectionHeadText}>Send a Message</h3>
            <form ref={form} onSubmit={sendEmail}>
              <div className="formBox">
                <div className="row50">
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>First Name</span>
                    <input
                      type="text"
                      required
                      placeholder="First Name"
                      name="user_name"
                      className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    />
                  </div>
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Last Name</span>
                    <input
                      type="text"
                      required
                      placeholder="Last Name"
                      name="user_surname"
                      className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    />
                  </div>
                </div>

                <div className="row50">
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Email</span>
                    <input
                      type="email"
                      required
                      placeholder="example@gmail.com"
                      name="user_email"
                      className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    />
                  </div>
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Mobile</span>
                    <input
                      type="tel"
                      required
                      placeholder="+91 00000 00000"
                      name="user_contact"
                      className="bg-[#222630] px-4 py-3 outline-none text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    />
                  </div>
                </div>

                <div className="row100">
                  <div className="inputBox">
                    <span className={styles.sectionSubText}>Message</span>
                    <textarea
                      placeholder="Message Us ..."
                      name="message"
                      required
                      className="bg-[#222630] px-4 py-3 outline-none w-full text-white rounded-lg border-2 transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                    ></textarea>
                  </div>
                </div>

                <div>
                  <div className="cursor-pointer">
                    <button className="border-2 px-6 py-2 text-base text-white rounded-lg font-medium hover:bg-white/10">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>
         
        </div>
        {/* <iframe
          title="google"
          src="https://www.google.com/maps/embed/v1/place?q=ips+academy,+institute+of+engineering&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-1/4"
        ></iframe> */}
      </div>
      
    </div>
  );
}

export default Contact;
