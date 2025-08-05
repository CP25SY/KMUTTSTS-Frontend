import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#3b82f6",
        secondary: "#ef4444",
        background: "#ffffff",
        foreground: "#171717",
        darkBg: "#0a0a0a",
        darkText: "#ededed",
      },
      fontFamily: {
        sans: ['"Inter"', "sans-serif"],
        heading: ['"Poppins"', "sans-serif"],
        mono: ['"Fira Code"', "monospace"],
      },
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [forms(), typography()],
};

export default config;
