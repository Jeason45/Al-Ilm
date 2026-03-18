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
  description: 'Prière de la nuit — 4 rak\'at, voix haute (jahr) pour les 2 premières, voix basse (sirr) pour les 2 dernières.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-isha-r1', { jahr: true }),
        ...rukuBlock('m-isha-r1'),
        ...sujudBlock('m-isha-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-isha-r2', { jahr: true }),
        ...rukuBlock('m-isha-r2'),
        ...sujudBlock('m-isha-r2'),
        tashahudIntermediate('m-isha-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('m-isha-r3'),
        ...subsequentRakahFatihaOnly('m-isha-r3').slice(1),
        ...rukuBlock('m-isha-r3'),
        ...sujudBlock('m-isha-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('m-isha-r4'),
        ...rukuBlock('m-isha-r4'),
        ...sujudBlock('m-isha-r4'),
        ...finalBlock('m-isha-r4'),
      ],
    },
  ],
};
