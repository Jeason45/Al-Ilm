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
  description: 'Prière du coucher du soleil — 3 rak\'at, voix haute (jahr) pour les 2 premières, voix basse (sirr) pour la 3e. En Malikite, le temps du Maghrib est très restreint — il faut prier dès que le soleil se couche, le temps de faire le wudu, l\'adhan et l\'iqama. Il existe un temps de nécessité (waqt ad-darura) qui s\'étend jusqu\'à l\'entrée du temps de l\'Isha. Le temps préférentiel (waqt al-ikhtiyar) est très restreint, mais la prière reste valide si accomplie dans le temps de nécessité.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-maghrib-r1', { jahr: true }),
        ...rukuBlock('m-maghrib-r1'),
        ...sujudBlock('m-maghrib-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-maghrib-r2', { jahr: true }),
        ...rukuBlock('m-maghrib-r2'),
        ...sujudBlock('m-maghrib-r2'),
        tashahudIntermediate('m-maghrib-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('m-maghrib-r3'),
        ...subsequentRakahFatihaOnly('m-maghrib-r3').slice(1),
        ...rukuBlock('m-maghrib-r3'),
        ...sujudBlock('m-maghrib-r3'),
        ...finalBlock('m-maghrib-r3'),
      ],
    },
  ],
};
