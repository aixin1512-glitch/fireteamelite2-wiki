import { ArrowRight, Radio } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath, OFFICIAL_LINKS } from '@/lib/routes';

export function CommunityCta({ locale, copy }: { locale: Locale; copy: Dictionary['home']['community'] }) {
  return (
    <section className="community-cta">
      <div className="community-cta__radar" aria-hidden="true"><span /><i /></div>
      <div className="community-cta__copy page-shell">
        <p className="eyebrow"><Radio aria-hidden="true" size={16} />{copy.eyebrow}</p>
        <h2>{copy.title}</h2>
        <p>{copy.description}</p>
        <div>
          <Link className="button button--primary" href={localizePath(locale, '/classes')}>{copy.primary}<ArrowRight aria-hidden="true" size={18} /></Link>
          <a className="button button--ghost" href={OFFICIAL_LINKS.discord} target="_blank" rel="noreferrer">{copy.secondary}</a>
        </div>
      </div>
    </section>
  );
}
