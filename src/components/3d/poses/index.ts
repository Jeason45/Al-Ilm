import type { PrayerPoseConfig } from '../types';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import { qiyam, takbir, qiyamHands, itidal, qunut } from './standing';
import { ruku } from './bowing';
import { sujud } from './prostration';
import { julus, tashahud, salam } from './sitting';
import { wuduHands, wuduMouth, wuduNose, wuduFace, wuduArms, wuduHead, wuduEars, wuduFeet } from './wudu';

export const PRAYER_POSES: Record<PrayerPositionId, PrayerPoseConfig> = {
  'qiyam': qiyam,
  'takbir': takbir,
  'qiyam-hands': qiyamHands,
  'ruku': ruku,
  'itidal': itidal,
  'sujud': sujud,
  'julus': julus,
  'tashahud': tashahud,
  'salam': salam,
  'qunut': qunut,
  'wudu-hands': wuduHands,
  'wudu-mouth': wuduMouth,
  'wudu-nose': wuduNose,
  'wudu-face': wuduFace,
  'wudu-arms': wuduArms,
  'wudu-head': wuduHead,
  'wudu-ears': wuduEars,
  'wudu-feet': wuduFeet,
};

export function getPoseForPosition(id: PrayerPositionId): PrayerPoseConfig | undefined {
  return PRAYER_POSES[id];
}
