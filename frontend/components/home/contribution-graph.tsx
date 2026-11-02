'use client';

import { useEffect, useRef, useState } from 'react';
import type { TContributionYear } from '@/lib/contributions';

const DAY_MS = 86_400_000;
const WEEKDAY_LABELS = [
  { label: 'Mon', day: 1 },
  { label: 'Wed', day: 3 },
  { label: 'Fri', day: 5 },
];

const format = (date: Date, options: Intl.DateTimeFormatOptions) =>
  date.toLocaleDateString('en-US', { timeZone: 'UTC', ...options });

// Weeks are columns starting on Sunday, as on GitHub.
const buildGraph = ({ start, counts, levels }: TContributionYear) => {
  const startMs = Date.parse(`${start}T00:00:00Z`);
  const offset = new Date(startMs).getUTCDay();
  const months: { label: string; week: number }[] = [];

  const cells = counts.map((count, index) => {
    const date = new Date(startMs + index * DAY_MS);
    const position = index + offset;
    const week = Math.floor(position / 7);

    if (date.getUTCDate() <= 7) {
      const label = format(date, { month: 'short' });
      if (months.at(-1)?.label !== label) months.push({ label, week });
    }

    const noun = count === 1 ? 'contribution' : 'contributions';
    return {
      key: index,
      level: levels[index],
      week,
      weekday: position % 7,
      tip: `${count} ${noun} on ${format(date, {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      })}`,
    };
  });

  const weeks = (cells.at(-1)?.week ?? 0) + 1;

  // A label in the last columns would run past the edge of the graph.
  return {
    cells,
    weeks,
    months: months.filter(({ week }) => week < weeks - 2),
  };
};

const ContributionGraph = ({ years }: { years: TContributionYear[] }) => {
  const [active, setActive] = useState(years[0].label);
  const sectionRef = useRef<HTMLElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tipRef = useRef<HTMLDivElement>(null);

  const year = years.find(({ label }) => label === active) ?? years[0];
  const { cells, months, weeks } = buildGraph(year);

  // On a phone the graph scrolls sideways, so start at the latest days.
  useEffect(() => {
    const element = scrollRef.current;
    if (element) element.scrollLeft = element.scrollWidth;
  }, [active]);

  const hideTip = () => {
    if (tipRef.current) tipRef.current.dataset.visible = 'false';
  };

  // One tooltip moves between cells, because a tooltip per cell means hundreds
  // of extra components. It writes to the DOM so hovering never re-renders them.
  const showTip = (event: React.PointerEvent) => {
    const tip = tipRef.current;
    const section = sectionRef.current;
    const cell = (event.target as HTMLElement).closest<HTMLElement>(
      '[data-tip]'
    );
    if (!tip || !section) return;
    if (!cell) return hideTip();

    tip.textContent = cell.dataset.tip ?? '';

    const area = section.getBoundingClientRect();
    const box = cell.getBoundingClientRect();
    const halfWidth = tip.offsetWidth / 2;
    const center = box.left + box.width / 2 - area.left;

    tip.style.left = `${Math.min(Math.max(center, halfWidth), area.width - halfWidth)}px`;
    tip.style.top = `${box.top - area.top - 6}px`;
    tip.dataset.visible = 'true';
  };

  // A tap ends with the finger leaving, so touch keeps the tooltip open.
  const leaveGraph = (event: React.PointerEvent) => {
    if (event.pointerType === 'mouse') hideTip();
  };

  return (
    <section
      ref={sectionRef}
      className="home-rise relative mt-12"
      aria-label="GitHub contributions"
      style={{ '--i': 3 } as React.CSSProperties}
    >
      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-2">
        <h2 className="home-title">{year.heading}</h2>
        <div className="contrib-years">
          {years.map(({ label }) => (
            <button
              key={label}
              type="button"
              className="contrib-year"
              aria-pressed={label === year.label}
              onClick={() => {
                hideTip();
                setActive(label);
              }}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      <div ref={scrollRef} className="contrib-scroll mt-4" onScroll={hideTip}>
        <div
          className="contrib-graph"
          role="img"
          aria-label={year.heading}
          onPointerOver={showTip}
          onPointerLeave={leaveGraph}
          style={{ '--weeks': weeks } as React.CSSProperties}
        >
          {months.map(({ label, week }) => (
            <span
              key={`${label}-${week}`}
              className="contrib-label"
              style={{ gridColumn: week + 2, gridRow: 1 }}
            >
              {label}
            </span>
          ))}
          {WEEKDAY_LABELS.map(({ label, day }) => (
            <span
              key={label}
              className="contrib-label contrib-day"
              style={{ gridColumn: 1, gridRow: day + 2 }}
            >
              {label}
            </span>
          ))}
          {cells.map(({ key, level, week, weekday, tip }) => (
            <span
              key={key}
              className="contrib-cell"
              data-level={level}
              data-tip={tip}
              style={{ gridColumn: week + 2, gridRow: weekday + 2 }}
            />
          ))}
        </div>
      </div>

      <div ref={tipRef} className="contrib-tip" aria-hidden="true" />

      <div className="contrib-legend" aria-hidden="true">
        Less
        {[0, 1, 2, 3, 4].map((level) => (
          <span key={level} className="contrib-cell" data-level={level} />
        ))}
        More
      </div>
    </section>
  );
};

export default ContributionGraph;
