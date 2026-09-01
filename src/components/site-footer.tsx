import Image from 'next/image';
import Link from 'next/link';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath, OFFICIAL_LINKS } from '@/lib/routes';

export function SiteFooter({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid page-shell">
        <div className="site-footer__about">
          <Link className="brand brand--footer" href={localizePath(locale, '/home')}>
            <Image className="brand__mark" src="/favicon.png" alt="" width={52} height={52} />
            <span><strong>AFE2</strong><small>FIELD WIKI</small></span>
          </Link>
          <p>{dictionary.footer.about}</p>
        </div>

        <div>
          <h2>{dictionary.footer.explore}</h2>
          <ul>
            <li><Link href={localizePath(locale, '/home')}>{dictionary.nav.home}</Link></li>
            <li><Link href={localizePath(locale, '/classes')}>{dictionary.nav.classes}</Link></li>
            <li><Link href={localizePath(locale, '/classes/colonial-marine#overview')}>{dictionary.nav.beginner}</Link></li>
          </ul>
        </div>

        <div>
          <h2>{dictionary.footer.official}</h2>
          <ul>
            <li><a href={OFFICIAL_LINKS.game} target="_blank" rel="noreferrer">{dictionary.footer.game}</a></li>
            <li><a href={OFFICIAL_LINKS.steam} target="_blank" rel="noreferrer">{dictionary.footer.steam}</a></li>
            <li><a href={OFFICIAL_LINKS.playstation} target="_blank" rel="noreferrer">{dictionary.footer.playstation}</a></li>
            <li><a href={OFFICIAL_LINKS.xbox} target="_blank" rel="noreferrer">{dictionary.footer.xbox}</a></li>
            <li><a href={OFFICIAL_LINKS.youtube} target="_blank" rel="noreferrer">{dictionary.footer.youtube}</a></li>
          </ul>
        </div>
      </div>
      <div className="site-footer__legal page-shell">
        <span>UNOFFICIAL FAN WIKI · 2026</span>
        <span>{dictionary.footer.disclaimer}</span>
      </div>
    </footer>
  );
}
