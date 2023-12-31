import { FileText, Target } from "lucide-react";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className=" flex items-center gap-7 mt-5">
      <Link href="/blogs">
        <div className="flex items-center gap-2 cursor-pointer text-[13px] text-default hover:text-defaultMax">
          <FileText size={17} /> Blogs
        </div>
      </Link>

      <Link href="/skills">
        <div className=" flex items-center gap-2 cursor-pointer text-[13px] text-default hover:text-defaultMax ">
          <Target size={17} /> Skills
        </div>
      </Link>
    </div>
  );
};

export default Navigation;
