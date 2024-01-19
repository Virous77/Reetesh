import { FileText, Target } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" flex items-center gap-7 mt-5">
      <Link href="/blogs">
        <span className="flex items-center gap-2 cursor-pointer text-[13px] text-default hover:text-defaultMax font-mono">
          <FileText size={17} /> Blogs
        </span>
      </Link>

      <Link href="/skills">
        <span className=" flex items-center gap-2 cursor-pointer text-[13px] text-default hover:text-defaultMax font-mono">
          <Target size={17} /> Skills
        </span>
      </Link>
    </div>
  );
};

export default Navigation;
