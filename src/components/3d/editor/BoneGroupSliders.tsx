'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SliderInput } from './SliderInput';
import { BONE_LABELS } from '../constants';
import type { Vector3Config } from '../types';

interface BoneGroupSlidersProps {
  label: string;
  /** Array of bone keys in this group (e.g., ['neck', 'head']) */
  boneKeys: readonly string[];
  /** Current rotations keyed by bone key */
  values: Record<string, Vector3Config>;
  onChange: (boneKey: string, value: Vector3Config) => void;
  defaultOpen?: boolean;
}

export function BoneGroupSliders({ label, boneKeys, values, onChange, defaultOpen = false }: BoneGroupSlidersProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div style={{
      border: '1px solid rgba(201, 168, 76, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
      marginBottom: '6px',
    }}>
      {/* Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '8px 12px',
          background: 'rgba(201, 168, 76, 0.04)',
          border: 'none',
          cursor: 'pointer',
          color: 'var(--color-foreground)',
          fontSize: '0.8125rem',
          fontWeight: 600,
        }}
      >
        {label}
        <ChevronDown
          style={{
            width: '14px',
            height: '14px',
            color: 'var(--color-muted)',
            transition: 'transform 0.2s',
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        />
      </button>

      {/* Body */}
      {isOpen && (
        <div style={{ padding: '8px 12px' }}>
          {boneKeys.map((key) => (
            <SliderInput
              key={key}
              label={BONE_LABELS[key] ?? key}
              value={values[key] ?? { x: 0, y: 0, z: 0 }}
              onChange={(v) => onChange(key, v)}
            />
          ))}
        </div>
      )}
    </div>
  );
}
