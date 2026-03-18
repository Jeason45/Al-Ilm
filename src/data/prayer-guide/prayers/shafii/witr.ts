import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Witr Shafi'i — sunnah MU'AKKADA (comme Maliki, PAS wajib comme Hanafi).
 *
 * Structure : le minimum est 1 rak'a seule. Le plus courant est 2+1 (shaf' + witr)
 * separes par un salam. On peut aussi prier 1, 3, 5, 7, 9, ou 11 rak'at.
 *
 * Differences vs Maliki :
 *   - Sunnah mu'akkada dans les deux ecoles
 *   - Qunut dans le witr uniquement pendant la 2e moitie de Ramadan (pas tout le temps)
 *   - Memes texte de qunut que le Fajr
 *
 * Differences vs Hanafi :
 *   - Sunnah mu'akkada (pas wajib comme Hanafi)
 *   - 2+1 separes par un salam (pas 3 continus comme Hanafi)
 *   - Pas de qunut systematique (Hanafi : qunut dans chaque witr)
 *
 * Note : On represente ici le cycle 2+1 (le plus courant).
 */
export const witr: PrayerDefinition = {
  id: 'witr',
  name: 'Witr',
  nameAr: 'الوتر',
  ruling: 'sunnah-muakkada',
  rakaatCount: '2+1',
  description: 'Prière impaire après le Isha — SUNNAH MU\'AKKADA en Shafi\'i (comme Maliki, pas wajib comme Hanafi — la différence est avec le Hanafi qui la considère wajib). Le minimum est 1 rak\'a seule. Le plus courant : 2 rak\'at (shaf\') avec salam, puis 1 rak\'a (witr) avec salam. Peut être 1, 3, 5, 7, 9 ou 11 rak\'at. Le qunut dans le witr ne se fait que pendant la 2e moitié du Ramadan (les 15 dernières nuits). Voix haute. Qabd (sous la poitrine, au-dessus du nombril).',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-witr-r1', { jahr: true }),
        ...rukuBlock('s-witr-r1'),
        ...sujudBlock('s-witr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-witr-r2', { jahr: true }),
        ...rukuBlock('s-witr-r2'),
        ...sujudBlock('s-witr-r2'),
        ...finalBlock('s-witr-r2'),
        // Note indiquant la separation
        {
          id: 's-witr-r2-separation',
          position: 'salam',
          ruling: 'sunnah',
          name: 'Fin du Shaf\' — Debut du Witr',
          nameAr: 'نهاية الشفع — بداية الوتر',
          notes: 'Le shaf\' (2 rak\'at) est termine. Se lever pour prier la rak\'a impaire (witr) separement, avec un nouveau takbir al-ihram. Cette separation par un salam est la methode preferee en Shafi\'i (contrairement aux 3 rak\'at continues du Hanafi).',
        },
      ],
    },
    {
      number: 3,
      steps: [
        ...firstRakahOpening('s-witr-r3', { jahr: true }),
        ...rukuBlock('s-witr-r3'),
        // Qunut du Witr (seulement 2e moitie de Ramadan)
        {
          id: 's-witr-r3-qunut',
          position: 'qunut',
          ruling: 'sunnah',
          name: 'Qunut du Witr (2e moitie de Ramadan uniquement)',
          nameAr: 'القنوت في الوتر (النصف الثاني من رمضان)',
          dhikr: 'O Allah, guide-moi parmi ceux que Tu as guides, accorde-moi le bien-etre parmi ceux a qui Tu l\'as accorde, prends-moi en charge parmi ceux dont Tu as pris la charge, benis pour moi ce que Tu m\'as donne, et protege-moi du mal de ce que Tu as decrete…',
          dhikrAr: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ ، وَعَافِنِي فِيمَنْ عَافَيْتَ ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ ، وَقِنِي شَرَّ مَا قَضَيْتَ ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ ، وَلَا يَعِزُّ مَنْ عَادَيْتَ ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
          dhikrTranslit: 'Allahumma ihdini fiman hadayt, wa \'afini fiman \'afayt, wa tawallani fiman tawallayt, wa barik li fima a\'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda \'alayk, wa innahu la yadhillu man walayt, wa la ya\'izzu man \'adayt, tabarakta Rabbana wa ta\'alayt.',
          notes: 'Le qunut dans le Witr est sunnah en Shafi\'i UNIQUEMENT à partir de la nuit du 16 Ramadan (soit la seconde moitié du mois). En dehors de cette période, il n\'y a PAS de qunut dans le witr (contrairement au Hanafi qui le fait tout le temps). Récité APRÈS le ruku\'. Les mains sont levées (paumes vers le ciel). Même texte que le qunut du Fajr. Si ce n\'est pas la seconde moitié du Ramadan, on saute cette étape et on descend directement en sujud après le ruku\'.',
        },
        ...sujudBlock('s-witr-r3'),
        ...finalBlock('s-witr-r3'),
      ],
    },
  ],
};
