import { commonMetaData } from '@/utils/utils';
import React from 'react';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Projects',
    desc: "Discover my projects on this personal website. I'm a full-stack developer passionate about crafting innovative solutions",
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: '/projects',
    keywords: ['projects', 'experience', 'work'],
  });
  return {
    ...metaData,
  };
};

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  return <React.Fragment>{children}</React.Fragment>;
};

export default RootLayout;
