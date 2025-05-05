"use client";

import React from "react";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="#contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-92">
        <img
          src="/footer-grid.svg"
          alt="footer grid"
          className="w-full h-full dark:opacity-50 opacity-100"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[52vw] md:px-0">
          Seeking a smarter approach to{" "}
          <span className="text-purple-500">time management</span> and
          productivity?
        </h1>
        <p className="md:mt-10 my-5 text-center">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals
        </p>
        <a
          href="mailto:omodunke98@gmail.com
"
        >
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-center items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2025 Omdunke Deborah
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((profile) => (
            <div key={profile.id}>
              <Image
                src={profile.img}
                alt="social icon"
                width={20}
                height={20}
                className="text-black dark:text-white"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
