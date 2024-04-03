import { allPosts } from '@/.contentlayer/generated';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { slugify } from '@/utils/utils';
import Link from 'next/link';

const TableContent = ({ title }: { title: string }) => {
  const currentPost = allPosts.find((post) => post.title === title);

  if (!currentPost) {
    return null;
  }

  const allHeadings = currentPost.body.raw.match(/#{2,6} .+/g) || [];

  const headings = allHeadings.map((heading) => {
    let title = heading.replace(/#/g, '').trim();
    if (title.includes('?')) {
      title = title.replace('?', '');
    }
    return { title };
  });

  return (
    <Accordion
      type="single"
      collapsible
      className="rounded-lg bg-accent pl-4"
      style={{ paddingLeft: '1rem' }}
    >
      <AccordionItem value="item-1" className=" border-b-0">
        <AccordionTrigger
          isActive={false}
          className="font-serif text-base uppercase text-default  "
        >
          Table of Content
        </AccordionTrigger>
        <AccordionContent>
          <ul
            className=" flex flex-col text-sm font-medium"
            style={{
              marginTop: '0rem',
              marginBottom: '0rem',
            }}
          >
            {headings.map((heading, index) => (
              <li key={index}>
                <Link
                  href={`#${slugify(heading.title)}`}
                  style={{ textDecoration: 'none' }}
                  className="text-[15px] text-primary"
                >
                  {heading.title}
                </Link>
              </li>
            ))}
          </ul>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default TableContent;
