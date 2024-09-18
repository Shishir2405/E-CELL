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
    <div id="contact" className="body w-screen h-full mx-auto">
      <div className="contactUs p-10">
        <div
          className={`mt-0 ${styles.heroHeadText} flex justify-center items-center`}
        >
          <motion.h2
            variants={textVariant()}
            viewport={{ once: true }}
            initial="hidden"
            whileInView="show"
          >
            Get in Touch
          </motion.h2>
        </div>
        <div className="box w-screen">
          <motion.div
            variants={slideIn("left", "tween", 0.5, 1)}
            initial="hidden"
            animate="show"
            viewport={{ once: true }}
            className="contact form bg-primary"
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

                <div className="row100">
                  <div className="inputBox cursor-pointer">
                    <button class="cursor-pointer text-white font-bold relative text-base w-24 h-10 text-center bg-gradient-to-r from-violet-500 from-10% via-sky-500 via-30% to-pink-500 to-90% bg-[length:400%] rounded-[30px] z-10 hover:animate-gradient-xy hover:bg-[length:100%] before:content-[''] before:absolute before:-top-[5px] before:-bottom-[5px] before:-left-[5px] before:-right-[5px] before:bg-gradient-to-r before:from-violet-500 before:from-10% before:via-sky-500 before:via-30% before:to-pink-500 before:bg-[length:400%] before:-z-10 before:rounded-[35px] before:hover:blur-xl before:transition-all before:ease-in-out before:duration-[1s] before:hover:bg-[length:10%] active:bg-violet-700 focus:ring-violet-700">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </motion.div>

          <motion.div
            variants={slideIn("right", "tween", 0.5, 1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="contact map"
          >
            <iframe
              title="google"
              src="https://www.google.com/maps/embed/v1/place?q=ips+academy,+institute+of+engineering&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
