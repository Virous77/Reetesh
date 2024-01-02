import CommonTab from "../common/common-tab";
import { Locate } from "lucide-react";
import AuthorCard from "../common/author-card";

const Sidebar = () => {
  const Links = [
    {
      name: "My Blogs",
      path: "/blogs",
      icon: <Locate />,
    },
    {
      name: "Home",
      path: "/",
      icon: null,
    },
    {
      name: "Projects",
      path: "/projects",
      icon: null,
    },
  ];
  return (
    <section className=" p-4 md:p-0 md:pt-12 ">
      <AuthorCard
        message="I write about my journey as a Full-Stack developer. I
          love writing about my journey and sharing my knowledge with others."
      />
      <CommonTab links={Links} type={false} />
    </section>
  );
};

export default Sidebar;
