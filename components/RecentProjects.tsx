// "use client";
import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";

const RecentProjects = () => {
  return (
    <div className="py-20" id="resume">
      <div className="max-w-sm mx-auto">
        <p className="text-purple-500 text-xs text-center">Resume</p>
        <h1 className="heading capitalize">
          Take a look at <span className="text-purple-500">my Resume</span>
        </h1>
      </div>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map(({ id, title, des, link, img }) => (
          <div
            key={id}
            className="lg:min-[32.5rem] h-[25rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={title} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                  <img src="/bg.png" alt="bg-img" />
                </div>
                <img src={img} alt={title} className="z-10 absolute bottom-0" />
              </div>
              <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>
              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 capitalize">
                {des}
              </p>
              <div className="flex items-center justify-center mt-4">
                <p className="flex lg:text-xl md:text-xs text-[#765984]">
                  Check Resume
                </p>
                <FaLocationArrow className="ms-3" color="#765984" />
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
