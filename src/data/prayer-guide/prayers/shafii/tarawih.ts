import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Tarawih selon l'ecole Shafi'i.
 *
 * Position mashhur (an-Nawawi dans al-Majmu') : 20 rak'at.
 * Base : pratique de 'Umar ibn al-Khattab qui a reuni les gens
 * derriere Ubayy ibn Ka'b pour 20 rak'at.
 *
 * 8 rak'at est aussi valide (base sur le hadith d'A'isha).
 *
 * Structure : cycles de 2 rak'at a voix haute (jahr),
 * avec une pause (tarwiha) toutes les 4 rak'at.
 *
 * Classee comme sunnah mu'akkada.
 */
export const tarawih: PrayerDefinition = {
  id: 'tarawih',
  name: 'Tarawih',
  nameAr: 'التراويح',
  ruling: 'sunnah-muakkada',
  rakaatCount: '20 ou 8',
  description: 'Prière nocturne du Ramadan — cycles de 2 rak\'at à voix haute (jahr). La position mashhur en Shafi\'i (an-Nawawi dans al-Majmu\') est 20 rak\'at, basée sur la pratique de \'Umar ibn al-Khattab. 8 rak\'at est aussi valide. Sunnah mu\'akkada. Chaque cycle de 2 rak\'at se termine par un salam. Une pause (tarwiha) est sunnah toutes les 4 rak\'at. Qabd (sous la poitrine, au-dessus du nombril).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-tarawih-r1', { jahr: true }),
        ...rukuBlock('s-tarawih-r1'),
        ...sujudBlock('s-tarawih-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-tarawih-r2', { jahr: true }),
        ...rukuBlock('s-tarawih-r2'),
        ...sujudBlock('s-tarawih-r2'),
        ...finalBlock('s-tarawih-r2'),
      ],
    },
  ],
};
