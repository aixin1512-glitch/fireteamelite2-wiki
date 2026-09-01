'use client';

import { ArrowRight, ScanLine } from 'lucide-react';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';
import { ClassCard } from './class-card';
import { ClassFilter, type ClassTypeFilter } from './class-filter';

export function ClassesPageContent({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const [filter, setFilter] = useState<ClassTypeFilter>('all');
  const copy = dictionary.classes;
  const cards = useMemo(() => copy.cards.filter((card) => filter === 'all' || card.type === filter), [copy.cards, filter]);

  return (
    <>
      <section className="inner-hero inner-hero--classes">
        <div className="inner-hero__scan" aria-hidden="true"><ScanLine /></div>
        <div className="page-shell inner-hero__content">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1>{copy.title}</h1>
          <p>{copy.description}</p>
        </div>
      </section>

      <section className="classes-section page-shell">
        <ClassFilter value={filter} labels={copy.filters} onChange={setFilter} />
        <div className="classes-grid" aria-live="polite">
          {cards.map((card) => <ClassCard key={card.slug} card={card} locale={locale} readGuide={copy.readGuide} />)}
        </div>
      </section>

      <section className="class-briefing page-shell">
        <div><span>FIELD NOTE / 01</span><h2>{copy.compareTitle}</h2><p>{copy.compareDescription}</p></div>
        <div><span>RECOMMENDED / 02</span><h2>{copy.beginnerTitle}</h2><p>{copy.beginnerDescription}</p><Link className="text-link" href={localizePath(locale, '/classes/colonial-marine')}>{copy.readGuide}<ArrowRight aria-hidden="true" size={17} /></Link></div>
      </section>
    </>
  );
}
