import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Video Player",
  description: "Video player layout for KMUTTSTS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div>{children}</div>;
}
