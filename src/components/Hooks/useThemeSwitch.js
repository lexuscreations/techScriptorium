"use client";

import { useEffect, useState } from "react";

export function useThemeSwitch() {
  const storageKey = "theme";
  const preferDarkQuery = "(prefers-color-schema:dark)";

  const toggleTheme = (theme) => {
    document.documentElement.classList[theme === "dark" ? "add" : "remove"](
      "dark"
    );
    window.localStorage.setItem(storageKey, theme);
  };

  const getUserPreference = () => {
    const userPref = window.localStorage.getItem(storageKey);
    if (userPref) return userPref;
    return window.matchMedia(preferDarkQuery).matches ? "dark" : "light";
  };

  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const mediaQuery = window.matchMedia(preferDarkQuery);
    const handleChange = () => {
      const newMode = getUserPreference();
      setMode(newMode);
      toggleTheme(newMode);
    };

    handleChange();

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => toggleTheme(mode), [mode]);

  return [mode, setMode];
}
