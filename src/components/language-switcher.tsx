'use client';

import { Languages } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { localeNames, locales, type Locale } from '@/i18n/config';
import { switchLocale } from '@/lib/routes';

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <label className="language-switcher">
      <Languages aria-hidden="true" size={16} />
      <span className="sr-only">Language</span>
      <select
        aria-label="Language"
        value={locale}
        onChange={(event) => router.push(switchLocale(pathname, event.target.value as Locale))}
      >
        {locales.map((value) => (
          <option key={value} value={value}>
            {localeNames[value]}
          </option>
        ))}
      </select>
    </label>
  );
}
