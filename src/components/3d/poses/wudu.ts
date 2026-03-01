import type { PrayerPoseConfig } from '../types';
import { ZERO_POSE } from './defaults';

/** Lavage des mains */
export const wuduHands: PrayerPoseConfig = { ...ZERO_POSE };

/** Rinçage de la bouche */
export const wuduMouth: PrayerPoseConfig = { ...ZERO_POSE };

/** Rinçage du nez */
export const wuduNose: PrayerPoseConfig = { ...ZERO_POSE };

/** Lavage du visage */
export const wuduFace: PrayerPoseConfig = { ...ZERO_POSE };

/** Lavage des bras */
export const wuduArms: PrayerPoseConfig = { ...ZERO_POSE };

/** Essuyage de la tête */
export const wuduHead: PrayerPoseConfig = { ...ZERO_POSE };

/** Essuyage des oreilles */
export const wuduEars: PrayerPoseConfig = { ...ZERO_POSE };

/** Lavage des pieds */
export const wuduFeet: PrayerPoseConfig = { ...ZERO_POSE };
