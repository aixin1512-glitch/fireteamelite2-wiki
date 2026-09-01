import { describe, expect, it } from 'vitest';
import { getGuide, listGuides } from '@/lib/guides';
import { locales } from '@/i18n/config';

describe('localized MDX guides', () => {
  it.each(locales)('lists and parses the Colonial Marine guide for %s', async (locale) => {
    const guides = await listGuides(locale, 'classes');
    expect(guides).toHaveLength(1);
    expect(guides[0].slug).toBe('colonial-marine');

    const guide = await getGuide(locale, 'classes', 'colonial-marine');
    expect(guide.meta.title.length).toBeGreaterThan(5);
    expect(guide.meta.description.length).toBeGreaterThan(40);
    expect(guide.meta.role.length).toBeGreaterThan(3);
    expect(guide.meta.difficulty.length).toBeGreaterThan(2);
    expect(guide.headings.map((heading) => heading.id)).toEqual([
      'overview',
      'role',
      'early-priorities',
      'loadout',
      'combat-loop',
      'squad-tips',
    ]);
  });

  it('rejects unsafe content paths', async () => {
    await expect(getGuide('en', 'classes', '../secrets')).rejects.toThrow(/invalid guide slug/i);
  });
});
