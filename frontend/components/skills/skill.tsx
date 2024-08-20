import Social from '../social/social';
import { Home } from 'lucide-react';
import { TSkill } from '@/models/skills';
import { Root } from '@/routes';
import FrontendSkill from './frontend-skill';
import BackendSkill from './backend-skill';
import OthersSkill from './others-skill';
import { cn } from '@/lib/utils';

type TSkills = {
  skills: TSkill[];
  componentType?: 'main' | 'reusable';
};

const Skill: React.FC<TSkills> = ({ skills, componentType }) => {
  return (
    <div className="pb-8 md:pb-4">
      {componentType === 'main' && (
        <section className="m-auto flex items-center justify-center p-4 md:w-[60%] md:p-0">
          <div className="relative">
            <h1 className="text-center text-[1.563rem] font-semibold tracking-widest">
              My Skills
            </h1>

            <div className="mt-6 flex flex-col items-center gap-3">
              <p className="text-center tracking-wider text-default">
                I am a seasoned developer with a strong proficiency in a
                versatile set of technologies. Having extensively worked with
                React, Next.js, Node.js, Express, MongoDB, TypeScript, GraphQL,
                REST API, Docker, Kubernetes, Solidity, and Anchor, I bring a
                wealth of experience to the table.
              </p>

              <p className="text-center tracking-wider text-default">
                My commitment to innovation extends to the realm of React,
                Next.js, Node.js, TypeScript and GraphQL, where I&apos;ve
                leveraged these technologies to enhance project efficiency and
                maintainability. Additionally my experience in Docker, and
                Kubernetes reflects a comprehensive understanding of modern
                application deployment and orchestration.
              </p>

              <p className="text-center tracking-wider text-default">
                Delving into blockchain technologies, I&apos;ve worked
                extensively with Solidity and Anchor, contributing to the
                development of decentralized applications (DApps) and exploring
                the frontier of blockchain innovation.
              </p>
            </div>
          </div>
        </section>
      )}

      <div
        className={cn(
          'mt-6 gap-3 px-3 md:px-8',
          componentType === 'main' && 'skill-list items-start',
          componentType === 'reusable' && 'flex flex-col gap-3'
        )}
      >
        <FrontendSkill
          skills={skills
            .filter((skill) => skill.skillType === 'frontend')
            .sort((a, b) => Number(b.level) - Number(a.level))}
        />
        <BackendSkill
          skills={skills
            .filter((skill) => skill.skillType === 'backend')
            .sort((a, b) => Number(b.level) - Number(a.level))}
        />
        <OthersSkill
          skills={skills
            .filter((skill) => skill.skillType === 'others')
            .sort((a, b) => Number(b.level) - Number(a.level))}
        />
      </div>

      {componentType === 'main' && (
        <section className="flex flex-col items-center justify-center gap-5">
          <Social styles=" mt-6 justify-center" />
          <Root.Link aria-label="home">
            <Home className="text-primary" />
          </Root.Link>
        </section>
      )}
    </div>
  );
};

export default Skill;
