import type { Dictionary } from '@/i18n/dictionaries';

export function FeatureGrid({ features }: { features: Dictionary['home']['features'] }) {
  return (
    <section className="feature-grid page-shell" aria-label="Game features">
      {features.map((feature) => (
        <article key={feature.number}>
          <span>{feature.number}</span>
          <div><h2>{feature.title}</h2><p>{feature.description}</p></div>
        </article>
      ))}
    </section>
  );
}
