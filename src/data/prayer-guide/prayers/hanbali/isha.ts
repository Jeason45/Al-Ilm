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
 * Isha Hanbali — 4 rak'at fard, voix haute pour les 2 premières, voix basse pour les 2 dernières.
 *
 * Rawatib Hanbali pour le Isha : 2 rak'at après la prière (sunnah mu'akkada).
 * Le Witr se prie après le Isha.
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const isha: PrayerDefinition = {
  id: 'isha',
  name: 'Isha',
  nameAr: 'العشاء',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière de la nuit — 4 rak\'at, voix haute (jahr) pour les 2 premières, voix basse (sirr) pour les 2 dernières. Qabd sur la poitrine, tashahhud intermédiaire WAJIB (= fard), rafa\' al-yadayn à 3 endroits, genoux d\'abord pour le sujud. Tawarruk dans le dernier tashahhud. Les rawatib du Isha sont 2 rak\'at après la prière. Le Witr se prie après le Isha.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-isha-r1', { jahr: true }),
        ...rukuBlock('h-isha-r1'),
        ...sujudBlock('h-isha-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-isha-r2', { jahr: true }),
        ...rukuBlock('h-isha-r2'),
        ...sujudBlock('h-isha-r2'),
        tashahudIntermediate('h-isha-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('h-isha-r3'),
        ...subsequentRakahFatihaOnly('h-isha-r3').slice(1),
        ...rukuBlock('h-isha-r3'),
        ...sujudBlock('h-isha-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('h-isha-r4'),
        ...rukuBlock('h-isha-r4'),
        ...sujudBlock('h-isha-r4'),
        ...finalBlock('h-isha-r4', { tawarruk: true }),
      ],
    },
  ],
};
