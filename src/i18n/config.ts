export const locales = ['en', 'ja', 'de', 'es'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeNames: Record<Locale, string> = {
  en: 'English',
  ja: '日本語',
  de: 'Deutsch',
  es: 'Español',
};
