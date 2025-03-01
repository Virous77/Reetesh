import { redirect } from 'next/navigation';
import dbConnect from '@/db/mongoose';
import skills, { TSkill } from '@/models/skills';
import Skill from '@/components/skills/skill';
import dynamic from 'next/dynamic';
import { commonMetaData } from '@/utils/utils';

const Sidebar = dynamic(() => import('@/components/skills/common/sidebar'));
const SkillInfo = dynamic(() => import('./skill-info'));

export const generateStaticParams = async () => {
  await dbConnect();
  const skillLists: TSkill[] = await skills.find();

  return skillLists.map((skill) => ({
    id: skill.name.toLowerCase().replace(/ /g, '-'),
  }));
};

export const generateMetadata = async (props: {
  params: Promise<{ id: string }>;
}) => {
  const params = await props.params;
  const newName = params.id
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
  const metaData = commonMetaData({
    name: `${newName} - Skill`,
    desc: 'Explore the technology landscape with Reetesh Kumar, a full-stack developer. Discover my expertise in React, Next.js, Node.js, Express, TypeScript, GraphQL, MongoDB, Docker, and more on this personal website.',
    image: 'https://avatars.githubusercontent.com/u/101452588?v=4',
    url: `/skill/${params.id}`,
    keywords: ['skills', 'knowledge', 'expertise', 'technology'],
  });
  return {
    ...metaData,
  };
};

const getSkills = async () => {
  await dbConnect();
  const skillLists: TSkill[] = await skills.find();
  return skillLists;
};

const SingleSkillPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
  const skills = await getSkills();
  if (!params.id) {
    return redirect('/skills');
  }
  return (
    <main className="fade-in-out l-template relative flex flex-col items-start gap-4 pb-4 md:grid md:p-[30px] md:pt-0 md:pb-0">
      <div className="h-full overflow-scroll">
        <div className="mt-10 px-3 md:mt-16 md:px-0">
          <SkillInfo name={params.id} componentType="page" />
        </div>
        <Skill skills={skills} componentType="reusable" />
      </div>

      <Sidebar name={params.id} />
    </main>
  );
};

export default SingleSkillPage;
