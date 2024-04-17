import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    host: 'https://reetesh.in',
    sitemap: 'https://reetesh.in/sitemap.xml',
  };
}
