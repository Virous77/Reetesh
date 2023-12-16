import { getServerData } from "@/api/server-api";
import Skill from "@/components/skills/skill";
import { TQueryData, TSkill } from "@/types/type";

type TSkillResponse = TQueryData & {
  data: TSkill[];
};

const SkillPage = async () => {
  const skills: TSkillResponse = await getServerData({
    endpoint: "/skills",
    tag: "skills",
  });

  return <Skill skills={skills.data} />;
};

export default SkillPage;
