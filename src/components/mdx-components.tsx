import type { ComponentPropsWithoutRef, ReactNode } from 'react';

export function Callout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <aside className="mdx-callout">
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}

export const mdxComponents = {
  Callout,
  a: (props: ComponentPropsWithoutRef<'a'>) => <a {...props} rel="noreferrer" />,
};
