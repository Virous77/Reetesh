import { Blogs, Skills } from '@/routes';
import { FileText, Target } from 'lucide-react';

const Navigation = () => {
  return (
    <div className=" mt-5 flex items-center gap-7">
      <Blogs.Link aria-label="Visit all Blogs">
        <span className="flex cursor-pointer items-center gap-2 font-mono text-[13px] text-default hover:text-defaultMax">
          <FileText size={17} /> Blogs
        </span>
      </Blogs.Link>

      <Skills.Link>
        <span className=" flex cursor-pointer items-center gap-2 font-mono text-[13px] text-default hover:text-defaultMax">
          <Target size={17} /> Skills
        </span>
      </Skills.Link>
    </div>
  );
};

export default Navigation;
