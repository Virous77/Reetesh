import { allPosts } from '@/.contentlayer/generated';

const sitemap = async () => {
  const blogs = allPosts;
  const URL = 'https://reetesh.in';

  const restUrls = [
    {
      url: `${URL}/`,
      lastModified: new Date(),
      priority: 1.0,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/blogs`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: 'daily',
    },
    {
      url: `${URL}/projects`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
    {
      url: `${URL}/skills`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly',
    },
  ];

  const allBlogs = blogs.map(({ slugAsParams, date }) => {
    return {
      url: `${URL}/blog/${slugAsParams}`,
      lastModified: new Date(date),
      priority: 0.75,
      changeFrequency: 'weekly',
    };
  });

  return [...restUrls, ...allBlogs];
};

export default sitemap;
