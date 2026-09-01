import { ArrowRight, Crosshair, Radio, ShieldPlus } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';

type ClassCardData = Dictionary['classes']['cards'][number];

const icons = {
  assault: Crosshair,
  support: ShieldPlus,
  control: Radio,
};

export function ClassCard({ card, locale, readGuide }: { card: ClassCardData; locale: Locale; readGuide: string }) {
  const Icon = icons[card.type];
  const hasGuide = card.slug === 'colonial-marine';

  return (
    <article id={`class-${card.slug}`} className={`class-card class-card--${card.type}`}>
      <div className="class-card__visual" aria-hidden="true">
        <Icon size={52} strokeWidth={1} />
        <span>{card.name.slice(0, 2).toUpperCase()}</span>
      </div>
      <div className="class-card__content">
        <div className="class-card__status"><span>{card.role}</span><small>{card.status}</small></div>
        <h2>{card.name}</h2>
        <p>{card.description}</p>
        <ul>{card.traits.map((trait) => <li key={trait}>{trait}</li>)}</ul>
        {hasGuide ? (
          <Link aria-label={`Read ${card.name} guide`} href={localizePath(locale, `/classes/${card.slug}`)}>
            {readGuide}<ArrowRight aria-hidden="true" size={17} />
          </Link>
        ) : (
          <span className="class-card__overview">{card.status}</span>
        )}
      </div>
    </article>
  );
}
