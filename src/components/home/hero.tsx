import { ArrowDown, ArrowRight, Play } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath, OFFICIAL_LINKS } from '@/lib/routes';

export function Hero({ locale, copy }: { locale: Locale; copy: Dictionary['home']['hero'] }) {
  return (
    <section className="home-hero" aria-labelledby="hero-title">
      <div className="home-hero__media" aria-hidden="true" />
      <div className="home-hero__shade" aria-hidden="true" />
      <div className="home-hero__hud home-hero__hud--left" aria-hidden="true">LV-895 // ONLINE</div>
      <div className="home-hero__hud home-hero__hud--right" aria-hidden="true">USCM FIELD ARCHIVE</div>

      <div className="home-hero__content page-shell">
        <p className="eyebrow">{copy.eyebrow}</p>
        <h1 id="hero-title" className="game-title">
          <span>{copy.titleTop}</span>
          <strong>{copy.titleBottom}</strong>
        </h1>
        <p className="home-hero__description">{copy.description}</p>
        <div className="home-hero__actions">
          <Link className="button button--primary" href={localizePath(locale, '/classes/colonial-marine#overview')}>
            {copy.primary}<ArrowRight aria-hidden="true" size={18} />
          </Link>
          <Link className="button button--ghost" href={localizePath(locale, '/classes')}>
            {copy.secondary}
          </Link>
          <a className="trailer-link" href={OFFICIAL_LINKS.youtube} target="_blank" rel="noreferrer">
            <span className="trailer-link__icon"><Play aria-hidden="true" fill="currentColor" size={18} /></span>
            {copy.video}
          </a>
        </div>
      </div>

      <div className="home-hero__footer">
        <div className="home-hero__availability">
          <span>{copy.status}</span>
          <strong>{copy.platforms}</strong>
        </div>
        <ul className="home-hero__stats page-shell" aria-label="Game facts">
          {copy.stats.map((stat, index) => <li key={stat}><small>0{index + 1}</small>{stat}</li>)}
        </ul>
      </div>

      <a className="scroll-cue" href="#start-here" aria-label="Scroll to guides"><ArrowDown aria-hidden="true" size={18} /></a>
    </section>
  );
}
