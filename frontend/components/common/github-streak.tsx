import { githubAction } from './action';
import { formateDate } from '@/utils/utils';
import { MoveDown } from 'lucide-react';
import { GithubCard } from './motion';

const GithubStreak = async () => {
  const data = await githubAction();

  return (
    <div className="relative flex h-fit w-full items-center justify-center overflow-y-scroll rounded-lg border-2 pb-1 md:w-[90%] md:overflow-y-hidden">
      <span
        className="absolute me-2 rounded bg-accent px-2.5 py-0.5 text-[8px] font-medium"
        style={{
          right: '-10px',
          bottom: '-2.3px',
        }}
      >
        GITHUB
      </span>

      <a
        className="-lg flex w-full items-start justify-between gap-2 px-2 py-4 md:p-4"
        href="https://github.com/virous77"
        target="_blank"
        rel="noreferrer"
      >
        <GithubCard
          className="text-center"
          styleTypeAnimate={{ y: 0 }}
          styleTypeInitial={{ y: 100 }}
        >
          <div className="text-4xl font-bold">
            {data?.stats?.totalContributions || '1712'}
          </div>
          <div className="whitespace-nowrap text-xs md:text-sm">
            Total Contributions
          </div>
          <div className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
            <span className="font-sans">
              {data?.stats?.firstContribution
                ? formateDate(data?.stats?.firstContribution)
                : 'Mar 12, 2022'}
            </span>
            <MoveDown size={14} className="mb-[2px] mt-[2px] h-2" />
            <span className="font-sans">Present</span>
          </div>
        </GithubCard>

        <GithubCard
          className="text-center"
          styleTypeAnimate={{ y: 0 }}
          styleTypeInitial={{ y: -100 }}
        >
          <div className="text-4xl font-bold">
            {data?.stats.currentStreak?.length || 0}
          </div>
          <div className="whitespace-nowrap text-xs font-bold md:text-sm">
            Current Streaks
          </div>

          <div className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
            <span className="font-sans">
              {data?.stats.currentStreak?.start
                ? formateDate(data?.stats.currentStreak?.start)
                : 'Nov 23, 2023'}
            </span>
            <MoveDown size={14} className="mb-[2px] mt-[2px] h-2" />

            <span className="font-sans">
              {data?.stats.currentStreak?.end
                ? formateDate(data?.stats.currentStreak?.end)
                : 'Feb 22, 2024'}
            </span>
          </div>
        </GithubCard>

        <GithubCard
          className="text-center"
          styleTypeAnimate={{ y: 0 }}
          styleTypeInitial={{ y: 100 }}
        >
          <div className="text-4xl font-bold">
            {data?.stats.longestStreak?.length || 92}
          </div>
          <div className="whitespace-nowrap text-xs md:text-sm">
            Longest Streaks
          </div>
          <div className="mt-1 flex flex-col items-center text-xs text-muted-foreground">
            <span className="font-sans">
              {formateDate(
                data?.stats.longestStreak?.start || new Date().toString()
              )}
            </span>
            <MoveDown size={14} className="mb-[2px] mt-[2px] h-2" />
            <span className="font-sans">
              {formateDate(
                data?.stats.longestStreak?.end || new Date().toString()
              )}
            </span>
          </div>
        </GithubCard>
      </a>
    </div>
  );
};

export default GithubStreak;
