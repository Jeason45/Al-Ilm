import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

// Sunnah Rawatib : 2 rak'at à voix basse (sirr).
export const sunnahRawatib: PrayerDefinition = {
  id: 'sunnah-rawatib',
  name: 'Sunnah Rawatib',
  nameAr: 'السنن الرواتب',
  ruling: 'sunnah-muakkada',
  rakaatCount: 2,
  description: 'Prières surérogatoires régulières — 2 rak\'at à voix basse (sirr). Exemples : 2 avant le Fajr, 4 avant le Dhuhr, 2 après le Dhuhr, 2 après le Maghrib, 2 après l\'Isha. En Hanafite, les 4 sunnah avant le Dhuhr se prient en 4 rak\'at CONTINUES avec un seul salam (comme une prière de 4 rak\'at avec tashahhud intermédiaire). C\'est différent du Chafiite où elles se prient en 2+2 (deux paires de 2 rak\'at).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-rawatib-r1', { jahr: false }),
        ...rukuBlock('h-rawatib-r1'),
        ...sujudBlock('h-rawatib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-rawatib-r2', { jahr: false }),
        ...rukuBlock('h-rawatib-r2'),
        ...sujudBlock('h-rawatib-r2'),
        ...finalBlock('h-rawatib-r2'),
      ],
    },
  ],
};
