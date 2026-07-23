import type { MetadataRoute } from 'next';
import { metierSlugs } from '@/config/metiers';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.popsite.fr';
  const lastModified = new Date();

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    // Pages métier (ciblage national)
    ...metierSlugs.map((slug) => ({
      url: `${baseUrl}/creation-site-${slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
    // Page de conversion
    {
      url: `${baseUrl}/devis`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ];
}
