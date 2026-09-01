import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Frame } from '@/components/frame';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';

export function AboutGame({ locale, copy }: { locale: Locale; copy: Dictionary['home']['about'] }) {
  return (
    <section className="section about-section page-shell">
      <Frame className="about-panel">
        <div className="about-panel__visual" aria-hidden="true"><span>4</span><small>MARINE FIRETEAM</small></div>
        <div className="about-panel__copy">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2>{copy.title}</h2>
          {copy.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <dl className="about-stats">
            {copy.stats.map((stat) => <div key={stat.label}><dt>{stat.label}</dt><dd>{stat.value}</dd></div>)}
          </dl>
          <Link className="text-link" href={localizePath(locale, '/classes')}>{copy.cta}<ArrowRight aria-hidden="true" size={17} /></Link>
        </div>
      </Frame>
    </section>
  );
}
