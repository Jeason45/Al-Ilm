import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

// Tarawih : cycles de 2 rak'at à voix haute (jahr).
export const tarawih: PrayerDefinition = {
  id: 'tarawih',
  name: 'Tarawih',
  nameAr: 'التراويح',
  ruling: 'sunnah-muakkada',
  rakaatCount: 20,
  description: 'Prière nocturne du Ramadan — 20 rak\'at (10 cycles de 2) à voix haute (jahr). C\'est la position mu\'tamad (établie) de l\'école hanafite, basée sur la pratique de \'Umar ibn al-Khattab et le consensus des Compagnons. Certains savants contemporains considèrent 8 rak\'at comme permissible, mais 20 reste la position officielle du madhhab.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-tarawih-r1', { jahr: true }),
        ...rukuBlock('h-tarawih-r1'),
        ...sujudBlock('h-tarawih-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-tarawih-r2', { jahr: true }),
        ...rukuBlock('h-tarawih-r2'),
        ...sujudBlock('h-tarawih-r2'),
        ...finalBlock('h-tarawih-r2'),
      ],
    },
  ],
};
