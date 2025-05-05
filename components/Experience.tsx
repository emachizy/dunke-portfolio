import { workExperience } from "@/data";
import React from "react";
import { Button } from "./ui/MovingBorders";
// import { Button } from "./ui/button";

const Experience = () => {
  return (
    <div>
      <div className="py-20" id="experience">
        <div className="max-w-sm mx-auto">
          <p className="text-purple-500 text-xs text-center">Resume</p>
          <h1 className="heading capitalize">
            my work <span className="text-purple-500">Experience</span>
          </h1>
        </div>
        <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
          {workExperience.map((card) => (
            <Button
              duration={Math.floor(Math.random() * 10000) + 1000}
              key={card.id}
              borderRadius="1.75rem"
              className="flex-1 text-white border-neutral-200 dark:border-slate-200"
            >
              <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
                <img
                  src={card.thumbnail}
                  alt={card.thumbnail}
                  className="lg:w-32 md:w-20 w-16"
                />
                <div className="lg:ms-5 ">
                  <h1 className="text-start text-2xl md:text-2xl font-bold">
                    {card.title}
                  </h1>
                  <p className="text-start text-white mt-3 font-semibold">
                    {card.desc}
                  </p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
