import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';

export function RelatedGuides({ locale, copy }: { locale: Locale; copy: Dictionary['article'] }) {
  return (
    <section className="related-guides">
      <p className="eyebrow">NEXT FILES</p>
      <h2>{copy.related}</h2>
      <p>{copy.relatedDescription}</p>
      <div>
        <Link href={localizePath(locale, '/classes/colonial-marine#overview')}><span>01</span>{copy.beginnerGuide}<ArrowRight aria-hidden="true" /></Link>
        <Link href={localizePath(locale, '/classes')}><span>02</span>{copy.classesIndex}<ArrowRight aria-hidden="true" /></Link>
      </div>
    </section>
  );
}
