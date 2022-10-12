import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaMailBulk,
  FaDownload,
} from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import CV from "../davidCv.pdf";

const Contact = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const submitForm = (e) => {
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <>
      <div id="contact" className="bg-[#1f1f38] w-full h-max p-10 pb-32 ">
        <h1 className="text-2xl lg:text-5xl font-bold italic ml-10 uppercase text-[#B8EBD0]">
          Contact
        </h1>
        <p className="text-sm text-[#fffcd9] font-thin tracking-wide ml-16">
          reach out...
        </p>
        <div className="flex flex-col gap-10 lg:flex-row justify-between items-center mt-[80px] h-max">
          <div className="flex flex-col justify-center items-center gap-4 flex-1 ">
            {/* Single Contact Link Item */}
            <a href="https://www.linkedin.com/in/davidbajomo" target="_blank">
              <div className="hover:bg-transparent hover:border-white hover:scale-105 border border-transparent transition-all bg-[#2c2c6c] w-[250px] sm:w-[400px] lg:w-[250px] py-8 cursor-pointer text-white p-4 rounded-lg flex flex-col gap-3 justify-center items-center">
                <h2 className="font-bold text-3xl">
                  <FaLinkedin />
                </h2>
                <p className="font-light tracking-wide">LinkedIn Account</p>
              </div>
            </a>
            {/* Single Contact Link Item */}
            <a href=" https://wa.me/2347086082215" target="_blank">
              <div className="hover:bg-transparent hover:border-white hover:scale-105 border border-transparent transition-all bg-[#2c2c6c] w-[250px] sm:w-[400px] lg:w-[250px] py-8 cursor-pointer text-white p-4 rounded-lg flex flex-col gap-3 justify-center items-center">
                <h2 className="font-bold text-3xl">
                  <FaWhatsapp />
                </h2>
                <p className="font-light tracking-wide">WhatsApp</p>
              </div>
            </a>
            {/* Single Contact Link Item */}
            <a href="mailto:bajomodavid18@gmail.com" target="_blank">
              <div className="hover:bg-transparent hover:border-white hover:scale-105 border border-transparent transition-all bg-[#2c2c6c] w-[250px] sm:w-[400px] lg:w-[250px] py-8 cursor-pointer text-white p-4 rounded-lg flex flex-col gap-3 justify-center items-center">
                <h2 className="font-bold text-3xl">
                  <FaMailBulk />
                </h2>
                <p className="font-light tracking-wide">G-Mail</p>
              </div>
            </a>
            {/* Single Contact Link Item */}
            <a href="https://t.me/Daiveeed" target="_blank">
              <div className="hover:bg-transparent hover:border-white hover:scale-105 border border-transparent transition-all bg-[#2c2c6c] w-[250px] sm:w-[400px] lg:w-[250px] py-8 cursor-pointer text-white p-4 rounded-lg flex flex-col gap-3 justify-center items-center">
                <h2 className="font-bold text-3xl">
                  <FaTelegramPlane />
                </h2>
                <p className="font-light tracking-wide">Telegram</p>
              </div>
            </a>
          </div>
          <div className="flex-2 flex justify-center">
            <div className="mx-auto w-[70%]">
              <form
                onSubmit={submitForm}
                action="https://formspree.io/f/mbjbkkwy"
                method="POST"
                netlify
              >
                <input
                  className="bg-transparent border border-[#B8EBD0] w-[100%] h-[60px] my-2 rounded-lg p-3 text-white"
                  type="text"
                  placeholder="Your Name"
                  name="Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
                <input
                  className="bg-transparent border border-[#B8EBD0] w-[100%] h-[60px] my-2 rounded-lg p-3 text-white"
                  type="email"
                  placeholder="Email Address"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <textarea
                  className="bg-transparent border border-[#B8EBD0] w-[100%] my-2 rounded-lg p-3 text-white"
                  placeholder="Your Message"
                  name="Message"
                  cols="30"
                  rows="5"
                  onChange={(e) => setMessage(e.target.value)}
                  value={message}
                  required
                ></textarea>
                <input
                  className="bg-[#B8EBD0] cursor-pointer border border-[#B8EBD0] block w-[70px] md:w-[20%] h-[40px] my-1 rounded-lg p-2 text-[#1f1f38] font-semibold"
                  type="submit"
                  value="Send"
                />
              </form>
              <div className="flex-row w-[80%] text-[#fffcd9] my-8">
                <div className="flex gap-3 text-md my-2 font-extralight">
                  <h1 className="text-xl">
                    <BsFillTelephoneFill />
                  </h1>
                  +234 708 608 2215
                </div>
                <div className="flex gap-3 text-md my-2 font-extralight">
                  <h1 className="text-xl">
                    <FiMail />
                  </h1>
                  bajomodavid18@gmail.com
                </div>
                <div className="flex gap-3 text-md my-2 font-extralight">
                  <h1 className="text-xl">
                    <FaTwitter />
                  </h1>
                  @BDaiveed
                </div>
              </div>
              <div
                class="inline-flex rounded-md shadow-sm h-[40px]"
                role="group"
              >
                <a href={CV}>
                  <button
                    type="button"
                    className="h-full py-2 px-4 text-sm font-medium text-gray-900 bg-[#B8EBD0] transition rounded-l-lg border border-none border-r-[#1f1f38] hover:bg-[#2c2c6c] hover:text-white transition-all"
                  >
                    View CV
                  </button>
                </a>
                <a href={CV} download>
                  <button
                    type="button"
                    className="h-full py-2 px-4 text-base font-medium text-gray-900 bg-[#B8EBD0] transition rounded-r-lg  hover:bg-[#2c2c6c] hover:text-white transition-all"
                  >
                    <FaDownload />
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
