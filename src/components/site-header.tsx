'use client';

import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import type { Dictionary } from '@/i18n/dictionaries';
import type { Locale } from '@/i18n/config';
import { localizePath } from '@/lib/routes';
import { LanguageSwitcher } from './language-switcher';

export function SiteHeader({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = [
    { label: dictionary.nav.home, href: '/home' },
    { label: dictionary.nav.classes, href: '/classes' },
    { label: dictionary.nav.beginner, href: '/classes/colonial-marine#overview' },
    { label: dictionary.nav.weapons, href: '/classes/colonial-marine#loadout' },
  ];

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">{dictionary.site.skip}</a>
      <div className="site-header__inner">
        <Link className="brand" href={localizePath(locale, '/home')} aria-label={dictionary.site.name}>
          <Image className="brand__mark" src="/favicon.png" alt="" width={42} height={42} priority />
          <span>
            <strong>AFE2</strong>
            <small>FIELD WIKI</small>
          </span>
        </Link>

        <nav className={`main-nav ${open ? 'main-nav--open' : ''}`} aria-label="Primary">
          {nav.map((item) => {
            const href = localizePath(locale, item.href);
            const active = pathname === href || (href.includes('/classes') && pathname.startsWith(`/${locale}/classes`));
            return (
              <Link key={item.label} href={href} className={active ? 'is-active' : ''} onClick={() => setOpen(false)}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="site-header__actions">
          <LanguageSwitcher locale={locale} />
          <button className="menu-toggle" type="button" aria-expanded={open} aria-label={dictionary.nav.menu} onClick={() => setOpen((value) => !value)}>
            {open ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
