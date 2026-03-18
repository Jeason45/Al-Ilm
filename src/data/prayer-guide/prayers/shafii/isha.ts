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
  description: 'Prière de la nuit — 4 rak\'at, voix haute (jahr) pour les 2 premières, voix basse (sirr) pour les 2 dernières. En Shafi\'i, les rawatib du Isha sont 2 rak\'at après la prière. Le Witr se prie après le Isha.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-isha-r1', { jahr: true }),
        ...rukuBlock('s-isha-r1'),
        ...sujudBlock('s-isha-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-isha-r2', { jahr: true }),
        ...rukuBlock('s-isha-r2'),
        ...sujudBlock('s-isha-r2'),
        tashahudIntermediate('s-isha-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('s-isha-r3'),
        ...subsequentRakahFatihaOnly('s-isha-r3').slice(1),
        ...rukuBlock('s-isha-r3'),
        ...sujudBlock('s-isha-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('s-isha-r4'),
        ...rukuBlock('s-isha-r4'),
        ...sujudBlock('s-isha-r4'),
        ...finalBlock('s-isha-r4'),
      ],
    },
  ],
};
