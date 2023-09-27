"use client";

import { debounce } from "@/src/utils/";
import { useEffect, useRef } from "react";
import { FaArrowUp } from "react-icons/fa";

const scrollToTop = () => {
  !(typeof window === "undefined") &&
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
};

const ScrollTop = () => {
  const scrollTopElRef = useRef(null);

  useEffect(() => {
    if (!(typeof window === "undefined")) {
      const scrollTopDetect = () => {
        if (!scrollTopElRef || !scrollTopElRef.current) return;
        scrollTopElRef.current.style.bottom =
          window.scrollY >= 480 ? "1.25rem" : "-10rem";
      };

      const debouncedScrollTopDetect = debounce(scrollTopDetect, 50);
      window.addEventListener("scroll", debouncedScrollTopDetect);

      return () =>
        window.removeEventListener("scroll", debouncedScrollTopDetect);
    }
  }, []);

  return (
    <button
      onClick={scrollToTop}
      ref={scrollTopElRef}
      type="button"
      style={{ bottom: "-10rem", transition: "all 0.3s" }}
      className="
        !fixed right-5 z-40
        rounded-full
        p-3
        text-xs font-medium uppercase leading-tight
        shadow-md bg-accent dark:bg-accentDark text-light
        transition duration-150 ease-in-out
        hover:bg-accentDarkHover hover:shadow-3xl hover:scale-110
        focus:outline-none
        active:bg-accentDarkActive active:shadow-3xl active:scale-90"
      id="btn-back-to-top"
    >
      <FaArrowUp className="animate-gototop" />
    </button>
  );
};

export default ScrollTop;
