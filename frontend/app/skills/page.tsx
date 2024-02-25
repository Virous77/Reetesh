import Skill from '@/components/skills/skill';
import { serverClient } from '@/trpc-client/server';

const SkillPage = async () => {
  const skills = await serverClient.skills.getSkills();

  return <Skill skills={skills} />;
};

export default SkillPage;
