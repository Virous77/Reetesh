'use server';

import { kv } from '@vercel/kv';

type TResponse = {
  mode: string;
  totalContributions: number;
  firstContribution: string;
  longestStreak: {
    start: string;
    end: string;
    length: number;
  };
  currentStreak: {
    start: string;
    end: string;
    length: number;
  };
  excludedDays: string[];
};

export const githubAction = async () => {
  const isInCache: TResponse | null = await kv.get('github-streak');
  if (isInCache) return { stats: isInCache };

  const res = await fetch(
    'https://streak-stats.demolab.com?user=virous77&theme=dark&type=json'
  );
  const data: TResponse = await res.json();

  await kv.set('github-streak', JSON.stringify(data), { ex: 36000 });
  return { stats: data };
};
