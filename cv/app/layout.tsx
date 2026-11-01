import { IBM_Plex_Mono, Newsreader } from "next/font/google";
import "./globals.css";
import ThemeProviderComp from "@/lib/theme-provider";
import ThemeSwitcher from "@/components/theme/theme";

const serif = Newsreader({
  subsets: ["latin"],
  axes: ["opsz"],
  variable: "--font-newsreader",
});

const mono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${serif.variable} ${mono.variable}`}>
        <ThemeProviderComp attribute="class" defaultTheme="dark">
          {children}
          <ThemeSwitcher />
        </ThemeProviderComp>
      </body>
    </html>
  );
}
