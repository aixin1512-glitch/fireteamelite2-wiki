import type { ReactNode } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import type { Guide } from '@/lib/guides';
import { ArticleHero } from './article-hero';
import { RelatedGuides } from './related-guides';
import { TableOfContents } from './table-of-contents';

export function ArticlePageContent({ locale, dictionary, guide, children }: { locale: Locale; dictionary: Dictionary; guide: Guide; children: ReactNode }) {
  return (
    <>
      <ArticleHero locale={locale} dictionary={dictionary} meta={guide.meta} />
      <div className="article-layout page-shell">
        <aside><TableOfContents label={dictionary.article.contents} headings={guide.headings} /></aside>
        <article className="mdx-content">{children}</article>
      </div>
      <div className="page-shell"><RelatedGuides locale={locale} copy={dictionary.article} /></div>
    </>
  );
}
