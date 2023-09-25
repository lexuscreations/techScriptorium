"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import siteMetadata from "@/src/utils/siteMetaData";

const animations = [
  "fade",
  "fade-up",
  "fade-down",
  "fade-left",
  "fade-right",
  "fade-up-right",
  "fade-up-left",
  "fade-down-right",
  "fade-down-left",
  "flip-up",
  "flip-down",
  "flip-left",
  "flip-right",
  "slide-up",
  "slide-down",
  "slide-left",
  "slide-right",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-down",
  "zoom-in-left",
  "zoom-in-right",
  "zoom-out",
  "zoom-out-up",
  "zoom-out-down",
  "zoom-out-left",
  "zoom-out-right",
];

const getRandomAnimation = () =>
  animations[Math.floor(Math.random() * animations.length)];

const Skills = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section
      className="w-full flex flex-col p-5 xs:p-10 sm:p-12 md:p-16 lg:p-20 border-b-2 border-solid border-dark dark:border-light
     text-dark dark:text-light"
    >
      <span className="font-semibold text-lg sm:text-3xl md:text-4xl text-accent dark:text-accentDark">
        <strong>I'm comfortable in...</strong>
      </span>
      <ul className="flex flex-wrap mt-8 justify-center  xs:justify-start">
        {siteMetadata.skillList.map((item, index) => (
          <li
            key={index}
            data-aos={getRandomAnimation()}
            className="font-semibold inline-block capitalize text-base xs:text-lg sm:text-xl  md:text-2xl py-2 xs:py-3 sm:py-4 lg:py-5 px-4 xs:px-6 sm:px-8 lg:px-12 border-2 border-solid border-dark dark:border-light rounded mr-3 mb-3 xs:mr-4 xs:mb-4  md:mr-6 md:mb-6 hover:scale-105 transition-all ease duration-200 cursor-pointer dark:font-normal"
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
