import type { GuideHeading } from '@/lib/guides';

export function TableOfContents({ label, headings }: { label: string; headings: GuideHeading[] }) {
  return (
    <nav className="article-toc" aria-label={label}>
      <span>{label}</span>
      <ol>{headings.map((heading, index) => <li key={heading.id}><a href={`#${heading.id}`}><small>0{index + 1}</small>{heading.label}</a></li>)}</ol>
    </nav>
  );
}
