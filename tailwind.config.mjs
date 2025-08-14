import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // ใช้ <html class="dark"> เพื่อสลับธีม
  theme: {
    extend: {
      colors: {
        primary: "#f07c00", // สีส้มหลัก
        background: "#ffffff", // พื้นหลังโหมดสว่าง
        foreground: "#000000", // ตัวอักษรโหมดสว่าง
        darkBg: "#000000", // พื้นหลังโหมดมืด
        darkText: "#ffffff", // ตัวอักษรโหมดมืด
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
