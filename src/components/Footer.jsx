import React from "react";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaDownload,
} from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="w-full h-max p-5 bg-[#fffcd9] rounded-t-3xl ">
        <h1 className="text-xl font-bold py-3 mb-6 flex justify-center">
          All My Links
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 text-[#1f1f38] justify-center">
          <a
            className="flex gap-2 underline mx-auto"
            href="https://t.me/Daiveeed"
            target="_blank"
          >
            <p>Telegram</p>
            <p className=" text-sm p-1">
              <FaTelegramPlane />
            </p>
          </a>
          <a
            className="flex gap-2 underline mx-auto"
            href=" https://wa.me/2347086082215"
            target="_blank"
          >
            <p>Whatsapp</p>
            <p className=" text-sm p-1">
              <FaWhatsapp />
            </p>
          </a>
          <a
            className="flex gap-2 underline mx-auto"
            href="https://twitter.com/BDaiveed"
            target="_blank"
          >
            <p>Twitter</p>
            <p className=" text-sm p-1">
              <FaTwitter />
            </p>
          </a>
          <a
            className="flex gap-2 underline mx-auto"
            href="https://www.linkedin.com/in/davidbajomo"
            target="_blank"
          >
            <p>LinkedIn</p>
            <p className=" text-sm p-1">
              <FaLinkedin />
            </p>
          </a>
          <a
            className="flex gap-2 underline mx-auto"
            href="https://github.com/daiveedb"
            target="_blank"
          >
            <p>Github</p>
            <p className=" text-sm p-1">
              <FaGithub />
            </p>
          </a>
          <a
            className="flex gap-2 underline mx-auto"
            href="mailto:bajomodavid18@gmail.com"
          >
            <p>G-Mail</p>
            <p className=" text-sm p-1">
              <FiMail />
            </p>
          </a>
          <a className="flex gap-2 underline mx-auto" href="">
            <p>Resume</p>
            <p className=" text-sm p-1">
              <FaDownload />
            </p>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
