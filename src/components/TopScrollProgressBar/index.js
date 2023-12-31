"use client";

import { debounce } from "@/src/utils/";
import { useEffect, useState } from "react";

export default function TopScrollProgressBar() {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercentage(scrollPercent);
    };

    const debouncedHandleScroll = debounce(handleScroll, 10);

    window.addEventListener("scroll", debouncedHandleScroll);
    return () => window.removeEventListener("scroll", debouncedHandleScroll);
  }, []);

  return (
    <>
      <div
        id="scroll-progress-container"
        className="h-0.5 w-full bg-cyan-100 fixed top-0 left-0 right-0 z-50"
      >
        <div
          id="scroll-progress-fill"
          className="h-full bg-blue-700"
          style={{ width: `${scrollPercentage}%` }}
        ></div>
      </div>
    </>
  );
}
