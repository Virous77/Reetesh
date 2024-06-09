import { skillsInfo } from '../data';

type TSkillInfo = {
  name: string;
  componentType: 'page' | 'modal';
};

const SkillInfo: React.FC<TSkillInfo> = async ({ name, componentType }) => {
  const newName = name.split('-').join(' ');
  const content = skillsInfo.find(
    (skill) => skill.name === newName.toLowerCase()
  );
  return (
    <section>
      <h2
        className={`mb-4 text-center text-2xl font-bold ${componentType === 'page' ? 'uppercase' : 'capitalize'} text-heading underline underline-offset-4`}
      >
        {componentType === 'page' ? name : 'About'}
      </h2>
      <p className="mt-2 text-center">{content?.description}</p>
      <p className="mt-3 text-center">{content?.features}</p>
    </section>
  );
};

export default SkillInfo;
