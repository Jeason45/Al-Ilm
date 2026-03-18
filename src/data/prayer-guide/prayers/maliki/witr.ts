import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Witr Malikite — sunnah mu'akkada.
 *
 * Structure : Shaf' (2 rak'at) + Witr (1 rak'a) = 3 rak'at au total.
 * Les 2 premières rak'at (shaf') se terminent par un salam,
 * puis on prie 1 rak'a seule (witr) avec un second salam.
 *
 * Différences vs Hanafi :
 *   - Sunnah mu'akkada (pas wajib comme Hanafi)
 *   - 2+1 séparés par un salam (pas 3 continus comme Hanafi)
 *   - PAS de qunut dans le witr (le qunut est dans le Fajr en Malikite)
 *   - PAS de takbir al-qunut
 *
 * Note : On représente ici le cycle Shaf'+Witr (2+1).
 * Le shaf' (2 rak'at) est représenté comme R1 et R2 avec salam,
 * puis le witr (1 rak'a) comme R3 avec son propre takbir et salam.
 */
export const witr: PrayerDefinition = {
  id: 'witr',
  name: 'Witr',
  nameAr: 'الوتر',
  ruling: 'sunnah-muakkada',
  rakaatCount: '2+1',
  description: 'Prière impaire après le Isha — sunnah mu\'akkada (la plus forte sunnah en Malikite). Se prie en 2 rak\'at (shaf\') suivies d\'1 rak\'a (witr), séparées par un salam. PAS de qunut dans le witr (le qunut est au Fajr en Malikite). Certains savants malikites tardifs autorisent le qunut dans le Witr pendant la seconde moitié du Ramadan, mais la position mu\'tamad est qu\'il n\'y a PAS de qunut dans le Witr. Voix haute. Prier le witr comme 3 rak\'at continues (à la manière du Maghrib) est déconseillé (khilaf al-awla) voire makruh selon certains savants. Le qabd (mains jointes) est permis dans cette prière nafilah.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-witr-r1', { jahr: true }),
        ...rukuBlock('m-witr-r1'),
        ...sujudBlock('m-witr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-witr-r2', { jahr: true }),
        ...rukuBlock('m-witr-r2'),
        ...sujudBlock('m-witr-r2'),
        ...finalBlock('m-witr-r2'),
        // Note indiquant la séparation
        {
          id: 'm-witr-r2-separation',
          position: 'salam',
          ruling: 'sunnah',
          name: 'Fin du Shaf\' — Début du Witr',
          nameAr: 'نهاية الشفع — بداية الوتر',
          notes: 'Le shaf\' (2 rak\'at) est terminé. Se lever pour prier la rak\'a impaire (witr) séparément, avec un nouveau takbir al-ihram.',
        },
      ],
    },
    {
      number: 3,
      steps: [
        ...firstRakahOpening('m-witr-r3', { jahr: true }),
        ...rukuBlock('m-witr-r3'),
        ...sujudBlock('m-witr-r3'),
        ...finalBlock('m-witr-r3'),
      ],
    },
  ],
};
