import type { PrayerDefinition, PrayerId } from '../types';
import { fajr } from './fajr';
import { dhuhr } from './dhuhr';
import { asr } from './asr';
import { maghrib } from './maghrib';
import { isha } from './isha';
import { witr } from './witr';
import { sunnahRawatib } from './sunnah-rawatib';
import { tarawih } from './tarawih';

export { fajr, dhuhr, asr, maghrib, isha, witr, sunnahRawatib, tarawih };

export const allPrayers: PrayerDefinition[] = [
  fajr, dhuhr, asr, maghrib, isha, witr, sunnahRawatib, tarawih,
];

export function getPrayerById(id: PrayerId): PrayerDefinition | undefined {
  return allPrayers.find(p => p.id === id);
}
