"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main className="min-h-screen flex">
      <ThemeToggle />

      <div className="hidden lg:flex flex-1 relative">
        <Image
          src="/login.png"
          alt="Login Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="flex flex-1 justify-center items-center p-6">
        <div className="w-full max-w-md space-y-6">
          <h1 className="text-2xl font-bold text-center">Sign in to Salesai</h1>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                className="w-full px-4 py-3 rounded-lg focus:outline-none
                           border border-[var(--border)]
                           bg-[var(--background)] text-[var(--foreground)]
                           focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
            </div>

            <div className="relative">
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="w-full px-4 py-3 rounded-lg focus:outline-none
                           border border-[var(--border)]
                           bg-[var(--background)] text-[var(--foreground)]
                           focus:ring-2 focus:ring-[var(--primary)]"
                required
              />
              <button
                type="button"
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute inset-y-0 right-3 flex items-center text-[var(--foreground)]/60"
                onClick={() => setShowPassword((v) => !v)}>
                {showPassword ? "🙈" : "👁️"}
              </button>
            </div>

            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="w-4 h-4" />
                Remember me
              </label>
              <Link
                href="#"
                className="hover:underline"
                style={{ color: "var(--primary)" }}>
                Forgot Password?
              </Link>
            </div>

            <div>
              <button
                type="submit"
                className="btn-primary w-full font-semibold py-3 rounded-lg">
                Sign in
              </button>
            </div>
          </form>

          <div className="flex items-center gap-4">
            <hr className="flex-1 border-[var(--border)]" />
            <span className="text-sm text-[color:var(--foreground)]/60">
              Or login with
            </span>
            <hr className="flex-1 border-[var(--border)]" />
          </div>

          <div className="flex">
            <Link
              href="/auth/microsoft"
              aria-label="Sign in with Microsoft"
              className="flex-1 flex items-center justify-center gap-3 rounded-lg py-3 px-4 transition-colors duration-200
                         border border-[var(--border)]
                         bg-[var(--muted)] text-[var(--muted-text)]
                         hover:bg-[var(--primary)] hover:text-[var(--primary-text)]">
              <Image
                src="/microsoft_logo.png"
                alt="Microsoft"
                width={20}
                height={20}
                className="w-5 h-5"
              />
              <span className="font-medium">Sign in with Microsoft</span>
            </Link>
          </div>

          <p className="text-center text-sm">
            Don’t have an account?{" "}
            <Link
              href="#"
              className="hover:underline"
              style={{ color: "var(--primary)" }}>
              Sign Up now
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
