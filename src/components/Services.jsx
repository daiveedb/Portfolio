import React from "react";
import freelancer from "../projectSvgs/freelancer.svg";
import developer2 from "../projectSvgs/developer2.svg";
import teacher from "../projectSvgs/teacher.svg";

const Services = () => {
  return (
    <>
      <div className="w-full h-max bg-[#1f1f38] p-10 text-white pt-20 ">
        <h1 className="text-2xl lg:text-5xl font-bold italic ml-10 uppercase text-[#B8EBD0]">
          Services
        </h1>
        <p className="text-sm text-[#fffcd9] font-thin tracking-wide ml-16">
          what does he offer...?
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-14 mt-[70px] mb-[30px] justify-center">
          {/* Single Service Div  */}
          <div className="w-[70vw]  md:w-[50vw] lg:w-[25vw] h-[600px] flex flex-col justify-between border bg-[#2c2c6c] border-[#B8EBD0] rounded-b-2xl pb-4 mx-auto">
            <div className="w-full rounded-b-2xl text-lg font-semibold text-[#1f1f38] bg-[#B8EBD0] h-[80px] uppercase p-4 flex items-center justify-center">
              Freelance Services
            </div>
            <div className="py-8 px-4 m-auto">
              <ul className="list-none sm:list-disc">
                <li>Business Websites</li>
                <li>Advertising Websites</li>
                <li>Company Brochures</li>
                <li>Personal Webpages</li>
                <li>Dynamic Webpages</li>
              </ul>
            </div>
            <div className="w-[80%] mx-auto h-[180px]">
              <img className="w-full h-full" src={freelancer} alt="" />
            </div>
          </div>
          {/* Single Service Div  */}
          <div className="w-[70vw] md:w-[50vw] lg:w-[25vw] h-max flex scale-105 flex-col justify-between border bg-[#2c2c6c] border-[#B8EBD0] rounded-b-2xl pb-4 mx-auto">
            <div className="w-full rounded-b-2xl text-lg font-bold text-[#1f1f38] bg-[#B8EBD0] h-[80px] uppercase p-4 flex items-center justify-center">
              Front End Development
            </div>
            <div className="py-8 px-4 m-auto">
              <ul className="list-none sm:list-disc">
                <li>Full time Positions</li>
                <li>Part Time Positions</li>
                <li>Contract Jobs</li>
                <li>Internship Positions</li>
                <li>Networking</li>
                <li>Partnerships</li>
              </ul>
            </div>
            <div className="w-[80%] mx-auto my-5">
              <img className="w-full" src={developer2} alt="" />
            </div>
          </div>
          {/* Single Service Div  */}
          <div className="w-[70vw] md:w-[50vw] lg:w-[25vw] h-[600px] flex flex-col justify-between border bg-[#2c2c6c] border-[#B8EBD0] rounded-b-2xl pb-4 mx-auto">
            <div className="w-full rounded-b-2xl text-lg font-semibold text-[#1f1f38] bg-[#B8EBD0] h-[80px] uppercase p-4 flex items-center justify-center">
              Consultancy
            </div>
            <div className="py-8 px-4 m-auto">
              <ul className="list-none sm:list-disc">
                <li>Tutoring (Virtual)</li>
                <li>Mentorship</li>
                <li>Roadmaps</li>
                <li>E-Books & Resources</li>
                <li>Course Reviews</li>
              </ul>
            </div>
            <div className="w-[80%] mx-auto h-[180px]">
              <img className="w-full h-full" src={teacher} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
