import { commonMetaData } from "@/utils/utils";
import { Lora } from "next/font/google";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: "Reetesh | Blogs",
    desc: "Explore the digital realm of Reetesh Kumar, a seasoned full-stack developer. Immerse yourself in a collection of insightful blogs, meticulously crafted to share expertise and experiences in the ever-evolving landscape of web development. Welcome to a space where technology meets creativity, and where i unveils the artistry of code and the insights gained on the journey of becoming a proficient full-stack developer.",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
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
    <React.Fragment>
      <main className={lora.className}>{children}</main>
    </React.Fragment>
  );
}
