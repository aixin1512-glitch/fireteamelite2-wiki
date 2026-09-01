import { access } from 'node:fs/promises';
import path from 'node:path';
import { describe, expect, it } from 'vitest';
import sitemap from '@/app/sitemap';
import { buildPageMetadata, pageMetadata } from '@/lib/metadata';

describe('SEO metadata', () => {
  it('builds concise canonical metadata with all locale alternates', () => {
    const metadata = buildPageMetadata('en', '/home', pageMetadata.en.home);
    expect(String(metadata.title).length).toBeLessThanOrEqual(60);
    expect(metadata.alternates?.canonical).toBe('/en/home');
    expect(metadata.alternates?.languages).toEqual({
      en: '/en/home',
      ja: '/ja/home',
      de: '/de/home',
      es: '/es/home',
    });
  });

  it('includes all three content routes for every locale in the sitemap', () => {
    const routes = sitemap();
    expect(routes).toHaveLength(12);
    expect(routes.map((route) => route.url)).toContain('https://fireteamelite2.online/ja/classes/colonial-marine');
  });

  it('stores the supplied favicon in public assets', async () => {
    await expect(access(path.join(process.cwd(), 'public', 'favicon.png'))).resolves.toBeUndefined();
  });
});
