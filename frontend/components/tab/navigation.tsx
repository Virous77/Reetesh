import { FileText, Target } from 'lucide-react';
import { Link } from 'next-view-transitions';

const Navigation = () => {
  return (
    <div className="mt-5 flex items-center gap-7">
      <Link aria-label="Visit all Blogs" href="/blogs">
        <span className="flex cursor-pointer items-center gap-2 font-mono text-[0.813rem]">
          <FileText size={17} /> Blogs
        </span>
      </Link>

      <Link href="/skills">
        <span className="flex cursor-pointer items-center gap-2 font-mono text-[0.813rem]">
          <Target size={17} /> Skills
        </span>
      </Link>
    </div>
  );
};

export default Navigation;
