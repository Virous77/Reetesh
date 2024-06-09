import Skill from '@/components/skills/skill';
import dbConnect from '@/db/mongoose';
import skills, { TSkill } from '@/models/skills';

const getSkills = async () => {
  await dbConnect();
  const skillLists: TSkill[] = await skills.find();
  return skillLists;
};

const SkillPage = async () => {
  const skills = await getSkills();

  return <Skill skills={skills} componentType="main" />;
};

export default SkillPage;
