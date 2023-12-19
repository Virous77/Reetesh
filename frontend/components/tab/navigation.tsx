import { Code } from "@nextui-org/react";
import { FileText, Target } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" flex items-center gap-5 mt-5">
      <Link href="/blogs">
        <Code
          color="default"
          className=" bg-transparent text-tiny text-default-500 pl-0 flex items-center gap-2 cursor-pointer hover:text-default-900"
        >
          <FileText size={17} /> Blogs
        </Code>
      </Link>

      <Link href="/skills">
        <Code
          color="default"
          className=" bg-transparent text-tiny text-default-500 flex items-center gap-2 cursor-pointer hover:text-default-900"
        >
          <Target size={17} /> Skills
        </Code>
      </Link>
    </div>
  );
};

export default Navigation;
