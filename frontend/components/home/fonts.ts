import {
  Bricolage_Grotesque,
  Fraunces,
  JetBrains_Mono,
  Newsreader,
} from 'next/font/google';

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
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
});

export const fontVariables = `${bricolage.variable} ${fraunces.variable} ${newsreader.variable} ${jetbrains.variable}`;
