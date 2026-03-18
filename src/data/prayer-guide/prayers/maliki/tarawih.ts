import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Tarawih selon l'école Malikite — positions propres à l'école malikite.
 *
 * Position classique : 36 rak'at + 3 witr = 39 au total.
 * Imam Malik dans al-Mudawwana : c'est ce sur quoi les gens de Médine
 * se sont accordés. Les Médinois priaient 36 rak'at pour compenser les
 * tawaf que les Mecquois faisaient entre les séries.
 *
 * Position tardive : 20 rak'at (adoptée par de nombreux savants malikites tardifs).
 *
 * Structure : cycles de 2 rak'at à voix haute (jahr).
 * Classée comme nafilah mandoubah (pas sunnah mu'akkada).
 */
export const tarawih: PrayerDefinition = {
  id: 'tarawih',
  name: 'Tarawih',
  nameAr: 'التراويح',
  ruling: 'mandoub',
  rakaatCount: '36 ou 20',
  description: 'Prière nocturne du Ramadan — cycles de 2 rak\'at à voix haute (jahr). L\'école malikite classique préconise 36 rak\'at (position d\'Imam Malik dans al-Mudawwana, basée sur la pratique des gens de Médine). La position tardive est 20 rak\'at. Le tarawih est une nafilah mandoubah (recommandée) en Malikite, pas une sunnah mu\'akkada. Le terme sunnah mu\'akkada est réservé au Witr et aux prières de l\'Aïd. Le qabd (mains jointes) est permis dans cette prière nafilah.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-tarawih-r1', { jahr: true }),
        ...rukuBlock('m-tarawih-r1'),
        ...sujudBlock('m-tarawih-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-tarawih-r2', { jahr: true }),
        ...rukuBlock('m-tarawih-r2'),
        ...sujudBlock('m-tarawih-r2'),
        ...finalBlock('m-tarawih-r2'),
      ],
    },
  ],
};
