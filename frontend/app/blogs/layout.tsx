import { commonMetaData } from '@/utils/utils';
import React from 'react';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Blogs',
    desc: 'Explore the digital realm of Reetesh Kumar, a seasoned full-stack developer. Immerse yourself in a collection of insightful blogs.',
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
