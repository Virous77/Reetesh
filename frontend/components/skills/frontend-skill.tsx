import { TSkill } from '@/models/skills';
import SkillList from './common/skill-list';

type TFrontendSkill = {
  skills: TSkill[];
};

const FrontendSkill: React.FC<TFrontendSkill> = ({ skills }) => {
  return (
    <SkillList
      skills={skills}
      name="Frontend"
      description="    I craft intuitive and responsive web applications using all these
            modern technologies. I prioritize performance, accessibility, and a
            seamless user experience, delivering high-quality products."
    />
  );
};

export default FrontendSkill;
