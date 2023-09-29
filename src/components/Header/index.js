"use client";

import Link from "next/link";
import { cx } from "@/src/utils";
import { useEffect, useId, useRef, useState } from "react";
import LeftLogo from "@/src/components/Header/LeftLogo";
import { MoonIcon, SunIcon } from "@/src/components/Icons";
import { useThemeSwitch } from "@/src/components/Hooks/useThemeSwitch";
import RightSocialLinks from "@/src/components/Header/RightSocialLinks";

const Header = () => {
  const uuid = useId();

  const [mode, setMode] = useThemeSwitch();

  const [click, setClick] = useState(false);

  const smNavElRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      click &&
      smNavElRef.current &&
      !smNavElRef.current.contains(event.target)
    ) {
      setClick(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [click]);

  const NavCommComp = ({ uuidForIcon: uuid }) => (
    <>
      <Link href="/" className="mr-2 transition hover:text-slate-600">
        Home
      </Link>
      <Link href="/about" className="mx-2 transition hover:text-slate-600">
        About
      </Link>
      <Link href="/contact" className="mx-2 transition hover:text-slate-600">
        Contact
      </Link>
      <Link href="/categories" className="mx-2 transition hover:text-slate-600">
        Categories
      </Link>
      <button
        onClick={() => setMode(mode === "light" ? "dark" : "light")}
        className={cx(
          "w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1 hover:scale-105 transition-all ease duration-200",
          mode === "light" ? "bg-dark text-light" : "bg-light text-dark"
        )}
        aria-label="theme-switcher"
      >
        {mode === "light" ? (
          <MoonIcon className={"fill-dark"} uid={`moonIcon${uuid}`} />
        ) : (
          <SunIcon className={"fill-dark"} uid={`sunIcon_${uuid}`} />
        )}
      </button>
    </>
  );

  const navS_comm_classS =
    "w-max py-3 border border-solid border-dark rounded-full font-medium capitalize items-center fixed top-6 right-1/2 translate-x-1/2 bg-light/80 backdrop-blur-sm z-30";

  return (
    <header
      className={`w-full p-4 px-5 sm:px-10 flex items-center justify-between z-30 ${
        click ? "static" : "sticky"
      } -top-1 sm:static bg-inherit`}
    >
      <LeftLogo click={click} />

      <button
        className="inline-block sm:hidden mr-4 transition transition-all ease duration-300 relative py-2"
        onClick={() => setClick(true)}
        aria-label="Hamburger Menu"
        style={{ top: !click ? "0rem" : "-5rem" }}
      >
        <div className="w-6 cursor-pointer transition transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition transition-all ease duration-200 left-0"
              style={{
                transform: click
                  ? "rotate(-45deg) translateY(0)"
                  : "rotate(0deg) translateY(6px)"
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition transition-all ease duration-200 left-0"
              style={{ opacity: click ? 0 : 1 }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition transition-all ease duration-200 left-0"
              style={{
                transform: click
                  ? "rotate(45deg) translateY(0)"
                  : "rotate(0deg) translateY(-6px)"
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>

      <nav
        ref={smNavElRef}
        className={`${navS_comm_classS} transition transition-all ease duration-300 px-6 sm:px-8 flex sm:hidden`}
        style={{ top: click ? "1rem" : "-5rem" }}
      >
        <NavCommComp uuidForIcon={`__1nd_largeSrc_nav__${uuid}`} />
      </nav>

      <nav className={`${navS_comm_classS} px-8 hidden sm:flex`}>
        <NavCommComp uuidForIcon={`__2nd_mobile_nav__${uuid}`} />
      </nav>

      <RightSocialLinks />
    </header>
  );
};

export default Header;
