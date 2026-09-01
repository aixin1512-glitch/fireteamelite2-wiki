import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';

export function StartHere({ locale, copy }: { locale: Locale; copy: Dictionary['home']['start'] }) {
  return (
    <section id="start-here" className="section start-here page-shell" aria-label={copy.title}>
      <div className="section-heading section-heading--split">
        <div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div>
        <p>{copy.description}</p>
      </div>
      <div className="start-grid">
        {copy.cards.map((card) => (
          <article className="start-card" key={card.number}>
            <div className="start-card__top"><span>{card.number}</span><ArrowUpRight aria-hidden="true" /></div>
            <p className="start-card__tag">{card.tag}</p>
            <h3>{card.title}</h3>
            <p>{card.description}</p>
            <Link aria-label={card.title} href={localizePath(locale, card.href)}><span>OPEN FILE</span></Link>
          </article>
        ))}
      </div>
    </section>
  );
}
