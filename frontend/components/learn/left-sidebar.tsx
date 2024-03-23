import Link from 'next/link';
import SelectComp from './select';

const LeftSidebar = ({ topics }: any) => {
  return (
    <section className=" lg:border-r">
      <div className="sticky top-0">
        <div className="md:p-4">
          <h2 className="text-2xl font-bold text-default">Topics</h2>
          <ul className="mt-4 hidden overflow-y-scroll md:block lg:h-[80vh]">
            {topics.map((topic: any) => (
              <li key={topic.title} className="mb-2">
                <Link
                  href={`/learn/${topic.title.toLowerCase().replace(' ', '-')}`}
                  className="text-default hover:text-primary"
                >
                  {topic.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="block md:hidden">
            <SelectComp topics={topics} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
