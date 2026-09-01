import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { ArticlePageContent } from '@/components/article/article-page-content';
import { getDictionary } from '@/i18n/dictionaries';
import type { Guide } from '@/lib/guides';

const guide: Guide = {
  meta: {
    slug: 'colonial-marine',
    title: 'Colonial Marine Beginner Guide',
    description: 'A practical field guide for dependable front-line play in every early deployment.',
    role: 'Front-line rifle specialist',
    difficulty: 'Beginner',
    updated: 'August 28, 2026',
  },
  source: '',
  headings: [
    { id: 'overview', label: 'Overview' },
    { id: 'role', label: 'Role in the Fireteam' },
    { id: 'loadout', label: 'Recommended Loadout' },
  ],
};

describe('article detail', () => {
  it('renders navigation, metadata, table of contents, MDX body, and related guides', () => {
    render(
      <ArticlePageContent locale="en" dictionary={getDictionary('en')} guide={guide}>
        <p>Rendered MDX field manual</p>
      </ArticlePageContent>,
    );

    expect(screen.getByRole('link', { name: 'Classes' })).toHaveAttribute('href', '/en/classes');
    expect(screen.getByRole('heading', { name: guide.meta.title })).toBeInTheDocument();
    expect(screen.getByText(guide.meta.role)).toBeInTheDocument();
    expect(screen.getByText(guide.meta.difficulty)).toBeInTheDocument();
    expect(screen.getByRole('navigation', { name: 'On this page' }).getElementsByTagName('a')).toHaveLength(3);
    expect(screen.getByText('Rendered MDX field manual')).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /continue your briefing/i })).toBeInTheDocument();
  });
});
