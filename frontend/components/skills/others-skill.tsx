import { TSkill } from '@/models/skills';
import SkillList from './common/skill-list';

type TOthersSkill = {
  skills: TSkill[];
};

const OthersSkill: React.FC<TOthersSkill> = ({ skills }) => {
  return (
    <SkillList
      skills={skills}
      index="03"
      name="DevOps & Tooling"
      description=" From containerising apps to shipping them on the cloud, these are the
            tools I use to build, deploy and run software reliably. I care about
            reproducible environments, smooth pipelines and infrastructure that
            just works."
    />
  );
};

export default OthersSkill;
