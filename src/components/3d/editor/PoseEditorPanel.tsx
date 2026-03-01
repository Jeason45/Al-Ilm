'use client';

import { useState, useCallback } from 'react';
import { RotateCcw, FlipHorizontal } from 'lucide-react';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import type { PrayerPoseConfig, Gender, Vector3Config } from '../types';
import { BONE_GROUPS, type BoneGroupId } from '../constants';
import { ZERO_POSE } from '../poses/defaults';
import { getPoseForPosition } from '../poses';
import { BoneGroupSliders } from './BoneGroupSliders';
import { PoseSelector } from './PoseSelector';
import { PoseExporter } from './PoseExporter';
import { EditorScene } from './EditorScene';

/** Map bone group keys to pose config paths */
function getBoneValues(pose: PrayerPoseConfig, groupId: BoneGroupId): Record<string, Vector3Config> {
  switch (groupId) {
    case 'head':
      return { neck: pose.head.neck, head: pose.head.head };
    case 'torso':
      return { hips: pose.spine.hips, spine: pose.spine.spine, spine1: pose.spine.spine1, spine2: pose.spine.spine2 };
    case 'rightArm':
      return { rightShoulder: pose.rightArm.shoulder, rightArm: pose.rightArm.arm, rightForeArm: pose.rightArm.foreArm, rightHand: pose.rightArm.hand };
    case 'leftArm':
      return { leftShoulder: pose.leftArm.shoulder, leftArm: pose.leftArm.arm, leftForeArm: pose.leftArm.foreArm, leftHand: pose.leftArm.hand };
    case 'rightLeg':
      return { rightUpLeg: pose.rightLeg.upLeg, rightLeg: pose.rightLeg.leg, rightFoot: pose.rightLeg.foot, rightToeBase: pose.rightLeg.toeBase };
    case 'leftLeg':
      return { leftUpLeg: pose.leftLeg.upLeg, leftLeg: pose.leftLeg.leg, leftFoot: pose.leftLeg.foot, leftToeBase: pose.leftLeg.toeBase };
  }
}

function setBoneValue(pose: PrayerPoseConfig, groupId: BoneGroupId, boneKey: string, value: Vector3Config): PrayerPoseConfig {
  const next = structuredClone(pose);
  switch (groupId) {
    case 'head':
      if (boneKey === 'neck') next.head.neck = value;
      else if (boneKey === 'head') next.head.head = value;
      break;
    case 'torso':
      if (boneKey === 'hips') next.spine.hips = value;
      else if (boneKey === 'spine') next.spine.spine = value;
      else if (boneKey === 'spine1') next.spine.spine1 = value;
      else if (boneKey === 'spine2') next.spine.spine2 = value;
      break;
    case 'rightArm':
      if (boneKey === 'rightShoulder') next.rightArm.shoulder = value;
      else if (boneKey === 'rightArm') next.rightArm.arm = value;
      else if (boneKey === 'rightForeArm') next.rightArm.foreArm = value;
      else if (boneKey === 'rightHand') next.rightArm.hand = value;
      break;
    case 'leftArm':
      if (boneKey === 'leftShoulder') next.leftArm.shoulder = value;
      else if (boneKey === 'leftArm') next.leftArm.arm = value;
      else if (boneKey === 'leftForeArm') next.leftArm.foreArm = value;
      else if (boneKey === 'leftHand') next.leftArm.hand = value;
      break;
    case 'rightLeg':
      if (boneKey === 'rightUpLeg') next.rightLeg.upLeg = value;
      else if (boneKey === 'rightLeg') next.rightLeg.leg = value;
      else if (boneKey === 'rightFoot') next.rightLeg.foot = value;
      else if (boneKey === 'rightToeBase') next.rightLeg.toeBase = value;
      break;
    case 'leftLeg':
      if (boneKey === 'leftUpLeg') next.leftLeg.upLeg = value;
      else if (boneKey === 'leftLeg') next.leftLeg.leg = value;
      else if (boneKey === 'leftFoot') next.leftLeg.foot = value;
      else if (boneKey === 'leftToeBase') next.leftLeg.toeBase = value;
      break;
  }
  return next;
}

function mirrorVec(v: Vector3Config): Vector3Config {
  return { x: -v.x, y: v.y, z: v.z };
}

export function PoseEditorPanel() {
  const [positionId, setPositionId] = useState<PrayerPositionId>('qiyam');
  const [gender, setGender] = useState<Gender>('male');
  const [pose, setPose] = useState<PrayerPoseConfig>(structuredClone(ZERO_POSE));

  const handleBoneChange = useCallback((groupId: BoneGroupId, boneKey: string, value: Vector3Config) => {
    setPose((prev) => setBoneValue(prev, groupId, boneKey, value));
  }, []);

  const handleReset = useCallback(() => {
    setPose(structuredClone(ZERO_POSE));
  }, []);

  const handleMirror = useCallback(() => {
    setPose((prev) => {
      const next = structuredClone(prev);
      // Copy right arm → left arm (mirrored X)
      next.leftArm.shoulder = mirrorVec(prev.rightArm.shoulder);
      next.leftArm.arm = mirrorVec(prev.rightArm.arm);
      next.leftArm.foreArm = mirrorVec(prev.rightArm.foreArm);
      next.leftArm.hand = mirrorVec(prev.rightArm.hand);
      // Copy right leg → left leg (mirrored X)
      next.leftLeg.upLeg = mirrorVec(prev.rightLeg.upLeg);
      next.leftLeg.leg = mirrorVec(prev.rightLeg.leg);
      next.leftLeg.foot = mirrorVec(prev.rightLeg.foot);
      next.leftLeg.toeBase = mirrorVec(prev.rightLeg.toeBase);
      return next;
    });
  }, []);

  const handleLoadExisting = useCallback(() => {
    const existing = getPoseForPosition(positionId);
    if (existing) {
      setPose(structuredClone(existing));
    }
  }, [positionId]);

  const handleHipsYChange = useCallback((value: number) => {
    setPose((prev) => ({ ...prev, hipsPositionY: value }));
  }, []);

  const actionButtonStyle: React.CSSProperties = {
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
    <div style={{
      display: 'grid',
      gridTemplateColumns: '2fr 1fr',
      gap: '20px',
      height: 'calc(100vh - 80px)',
      padding: '20px',
    }}>
      {/* Left: 3D Scene */}
      <EditorScene pose={pose} gender={gender} />

      {/* Right: Controls */}
      <div style={{
        overflowY: 'auto',
        padding: '16px',
        background: 'var(--color-surface, #12122a)',
        borderRadius: '12px',
        border: '1px solid rgba(201, 168, 76, 0.1)',
      }}>
        {/* Position selector */}
        <PoseSelector value={positionId} onChange={setPositionId} />

        {/* Gender toggle */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {(['male', 'female'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              style={{
                flex: 1,
                padding: '6px 12px',
                fontSize: '0.8125rem',
                fontWeight: 600,
                borderRadius: '6px',
                border: '1px solid rgba(201, 168, 76, 0.2)',
                background: gender === g ? 'rgba(201, 168, 76, 0.15)' : 'transparent',
                color: gender === g ? 'var(--color-gold, #c9a84c)' : 'var(--color-muted)',
                cursor: 'pointer',
              }}
            >
              {g === 'male' ? 'Homme' : 'Femme'}
            </button>
          ))}
        </div>

        {/* Hips Y offset */}
        <div style={{ marginBottom: '12px' }}>
          <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-muted)', marginBottom: '4px' }}>
            Position Y des hanches
          </label>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="range"
              min={-2}
              max={0.5}
              step={0.01}
              value={pose.hipsPositionY}
              onChange={(e) => handleHipsYChange(Number(e.target.value))}
              style={{ flex: 1, accentColor: '#c9a84c' }}
            />
            <span style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', width: '40px', textAlign: 'center' }}>
              {pose.hipsPositionY.toFixed(2)}
            </span>
          </div>
        </div>

        {/* Bone group accordions */}
        {(Object.entries(BONE_GROUPS) as [BoneGroupId, typeof BONE_GROUPS[BoneGroupId]][]).map(([groupId, group]) => (
          <BoneGroupSliders
            key={groupId}
            label={group.label}
            boneKeys={group.bones}
            values={getBoneValues(pose, groupId)}
            onChange={(boneKey, value) => handleBoneChange(groupId, boneKey, value)}
          />
        ))}

        {/* Actions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '16px' }}>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handleReset} style={actionButtonStyle}>
              <RotateCcw style={{ width: '14px', height: '14px' }} />
              Reset
            </button>
            <button onClick={handleMirror} style={actionButtonStyle}>
              <FlipHorizontal style={{ width: '14px', height: '14px' }} />
              Miroir D→G
            </button>
            <button onClick={handleLoadExisting} style={actionButtonStyle}>
              Charger pose
            </button>
          </div>

          <PoseExporter pose={pose} positionId={positionId} />
        </div>
      </div>
    </div>
  );
}
