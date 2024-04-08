import { Inter } from "next/font/google";
import "./globals.css";
import ThemeProviderComp from "@/lib/theme-provider";
import ThemeSwitcher from "@/components/theme/theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProviderComp attribute="class" defaultTheme="dark">
          {children}
          <ThemeSwitcher />
        </ThemeProviderComp>
      </body>
    </html>
  );
}
