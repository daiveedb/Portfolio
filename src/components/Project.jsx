import React from "react";
import { FaGithub } from "react-icons/fa";
const Project = ({ item }) => {
  return (
    <div className="rounded-lg bg-[#2c2c6c] p-2 flex flex-col justify-between w-[70vw] md:w-[35vw] lg:w-[25vw] text-white mx-auto align-center self-end border border-transparent transition-all hover:scale-[1.05] hover:border-[#B8EBD0] hover:bg-transparent h-max">
      <div>
        <img className="rounded-lg w-full" src={item.coverImgUrl} alt="" />
      </div>
      <div className="px-3">
        <h1 className="text-xl font-bold my-2 text-[#B8EBD0]">{item.title}</h1>
        <p className="text-sm font-extralight tracking-wide my-1 text-white">
          {item.description}
        </p>

        {item.skills.map((item) => {
          return (
            <p
              key={item}
              className="inline text-sm text-gray-500 font-medium my-1 italic"
            >
              {" "}
              {item} /
            </p>
          );
        })}

        <div className="flex justify-start gap-4 my-4">
          <a href={item.projectUrl} target="_blank">
            <button className="w-[90px] lg:w-[max] py-2 px-2 hover:bg-white hover:text-[#1f1f38] transition-all mr-auto border rounded border-white text-white text-xs font-medium">
              Live Demo
            </button>
          </a>
          <a href={item.github}>
            <button className="w-[90px] lg:w-[max] py-2 px-2 transition-all hover:bg-[rgba(0,0,0,0.8)]  border rounded flex gap-1 justify-center items-center border-white text-white text-xs font-medium">
              Github <FaGithub />
            </button>
          </a>{" "}
        </div>
      </div>
    </div>
  );
};

export default Project;
