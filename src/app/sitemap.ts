import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://4ah.in';

  const routes = [
    '',
    '/about',
    '/founders',
    '/methodology',
    '/programs',
    '/college-solutions',
    '/corporate-solutions',
    '/flagship-program',
    '/success-stories',
    '/contact',
    '/privacy-policy',
    '/terms',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1.0 : route.includes('programs') ? 0.9 : 0.8,
  }));
}
