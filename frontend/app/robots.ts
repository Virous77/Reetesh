import { MetadataRoute } from 'next';

const robots = (): MetadataRoute.Robots => {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://reetesh.in',
    sitemap: 'https://reetesh.in/sitemap.xml',
  };
};

export default robots;
