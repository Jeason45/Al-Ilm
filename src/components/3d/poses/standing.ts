import type { PrayerPoseConfig } from '../types';

/** Debout neutre — bras le long du corps */
export const qiyam: PrayerPoseConfig = {
  spine: {
    hips: { x: 0, y: 0, z: 0 },
    spine: { x: 0, y: 0, z: 0 },
    spine1: { x: 0, y: 0, z: 0 },
    spine2: { x: 0, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.1, y: 0, z: 0 },
    head: { x: 0.1, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.3 },
    arm: { x: 0.2, y: 0, z: 1.2 },
    foreArm: { x: 0, y: 0, z: 0 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.3 },
    arm: { x: 0.2, y: 0, z: -1.2 },
    foreArm: { x: 0, y: 0, z: 0 },
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

/** Takbir al-Ihram — mains levées aux oreilles */
export const takbir: PrayerPoseConfig = {
  spine: {
    hips: { x: 0, y: 0, z: 0 },
    spine: { x: 0, y: 0, z: 0 },
    spine1: { x: 0, y: 0, z: 0 },
    spine2: { x: 0, y: 0, z: 0 },
  },
  head: {
    neck: { x: 0.1, y: 0, z: 0 },
    head: { x: 0.1, y: 0, z: 0 },
  },
  rightArm: {
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: -0.3, y: -0.3, z: 0.6 },
    foreArm: { x: 0, y: 0, z: -1.8 },
    hand: { x: 0, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: -0.3, y: 0.3, z: -0.6 },
    foreArm: { x: 0, y: 0, z: 1.8 },
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

/** Debout mains croisées sur la poitrine (main droite sur poignet gauche) */
export const qiyamHands: PrayerPoseConfig = {
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
    arm: { x: 0.4, y: -0.5, z: 1.1 },
    foreArm: { x: 0, y: 0, z: -1.6 },
    hand: { x: 0, y: -0.3, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.3 },
    arm: { x: 0.4, y: 0.5, z: -1.1 },
    foreArm: { x: 0, y: 0, z: 1.6 },
    hand: { x: 0, y: 0.3, z: 0 },
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

/** Redressement après ruku — debout, bras le long du corps */
export const itidal: PrayerPoseConfig = { ...qiyam };

/** Qunut — debout, mains levées paumes vers le ciel à hauteur de poitrine */
export const qunut: PrayerPoseConfig = {
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
    shoulder: { x: 0, y: 0, z: 0.2 },
    arm: { x: 0.1, y: -0.2, z: 0.7 },
    foreArm: { x: 0, y: 0, z: -1.4 },
    hand: { x: -0.5, y: 0, z: 0 },
  },
  leftArm: {
    shoulder: { x: 0, y: 0, z: -0.2 },
    arm: { x: 0.1, y: 0.2, z: -0.7 },
    foreArm: { x: 0, y: 0, z: 1.4 },
    hand: { x: -0.5, y: 0, z: 0 },
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
