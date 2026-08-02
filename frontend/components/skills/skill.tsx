import Social from '../social/social';
import { Home } from 'lucide-react';
import { TSkill } from '@/models/skills';
import FrontendSkill from './frontend-skill';
import BackendSkill from './backend-skill';
import OthersSkill from './others-skill';
import AiSkill from './ai-skill';
import { cn } from '@/lib/utils';
import { Link } from 'next-view-transitions';

type TSkills = {
  skills: TSkill[];
  componentType?: 'main' | 'reusable';
};

// Skills not stored in the DB. Kept here so the icon (local SVG) and the
// section they belong to live in one place; descriptions live in app/skill/data.ts.
const staticSkill = (name: string, iconFile: string, level: string): TSkill => ({
  _id: `static-${iconFile}`,
  name,
  level,
  icon: `/skill-icons/${iconFile}.svg`,
  skillType: 'static',
  createdAt: '',
  updatedAt: '',
});

const STATIC_BACKEND = [
  staticSkill('Nest.JS', 'nestjs', '85'),
  staticSkill('Postgres', 'postgres', '84'),
];
const STATIC_DEVOPS = [staticSkill('AWS', 'aws', '82')];
const AI_TOOLING = [
  staticSkill('Cursor', 'cursor', '90'),
  staticSkill('Claude Code', 'claude-code', '95'),
  staticSkill('OpenCode', 'opencode', '80'),
];

const Skill: React.FC<TSkills> = ({ skills, componentType }) => {
  const byLevel = (a: TSkill, b: TSkill) => Number(b.level) - Number(a.level);

  const frontend = skills
    .filter((skill) => skill.skillType === 'frontend')
    .sort(byLevel);
  const backend = [
    ...skills.filter((skill) => skill.skillType === 'backend'),
    ...STATIC_BACKEND,
  ].sort(byLevel);
  const devops = [
    ...skills.filter((skill) => skill.skillType === 'others'),
    ...STATIC_DEVOPS,
  ].sort(byLevel);
  const ai = AI_TOOLING;

  const totalCount = frontend.length + backend.length + devops.length + ai.length;

  const isMain = componentType === 'main';

  return (
    <div className="pb-8 md:pb-4">
      {isMain && (
        <section className="animate-in fade-in slide-in-from-bottom-3 mx-auto w-full max-w-[900px] px-4 duration-700 md:px-6">
          <p className="text-heading font-mono text-[11px] tracking-[0.35em] uppercase">
            Tech Stack
          </p>
          <h1 className="text-defaultMax mt-3 text-3xl font-semibold tracking-tight md:text-[2.5rem] md:leading-[1.1]">
            Skills &amp; Tooling
          </h1>
          <p className="text-default mt-4 max-w-2xl text-[15px] leading-relaxed">
            I&apos;m a full-stack developer who ships polished, performant
            products end to end React and Next.js on the front; Node.js,
            Express, GraphQL and REST on the back; containerised with Docker and
            Kubernetes. I also build on-chain with Solidity and Anchor.
          </p>

          <div className="text-default mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 font-mono text-[11px] tracking-wide">
            <span className="text-defaultMax tabular-nums">
              {String(totalCount).padStart(2, '0')}
            </span>
            <span className="text-default/70">technologies</span>
            <span className="bg-border h-3 w-px" aria-hidden />
            <span>Full-Stack</span>
            <span className="bg-border h-3 w-px" aria-hidden />
            <span>Web3</span>
            <span className="bg-border h-3 w-px" aria-hidden />
            <span className="text-default/70">
              select any to read my take →
            </span>
          </div>
        </section>
      )}

      <div
        className={cn(
          'mx-auto flex w-full max-w-[900px] flex-col gap-4 px-3 md:gap-5 md:px-6',
          isMain && 'mt-10 md:mt-12'
        )}
      >
        <FrontendSkill skills={frontend} />
        <BackendSkill skills={backend} />
        <OthersSkill skills={devops} />
        <AiSkill skills={ai} />
      </div>

      {isMain && (
        <section className="mt-12 flex flex-col items-center justify-center gap-5">
          <Social styles="justify-center" />
          <Link
            href="/"
            aria-label="home"
            className="text-default hover:text-heading hover:border-heading/40 border-border rounded-full border p-2.5 transition-colors duration-300"
          >
            <Home className="h-4 w-4" />
          </Link>
        </section>
      )}
    </div>
  );
};

export default Skill;
