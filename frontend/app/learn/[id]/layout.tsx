import LeftSidebar from '@/components/learn/left-sidebar';
import Navbar from '@/components/learn/navbar';
import { commonMetaData } from '@/utils/utils';
import React from 'react';

export async function generateMetadata({
  params,
}: {
  params: { id: string; name: string };
}) {
  const { id } = params;
  const metaData = commonMetaData({
    name: `Learn ${id.slice(0, 1).toUpperCase() + id.slice(1)}`,
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
        <section className="layout m-auto  w-full max-w-[1250px] pt-0 md:p-4">
          <LeftSidebar />
          {children}
        </section>
      </main>
    </React.Fragment>
  );
}
