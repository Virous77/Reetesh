import { commonMetaData } from "@/utils/utils";
import React from "react";

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: "Skills",
    desc: "Explore the technology landscape with Reetesh Kumar, a full-stack developer. Discover my expertise in React, Next.js, Node.js, Express, TypeScript, GraphQL, MongoDB, Docker, and more on this personal website.",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
    url: "/skills",
    keywords: ["skills", "knowledge", "expertise", "technology"],
  });
  return {
    ...metaData,
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="dark:bg-gradient-to-r from-[#000000] to-[#0e161e] h-full md:h-screen pt-12">
      {children}
    </main>
  );
}
