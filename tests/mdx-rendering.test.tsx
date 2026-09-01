import { renderToStaticMarkup } from 'react-dom/server';
import { compileMDX } from 'next-mdx-remote/rsc';
import { describe, expect, it } from 'vitest';
import { guideMdxOptions } from '@/lib/mdx';

describe('guide MDX rendering', () => {
  it('renders GitHub-flavored Markdown tables as semantic tables', async () => {
    const { content } = await compileMDX({
      source: '| Slot | Priority |\n| --- | --- |\n| Primary | Rifle |',
      options: guideMdxOptions,
    });
    expect(renderToStaticMarkup(content)).toContain('<table>');
  });
});
