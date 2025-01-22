import { Montserrat } from 'next/font/google';
import './globals.css';
import ThemeProviderComp from '@/lib/theme-provider';
import ThemeSwitcher from '@/components/theme/theme-switcher';
import { commonMetaData } from '@/utils/utils';
import { Provider } from '@/lib/reactQuery-provider';
import { Analytics } from '@vercel/analytics/react';
import Accessibility from '@/components/common/accessibility';
import MenuProvider from '@/lib/menu-provider';
import { ViewTransitions } from 'next-view-transitions';
import NextTopLoader from 'nextjs-toploader';

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
    <ViewTransitions>
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
        </head>
        <body className={`${montserrat.className}`}>
          <ThemeProviderComp attribute="class" defaultTheme="dark">
            <NextTopLoader
              color="#e21d49"
              initialPosition={0.08}
              crawlSpeed={200}
              height={3}
              crawl={true}
              showSpinner={false}
              easing="ease"
              speed={200}
              shadow="0 0 10px #e21d49,0 0 5px #e21d49"
            />
            <Provider>
              <MenuProvider>
                {modal}
                {children}
                <Analytics debug={false} />
                <ThemeSwitcher />
                <Accessibility />
              </MenuProvider>
            </Provider>
          </ThemeProviderComp>
        </body>
      </html>
    </ViewTransitions>
  );
};

export default RootLayout;
