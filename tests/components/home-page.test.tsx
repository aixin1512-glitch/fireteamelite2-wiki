import { render, screen, within } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { HomePageContent } from '@/components/home/home-page-content';
import { getDictionary } from '@/i18n/dictionaries';

describe('home page composition', () => {
  it('renders every required official-site-inspired section', () => {
    render(<HomePageContent locale="en" dictionary={getDictionary('en')} />);

    expect(screen.getByRole('heading', { name: /aliens fireteam elite ii/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /start beginner guide/i })).toHaveAttribute('href', '/en/classes/colonial-marine#overview');

    const startSection = screen.getByLabelText('Prepare for Deployment');
    expect(within(startSection).getAllByRole('article')).toHaveLength(4);

    expect(screen.getByRole('heading', { name: /colonial marine starter build/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /what is aliens: fireteam elite 2/i })).toBeInTheDocument();

    const features = screen.getByLabelText('Game features');
    expect(within(features).getAllByRole('article')).toHaveLength(4);

    expect(screen.getByRole('heading', { name: /videos & screenshots/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /no marine deploys alone/i })).toBeInTheDocument();
  });
});
