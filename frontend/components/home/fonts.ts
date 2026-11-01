import { Bricolage_Grotesque, Fraunces } from 'next/font/google';

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  style: 'italic',
  variable: '--font-fraunces',
});

export const fontVariables = `${bricolage.variable} ${fraunces.variable}`;
