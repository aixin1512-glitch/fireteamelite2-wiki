import { describe, expect, it } from 'vitest';
import { defaultLocale, isLocale, locales } from '@/i18n/config';
import { getDictionary } from '@/i18n/dictionaries';

describe('locale configuration', () => {
  it('supports the four approved locales with English as default', () => {
    expect(locales).toEqual(['en', 'ja', 'de', 'es']);
    expect(defaultLocale).toBe('en');
  });

  it('rejects unsupported locale segments', () => {
    expect(isLocale('ja')).toBe(true);
    expect(isLocale('fr')).toBe(false);
  });

  it('localizes class guide summaries instead of inheriting English copy', () => {
    const englishDescription = getDictionary('en').classes.cards[0].description;
    for (const locale of ['ja', 'de', 'es'] as const) {
      expect(getDictionary(locale).classes.cards[0].description).not.toBe(englishDescription);
    }
  });
});
