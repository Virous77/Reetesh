import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextUIProviderComp from "@/lib/nextui-provider";
import ThemeProviderComp from "@/lib/theme-provider";
import { AppContextProvider } from "@/contexts/useAppContext";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reetesh | Full-Stack Developer",
  description:
    "This is my personal website. I am a full stack developer. Here i have shared my projects and blogs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="../public/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="../public/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="../public/favicon-16x16.png"
        />
      </head>
      <body className={poppins.className}>
        <NextUIProviderComp>
          <ThemeProviderComp>
            <AppContextProvider>{children}</AppContextProvider>
          </ThemeProviderComp>
        </NextUIProviderComp>
      </body>
    </html>
  );
}
