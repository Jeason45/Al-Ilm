import type { PrayerPoseConfig } from '../types';

/** Sujud — prosternation, front au sol, genoux pliés */
export const sujud: PrayerPoseConfig = {
  spine: {
    hips: { x: 0.3, y: 0, z: 0 },
    spine: { x: 0.4, y: 0, z: 0 },
    spine1: { x: 0.3, y: 0, z: 0 },
    spine2: { x: 0.2, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.3, y: 0, z: 0 },
    head: { x: 0.3, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.6, y: 0.3, z: 0.8 },
    foreArm: { x: 0, y: 0, z: -0.8 },
    hand: { x: 0.3, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.6, y: -0.3, z: -0.8 },
    foreArm: { x: 0, y: 0, z: 0.8 },
    hand: { x: 0.3, y: 0, z: 0 },
  },
  rightLeg: {
    upLeg: { x: -1.6, y: 0, z: 0 },
    leg: { x: 2.0, y: 0, z: 0 },
    foot: { x: 0.5, y: 0, z: 0 },
    toeBase: { x: 0.5, y: 0, z: 0 },
  },
  leftLeg: {
    upLeg: { x: -1.6, y: 0, z: 0 },
    leg: { x: 2.0, y: 0, z: 0 },
    foot: { x: 0.5, y: 0, z: 0 },
    toeBase: { x: 0.5, y: 0, z: 0 },
  },
  hipsPositionY: -0.6,
};
