'use client';

import { useQuery } from '@tanstack/react-query';
import { githubAction } from './action';
import { formateDate } from '@/utils/utils';
import { MoveDown } from 'lucide-react';

const GithubStreak = () => {
  const { data } = useQuery({
    queryKey: ['github-streak'],
    queryFn: async () => {
      const stats = githubAction();
      return stats;
    },
    enabled: true,
  });

  return (
    <div className="mt-8 flex h-fit w-full items-center justify-center rounded-lg border-2 md:w-[90%]">
      <a
        className="-lg flex w-full items-start justify-between gap-2 px-2 py-4 md:p-4"
        href="https://github.com/virous77"
        target="_blank"
        rel="noreferrer"
      >
        <div className="text-center">
          <div className="text-4xl font-bold">
            {data?.stats.totalContributions || '0000'}
          </div>
          <div className="whitespace-nowrap text-[13px] md:text-sm">
            Total Contributions
          </div>
          <div className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
            <span className="font-sans">
              {formateDate(
                data?.stats.firstContribution || new Date().toString()
              )}
            </span>
            <MoveDown size={14} className="mb-[2px] mt-[2px] h-2" />
            <span className="font-sans">Present</span>
          </div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold">
            {data?.stats.currentStreak.length || '00'}
          </div>
          <div className="whitespace-nowrap text-[13px] font-bold md:text-sm">
            Current Streak
          </div>
          <div className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
            <span className="font-sans">
              {formateDate(
                data?.stats.currentStreak.start || new Date().toString()
              )}
            </span>
            <MoveDown size={14} className="mb-[2px] mt-[2px] h-2" />

            <span className="font-sans">
              {formateDate(
                data?.stats.currentStreak.end || new Date().toString()
              )}
            </span>
          </div>
        </div>

        <div className="text-center">
          <div className="text-4xl font-bold">
            {data?.stats.longestStreak.length || 92}
          </div>
          <div className="whitespace-nowrap text-[13px] md:text-sm">
            Longest Streak
          </div>
          <div className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
            <span className="font-sans">
              {formateDate(
                data?.stats.longestStreak.start || new Date().toString()
              )}
            </span>
            <MoveDown size={14} className="mb-[2px] mt-[2px] h-2" />
            <span className="font-sans">
              {formateDate(
                data?.stats.longestStreak.end || new Date().toString()
              )}
            </span>
          </div>
        </div>
      </a>
    </div>
  );
};

export default GithubStreak;
