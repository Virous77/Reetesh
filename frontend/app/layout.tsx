import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NextUIProviderComp from "@/lib/nextui-provider";
import ThemeProviderComp from "@/lib/theme-provider";
import { AppContextProvider } from "@/contexts/useAppContext";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import "highlight.js/styles/shades-of-purple.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Reetesh | Full-Stack Developer",
  description:
    "A passionate full-stack developer with a strong proficiency in a versatile set of technologies. Having extensively worked with React, Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL, REST API, Docker, Kubernetes, Solidity, and Anchor, I bring a wealth of experience to the table",
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
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <meta
          name="viewport"
          content="width=device-width initial-scale=1 viewport-fit=cover maximum-scale=1 user-scalable=no"
        />
      </head>
      <body className={`${poppins.className} bg-white dark:bg-black`}>
        <NextUIProviderComp>
          <ThemeProviderComp>
            <AppContextProvider>
              {children}
              <ThemeSwitcher />
            </AppContextProvider>
          </ThemeProviderComp>
        </NextUIProviderComp>
      </body>
    </html>
  );
}
