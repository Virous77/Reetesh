import { Montserrat } from 'next/font/google';
import './globals.css';
import ThemeProviderComp from '@/lib/theme-provider';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import { commonMetaData } from '@/utils/utils';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { Provider } from '@/lib/reactQuery-provider';
import { Analytics } from '@vercel/analytics/react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900', '600', '500', '800'],
  style: 'normal',
  fallback: ['Poppins', 'sans-serif', 'ui-sans-serif', 'system-ui'],
});

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: '',
    desc: "I'm passionate full-stack developer with strong proficiency in versatile set of technologies like React, Next.js, Node.js, TypeScript, Docker, Kubernetes, Solidity.",
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/',
    keywords: [
      'Reetesh',
      'Reetesh Kumar',
      'full-stack developer',
      'developer',
      'software engineer',
      'software developer',
      'web developer',
    ],
  });
  return {
    ...metaData,
  };
};

const RootLayout = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta
          name="google-site-verification"
          content="ymnya5tVzcP4bwvG455V0AZC282mwI4Iy3mnS3uBTD0"
        />
        <meta name="google-adsense-account" content="ca-pub-3587869123201431" />
        <meta name="googlebot" content="index, follow" />
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
        <Script strategy="beforeInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XY0Y1HDGMT');
        `}
        </Script>
        <Script
          async
          id="adsense"
          crossOrigin="anonymous"
          strategy="afterInteractive"
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3587869123201431"
        />
      </head>
      <body className={`${montserrat.className}`}>
        <ThemeProviderComp attribute="class" defaultTheme="dark">
          <Provider>
            {modal}
            <div vaul-drawer-wrapper="" className="bg-background">
              {children}
            </div>
            <Analytics debug={false} />
            <SpeedInsights />
            <ThemeSwitcher />
          </Provider>
        </ThemeProviderComp>
      </body>
    </html>
  );
};

export default RootLayout;
