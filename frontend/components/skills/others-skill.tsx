import { TSkill } from '@/models/skills';
import SkillList from './common/skill-list';

type TOthersSkill = {
  skills: TSkill[];
};

const OthersSkill: React.FC<TOthersSkill> = ({ skills }) => {
  return (
    <SkillList
      skills={skills}
      description=" I have experience working with a variety of technologies, tools, and
            platforms. I am always eager to learn new technologies and expand my
            skill set. I am proficient in using these technologies to solve
            complex problems."
      name="Others"
    />
  );
};

export default OthersSkill;
