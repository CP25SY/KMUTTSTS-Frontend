"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  // โหลดค่าที่เคยเลือกไว้จาก localStorage
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const preferDark = saved ? saved === "dark" : false;

    if (preferDark) {
      document.documentElement.classList.add("dark");
      setIsDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      setIsDark(false);
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <button
      onClick={toggle}
      className="fixed right-4 top-4 z-50 rounded-lg px-3 py-2 text-sm font-medium
                 border bg-white/80 backdrop-blur dark:bg-black/60 hover:bg-white dark:hover:bg-black
                 transition"
      title="Toggle theme">
      {isDark ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
