import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { notFound } from 'next/navigation';
import { SiteFooter } from '@/components/site-footer';
import { SiteHeader } from '@/components/site-header';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale, locales } from '@/i18n/config';
import { siteBaseUrl } from '@/lib/metadata';
import '../globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(siteBaseUrl),
  icons: { icon: '/favicon.png', apple: '/favicon.png' },
  applicationName: 'Aliens: Fireteam Elite 2 Field Wiki',
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: { children: ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const dictionary = getDictionary(locale);

  return (
    <html lang={locale} data-scroll-behavior="smooth">
      <body>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <main id="main-content">{children}</main>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </body>
    </html>
  );
}
