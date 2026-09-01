import type { Locale } from '@/i18n/config';
import { isLocale } from '@/i18n/config';

export const OFFICIAL_LINKS = {
  game: 'https://www.aliensfireteamelite2.com/home',
  steam: 'https://store.steampowered.com/app/3448650',
  playstation: 'https://store.playstation.com/en-us/concept/10014695',
  xbox: 'https://www.xbox.com/en-US/games/store/aliens-fireteam-elite-2/9MTP6NRFJBGR',
  youtube: 'https://www.youtube.com/watch?v=zjQaSsZJm54',
  discord: 'https://discord.com/invite/aliensfireteamelite',
} as const;

function normalizePath(path: string): string {
  return path.startsWith('/') ? path : `/${path}`;
}

export function localizePath(locale: Locale, path: string): string {
  const normalized = normalizePath(path);
  const segments = normalized.split('/');

  if (segments[1] && isLocale(segments[1])) {
    segments[1] = locale;
    return segments.join('/');
  }

  return `/${locale}${normalized === '/' ? '/home' : normalized}`;
}

export function switchLocale(path: string, locale: Locale): string {
  return localizePath(locale, path);
}
