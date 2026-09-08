import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://4ah.in';
  const currentDate = new Date();

  const staticPages = [
    { url: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { url: '/about', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/founders', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/methodology', priority: 0.8, changeFrequency: 'monthly' as const },
    { url: '/programs', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/college-solutions', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/corporate-solutions', priority: 0.95, changeFrequency: 'weekly' as const },
    { url: '/success-stories', priority: 0.85, changeFrequency: 'weekly' as const },
    { url: '/contact', priority: 0.9, changeFrequency: 'monthly' as const },
    { url: '/privacy-policy', priority: 0.5, changeFrequency: 'yearly' as const },
    { url: '/terms', priority: 0.5, changeFrequency: 'yearly' as const },
  ];

  return staticPages.map((page) => ({
    url: `${baseUrl}${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
