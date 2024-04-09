'use client';

import Link from 'next/link';
import SelectComp from './select';
import { slugify } from '@/utils/utils';
import { courseMetadata, topics } from '@/courses';
import { usePathname } from 'next/navigation';

const LeftSidebar = () => {
  const pathName = usePathname();
  const course = pathName.split('/')[3];

  const currentCourse = courseMetadata.find(
    (course) => course.id === pathName.split('/')[2]
  );
  if (!currentCourse) return <div>Course not found</div>;

  const currentCourseTopics =
    topics.find((topic) =>
      topic.find((course) => course.courseId === currentCourse.id)
    ) || [];

  if (currentCourseTopics?.length === 0) return <div>Page not found</div>;

  return (
    <section className=" p-2 md:p-0 lg:border-r">
      <div className="md:p-4">
        <h2 className="mb-4 text-2xl font-bold text-default ">
          {currentCourse.metadata}
        </h2>
        <ul className="mt-4 hidden overflow-y-scroll lg:block lg:h-[75vh]">
          {currentCourseTopics.map((topic) => (
            <li key={topic.title} className="mb-2">
              <Link
                href={`/learn/react/${slugify(topic.title)}`}
                className={`text-[15px] text-default hover:underline ${course === slugify(topic.title) ? 'font-medium text-heading' : 'text-muted-foreground'}`}
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mb-4 block lg:hidden">
          <SelectComp topics={currentCourseTopics} id={'react'} />
        </div>
      </div>
    </section>
  );
};

export default LeftSidebar;
