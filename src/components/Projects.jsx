import React from "react";
import { ProjectList } from "../data";
import Project from "./Project";

const Projects = () => {
  return (
    <>
      <div id="work" className="bg-[#1f1f38] w-full h-max p-10 ">
        <h1 className="text-2xl lg:text-5xl font-bold italic ml-10 uppercase text-[#B8EBD0]">
          PROJECTS
        </h1>
        <p className="text-sm text-[#fffcd9] font-thin tracking-wide ml-16">
          showcasing my skills...
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-2 mt-[70px] justify-center">
          {ProjectList.map((item) => {
            return <Project item={item} key={item.id} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
