import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { ToolTipComp } from '@/components/ui/tooltip';
import { TSkill } from '@/models/skills';
import { SkillId } from '@/routes';
import { slugify } from '@/utils/utils';

type TSkillList = {
  skills: TSkill[];
  description: string;
  name: 'Others' | 'Frontend' | 'Backend';
};

const SkillList: React.FC<TSkillList> = ({ skills, description, name }) => {
  return (
    <section className="w-full">
      <Card className="hover:bg-accent">
        <CardHeader>
          <CardTitle>{name}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent>
          <section className="relative flex flex-col items-center justify-center p-4">
            <ul className="flex flex-wrap place-content-center items-center gap-5">
              {skills.map((skill) => (
                <li key={skill._id}>
                  <ToolTipComp name={skill.name}>
                    <SkillId.Link id={slugify(skill.name)}>
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        width={40}
                        height={40}
                        className="cursor-pointer rounded-full"
                      />
                    </SkillId.Link>
                  </ToolTipComp>
                </li>
              ))}
            </ul>

            {name === 'Others' && (
              <span className="text-default absolute right-0 -bottom-[12px] text-end text-xs">
                Click on Icon for more info*
              </span>
            )}
          </section>
        </CardContent>
      </Card>
    </section>
  );
};

export default SkillList;
