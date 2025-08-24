"use client";

import Link from "next/link";
import React from "react";

type Item = {
  icon: React.ReactNode;
  href: string;
  label: string;
  active?: boolean;
};

type SidebarProps = {
  position?: "sticky" | "fixed";
  leftOffset?: number;
  items?: Item[];
};

function Svg(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="20"
      height="20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      {...props}
    />
  );
}
const Emoji = () => (
  <Svg>
    <circle cx="12" cy="12" r="8" />
    <path d="M9 10h.01M15 10h.01M8.5 14c1 1 2.5 1.5 3.5 1.5s2.5-.5 3.5-1.5" />
  </Svg>
);
const Flame = () => (
  <Svg>
    <path d="M8 14c0-3 3-5 2-8 4 2 6 5 6 8a4 4 0 1 1-8 0Z" />
  </Svg>
);
const Clock = () => (
  <Svg>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);
const Download = () => (
  <Svg>
    <path d="M12 3v10m0 0 3-3m-3 3-3-3" />
    <path d="M5 17h14v3H5z" />
  </Svg>
);
const Settings = () => (
  <Svg>
    <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 1-2.06 0 1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 1 0-2 1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 1 0-2.06 1.65 1.65 0 0 0 .6-1A1.65 1.65 0 0 0 4.6 4.6l-.06-.06A2 2 0 1 1 7.37 1.7l.06.06A1.65 1.65 0 0 0 9 4.6a1.65 1.65 0 0 0 2-.6 1.65 1.65 0 0 1 2.06 0 1.65 1.65 0 0 0 1 .6 1.65 1.65 0 0 0 1.82-.33l.06-.06A2 2 0 1 1 20.3 7.37l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 .6 1 1.65 1.65 0 0 1 0 2Z" />
  </Svg>
);
const Help = () => (
  <Svg>
    <circle cx="12" cy="12" r="9" />
    <path d="M9.09 9a3 3 0 1 1 5.83 1c0 2-3 2-3 4" />
    <path d="M12 17h.01" />
  </Svg>
);

const DEFAULT_ITEMS: Item[] = [
  { icon: <Emoji />, href: "#", label: "Home", active: true },
  { icon: <Flame />, href: "#", label: "Trending" },
  { icon: <Clock />, href: "#", label: "History" },
  { icon: <Download />, href: "#", label: "Downloads" },
  { icon: <Settings />, href: "#", label: "Settings" },
];

export default function Sidebar({
  position = "fixed",
  leftOffset = 0,
  items = DEFAULT_ITEMS,
}: SidebarProps) {
  const positionClass =
    position === "fixed" ? "fixed inset-y-0" : "sticky top-0";

  return (
    <aside
      role="navigation"
      aria-label="Primary"
      className={`${positionClass} left-0 h-[calc(100vh-2rem)] w-[72px] shrink-0 m-4 rounded-2xl bg-theme shadow-lg`}
      style={position === "fixed" ? { left: leftOffset } : undefined}>
      <div className="flex h-full flex-col items-center gap-3 py-3">
        {/* Brand Button */}
        <button
          aria-label="Brand"
          className="mt-1 grid h-11 w-11 place-items-center rounded-full shadow outline-none bg-theme-alt ring-0 focus-visible:ring-2 focus-visible:ring-[var(--border)]">
          <span
            className="h-5 w-5 rounded-sm"
            style={{ background: "var(--primary)" }}
          />
        </button>

        {/* Menu */}
        <ul className="mt-2 flex flex-col items-center gap-2">
          {items.map((it) => (
            <li key={it.label}>
              <Link
                href={it.href}
                aria-current={it.active ? "page" : undefined}
                className={[ 
                  "grid h-11 w-11 place-items-center rounded-xl transition-colors outline-none",
                  it.active
                    ? "bg-foreground dark:bg-foreground-dark text-background dark:text-background-dark"
                    : "bg-background dark:bg-background-dark text-[var(--muted-text)] bg-muted-hover",
                  "focus-visible:ring-2 focus-visible:ring-[var(--border)]",
                ].join(" ")}
                title={it.label}>
                {it.icon}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex-1" />

        {/* Help Button */}
        <button
          aria-label="Help"
          className="mb-2 grid h-11 w-11 place-items-center rounded-xl bg-background dark:bg-background-dark text-[var(--muted-text)] shadow transition-colors bg-muted-hover outline-none focus-visible:ring-2 focus-visible:ring-[var(--border)]"
          title="Help">
          <Help />
        </button>
      </div>
    </aside>
  );
}
