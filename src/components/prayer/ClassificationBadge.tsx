'use client';

import type { RulingType } from '@/data/prayer-guide/types';
import { classifications } from '@/data/prayer-guide/classifications';

interface ClassificationBadgeProps {
  ruling: RulingType;
}

export function ClassificationBadge({ ruling }: ClassificationBadgeProps) {
  const meta = classifications[ruling];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '6px',
        fontSize: '0.6875rem',
        fontWeight: 500,
        color: meta.color,
        background: meta.bg,
        border: `1px solid ${meta.border}`,
        whiteSpace: 'nowrap',
      }}
    >
      {meta.label}
    </span>
  );
}
