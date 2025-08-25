"use client";
import { ModeToggle } from "@/components/ui/ThemeToggle";

export interface SearchBarConfig {
  showProfile?: boolean;
  showThemeToggle?: boolean;
  placeholder?: string;
}

interface SearchBarProps {
  config?: SearchBarConfig;
}

export default function SearchBar({ config }: SearchBarProps) {
  const {
    showProfile = true,
    showThemeToggle = true,
    placeholder = "Search",
  } = config || {};

  // Use theme context for dynamic styling
  // ...existing code...
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="flex items-center justify-between px-8 py-4 w-full max-w-2xl">
        {/* Search Input */}
        <div className="flex items-center gap-4 flex-1 max-w-xl">
          <input
            type="text"
            placeholder={placeholder}
            className="rounded-full px-6 py-2 w-full border border-none focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground"
          />
          <button className="rounded-full p-2 border border-none hover:bg-muted bg-background text-foreground">
            {/* Search Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
              />
            </svg>
          </button>
        </div>
        {/* Right Side Icons */}
        <div className="flex items-center gap-4 ml-4">
          {showThemeToggle && (
            <div className="rounded-full w-16 h-9 flex items-center justify-center bg-background"></div>
          )}
          {showProfile && (
            <div className="rounded-full bg-background w-12 h-12 flex items-center justify-center text-gray-500 text-xs">
              50 x 50
            </div>
          )}
        </div>
      </div>
      <ModeToggle />
    </div>
  );
}
