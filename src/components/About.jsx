import React from "react";
import questiomark from "../projectSvgs/questionmark.svg";

const About = () => {
  return (
    <>
      <div id="about" className="w-full h-max bg-[#fffcd9] p-10 text-black">
        <h1 className="text-2xl lg:text-5xl font-bold italic ml-10 uppercase text-[#1f1f38]">
          ABOUT
        </h1>
        <p className="text-sm text-gray-700 font-thin tracking-wide ml-16">
          get to know me... a little
        </p>
        <div className="flex flex-col gap-8 md:flex-row justify-between items-center mt-[70px] h-max">
          <div className="hidden sm:block flex-1">
            <img className="w-[80%]" src={questiomark} alt="" />
          </div>
          <div className="flex-1 p-10">
            <h2 className="text:lg md:text-2xl font-bold text-[#1f1f38] mb-4 underline">
              WHO IS HE ?
            </h2>
            <p className="lg:text-base tracking-wide text-sm text-[#2c2c6c] mb-3 ">
              Hi, in case you missed it earlier, my name is David Bajomo and I
              am a front-end developer. I am a goal driven, diligent, reliable
              team player and hard worker who is dedicated and passionate about
              his work.
            </p>
            <p className="lg:text-base tracking-wide text-sm text-[#2c2c6c] mb-3 ">
              Sadly, I am yet to gain any professional experience so I spend
              most of my time building fun and exciting web applications-like
              the ones you saw earlier-for potential/imaginary clients. Although
              I am ready for professional experience, I understand that learning
              never truly ends so when I am not building web apps or watching
              football, I spend my time learning new things to adapt and keep up
              to the ever changing world of Technology. New Languages,
              Frameworks, Methods and all that.
            </p>
            <p className="lg:text-base tracking-wide text-sm text-[#2c2c6c] mb-3 ">
              So you believe I am the one you’re looking for ?{" "}
              <a
                href="#contact"
                className="font-semibold text-red-800 cursor-pointer underline"
              >
                {" "}
                Reach out to me.
              </a>
              You’d get to know even more about me and I’d be happy to answer
              any questions you have.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
