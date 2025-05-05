"use client";
import React, { useState } from "react";
import { MultiStepLoader as Loader } from "./ui/multi-step-loader";
import { IconSquareRoundedX } from "@tabler/icons-react";
import { skills } from "@/data";

export function Skills() {
  const [activeLoader, setActiveLoader] = useState<number | null>(null);

  return (
    <div className="w-full min-h-screen py-12 flex flex-col items-center gap-12">
      <div className="max-w-sm mx-auto">
        <p className="text-purple-500 text-xs text-center ">skills</p>
        <h1 className="heading ">Valuable Skills I Bring</h1>
      </div>
      {skills.map((category, index) => {
        const loadingStates = category.skills.map((skill) => ({
          text: skill,
          isHeader: false,
        }));

        return (
          <div key={category.id} className="w-full max-w-xl relative">
            <h2 className="text-xl font-bold text-center mb-4 text-purple-900 dark:text-white ">
              {category.title}
            </h2>

            {/* Trigger button */}
            <button
              onClick={() => setActiveLoader(index)}
              className="bg-purple-500 hover:bg-[#fff]/90 hover:text-purple-500 hover:shadow-2xl mx-auto text-sm md:text-base transition font-medium duration-200 h-10 rounded-lg px-8 flex items-center justify-center shadow-2xl hover:translate-x-2"
              style={{
                boxShadow:
                  "0px -1px 0px 0px #ffffff40 inset, 0px 1px 0px 0px #ffffff40 inset",
              }}
            >
              Show {category.title}
            </button>

            {/* Loader for this category */}
            <Loader
              loadingStates={loadingStates}
              loading={activeLoader === index}
              duration={1500}
              loop={false}
            />

            {/* Close Button */}
            {activeLoader === index && (
              <button
                className="fixed top-4 right-4 text-black dark:text-white z-[120]"
                onClick={() => setActiveLoader(null)}
              >
                <IconSquareRoundedX className="h-10 w-10" />
              </button>
            )}
          </div>
        );
      })}
    </div>
  );
}
