import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { notFound } from 'next/navigation';
import { ArticlePageContent } from '@/components/article/article-page-content';
import { mdxComponents } from '@/components/mdx-components';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, locales } from '@/i18n/config';
import { getGuide } from '@/lib/guides';
import { buildPageMetadata } from '@/lib/metadata';
import { guideMdxOptions } from '@/lib/mdx';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale, slug: 'colonial-marine' }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string; slug: string }> }): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  try {
    const guide = await getGuide(locale, 'classes', slug);
    return buildPageMetadata(locale, `/classes/${slug}`, {
      title: `${guide.meta.title} | AFE2 Wiki`,
      description: guide.meta.description,
    });
  } catch {
    return {};
  }
}

export default async function ClassGuidePage({ params }: { params: Promise<{ locale: string; slug: string }> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();

  let guide;
  try {
    guide = await getGuide(locale, 'classes', slug);
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') notFound();
    throw error;
  }

  return (
    <ArticlePageContent locale={locale} dictionary={getDictionary(locale)} guide={guide}>
      <MDXRemote source={guide.source} components={mdxComponents} options={guideMdxOptions} />
    </ArticlePageContent>
  );
}
