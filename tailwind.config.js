/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: "#0f172a",
        light: "#f0f0f0",
        accent: "#11307a",
        accentDark: "#889acd",
        accentDarkHover: "#0a2259",
        accentDarkActive: "#071a46",
        gray: "#2a2b2e"
      },
      fontFamily: {
        mr: ["var(--font-mr)"],
        in: ["var(--font-in)"]
      },
      boxShadow: {
        "3xl": "0 0 20px 0px #00000057"
      },
      animation: {
        roll: "roll 24s linear infinite",
        gototop: "gototop 3s linear infinite alternate-reverse"
      },
      keyframes: {
        roll: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" }
        },
        gototop: {
          "0%, 100%": { transform: "translateY(-0.1rem)" },
          "50%": { transform: "translateY(0.1rem)" }
        }
      },
      screens: {
        sxl: "1180px",
        // @media (min-width: 1180px){...}
        xs: "480px"
        // @media (min-width: 480px){...}
      }
    }
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")]
};
