import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';

const ReactCourse = () => {
  const courses = [
    {
      id: 1,
      title: 'React Everything',
      image:
        'https://res.cloudinary.com/dw6wav4jg/image/upload/v1711079218/react-everything_jkxblw.png',
    },
  ];

  return (
    <section className=" mt-4 md:w-[80%]">
      {courses.slice(0, 1).map((course) => (
        <Link
          key={course.id}
          aria-label={course.title}
          href="/learn/introduction"
          className=" w-full"
        >
          <Card className=" cursor-pointer hover:bg-accent">
            <CardHeader className="p-3 pb-0">
              <CardTitle className=" font-mono text-xl md:text-2xl">
                {course.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-3">
              <Image
                src={course.image}
                alt={course.title}
                width={100}
                height={100}
                className="rounded-lg"
                sizes="100vw"
                priority
                style={{ width: '100%', height: '180px' }}
              />
            </CardContent>
          </Card>
        </Link>
      ))}
    </section>
  );
};

export default ReactCourse;
