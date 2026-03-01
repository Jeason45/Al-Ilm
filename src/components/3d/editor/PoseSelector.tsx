'use client';

import type { PrayerPositionId } from '@/data/prayer-guide/types';

const POSITION_OPTIONS: { id: PrayerPositionId; label: string }[] = [
  { id: 'qiyam', label: 'Qiyam (Debout)' },
  { id: 'takbir', label: 'Takbir al-Ihram' },
  { id: 'qiyam-hands', label: 'Debout mains croisées' },
  { id: 'ruku', label: 'Ruku (Inclinaison)' },
  { id: 'itidal', label: "I'tidal (Redressement)" },
  { id: 'sujud', label: 'Sujud (Prosternation)' },
  { id: 'julus', label: 'Julus (Assis)' },
  { id: 'tashahud', label: 'Tashahud' },
  { id: 'salam', label: 'Salam' },
  { id: 'qunut', label: 'Qunut' },
  { id: 'wudu-hands', label: 'Wudu - Mains' },
  { id: 'wudu-mouth', label: 'Wudu - Bouche' },
  { id: 'wudu-nose', label: 'Wudu - Nez' },
  { id: 'wudu-face', label: 'Wudu - Visage' },
  { id: 'wudu-arms', label: 'Wudu - Bras' },
  { id: 'wudu-head', label: 'Wudu - Tête' },
  { id: 'wudu-ears', label: 'Wudu - Oreilles' },
  { id: 'wudu-feet', label: 'Wudu - Pieds' },
];

interface PoseSelectorProps {
  value: PrayerPositionId;
  onChange: (id: PrayerPositionId) => void;
}

export function PoseSelector({ value, onChange }: PoseSelectorProps) {
  return (
    <div style={{ marginBottom: '12px' }}>
      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '4px' }}>
        Position
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value as PrayerPositionId)}
        style={{
          width: '100%',
          padding: '8px 12px',
          background: 'var(--color-surface, #1a1a2e)',
          color: 'var(--color-foreground)',
          border: '1px solid rgba(201, 168, 76, 0.2)',
          borderRadius: '8px',
          fontSize: '0.875rem',
          cursor: 'pointer',
        }}
      >
        {POSITION_OPTIONS.map((opt) => (
          <option key={opt.id} value={opt.id}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
