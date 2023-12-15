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
  title: "Reetesh",
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
