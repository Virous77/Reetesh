import { Poppins } from "next/font/google";
import "./globals.css";
import NextUIProviderComp from "@/lib/nextui-provider";
import ThemeProviderComp from "@/lib/theme-provider";
import { AppContextProvider } from "@/contexts/useAppContext";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import "highlight.js/styles/shades-of-purple.css";
import { commonMetaData } from "@/utils/utils";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: "",
    desc: "A passionate full-stack developer with a strong proficiency in a versatile set of technologies. Having extensively worked with React, Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL, REST API, Docker, Kubernetes, Solidity, and Anchor, I bring a wealth of experience to the table",
    image: "https://avatars.githubusercontent.com/u/101452588?v=4",
    url: "/",
    keywords: [
      "Reetesh",
      "Reetesh Kumar",
      "full-stack developer",
      "developer",
      "software engineer",
      "software developer",
      "portfolio",
      "react",
      "",
    ],
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="3tZVGdTelf7aq7SWKaQ9uX5W3tWH8GQjhhSHiAM1PcA"
        />
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
        <link rel="preconnect" href="https://res.cloudinary.com" />
      </head>
      <body className={`${poppins.className} bg-white dark:bg-black`}>
        <NextUIProviderComp>
          <ThemeProviderComp>
            <AppContextProvider>
              {children}
              <Analytics />
              <SpeedInsights />
              <ThemeSwitcher />
            </AppContextProvider>
          </ThemeProviderComp>
        </NextUIProviderComp>
      </body>
    </html>
  );
}
