import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';
import dbConnect from '@/db/mongoose';
import skills, { TSkill } from '@/models/skills';

const SkillModal = dynamic(() => import('@/components/skills/skill-modal'));
const SkillInfo = dynamic(() => import('@/app/skill/[id]/skill-info'));

export async function generateStaticParams() {
  await dbConnect();
  const skillLists: TSkill[] = await skills.find();

  return skillLists.map((skill) => ({
    id: skill.name.toLowerCase().replace(/ /g, '-'),
  }));
}

const SkillModalPage = ({ params }: { params: { id: string } }) => {
  if (!params.id) {
    return redirect('/skills');
  }

  return (
    <SkillModal name={params.id}>
      <Suspense fallback={<div className="mt-2 text-center">Loading...</div>}>
        <SkillInfo name={params.id} componentType="modal" />
      </Suspense>
    </SkillModal>
  );
};

export default SkillModalPage;
