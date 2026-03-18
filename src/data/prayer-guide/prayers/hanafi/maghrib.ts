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

export const maghrib: PrayerDefinition = {
  id: 'maghrib',
  name: 'Maghrib',
  nameAr: 'المغرب',
  ruling: 'fard',
  rakaatCount: 3,
  description: 'Prière du coucher du soleil — 3 rak\'at, voix haute (jahr) aux 2 premières, voix basse (sirr) à la 3e.',
  rakaat: [
    // R1 : voix haute
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-magh-r1', { jahr: true }),
        ...rukuBlock('h-magh-r1'),
        ...sujudBlock('h-magh-r1'),
      ],
    },
    // R2 : voix haute + tashahud intermédiaire
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-magh-r2', { jahr: true }),
        ...rukuBlock('h-magh-r2'),
        ...sujudBlock('h-magh-r2'),
        tashahudIntermediate('h-magh-r2'),
      ],
    },
    // R3 : voix basse, Fatiha seule + final
    {
      number: 3,
      steps: [
        riseFromTashahud('h-magh-r3'),
        ...subsequentRakahFatihaOnly('h-magh-r3').slice(1),
        ...rukuBlock('h-magh-r3'),
        ...sujudBlock('h-magh-r3'),
        ...finalBlock('h-magh-r3'),
      ],
    },
  ],
};
