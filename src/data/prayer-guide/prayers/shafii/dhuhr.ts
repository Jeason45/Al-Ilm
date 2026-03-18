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

export const dhuhr: PrayerDefinition = {
  id: 'dhuhr',
  name: 'Dhuhr',
  nameAr: 'الظهر',
  ruling: 'fard',
  rakaatCount: 4,
  description: 'Prière du midi — 4 rak\'at à voix basse (sirr). Mains en qabd (sous la poitrine, au-dessus du nombril), thana + ta\'awwudh + bismillah dans chaque rak\'a. Fatiha fard dans chaque rak\'a y compris pour le ma\'mum. Rafa\' al-yadayn à 4 endroits. En Shafi\'i, les rawatib du Dhuhr sont 4 rak\'at avant + 2 rak\'at après.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-dhuhr-r1', { jahr: false }),
        ...rukuBlock('s-dhuhr-r1'),
        ...sujudBlock('s-dhuhr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-dhuhr-r2', { jahr: false }),
        ...rukuBlock('s-dhuhr-r2'),
        ...sujudBlock('s-dhuhr-r2'),
        tashahudIntermediate('s-dhuhr-r2'),
      ],
    },
    {
      number: 3,
      steps: [
        riseFromTashahud('s-dhuhr-r3'),
        ...subsequentRakahFatihaOnly('s-dhuhr-r3').slice(1),
        ...rukuBlock('s-dhuhr-r3'),
        ...sujudBlock('s-dhuhr-r3'),
      ],
    },
    {
      number: 4,
      steps: [
        ...subsequentRakahFatihaOnly('s-dhuhr-r4'),
        ...rukuBlock('s-dhuhr-r4'),
        ...sujudBlock('s-dhuhr-r4'),
        ...finalBlock('s-dhuhr-r4'),
      ],
    },
  ],
};
