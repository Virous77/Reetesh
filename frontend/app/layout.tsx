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
    desc: 'A passionate full-stack developer with a strong proficiency in a versatile set of technologies. Having extensively worked with React, Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL, REST API, Docker, Kubernetes, Solidity, and Anchor, I bring a wealth of experience to the table',
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
        <Script id="gtm-script" strategy="beforeInteractive">
          {`(function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != "dataLayer" ? "&l=" + l : "";
            j.async = true;
            j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, "script", "dataLayer", "GTM-PPW7TBMX")`}
        </Script>
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
        <Script
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-XY0Y1HDGMT"
        />
        <Script strategy="beforeInteractive" id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XY0Y1HDGMT');
        `}
        </Script>
      </head>
      <body className={`${poppins.className} bg-white dark:bg-black`}>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PPW7TBMX"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
        <PHProvider>
          <ThemeProviderComp attribute="class" defaultTheme="dark">
            <Provider>
              {children}
              <PostHogPageView />
              <Analytics debug={false} />
              <SpeedInsights />
              <ThemeSwitcher />
            </Provider>
          </ThemeProviderComp>
        </PHProvider>
      </body>
    </html>
  );
}
