import { commonMetaData } from '@/utils/utils';
import React from 'react';

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: 'Skills',
    desc: 'Explore the technology landscape with Reetesh Kumar, a full-stack developer. Discover my expertise in React, Next.js, Node.js, Express, TypeScript, GraphQL, MongoDB, Docker, and more on this personal website.',
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/skills',
    keywords: ['skills', 'knowledge', 'expertise', 'technology'],
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
    <main className="from-[#111111] to-[#1f1f1f] pt-6 dark:bg-gradient-to-r">
      {children}
    </main>
  );
}
