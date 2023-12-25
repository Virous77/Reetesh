import { commonMetaData } from "@/utils/utils";
import React from "react";

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: "Projects",
    desc: "Discover my projects on this personal website. I'm a full-stack developer passionate about crafting innovative solutions",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
    url: "/projects",
    keywords: ["projects", "experience", "work"],
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
  return <React.Fragment>{children}</React.Fragment>;
}
