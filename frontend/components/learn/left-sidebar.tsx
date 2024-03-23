import Link from 'next/link';
import SelectComp from './select';
import { slugify } from '@/utils/utils';

type TLeftSidebar = {
  id: string;
  topics: { title: string; courseId: string; id: number }[];
  course: { id: string; metadata: string };
};

const LeftSidebar: React.FC<TLeftSidebar> = ({ id, course, topics }) => {
  return (
    <section className=" lg:border-r">
      <div className="md:p-4">
        <h2 className="mb-4 text-2xl font-bold text-default ">
          {course.metadata}
        </h2>
        <ul className="mt-4 hidden overflow-y-scroll lg:block lg:h-[80vh]">
          {topics.map((topic) => (
            <li key={topic.title} className="mb-2">
              <Link
                href={`/learn/${id}/${slugify(topic.title)}`}
                className="text-default hover:text-primary"
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mb-4 block lg:hidden">
          <SelectComp topics={topics} id={id} />
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
