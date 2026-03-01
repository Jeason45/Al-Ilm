import type { Vector3Config, ArmPoseConfig, LegPoseConfig, PrayerPoseConfig } from '../types';

const ZERO_VEC: Vector3Config = { x: 0, y: 0, z: 0 };

const ZERO_ARM: ArmPoseConfig = {
  shoulder: { ...ZERO_VEC },
  arm: { ...ZERO_VEC },
  foreArm: { ...ZERO_VEC },
  hand: { ...ZERO_VEC },
};

const ZERO_LEG: LegPoseConfig = {
  upLeg: { ...ZERO_VEC },
  leg: { ...ZERO_VEC },
  foot: { ...ZERO_VEC },
  toeBase: { ...ZERO_VEC },
};

export const ZERO_POSE: PrayerPoseConfig = {
  spine: {
    hips: { ...ZERO_VEC },
    spine: { ...ZERO_VEC },
    spine1: { ...ZERO_VEC },
    spine2: { ...ZERO_VEC },
  },
  head: {
    neck: { ...ZERO_VEC },
    head: { ...ZERO_VEC },
  },
  rightArm: { ...ZERO_ARM },
  leftArm: { ...ZERO_ARM },
  rightLeg: { ...ZERO_LEG },
  leftLeg: { ...ZERO_LEG },
  hipsPositionY: 0,
};
