'use client';

import type { Vector3Config } from '../types';

interface SliderInputProps {
  label: string;
  value: Vector3Config;
  onChange: (value: Vector3Config) => void;
}

const AXES = ['x', 'y', 'z'] as const;
const AXIS_COLORS = { x: '#ef4444', y: '#22c55e', z: '#3b82f6' };

function radToDeg(rad: number): number {
  return Math.round((rad * 180) / Math.PI);
}

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

export function SliderInput({ label, value, onChange }: SliderInputProps) {
  return (
    <div style={{ marginBottom: '8px' }}>
      <div style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-foreground)', marginBottom: '4px' }}>
        {label}
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
        {AXES.map((axis) => (
          <div key={axis} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{
              width: '14px',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: AXIS_COLORS[axis],
              textTransform: 'uppercase',
            }}>
              {axis}
            </span>
            <input
              type="range"
              min={-180}
              max={180}
              step={1}
              value={radToDeg(value[axis])}
              onChange={(e) => {
                onChange({ ...value, [axis]: degToRad(Number(e.target.value)) });
              }}
              style={{
                flex: 1,
                height: '4px',
                accentColor: AXIS_COLORS[axis],
                cursor: 'pointer',
              }}
            />
            <input
              type="number"
              min={-180}
              max={180}
              step={1}
              value={radToDeg(value[axis])}
              onChange={(e) => {
                const deg = Math.max(-180, Math.min(180, Number(e.target.value) || 0));
                onChange({ ...value, [axis]: degToRad(deg) });
              }}
              style={{
                width: '48px',
                padding: '2px 4px',
                fontSize: '0.6875rem',
                textAlign: 'center',
                background: 'var(--color-surface, #1a1a2e)',
                color: 'var(--color-foreground)',
                border: '1px solid rgba(201, 168, 76, 0.15)',
                borderRadius: '4px',
              }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
