import AuthorCard from '@/components/common/author-card';
import CommonTab from '@/components/common/common-tab';
import { Locate } from 'lucide-react';

const Sidebar = () => {
  const Links = [
    {
      name: 'My Projects',
      path: '/projects',
      icon: <Locate />,
    },
    {
      name: 'Home',
      path: '/',
      icon: null,
    },
    {
      name: 'Blog',
      path: '/blogs',
      icon: null,
    },
  ];
  return (
    <section className="top-0 md:pt-12 lg:sticky">
      <AuthorCard message="My Projects Page, a curated showcase of the diverse array of applications I've crafted on my coding journey. Each project reflects not only technical proficiency but also a passion for building." />
      <CommonTab links={Links} type={false} />
    </section>
  );
};

export default Sidebar;
