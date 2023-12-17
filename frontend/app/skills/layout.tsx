import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Reetesh | Skill",
  description:
    "Explore the technology landscape with Reetesh Kumar, a full-stack developer. Discover my expertise in React, Next.js, Node.js, Express, TypeScript, GraphQL, MongoDB, Docker, and more on this personal website.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <React.Fragment>{children}</React.Fragment>;
}
