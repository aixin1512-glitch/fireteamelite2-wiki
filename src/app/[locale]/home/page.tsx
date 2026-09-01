import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HomePageContent } from '@/components/home/home-page-content';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/config';
import { buildPageMetadata, pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildPageMetadata(locale, '/home', pageMetadata[locale].home);
}

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <HomePageContent locale={locale} dictionary={getDictionary(locale)} />;
}
