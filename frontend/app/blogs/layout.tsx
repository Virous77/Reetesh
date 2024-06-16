import { commonMetaData } from '@/utils/utils';
import React from 'react';

export const generateMetadata = async () => {
  const metaData = commonMetaData({
    name: 'Blogs',
    desc: 'Explore the digital realm of Reetesh Kumar, a seasoned full-stack developer. Immerse yourself in a collection of insightful blogs, meticulously crafted to share expertise and experiences in the ever-evolving landscape of web development. Welcome to a space where technology meets creativity, and where i unveils the artistry of code and the insights gained on the journey of becoming a proficient full-stack developer.',
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
