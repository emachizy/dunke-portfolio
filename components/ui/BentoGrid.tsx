"use client";

import type React from "react";
import { cn } from "@/lib/utils";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import Image from "next/image";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: string | React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[18rem] md:grid-cols-3",
        className
        // id === 4 || id === 5 ? "md:auto-rows-[6rem]" : ""
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const email = "omodunke98@gmail.com";

    if (
      navigator.clipboard &&
      typeof navigator.clipboard.writeText === "function"
    ) {
      navigator.clipboard
        .writeText(email)
        .then(() => setCopied(true))
        .catch(() => fallbackCopyText(email));
    } else {
      fallbackCopyText(email);
    }
  };

  const fallbackCopyText = (text: string) => {
    const textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid showing textarea to the user
    textArea.style.position = "fixed";
    textArea.style.left = "-9999px";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
      document.execCommand("copy");
      setCopied(true);
    } catch (err) {
      console.error(err);
      alert("Copy failed. Please copy the email manually.");
    }

    document.body.removeChild(textArea);
  };

  return (
    <div
      className={cn(
        "group/bento relative overflow-hidden shadow-input row-span-1 flex flex-col justify-between space-y-4 h-auto rounded-3xl border border-purple-500/[0.1] transition shadow-2xl duration-200 hover:shadow-xl dark:border-white/[0.1] dark:bg-black dark:shadow-none ",
        className
      )}
      // style={{
      //   backgroundColor: "#fff",
      //   background:
      //     " linear-gradient(90deg,#765984 0%, #230829 100%, rgba(251, 247, 252, 1) 51%)",
      // }}
      id="about"
    >
      <div
        className={`${
          (id === 6 && "flex justify-center items-center") ||
          (id === 7 && "flex justify-center items-center")
        }h-full`}
      >
        <div className="w-full h-full absolute">
          {img && (
            <Image
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover, object-center")}
              width={100}
              height={100}
            />
          )}
        </div>

        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <Image
              src={spareImg}
              alt={spareImg}
              className={cn(
                imgClassName,
                "object-cover, object-center w-full h-full"
              )}
              width={100}
              height={100}
            />
          )}
        </div>

        {id === 6 && (
          <BackgroundGradientAnimation>
            {/* <div className="absolute z-50 flex items-center justify-center text-white font-bold" /> */}
          </BackgroundGradientAnimation>
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 z-50"
          )}
        >
          <div className="font-sans text-sm font-extralight md:text-xs lg:text-base z-10">
            {description}
          </div>
          <div
            className={cn(
              titleClassName,
              "font-sans font-bold text-lg lg:text-3xl max-w-96 z-10",
              id === 2 &&
                "bg-purple-500/75 mr-auto px-2 rounded-b-2xl rounded-t-sm mt-1 py-1 shadow-2xl text-white"
            )}
          >
            {title}
          </div>
          {id === 2 && <GlobeDemo />}

          {id === 3 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2">
              <div className="flex flex-col gap-3 lg:gap-8">
                {[
                  "Microsoft Office tools",
                  "Google Suite tools ",
                  "Hubspot",
                ].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 lg:gap-8">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />

                {["Human Relations", "Bookkeeping ", "Hubspot"].map((item) => (
                  <span
                    key={item}
                    className="py-2 lg:py-4 lg:px-3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E] text-white"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className={`absolute -bottom-10 right-0`}>
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidyMid slice",
                    },
                  }}
                />
              </div>
              <MagicButton
                title={copied ? "Email copied" : "Copy my email address"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161a31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
