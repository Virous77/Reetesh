const API_URL =
  'https://github-contributions-api.jogruber.de/v4/Virous77?y=all';

type TApiResponse = {
  contributions: { date: string; count: number; level: number }[];
};

export type TContributionYear = {
  label: string;
  heading: string;
  start: string;
  counts: number[];
  levels: number[];
};

type TDay = TApiResponse['contributions'][number];

const toYear = (label: string, heading: string, days: TDay[]) => ({
  label,
  heading,
  start: days[0].date,
  counts: days.map((day) => day.count),
  levels: days.map((day) => day.level),
});

const sum = (days: TDay[]) => days.reduce((total, day) => total + day.count, 0);

const headingFor = (days: TDay[], period: string) =>
  `${sum(days).toLocaleString('en-US')} contributions in ${period}`;

// Returns null when the API fails, so the page can leave the section out.
export const getContributions = async (): Promise<
  TContributionYear[] | null
> => {
  try {
    const res = await fetch(API_URL, {
      next: { revalidate: 3600 },
      signal: AbortSignal.timeout(5000),
    });
    if (!res.ok) return null;

    const { contributions }: TApiResponse = await res.json();
    const today = new Date().toISOString().slice(0, 10);

    // The API is unordered and includes the rest of the current year.
    const days = contributions
      .filter((day) => day.date <= today)
      .sort((a, b) => a.date.localeCompare(b.date));
    if (!days.length) return null;

    const currentYear = today.slice(0, 4);
    const yearAgo = `${Number(currentYear) - 1}${today.slice(4)}`;
    const lastYear = days.filter((day) => day.date >= yearAgo);

    const pastYears = [...new Set(days.map((day) => day.date.slice(0, 4)))]
      .filter((year) => year !== currentYear)
      .reverse()
      .map((year) => {
        const yearDays = days.filter((day) => day.date.startsWith(year));
        return toYear(year, headingFor(yearDays, year), yearDays);
      });

    return [
      toYear(currentYear, headingFor(lastYear, 'the last year'), lastYear),
      ...pastYears,
    ];
  } catch {
    return null;
  }
};
