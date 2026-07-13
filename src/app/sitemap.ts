import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

  const staticPages = [
    { path: '', priority: 1.0, changeFrequency: 'weekly' as const },
    { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
    { path: '/programs', priority: 0.8, changeFrequency: 'weekly' as const },
    { path: '/impact', priority: 0.7, changeFrequency: 'monthly' as const },
    { path: '/media', priority: 0.6, changeFrequency: 'weekly' as const },
    { path: '/contact', priority: 0.5, changeFrequency: 'monthly' as const },
    { path: '/donate', priority: 0.9, changeFrequency: 'monthly' as const },
    { path: '/volunteer', priority: 0.7, changeFrequency: 'monthly' as const },
  ];

  return staticPages.map(({ path, priority, changeFrequency }) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}
