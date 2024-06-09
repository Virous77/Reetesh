import { TSkill } from '@/models/skills';
import SkillList from './common/skill-list';

type TBackendSkill = {
  skills: TSkill[];
};

const BackendSkill: React.FC<TBackendSkill> = ({ skills }) => {
  return (
    <SkillList
      skills={skills}
      name="Backend"
      description=" I build robust and scalable backend systems using modern
            technologies. I prioritize performance, security, and seamless
            integration with frontend applications, delivering high-quality,
            reliable, and efficient solutions."
    />
  );
};

export default BackendSkill;
