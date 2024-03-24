'use client';
import { allPosts } from '@/.contentlayer/generated';
import { slugify } from '@/utils/utils';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const RightSidebar = () => {
  const [hash, setHash] = useState('');
  const code = allPosts[0].body.raw;
  const allHeadings = code.match(/#{1,6} .+/g) || [];

  const headings = allHeadings.map((heading) => {
    const level = heading.match(/#/g)?.length || 0;
    let title = heading.replace(/#/g, '').trim();
    if (title.includes('?')) {
      title = title.replace('?', '');
    }
    return { level, title };
  });

  useEffect(() => {
    setHash(window.location.hash.split('#')[1] || '');
  }, []);

  return (
    <section className="hidden md:block lg:h-[88vh] lg:border-l">
      <div className="md:p-4">
        <h2 className="text-xl font-bold text-default underline underline-offset-4">
          On This Page
        </h2>
        <ul className="mt-6">
          {headings.map((heading, index) => (
            <li
              key={index}
              className="py-[5px] font-sans text-[15px] "
              onClick={() => setHash(slugify(heading.title))}
            >
              <Link
                href={`#${slugify(heading.title)}`}
                className={` hover:text-primary ${hash === slugify(heading.title) ? 'font-medium text-heading' : 'text-muted-foreground'}`}
              >
                {heading.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default RightSidebar;
