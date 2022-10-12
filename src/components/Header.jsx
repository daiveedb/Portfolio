import React from "react";
import developer from "../projectSvgs/developer1.svg";
import {
  FaTelegramPlane,
  FaWhatsapp,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Header = () => {
  return (
    <>
      <div className="flex header w-full bg-[#1f1f38] h-[590px] px-8 text-white mb-30px">
        <div className="flex-[2] p-4 w-full h-full flex justify-center flex-col ">
          <p className="block text-2xl font-thin">Hi, I am</p>
          <h1 className="block text-3xl lg:text-5xl lg:ml-2 font-semibold my-2 text-[#B8EBD0]">
            David Bajomo
          </h1>
          <p className="block lg:ml-5 text-2xl lg:text-3xl">And I am a</p>
          <h1 className="block text-3xl lg:text-5xl text-[rgba(255,255,255,0.8)] my-1 lg:ml-8 lg:my-3 font-bold">
            Front End Developer
          </h1>
          <a href="#work">
            <button className="font-semibold rounded lg:ml-12 lg:text-lg px-5 my-2 lg:my-4 w-[230px] h-[45px] lg:w-[300px] lg:h-[50px] bg-transparent border border-white text-white hover:text-[#1f1f38] hover:bg-white transition-all">
              Check Out My Work !
            </button>
          </a>
          <div className="flex w-[130px] lg:w-[200px] justify-between p-4 lg:ml-20">
            <a href="https://t.me/Daiveeed" target="_blank">
              <p className="text-white text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaTelegramPlane />
              </p>
            </a>
            <a href="https://www.linkedin.com/in/davidbajomo" target="_blank">
              <p className="text-white text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaLinkedin />
              </p>
            </a>
            <a href=" https://wa.me/2347086082215" target="_blank">
              <p className="text-white text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaWhatsapp />
              </p>
            </a>
            <a href="https://github.com/daiveedb" target="_blank">
              <p className="text-white text-lg lg:text-2xl p-1 hover:scale-[1.2] transition-all">
                <FaGithub />
              </p>
            </a>
          </div>
        </div>
        <div className="flex-1 w-full h-full relative">
          <img
            className=" hidden md:block w-full h-full"
            src={developer}
            alt="Image"
          />
        </div>
      </div>
    </>
  );
};

export default Header;
// text-[#B8EBD0]
