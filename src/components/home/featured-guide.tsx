import { ArrowRight, Check } from 'lucide-react';
import Link from 'next/link';
import { Frame } from '@/components/frame';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';

export function FeaturedGuide({ locale, copy }: { locale: Locale; copy: Dictionary['home']['featured'] }) {
  return (
    <section className="featured-section">
      <div className="featured-section__grain" aria-hidden="true" />
      <Frame variant="gold" className="featured-guide page-shell">
        <div className="featured-guide__art" aria-hidden="true">
          <span className="featured-guide__scanline" />
          <strong>USCM</strong><small>COLONIAL MARINE</small>
        </div>
        <div className="featured-guide__copy">
          <p className="eyebrow eyebrow--gold">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          <p>{copy.description}</p>
          <div className="featured-guide__includes">
            <h3>{copy.includes}</h3>
            <ul>{copy.bullets.map((bullet) => <li key={bullet}><Check aria-hidden="true" size={15} />{bullet}</li>)}</ul>
          </div>
          <Link className="button button--gold" href={localizePath(locale, '/classes/colonial-marine')}>
            {copy.cta}<ArrowRight aria-hidden="true" size={18} />
          </Link>
        </div>
      </Frame>
    </section>
  );
}
