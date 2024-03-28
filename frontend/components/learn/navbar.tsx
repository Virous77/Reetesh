import Link from 'next/link';
import Social from '../social/social';
import { FileText, LibrarySquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky left-0 top-0 z-[10] w-full items-center  justify-between bg-accent px-2 py-4  md:flex md:p-4 md:px-8">
      <div className=" flex items-center justify-between gap-10 md:justify-normal">
        <h1 className="  text-xl text-heading">
          <Link href="/" aria-label="Visit Home Page">
            Reetesh Kumar
          </Link>
        </h1>
        <div className="  hidden items-center gap-6 md:flex">
          <Link
            href="/blogs"
            className="font-mono hover:underline hover:underline-offset-4"
            aria-label="Visit all Blogs"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className=" font-mono hover:underline hover:underline-offset-4"
            aria-label="Visit all Projects"
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/blogs"
            className="font-mono hover:underline hover:underline-offset-4"
            aria-label="Visit all Blogs"
          >
            <FileText size={20} />
          </Link>

          <Link
            href="/projects"
            className="font-mono hover:underline hover:underline-offset-4"
            aria-label="Visit all Projects"
          >
            <LibrarySquare size={20} />
          </Link>
        </div>
      </div>
      <Social styles="hidden md:flex" />
    </nav>
  );
};

export default Navbar;
