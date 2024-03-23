import Navbar from '@/components/learn/navbar';
import { commonMetaData } from '@/utils/utils';
import React from 'react';

export async function generateMetadata() {
  const metaData = commonMetaData({
    name: 'Learn',
    desc: 'Learn Rect and Next.Js with Reetesh Kumar, I am going to share what i have learned in my journey of becoming a full-stack developer.',
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/learn',
    keywords: ['raect', 'nextjs', 'typescript', 'course'],
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
    <React.Fragment>
      <main>
        <Navbar />
        {children}
      </main>
    </React.Fragment>
  );
}
