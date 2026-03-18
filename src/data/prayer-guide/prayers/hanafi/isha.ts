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

export const isha: PrayerDefinition = {
  id: 'isha',
  name: 'Isha',
  nameAr: 'العشاء',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière de la nuit — 4 rak\'at, voix haute (jahr) aux 2 premières, voix basse (sirr) aux 2 dernières.',
  rakaat: [
    // R1 & R2 : voix haute (jahr)
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
    // R3 & R4 : voix basse (sirr), Fatiha seule
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
        ...finalBlock('h-isha-r4'),
      ],
    },
  ],
};
