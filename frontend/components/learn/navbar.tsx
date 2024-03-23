import Link from 'next/link';
import Social from '../social/social';
import { FileText, LibrarySquare } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className=" items-center justify-between bg-accent p-4 md:flex md:px-8">
      <div className=" flex items-center justify-between gap-10 md:justify-normal">
        <h1 className="  text-xl text-heading">
          <Link href="/">Reetesh Kumar</Link>
        </h1>
        <div className="  hidden items-center gap-6 md:flex">
          <Link
            href="/blogs"
            className="font-mono hover:underline hover:underline-offset-4"
          >
            Blogs
          </Link>
          <Link
            href="/projects"
            className=" font-mono hover:underline hover:underline-offset-4"
          >
            Projects
          </Link>
        </div>

        <div className="flex items-center gap-4 md:hidden">
          <Link
            href="/blogs"
            className="font-mono hover:underline hover:underline-offset-4"
            aria-label="Blogs"
          >
            <FileText size={20} />
          </Link>

          <Link
            href="/projects"
            className="font-mono hover:underline hover:underline-offset-4"
            aria-label="Projects"
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
