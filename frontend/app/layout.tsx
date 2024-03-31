import { Poppins } from 'next/font/google';
import './globals.css';
import ThemeProviderComp from '@/lib/theme-provider';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import { commonMetaData } from '@/utils/utils';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Script from 'next/script';
import { Provider } from '@/lib/reactQuery-provider';
import { Analytics } from '@vercel/analytics/react';
import PHProvider from '@/lib/post-hog';
import dynamic from 'next/dynamic';

const PostHogPageView = dynamic(() => import('../lib/posthog-pageview'), {
  ssr: false,
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export async function generateMetadata() {
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
          content="ymnya5tVzcP4bwvG455V0AZC282mwI4Iy3mnS3uBTD0"
        />
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
      </head>
      <PHProvider>
        <body className={`${poppins.className}`}>
          <ThemeProviderComp attribute="class" defaultTheme="dark">
            <Provider>
              <PostHogPageView />
              {children}
              <Analytics debug={false} />
              <SpeedInsights />
              <ThemeSwitcher />
            </Provider>
          </ThemeProviderComp>
        </body>
      </PHProvider>
    </html>
  );
}
