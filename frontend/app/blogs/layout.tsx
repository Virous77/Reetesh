import { Lora } from "next/font/google";
import React from "react";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

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
