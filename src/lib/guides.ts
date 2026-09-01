import { promises as fs } from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';
import type { Locale } from '@/i18n/config';

export type GuideSection = 'classes';

export type GuideMeta = {
  slug: string;
  title: string;
  description: string;
  role: string;
  difficulty: string;
  updated: string;
};

export type GuideHeading = {
  id: string;
  label: string;
};

export type Guide = {
  meta: GuideMeta;
  source: string;
  headings: GuideHeading[];
};

const contentRoot = path.join(process.cwd(), 'src', 'content');
const safeSlug = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

function assertSafeSlug(slug: string) {
  if (!safeSlug.test(slug)) {
    throw new Error(`Invalid guide slug: ${slug}`);
  }
}

function parseHeadings(source: string): GuideHeading[] {
  return [...source.matchAll(/<h2 id="([a-z0-9-]+)">([^<]+)<\/h2>/g)].map((match) => ({
    id: match[1],
    label: match[2],
  }));
}

function parseGuide(slug: string, raw: string): Guide {
  const { data, content } = matter(raw);
  const required = ['title', 'description', 'role', 'difficulty', 'updated'] as const;

  for (const field of required) {
    if (typeof data[field] !== 'string' || data[field].trim() === '') {
      throw new Error(`Guide ${slug} is missing frontmatter field: ${field}`);
    }
  }

  return {
    meta: {
      slug,
      title: data.title,
      description: data.description,
      role: data.role,
      difficulty: data.difficulty,
      updated: data.updated,
    },
    source: content,
    headings: parseHeadings(content),
  };
}

export async function getGuide(locale: Locale, section: GuideSection, slug: string): Promise<Guide> {
  assertSafeSlug(slug);
  const filename = path.join(contentRoot, locale, section, `${slug}.mdx`);
  const raw = await fs.readFile(filename, 'utf8');
  return parseGuide(slug, raw);
}

export async function listGuides(locale: Locale, section: GuideSection): Promise<GuideMeta[]> {
  const directory = path.join(contentRoot, locale, section);
  const entries = await fs.readdir(directory, { withFileTypes: true });
  const slugs = entries
    .filter((entry) => entry.isFile() && entry.name.endsWith('.mdx'))
    .map((entry) => entry.name.slice(0, -4))
    .sort();

  return Promise.all(slugs.map(async (slug) => (await getGuide(locale, section, slug)).meta));
}
