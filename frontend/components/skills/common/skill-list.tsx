import { TSkill } from '@/models/skills';
import { slugify } from '@/utils/utils';
import { Link } from 'next-view-transitions';
import { ArrowUpRight } from 'lucide-react';

type TSkillList = {
  skills: TSkill[];
  description: string;
  name: string;
  index: string;
};

const SkillList: React.FC<TSkillList> = ({
  skills,
  description,
  name,
  index,
}) => {
  return (
    <section className="animate-in fade-in slide-in-from-bottom-4 group/panel border-border/70 bg-card/60 hover:border-border relative w-full rounded-2xl border p-5 backdrop-blur-sm transition-colors duration-500 md:p-6">
      <header className="border-border/60 flex flex-col gap-3 border-b pb-4">
        <div className="flex items-center gap-3">
          <span className="text-heading font-mono text-xs tracking-widest">
            {index}
          </span>
          <h2 className="text-defaultMax text-lg font-semibold tracking-tight">
            {name}
          </h2>
          <span className="border-border/80 text-default ml-auto rounded-full border px-2 py-0.5 font-mono text-[11px] tabular-nums">
            {String(skills.length).padStart(2, '0')}
          </span>
        </div>
        <p className="text-default max-w-2xl text-[13px] leading-relaxed">
          {description.trim()}
        </p>
      </header>

      <ul className="mt-5 grid grid-cols-2 gap-2.5 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, i) => (
          <li key={skill._id}>
            <Link
              id={slugify(skill.name)}
              href={`/skill/${slugify(skill.name)}`}
              aria-label={`${skill.name} — read more`}
              style={{ animationDelay: `${Math.min(i * 35, 315)}ms` }}
              className="animate-in fade-in group/tile border-border/60 bg-background/40 hover:border-heading/50 hover:bg-accent flex items-center gap-2.5 rounded-xl border px-2.5 py-2.5 duration-500 fill-mode-both hover:-translate-y-0.5 hover:shadow-[0_10px_28px_-14px_rgba(0,0,0,0.55)] motion-safe:transition-all motion-safe:duration-300"
            >
              <span className="ring-border/50 bg-background/70 group-hover/tile:ring-heading/40 flex h-9 w-9 shrink-0 items-center justify-center overflow-hidden rounded-lg ring-1 transition duration-300">
                <img
                  src={skill.icon}
                  alt={skill.name}
                  width={24}
                  height={24}
                  loading="lazy"
                  className="h-6 w-6 object-contain transition-transform duration-300 group-hover/tile:scale-110"
                />
              </span>
              <span className="text-default group-hover/tile:text-defaultMax min-w-0 flex-1 truncate text-[13px] font-medium capitalize transition-colors">
                {skill.name}
              </span>
              <ArrowUpRight className="text-default/0 group-hover/tile:text-heading h-3.5 w-3.5 shrink-0 -translate-x-1 opacity-0 transition-all duration-300 group-hover/tile:translate-x-0 group-hover/tile:opacity-100" />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SkillList;
