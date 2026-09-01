import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import type { GuideMeta } from '@/lib/guides';
import { localizePath } from '@/lib/routes';

export function ArticleHero({ locale, dictionary, meta }: { locale: Locale; dictionary: Dictionary; meta: GuideMeta }) {
  return (
    <header className="article-hero">
      <div className="page-shell article-hero__inner">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link href={localizePath(locale, '/classes')}>{dictionary.article.back}</Link>
          <ChevronRight aria-hidden="true" size={14} />
          <span>{meta.title}</span>
        </nav>
        <p className="eyebrow">USCM FIELD MANUAL / CLASS 01</p>
        <h1>{meta.title}</h1>
        <p className="article-hero__description">{meta.description}</p>
        <dl className="article-meta">
          <div><dt>{dictionary.article.role}</dt><dd>{meta.role}</dd></div>
          <div><dt>{dictionary.article.difficulty}</dt><dd>{meta.difficulty}</dd></div>
          <div><dt>{dictionary.article.updated}</dt><dd>{meta.updated}</dd></div>
          <div><dt>INTEL</dt><dd>{dictionary.article.readTime}</dd></div>
        </dl>
      </div>
    </header>
  );
}
