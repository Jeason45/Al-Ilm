'use client';

import { useState } from 'react';
import { Copy, Check, Download } from 'lucide-react';
import type { PrayerPoseConfig } from '../types';
import type { PrayerPositionId } from '@/data/prayer-guide/types';

interface PoseExporterProps {
  pose: PrayerPoseConfig;
  positionId: PrayerPositionId;
}

function formatVec(v: { x: number; y: number; z: number }, indent: number): string {
  const pad = ' '.repeat(indent);
  const fmt = (n: number) => {
    const rounded = Math.round(n * 10000) / 10000;
    return rounded === 0 ? '0' : String(rounded);
  };
  return `{ x: ${fmt(v.x)}, y: ${fmt(v.y)}, z: ${fmt(v.z)} }`;
}

function poseToTypeScript(pose: PrayerPoseConfig, positionId: string): string {
  const lines: string[] = [];
  const i = '  ';

  lines.push(`import type { PrayerPoseConfig } from '../types';`);
  lines.push('');
  lines.push(`export const ${camelCase(positionId)}: PrayerPoseConfig = {`);

  // Spine
  lines.push(`${i}spine: {`);
  lines.push(`${i}${i}hips: ${formatVec(pose.spine.hips, 0)},`);
  lines.push(`${i}${i}spine: ${formatVec(pose.spine.spine, 0)},`);
  lines.push(`${i}${i}spine1: ${formatVec(pose.spine.spine1, 0)},`);
  lines.push(`${i}${i}spine2: ${formatVec(pose.spine.spine2, 0)},`);
  lines.push(`${i}},`);

  // Head
  lines.push(`${i}head: {`);
  lines.push(`${i}${i}neck: ${formatVec(pose.head.neck, 0)},`);
  lines.push(`${i}${i}head: ${formatVec(pose.head.head, 0)},`);
  lines.push(`${i}},`);

  // Arms
  for (const side of ['right', 'left'] as const) {
    const armKey = `${side}Arm` as const;
    const arm = pose[armKey];
    lines.push(`${i}${armKey}: {`);
    lines.push(`${i}${i}shoulder: ${formatVec(arm.shoulder, 0)},`);
    lines.push(`${i}${i}arm: ${formatVec(arm.arm, 0)},`);
    lines.push(`${i}${i}foreArm: ${formatVec(arm.foreArm, 0)},`);
    lines.push(`${i}${i}hand: ${formatVec(arm.hand, 0)},`);
    lines.push(`${i}},`);
  }

  // Legs
  for (const side of ['right', 'left'] as const) {
    const legKey = `${side}Leg` as const;
    const leg = pose[legKey];
    lines.push(`${i}${legKey}: {`);
    lines.push(`${i}${i}upLeg: ${formatVec(leg.upLeg, 0)},`);
    lines.push(`${i}${i}leg: ${formatVec(leg.leg, 0)},`);
    lines.push(`${i}${i}foot: ${formatVec(leg.foot, 0)},`);
    lines.push(`${i}${i}toeBase: ${formatVec(leg.toeBase, 0)},`);
    lines.push(`${i}},`);
  }

  lines.push(`${i}hipsPositionY: ${Math.round(pose.hipsPositionY * 10000) / 10000},`);
  lines.push(`};`);

  return lines.join('\n');
}

function poseToJSON(pose: PrayerPoseConfig): string {
  return JSON.stringify(pose, null, 2);
}

function camelCase(str: string): string {
  return str.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

export function PoseExporter({ pose, positionId }: PoseExporterProps) {
  const [copied, setCopied] = useState<'ts' | 'json' | null>(null);

  const copyToClipboard = async (text: string, type: 'ts' | 'json') => {
    await navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const buttonStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '6px 12px',
    fontSize: '0.75rem',
    fontWeight: 600,
    border: '1px solid rgba(201, 168, 76, 0.2)',
    borderRadius: '6px',
    background: 'rgba(201, 168, 76, 0.06)',
    color: 'var(--color-gold, #c9a84c)',
    cursor: 'pointer',
  };

  return (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <button
        onClick={() => copyToClipboard(poseToTypeScript(pose, positionId), 'ts')}
        style={buttonStyle}
      >
        {copied === 'ts' ? <Check style={{ width: '14px', height: '14px' }} /> : <Copy style={{ width: '14px', height: '14px' }} />}
        {copied === 'ts' ? 'Copié !' : 'TypeScript'}
      </button>
      <button
        onClick={() => copyToClipboard(poseToJSON(pose), 'json')}
        style={buttonStyle}
      >
        {copied === 'json' ? <Check style={{ width: '14px', height: '14px' }} /> : <Download style={{ width: '14px', height: '14px' }} />}
        {copied === 'json' ? 'Copié !' : 'JSON'}
      </button>
    </div>
  );
}
