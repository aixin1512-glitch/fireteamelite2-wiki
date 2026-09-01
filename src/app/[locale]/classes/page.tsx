import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ClassesPageContent } from '@/components/classes/classes-page-content';
import { getDictionary } from '@/i18n/dictionaries';
import { isLocale } from '@/i18n/config';
import { buildPageMetadata, pageMetadata } from '@/lib/metadata';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  return buildPageMetadata(locale, '/classes', pageMetadata[locale].classes);
}

export default async function ClassesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return <ClassesPageContent locale={locale} dictionary={getDictionary(locale)} />;
}
