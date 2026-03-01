import type { PrayerPoseConfig } from '../types';
import { ZERO_POSE } from './defaults';

/** Debout neutre */
export const qiyam: PrayerPoseConfig = { ...ZERO_POSE };

/** Mains levées pour takbir al-ihram */
export const takbir: PrayerPoseConfig = { ...ZERO_POSE };

/** Debout, mains croisées sur la poitrine */
export const qiyamHands: PrayerPoseConfig = { ...ZERO_POSE };

/** Redressement après ruku */
export const itidal: PrayerPoseConfig = { ...ZERO_POSE };

/** Qunut (mains levées pour dua) */
export const qunut: PrayerPoseConfig = { ...ZERO_POSE };
