import { Play } from 'lucide-react';
import type { Dictionary } from '@/i18n/dictionaries';
import { OFFICIAL_LINKS } from '@/lib/routes';

export function MediaBand({ copy }: { copy: Dictionary['home']['media'] }) {
  return (
    <section className="section media-section">
      <div className="page-shell">
        <div className="section-heading section-heading--split">
          <div><p className="eyebrow">{copy.eyebrow}</p><h2>{copy.title}</h2></div>
          <p>{copy.description}</p>
        </div>
        <div className="media-strip">
          <a className="media-strip__main" href={OFFICIAL_LINKS.youtube} target="_blank" rel="noreferrer" aria-label={copy.trailer}>
            <span><Play aria-hidden="true" fill="currentColor" />{copy.trailer}</span>
          </a>
          <div className="media-strip__tile media-strip__tile--one" aria-hidden="true"><span>01 / FIRETEAM</span></div>
          <div className="media-strip__tile media-strip__tile--two" aria-hidden="true"><span>02 / CONTACT</span></div>
        </div>
      </div>
    </section>
  );
}
