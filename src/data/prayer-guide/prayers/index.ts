import type { PrayerDefinition, PrayerId, MadhabId } from '../types';
import { allHanafiPrayers } from './hanafi';
import { allMalikiPrayers } from './maliki';
import { allShafiiPrayers } from './shafii';
import { allHanbaliPrayers } from './hanbali';

// Re-export les prières Hanafi comme défaut (école par défaut)
export {
  fajr, dhuhr, asr, maghrib, isha, witr, sunnahRawatib, tarawih,
} from './hanafi';

export const allPrayers: PrayerDefinition[] = allHanafiPrayers;

export function getPrayerById(id: PrayerId): PrayerDefinition | undefined {
  return allPrayers.find(p => p.id === id);
}

// ── API par madhab ──

export function getPrayersByMadhab(madhab: MadhabId): PrayerDefinition[] {
  switch (madhab) {
    case 'hanafi': return allHanafiPrayers;
    case 'maliki': return allMalikiPrayers;
    case 'shafii': return allShafiiPrayers;
    case 'hanbali': return allHanbaliPrayers;
    default: return allHanafiPrayers;
  }
}

export function getPrayerByMadhab(madhab: MadhabId, id: PrayerId): PrayerDefinition | undefined {
  return getPrayersByMadhab(madhab).find(p => p.id === id);
}
