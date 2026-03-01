import type { PrayerPoseConfig } from '../types';

/** Base wudu : debout, légèrement penché en avant */
const wuduBase: PrayerPoseConfig = {
  spine: {
    hips: { x: 0, y: 0, z: 0 },
    spine: { x: 0.1, y: 0, z: 0 },
    spine1: { x: 0.1, y: 0, z: 0 },
    spine2: { x: 0.05, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.2, y: 0, z: 0 },
    head: { x: 0.15, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.3 },
    arm: { x: 0.2, y: 0, z: 1.0 },
    foreArm: { x: 0, y: 0, z: -0.8 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.3 },
    arm: { x: 0.2, y: 0, z: -1.0 },
    foreArm: { x: 0, y: 0, z: 0.8 },
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

/** Lavage des mains — mains devant, doigts vers le bas */
export const wuduHands: PrayerPoseConfig = {
  ...wuduBase,
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.4, y: -0.3, z: 0.9 },
    foreArm: { x: 0, y: 0, z: -1.2 },
    hand: { x: 0.3, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.4, y: 0.3, z: -0.9 },
    foreArm: { x: 0, y: 0, z: 1.2 },
    hand: { x: 0.3, y: 0, z: 0 },
  },
};

/** Rinçage de la bouche — main droite portée à la bouche */
export const wuduMouth: PrayerPoseConfig = {
  ...wuduBase,
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.3, y: -0.5, z: 0.7 },
    foreArm: { x: 0, y: 0, z: -2.0 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.2, y: 0, z: -1.0 },
    foreArm: { x: 0, y: 0, z: 0.8 },
    hand: { x: 0, y: 0, z: 0 },
  },
};

/** Rinçage du nez — main droite au nez */
export const wuduNose: PrayerPoseConfig = {
  ...wuduMouth,
};

/** Lavage du visage — deux mains au visage */
export const wuduFace: PrayerPoseConfig = {
  ...wuduBase,
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.2, y: -0.5, z: 0.6 },
    foreArm: { x: 0, y: 0, z: -2.0 },
    hand: { x: 0, y: 0, z: 0.2 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.2, y: 0.5, z: -0.6 },
    foreArm: { x: 0, y: 0, z: 2.0 },
    hand: { x: 0, y: 0, z: -0.2 },
  },
};

/** Lavage des bras — bras droit tendu, main gauche le lave */
export const wuduArms: PrayerPoseConfig = {
  ...wuduBase,
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.3, y: -0.3, z: 0.6 },
    foreArm: { x: 0, y: 0, z: -0.4 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.5, y: 0.3, z: -0.5 },
    foreArm: { x: 0, y: 0, z: 1.0 },
    hand: { x: 0.2, y: 0, z: 0 },
  },
};

/** Essuyage de la tête — mains sur la tête */
export const wuduHead: PrayerPoseConfig = {
  ...wuduBase,
  spine: {
    hips: { x: 0, y: 0, z: 0 },
    spine: { x: 0, y: 0, z: 0 },
    spine1: { x: 0, y: 0, z: 0 },
    spine2: { x: 0, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.2, y: 0, z: 0 },
    head: { x: 0.1, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0 },
    arm: { x: -0.6, y: -0.5, z: 0.5 },
    foreArm: { x: 0, y: 0, z: -1.8 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: 0 },
    arm: { x: -0.6, y: 0.5, z: -0.5 },
    foreArm: { x: 0, y: 0, z: 1.8 },
    hand: { x: 0, y: 0, z: 0 },
  },
};

/** Essuyage des oreilles — mains aux oreilles */
export const wuduEars: PrayerPoseConfig = {
  ...wuduHead,
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0 },
    arm: { x: -0.4, y: -0.3, z: 0.5 },
    foreArm: { x: 0, y: 0, z: -1.9 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: 0 },
    arm: { x: -0.4, y: 0.3, z: -0.5 },
    foreArm: { x: 0, y: 0, z: 1.9 },
    hand: { x: 0, y: 0, z: 0 },
  },
};

/** Lavage des pieds — penché, main vers le pied */
export const wuduFeet: PrayerPoseConfig = {
  ...wuduBase,
  spine: {
    hips: { x: 0.2, y: 0, z: 0 },
    spine: { x: 0.3, y: 0, z: 0 },
    spine1: { x: 0.2, y: 0, z: 0 },
    spine2: { x: 0.15, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.1, y: 0, z: 0 },
    head: { x: 0.1, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.5, y: 0, z: 1.0 },
    foreArm: { x: 0, y: 0, z: -0.3 },
    hand: { x: 0.2, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.5, y: 0, z: -1.0 },
    foreArm: { x: 0, y: 0, z: 0.3 },
    hand: { x: 0.2, y: 0, z: 0 },
  },
  rightLeg: {
    upLeg: { x: -0.4, y: 0, z: 0 },
    leg: { x: 0.6, y: 0, z: 0 },
    foot: { x: 0, y: 0, z: 0 },
    toeBase: { x: 0, y: 0, z: 0 },
  },
  leftLeg: {
    upLeg: { x: 0, y: 0, z: 0 },
    leg: { x: 0, y: 0, z: 0 },
    foot: { x: 0, y: 0, z: 0 },
    toeBase: { x: 0, y: 0, z: 0 },
  },
  hipsPositionY: -0.15,
};
