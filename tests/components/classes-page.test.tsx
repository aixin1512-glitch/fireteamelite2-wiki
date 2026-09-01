import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import { ClassesPageContent } from '@/components/classes/classes-page-content';
import { getDictionary } from '@/i18n/dictionaries';

describe('classes index', () => {
  it('filters class cards and links the complete guide', async () => {
    const user = userEvent.setup();
    render(<ClassesPageContent locale="en" dictionary={getDictionary('en')} />);

    expect(screen.getAllByRole('article')).toHaveLength(6);
    expect(screen.getByRole('link', { name: /read colonial marine guide/i })).toHaveAttribute('href', '/en/classes/colonial-marine');

    await user.click(screen.getByRole('button', { name: 'Support' }));
    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.getByRole('heading', { name: 'Doc' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Recon' })).toBeInTheDocument();
  });
});
