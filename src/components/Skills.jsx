import React from "react";
import { ProjectSkills } from "../data";

const Skills = () => {
  return (
    <>
      <div className="w-full h-max bg-[#fffcd9] p-10 text-black">
        <h1 className="text-2xl lg:text-5xl font-bold italic ml-10 uppercase text-[#1f1f38]">
          Skills
        </h1>
        <p className="text-sm text-gray-700 font-thin tracking-wide ml-16">
          in the locker...
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-[70px] mb-[40px] text-center justify-center mx-auto">
          {ProjectSkills.map((item) => {
            return (
              <div
                key={item.id}
                className="flex justify-center md:justify-between  w-[70vw] md:w-[400px] lg:w-[450px] h-[80px] rounded border border-[#1f1f38] shadow-lg text-[#1f1f38] p-1 mx-auto"
              >
                <div className="hidden md:block">
                  <img className="w-full h-full" src={item.img} alt="" />
                </div>
                <div className="mx-auto my-auto md:mx-0 md:my-0 md:pr-8 md:pt-5">
                  <h1 className=" text-lg lg:text-2xl font-semibold ">
                    {item.skill}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Skills;
