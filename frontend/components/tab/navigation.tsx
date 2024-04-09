import { FileText, Target } from 'lucide-react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <div className=" mt-5 flex items-center gap-7">
      <Link href="/blogs" aria-label="Visit all Blogs" prefetch={false}>
        <span className="flex cursor-pointer items-center gap-2 font-mono text-[13px] text-default hover:text-defaultMax">
          <FileText size={17} /> Blogs
        </span>
      </Link>

      <Link href="/skills" prefetch={false}>
        <span className=" flex cursor-pointer items-center gap-2 font-mono text-[13px] text-default hover:text-defaultMax">
          <Target size={17} /> Skills
        </span>
      </Link>
    </div>
  );
};

export default Navigation;
