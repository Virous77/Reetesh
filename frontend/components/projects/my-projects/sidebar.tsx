import CommonTab from "@/components/common/common-tab";
import { Locate } from "lucide-react";

const Sidebar = () => {
  const Links = [
    {
      name: "My Projects",
      path: "/projects",
      icon: <Locate />,
    },
    {
      name: "Home",
      path: "/",
      icon: null,
    },
    {
      name: "Blog",
      path: "/blogs",
      icon: null,
    },
  ];
  return <CommonTab links={Links} />;
};

export default Sidebar;
