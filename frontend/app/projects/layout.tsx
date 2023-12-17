import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reetesh | Projects",
  description:
    "Discover my projects on this personal website. I'm a full-stack developer passionate about crafting innovative solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}
