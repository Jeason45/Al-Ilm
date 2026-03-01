import type { PrayerPoseConfig } from '../types';
import { ZERO_POSE } from './defaults';

/** Assis entre deux prosternations */
export const julus: PrayerPoseConfig = { ...ZERO_POSE };

/** Tashahud (assis, index levé) */
export const tashahud: PrayerPoseConfig = { ...ZERO_POSE };

/** Salam (tourner la tête à droite puis gauche) */
export const salam: PrayerPoseConfig = { ...ZERO_POSE };
