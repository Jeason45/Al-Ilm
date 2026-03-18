import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  subsequentRakahFatihaOnly,
  rukuBlock,
  sujudBlock,
  tashahudIntermediate,
  riseFromTashahud,
  finalBlock,
} from './_helpers';

/**
 * Dhuhr Hanbali — 4 rak'at fard à voix basse (sirr).
 *
 * Différences clés vs Shafi'i :
 *   - Tashahhud intermédiaire est WAJIB (= fard), pas sunnah
 *   - Pas de rafa' al-yadayn en se levant du tashahhud intermédiaire
 *   - Thana = « Subhanaka Allahumma… »
 *   - Ta'awwudh uniquement dans la 1re rak'a
 *   - Qabd sur la poitrine
 *   - Genoux d'abord pour le sujud
 *   - Tashahhud Ibn Mas'ud
 *   - Tawarruk dans le dernier tashahhud (comme Shafi'i pour les prières 3+ rak'at)
 *
 * Rawatib Hanbali pour le Dhuhr : 4 rak'at avant (2+2) + 2 rak'at après = 6 rak'at.
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const dhuhr: PrayerDefinition = {
  id: 'dhuhr',
  name: 'Dhuhr',
  nameAr: 'الظهر',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière du midi — 4 rak\'at à voix basse (sirr). Qabd sur la poitrine (\'ala as-sadr), thana « Subhanaka Allahumma… » dans la 1re rak\'a, ta\'awwudh dans la 1re rak\'a uniquement. Bismillah silencieuse (pas partie de la Fatiha). Le tashahhud intermédiaire est WAJIB (= fard) en Hanbali (contrairement à Shafi\'i où c\'est sunnah). Rafa\' al-yadayn à 3 endroits. Tawarruk dans le dernier tashahhud. Les rawatib du Dhuhr sont 4 rak\'at avant (2+2) + 2 rak\'at après.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-dhuhr-r1', { jahr: false }),
        ...rukuBlock('h-dhuhr-r1'),
        ...sujudBlock('h-dhuhr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-dhuhr-r2', { jahr: false }),
        ...rukuBlock('h-dhuhr-r2'),
        ...sujudBlock('h-dhuhr-r2'),
        // Tashahhud intermédiaire WAJIB (= fard) en Hanbali
        tashahudIntermediate('h-dhuhr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        // PAS de rafa' al-yadayn ici (contrairement à Shafi'i)
        riseFromTashahud('h-dhuhr-r3'),
        ...subsequentRakahFatihaOnly('h-dhuhr-r3').slice(1),
        ...rukuBlock('h-dhuhr-r3'),
        ...sujudBlock('h-dhuhr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('h-dhuhr-r4'),
        ...rukuBlock('h-dhuhr-r4'),
        ...sujudBlock('h-dhuhr-r4'),
        // Tawarruk dans le dernier tashahhud (prière 4 rak'at = 2 tashahhuds)
        ...finalBlock('h-dhuhr-r4', { tawarruk: true }),
      ],
    },
  ],
};
