import type { MetadataRoute } from 'next';
import { locales } from '@/i18n/config';
import { siteBaseUrl } from '@/lib/metadata';

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = ['/home', '/classes', '/classes/colonial-marine'];
  const now = new Date('2026-08-28T00:00:00.000Z');

  return locales.flatMap((locale) => paths.map((path) => ({
    url: `${siteBaseUrl}/${locale}${path}`,
    lastModified: now,
    changeFrequency: path === '/home' ? 'weekly' as const : 'monthly' as const,
    priority: path === '/home' ? 1 : path === '/classes' ? 0.8 : 0.7,
  })));
}
