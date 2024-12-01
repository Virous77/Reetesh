import { redirect } from 'next/navigation';
import { Suspense } from 'react';
import dynamic from 'next/dynamic';

const SkillModal = dynamic(() => import('@/components/skills/skill-modal'));
const SkillInfo = dynamic(() => import('@/app/skill/[id]/skill-info'));

const SkillModalPage = async (props: { params: Promise<{ id: string }> }) => {
  const params = await props.params;
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
