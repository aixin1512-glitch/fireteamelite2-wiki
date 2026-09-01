import { describe, expect, it } from 'vitest';
import { localizePath, switchLocale } from '@/lib/routes';

describe('localized routes', () => {
  it('adds an approved locale to an internal path', () => {
    expect(localizePath('ja', '/classes')).toBe('/ja/classes');
    expect(localizePath('de', '/classes/colonial-marine#loadout')).toBe('/de/classes/colonial-marine#loadout');
  });

  it('switches locale while preserving the page and hash', () => {
    expect(switchLocale('/en/classes/colonial-marine#combat-loop', 'es')).toBe('/es/classes/colonial-marine#combat-loop');
    expect(switchLocale('/classes', 'ja')).toBe('/ja/classes');
  });
});
