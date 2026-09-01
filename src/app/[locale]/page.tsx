import { redirect } from 'next/navigation';
import { isLocale } from '@/i18n/config';

export default async function LocaleIndex({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) redirect('/en/home');
  redirect(`/${locale}/home`);
}
