import type { Metadata } from 'next';
import type { Locale } from '@/i18n/config';
import { locales } from '@/i18n/config';

export type PageMetaCopy = {
  title: string;
  description: string;
};

export const siteBaseUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? 'https://fireteamelite2.online').replace(/\/$/, '');

export const pageMetadata: Record<Locale, Record<'home' | 'classes', PageMetaCopy>> = {
  en: {
    home: { title: 'Aliens: Fireteam Elite 2 Wiki | Guides & Classes', description: 'Master Aliens: Fireteam Elite 2 with clear class builds, beginner tips, weapon guidance, and practical four-player co-op tactics for every deployment.' },
    classes: { title: 'Aliens: Fireteam Elite 2 Classes & Builds', description: 'Compare every Aliens: Fireteam Elite 2 class, learn each squad role, and start with a practical Colonial Marine build for early co-op missions.' },
  },
  ja: {
    home: { title: 'エイリアン：ファイアーチーム エリート2 攻略Wiki', description: 'クラスビルド、初心者向けの基本、武器選び、4人協力プレイの実戦戦術を分かりやすくまとめた非公式攻略Wikiです。' },
    classes: { title: 'エイリアン：ファイアーチーム エリート2 クラス攻略', description: '各クラスの分隊ロールと特徴を比較し、序盤ミッションで使いやすいコロニアルマリーンの実戦ビルドを確認できます。' },
  },
  de: {
    home: { title: 'Aliens: Fireteam Elite 2 Wiki | Builds & Guides', description: 'Klare Klassen-Builds, Einsteigertipps, Waffenwissen und praxiserprobte Koop-Taktiken für jeden Einsatz in Aliens: Fireteam Elite 2.' },
    classes: { title: 'Aliens: Fireteam Elite 2 Klassen & Builds', description: 'Vergleiche alle Klassen und Teamrollen in Aliens: Fireteam Elite 2 und starte mit einem verlässlichen Colonial-Marine-Build.' },
  },
  es: {
    home: { title: 'Aliens: Fireteam Elite 2 Wiki | Guías y clases', description: 'Configuraciones de clase, consejos iniciales, armas y tácticas cooperativas prácticas para dominar cada despliegue de Aliens: Fireteam Elite 2.' },
    classes: { title: 'Clases y builds de Aliens: Fireteam Elite 2', description: 'Compara las clases y funciones del escuadrón y empieza con una configuración fiable del Marine Colonial para las primeras misiones.' },
  },
};

function conciseTitle(title: string): string {
  return title.length <= 60 ? title : `${title.slice(0, 59).trimEnd()}…`;
}

export function buildPageMetadata(locale: Locale, path: string, copy: PageMetaCopy): Metadata {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const canonical = `/${locale}${normalizedPath}`;
  const languages = Object.fromEntries(locales.map((value) => [value, `/${value}${normalizedPath}`]));

  return {
    title: conciseTitle(copy.title),
    description: copy.description,
    alternates: { canonical, languages },
    openGraph: {
      type: 'website',
      locale,
      title: conciseTitle(copy.title),
      description: copy.description,
      url: canonical,
      siteName: 'Aliens: Fireteam Elite 2 Field Wiki',
      images: [{ url: '/images/hero-poster.jpg', width: 1920, height: 1080, alt: 'Aliens: Fireteam Elite 2 squad deployment' }],
    },
    twitter: { card: 'summary_large_image', title: conciseTitle(copy.title), description: copy.description, images: ['/images/hero-poster.jpg'] },
  };
}
