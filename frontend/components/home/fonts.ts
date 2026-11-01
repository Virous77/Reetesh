import { Bricolage_Grotesque, Fraunces, Newsreader } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-fraunces',
});

const newsreader = Newsreader({
  subsets: ['latin'],
  axes: ['opsz'],
  variable: '--font-newsreader',
});

export const fontVariables = `${bricolage.variable} ${fraunces.variable} ${newsreader.variable}`;
