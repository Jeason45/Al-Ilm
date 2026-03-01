import type { PrayerPoseConfig } from '../types';

/** Ruku — inclinaison à ~90°, dos plat, mains sur les genoux */
export const ruku: PrayerPoseConfig = {
  spine: {
    hips: { x: 0.1, y: 0, z: 0 },
    spine: { x: 0.35, y: 0, z: 0 },
    spine1: { x: 0.35, y: 0, z: 0 },
    spine2: { x: 0.35, y: 0, z: 0 },
  },
  head: {
    neck: { x: -0.1, y: 0, z: 0 },
    head: { x: -0.1, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.3, y: 0, z: 1.0 },
    foreArm: { x: 0, y: 0, z: -0.3 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.3, y: 0, z: -1.0 },
    foreArm: { x: 0, y: 0, z: 0.3 },
    hand: { x: 0, y: 0, z: 0 },
  },
  rightLeg: {
    upLeg: { x: 0, y: 0, z: 0 },
    leg: { x: 0, y: 0, z: 0 },
    foot: { x: 0, y: 0, z: 0 },
    toeBase: { x: 0, y: 0, z: 0 },
  },
  leftLeg: {
    upLeg: { x: 0, y: 0, z: 0 },
    leg: { x: 0, y: 0, z: 0 },
    foot: { x: 0, y: 0, z: 0 },
    toeBase: { x: 0, y: 0, z: 0 },
  },
  hipsPositionY: 0,
};
