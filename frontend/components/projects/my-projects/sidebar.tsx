import Social from "@/components/social/social";
import { Locate } from "lucide-react";
import Link from "next/link";

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
  return (
    <aside className="px-[40px] md:px-0 md:h-[50vh] flex items-center relative">
      <ul className=" flex flex-col gap-3">
        {Links.map((link, idx) => (
          <Link href={link.path} key={idx} className=" flex items-center gap-2">
            {link.icon ? (
              <span>{link.icon}</span>
            ) : (
              <span className="block h-[1px] opacity-50 bg-foreground w-10"></span>
            )}
            <span
              className={`${
                link.icon ? "opacity-100" : "opacity-50"
              } hover:opacity-100`}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </ul>

      <Social styles="mt-8 md:absolute left-0 bottom-12 z-10" />
    </aside>
  );
};

export default Sidebar;
