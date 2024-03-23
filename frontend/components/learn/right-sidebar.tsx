import { allPosts } from '@/.contentlayer/generated';
import Link from 'next/link';

const RightSidebar = () => {
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

  return (
    <section className="hidden md:block lg:h-[91vh] lg:border-l">
      <div className="md:p-4">
        <h2 className="text-xl font-bold text-default underline underline-offset-4">
          On This Page
        </h2>
        <ul className="mt-6">
          {headings.map((heading, index) => (
            <li key={index} className="py-[5px] font-sans text-[15px] ">
              <Link
                href={`#${heading.title.toLowerCase().replace(/ /g, '-')}`}
                className="opacity-70 hover:opacity-100"
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
