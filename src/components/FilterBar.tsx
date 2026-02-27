'use client';

interface FilterBarProps {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
}

const filters = [
  { id: 'all', label: 'Toutes' },
  { id: 'mecquoise', label: 'Mecquoises' },
  { id: 'medinoise', label: 'Médinoises' },
];

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div style={{
      display: 'inline-flex',
      alignItems: 'center',
      gap: '4px',
      padding: '4px',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid var(--color-border)',
    }}>
      {filters.map((filter) => (
        <button
          key={filter.id}
          onClick={() => onFilterChange(filter.id)}
          style={{
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 500,
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
            background: activeFilter === filter.id ? 'var(--color-gold)' : 'transparent',
            color: activeFilter === filter.id ? '#000' : 'var(--color-muted)',
          }}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
