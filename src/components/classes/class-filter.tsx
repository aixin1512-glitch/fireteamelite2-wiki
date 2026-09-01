'use client';

import type { Dictionary } from '@/i18n/dictionaries';

export type ClassTypeFilter = 'all' | 'assault' | 'support' | 'control';

export function ClassFilter({ value, labels, onChange }: { value: ClassTypeFilter; labels: Dictionary['classes']['filters']; onChange: (filter: ClassTypeFilter) => void }) {
  const filters = Object.entries(labels) as Array<[ClassTypeFilter, string]>;
  return (
    <div className="class-filters" aria-label="Class filters">
      {filters.map(([filter, label]) => (
        <button key={filter} type="button" className={value === filter ? 'is-active' : ''} aria-pressed={value === filter} onClick={() => onChange(filter)}>
          {label}
        </button>
      ))}
    </div>
  );
}
