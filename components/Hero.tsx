"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { cn } from "@/lib/utils";
import dunke_profile_img from "@/public/images/dunke-profile-img.png";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa6";
// import { FaLocationArrow } from "react-icons/fa";

const Hero = () => {
  const [showContact, setShowContact] = useState(false);

  const handleToggle = () => {
    setShowContact(!showContact);
  };

  return (
    <div className="pt-28 pb-20">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:top-20 h-screen"
          fill="orange"
        />
        <Spotlight className="top-10 left-full h-[80vh] w-[50vw]" fill="red" />
        <Spotlight className="top-28 left-80 h-[80vh] w-[50vw]" fill="purple" />
      </div>
      <div className="absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white dark:bg-black">
        <div
          className={cn(
            "absolute inset-0",
            "[background-size:40px_40px]",
            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
          )}
        />
        {/* Radial gradient for the container to give a faded look */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl"></p>
      </div>
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-6 md:px-16 z-10 ">
        {/* Text Section */}
        <div className="text-center md:text-left space-y-6">
          <TextGenerateEffect
            className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-snug"
            words="Best Virtual Assistant For Your Business​"
          />

          <h2 className="uppercase tracking-widest text-sm md:text-base text-purple-900 font-semibold">
            Omodunke Deborah Oluwadare
          </h2>

          <TextGenerateEffect
            className="text-gray-700 text-base md:text-lg max-w-xl"
            words="Visionary, focused and hardworking individual, proficient in administration and management, also skilled in providing quality strategies and customer relations services."
          />

          <div className="relative mt-6">
            <MagicButton
              //   handleClick={handleClick}

              title="Contact Me"
              // showContact={showContact}
              handleClick={handleToggle}
              icon={<FaLocationArrow />}
              position="right"
            />

            {showContact && (
              <div className="mt-4 md:absolute top-10 left-0 text-left text-gray-800 space-y-2 transition-all bg-purple-500/75 inline-flex h-12 overflow-hidden rounded-lg p-[1px] focus:outline-none justify-center items-center px-2 shadow-2xl">
                <p>
                  📞 <span className="select-all">+234 810 123 4567</span>
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center md:justify-end">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-lg ring-4 ring-purple-200">
            <Image
              src={dunke_profile_img}
              alt="Profile photo"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// type MagicButtonProps = {
//   showContact: boolean;
//   setShowContact: (value: boolean) => void;
// };

export default Hero;
