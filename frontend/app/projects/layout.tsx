import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reetesh | Projects",
  description:
    "This is my personal website. I am a full stack developer. Here i have shared my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}
