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
  description: 'Prière du coucher du soleil — 3 rak\'at, voix haute (jahr) pour les 2 premières, voix basse (sirr) pour la 3e. En Shafi\'i, les rawatib du Maghrib sont 2 rak\'at après la prière. Mains en qabd (sous la poitrine, au-dessus du nombril), bismillah fait partie de la Fatiha, amin à voix haute dans les 2 premières rak\'at.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-maghrib-r1', { jahr: true }),
        ...rukuBlock('s-maghrib-r1'),
        ...sujudBlock('s-maghrib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-maghrib-r2', { jahr: true }),
        ...rukuBlock('s-maghrib-r2'),
        ...sujudBlock('s-maghrib-r2'),
        tashahudIntermediate('s-maghrib-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('s-maghrib-r3'),
        ...subsequentRakahFatihaOnly('s-maghrib-r3').slice(1),
        ...rukuBlock('s-maghrib-r3'),
        ...sujudBlock('s-maghrib-r3'),
        ...finalBlock('s-maghrib-r3'),
      ],
    },
  ],
};
