import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { SiteFooter } from '@/components/site-footer';
import { getDictionary } from '@/i18n/dictionaries';

describe('site footer', () => {
  it('labels the site as unofficial and links only to approved official destinations', () => {
    render(<SiteFooter locale="en" dictionary={getDictionary('en')} />);

    expect(screen.getByText(/independent fan-made field guide/i)).toBeInTheDocument();

    const externalHosts = screen
      .getAllByRole('link')
      .map((link) => new URL(link.getAttribute('href')!, 'https://wiki.local').hostname)
      .filter((host) => host !== 'wiki.local');

    expect(new Set(externalHosts)).toEqual(
      new Set([
        'www.aliensfireteamelite2.com',
        'store.steampowered.com',
        'store.playstation.com',
        'www.xbox.com',
        'www.youtube.com',
      ]),
    );
  });
});
