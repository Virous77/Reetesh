import { notFound } from 'next/navigation';
import Content from './content';
import LeftSidebar from './left-sidebar';
import RightSidebar from './right-sidebar';
import { topics, courseMetadata } from '@/courses';

const Learn = ({ id }: { id: string }) => {
  const currentCourse = courseMetadata.find((course) => course.id === id);
  if (!currentCourse) return notFound();

  const currentCourseTopics =
    topics.find((topic) =>
      topic.find((course) => course.courseId === currentCourse.id)
    ) || [];

  if (currentCourseTopics?.length === 0) return notFound();

  return (
    <main className="layout m-auto mt-4 w-full max-w-[1250px] p-4 pt-0">
      <LeftSidebar
        topics={currentCourseTopics}
        id={id}
        course={currentCourse}
      />
      <Content />
      <RightSidebar />
    </main>
  );
};

export default Learn;
