import { allPosts } from '@/.contentlayer/generated';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import { BlogDetails } from '@/routes';
import dbConnect from '@/db/mongoose';
import projects, { TProject } from '@/models/projects';
import { slugify } from 'markdown-to-jsx';
import { Link } from 'next-view-transitions';

const getLatestProjects = async () => {
  await dbConnect();
  const latestProject: TProject = await projects
    .findOne()
    .sort({ createdAt: -1 });
  return latestProject;
};

const Recent = async () => {
  const posts = allPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 3);

  const project = await getLatestProjects();

  return (
    <div className="mt-12 mb-10 flex flex-col gap-8 md:mt-0 md:mb-0">
      <div>
        <h2 className="mb-4 text-2xl font-semibold">Recent Activity</h2>
        <div>
          <Common name="Blogs" />
          <ul className="flex flex-col gap-2">
            {posts.map((post) => (
              <li key={post.slug} className="underline underline-offset-4">
                <BlogDetails.Link
                  id={post.slugAsParams}
                  className="flex items-center gap-2 opacity-90 hover:opacity-100"
                  aria-label={`Visit ${post.title}`}
                >
                  {post.title}
                  <ExternalLink size={20} className="hidden md:block" />
                </BlogDetails.Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Common name="Projects" />
        <ul className="flex flex-col gap-2">
          <li className="underline underline-offset-4">
            <Link
              href={`/projects#${slugify(project.title)}`}
              className="flex items-center gap-2 opacity-90 hover:opacity-100"
              aria-label={`Visit ${project.title}`}
            >
              {project.title}
              <ExternalLink size={20} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Recent;

const Common = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="bg-foreground block h-[1px] w-10 opacity-50"></span>
      <h3 className="text-default mb-2 font-mono font-medium">{name}</h3>
    </div>
  );
};
