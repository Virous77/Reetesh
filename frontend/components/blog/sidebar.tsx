import CommonTab from '../common/common-tab';
import { Locate } from 'lucide-react';
import AuthorCard from '../common/author-card';

const Sidebar = () => {
  const Links = [
    {
      name: 'My Blogs',
      path: '/blogs',
      icon: <Locate />,
    },
    {
      name: 'Home',
      path: '/',
      icon: null,
    },
    {
      name: 'Projects',
      path: '/projects',
      icon: null,
    },
  ];
  return (
    <section className="md:pt-[60px]">
      <AuthorCard
        message="I write about my journey as a Full-Stack developer. I
          love writing what i have learned and sharing my knowledge with others."
      />
      <CommonTab links={Links} type={false} />

      {/* <GoogleAdUnit className="mt-4 !bg-background px-4 md:mt-[80px] md:px-0">
        <ins
          className="adsbygoogle max-w-[300px] !bg-background md:max-w-full"
          style={{
            display: 'block',
          }}
          data-ad-client="ca-pub-3587869123201431"
          data-ad-slot="3598791356"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
      </GoogleAdUnit> */}
    </section>
  );
};

export default Sidebar;
