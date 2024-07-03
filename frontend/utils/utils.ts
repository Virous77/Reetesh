import { Linkedin } from 'lucide-react';
import { GitHubIcon } from './icons/github';
import { XIcon } from './icons/x';

export const socials = [
  {
    name: GitHubIcon,
    url: 'https://github.com/Virous77',
    title: 'Github',
  },
  {
    name: XIcon,
    url: 'https://twitter.com/imbitcoinb',
    title: 'Twitter',
  },
  {
    name: Linkedin,
    url: 'https://www.linkedin.com/in/reetesh-kumar-a1b952178/',
    title: 'Linkedin',
  },
];

export const commonMetaData = ({
  name,
  desc,
  image,
  url,
  keywords,
}: {
  name: string;
  desc: string;
  image: string;
  url: string;
  keywords: string[];
}) => {
  return {
    metadataBase: new URL('https://reetesh.in'),
    title: name
      ? `${name} | Reetesh Kumar`
      : 'Reetesh Kumar | Full-Stack Developer',
    description: desc,
    authors: [
      {
        name: 'Reetesh Kumar',
        url: 'https://reetesh.in/',
      },
    ],
    twitter: {
      card: 'summary_large_image',
      creator: '@imbitcoinb',
      images: image,
    },
    robots: 'index, follow',
    alternates: {
      canonical: `https://reetesh.in${url}`,
      languages: {
        'en-US': '/',
      },
    },
    openGraph: {
      type: 'website',
      url: `https://reetesh.in${url}`,
      title: name,
      description: desc,
      siteName: 'Reetesh Kumar',
      images: [
        {
          url: image,
        },
      ],
    },
    assets: image,
    keywords: [
      'nextjs',
      'react',
      'typescript',
      'tailwindcss',
      'express',
      'nodejs',
      'mongodb',
      'mysql',
      'javascript',
      'docker',
      'github',
      'Reetesh Kumar',
      'kubernetes',
      'solidity developer',
      'Reetesh kumar blog',
      'Full Stack Developer',
      'Web Developer',
      ...keywords,
    ],
  };
};

export const formateDate = (date: string) => {
  const newDate = new Date(date);

  const month = newDate.toLocaleString('default', { month: 'short' });
  const day = newDate.getDate();
  const year = newDate.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const generateUUID = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

export const getLocalData = (key: string) => {
  const data = localStorage.getItem(key);
  if (data) return JSON.parse(data);
  return 0;
};

export const slugify = (text: string) => {
  if (
    text === 'Docker - The Complete Guide to Build and Deploy your Application'
  ) {
    return 'docker-the-complete-guide-to-build-and-deploy-your-application';
  }

  const unwantedChars = ['?', '!', ',', ':', ';', '"', "'"];

  unwantedChars.forEach((char) => {
    text = text.replace(char, '');
  });

  const newText = text.toLowerCase().split(' ');
  return newText.join('-');
};

export const addUserIDToLocalStorage = (id: string) => {
  let tempId = '';
  if (!id) {
    tempId = generateUUID();
    localStorage.setItem('tempId', JSON.stringify(tempId.toString()));
  }
  return tempId;
};

export const parseType = (date: string) => {
  const getDateTime = new Date(date).getTime();
  if (getDateTime > 1718909069444) {
    return true;
  }
  return false;
};

export const hexToRgb = (hex: string): number[] => {
  hex = hex.replace('#', '');
  const hexInt = parseInt(hex, 16);
  const red = (hexInt >> 16) & 255;
  const green = (hexInt >> 8) & 255;
  const blue = hexInt & 255;
  return [red, green, blue];
};
