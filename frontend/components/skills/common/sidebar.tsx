import { Locate } from 'lucide-react';
import CommonTab from '@/components/common/common-tab';
import AuthorCard from '@/components/common/author-card';

const Sidebar = ({ name }: { name: string }) => {
  const Links = [
    {
      name: 'My Skill',
      path: `/skill/${name}`,
      icon: <Locate />,
    },
    {
      name: 'Home',
      path: '/',
      icon: null,
    },
    {
      name: 'Skills',
      path: '/skills',
      icon: null,
    },
  ];
  return (
    <section className="md:pt-[60px]">
      <AuthorCard message="Learning new skills and mastering them is my passion. I am always eager to learn new things and share my knowledge with others. What I have learned so far about my each skill is shared here." />
      <CommonTab links={Links} type={false} />
    </section>
  );
};

export default Sidebar;
