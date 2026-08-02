import { TSkill } from '@/models/skills';
import SkillList from './common/skill-list';

type TAiSkill = {
  skills: TSkill[];
};

const AiSkill: React.FC<TAiSkill> = ({ skills }) => {
  return (
    <SkillList
      skills={skills}
      index="04"
      name="AI Tooling"
      description=" Agentic tools are now part of my everyday workflow. I pair with AI
            coding assistants to move faster while staying fully in control of
            the architecture and reviewing every change. These are the tools I
            reach for."
    />
  );
};

export default AiSkill;
