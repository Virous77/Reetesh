import { commonMetaData } from "@/utils/utils";
import React from "react";

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: "Reetesh | Projects",
    desc: "Discover my projects on this personal website. I'm a full-stack developer passionate about crafting innovative solutions",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
    url: "/projects",
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
