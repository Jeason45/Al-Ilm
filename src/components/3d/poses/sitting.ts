import type { PrayerPoseConfig } from '../types';

/** Julus — assis entre deux prosternations, mains sur les cuisses */
export const julus: PrayerPoseConfig = {
  spine: {
    hips: { x: 0, y: 0, z: 0 },
    spine: { x: 0, y: 0, z: 0 },
    spine1: { x: 0, y: 0, z: 0 },
    spine2: { x: 0, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.15, y: 0, z: 0 },
    head: { x: 0.15, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.3 },
    arm: { x: 0.3, y: 0, z: 1.1 },
    foreArm: { x: 0, y: 0, z: -0.6 },
    hand: { x: 0.3, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.3 },
    arm: { x: 0.3, y: 0, z: -1.1 },
    foreArm: { x: 0, y: 0, z: 0.6 },
    hand: { x: 0.3, y: 0, z: 0 },
  },
  rightLeg: {
    upLeg: { x: -1.6, y: 0, z: 0 },
    leg: { x: 2.2, y: 0, z: 0 },
    foot: { x: 0.3, y: 0, z: 0 },
    toeBase: { x: 0.5, y: 0, z: 0 },
  },
  leftLeg: {
    upLeg: { x: -1.6, y: 0.2, z: 0 },
    leg: { x: 2.2, y: 0, z: 0 },
    foot: { x: 0.3, y: 0, z: 0 },
    toeBase: { x: 0, y: 0, z: 0 },
  },
  hipsPositionY: -0.65,
};

/** Tashahud — assis, index droit levé/pointé */
export const tashahud: PrayerPoseConfig = {
  ...julus,
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.3 },
    arm: { x: 0.3, y: 0, z: 1.1 },
    foreArm: { x: 0, y: -0.4, z: -0.6 },
    hand: { x: 0.3, y: -0.3, z: 0 },
  },
};

/** Salam — assis, tête tournée (d'abord à droite) */
export const salam: PrayerPoseConfig = {
  ...julus,
  head: {
    neck: { x: 0, y: -0.7, z: 0 },
    head: { x: 0, y: -0.5, z: 0 },
  },
};
