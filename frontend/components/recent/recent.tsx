import { allPosts } from '@/.contentlayer/generated';
import { ExternalLink } from 'lucide-react';
import React from 'react';
import { BlogDetails, Projects } from '@/routes';
import dbConnect from '@/db/mongoose';
import projects, { TProject } from '@/models/projects';

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
    <div className=" mb-10 mt-12 flex flex-col gap-8 md:mb-0 md:mt-0">
      <div>
        <h2 className="mb-4 text-2xl font-bold">Recent Activity</h2>
        <div>
          <Common name="Blogs" />
          <ul className=" flex flex-col gap-2">
            {posts.map((post) => (
              <li key={post.slug} className=" underline underline-offset-4">
                <BlogDetails.Link
                  id={post.slugAsParams}
                  className=" flex items-center gap-2 opacity-90 hover:opacity-100 "
                  aria-label={`Visit ${post.title}`}
                >
                  {post.title}
                  <ExternalLink size={20} className=" hidden md:block" />
                </BlogDetails.Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <Common name="Projects" />
        <ul className=" flex flex-col gap-2">
          <li className=" underline underline-offset-4">
            <Projects.Link
              className=" flex items-center gap-2 opacity-90 hover:opacity-100"
              aria-label="Visit all Projects"
            >
              {project.title}
              <ExternalLink size={20} />
            </Projects.Link>
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
      <span className="block h-[1px] w-10 bg-foreground opacity-50"></span>
      <h3 className=" mb-2 font-mono">{name}</h3>
    </div>
  );
};
