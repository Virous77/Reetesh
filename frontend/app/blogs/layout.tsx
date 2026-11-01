import { commonMetaData } from '@/utils/utils';
import React from 'react';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Blogs',
    desc: 'Posts by Reetesh Kumar on Next.js, React, AI and the backend, written while learning and building.',
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/blogs',
    keywords: ['blogs', 'articles', 'posts', 'insights', 'experiences'],
  });
  return {
    ...metaData,
  };
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return children;
};

export default RootLayout;
