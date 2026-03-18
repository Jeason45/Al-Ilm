import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

export const fajr: PrayerDefinition = {
  id: 'fajr',
  name: 'Fajr (Subh)',
  nameAr: 'الفجر (الصبح)',
  ruling: 'fard',
  rakaatCount: 2,
  description: 'Prière de l\'aube — 2 rak\'at à voix haute (jahr). En Shafi\'i, le qunut est sunnah mu\'akkada dans le Fajr, récité APRÈS le ruku\' de la 2e rak\'a (contrairement au Maliki qui le fait avant le ruku\'). Les mains sont levées pendant le qunut. Mains en qabd (sous la poitrine), bismillah fait partie de la Fatiha, amin à voix haute.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('s-fajr-r1', { jahr: true }),
        ...rukuBlock('s-fajr-r1'),
        ...sujudBlock('s-fajr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('s-fajr-r2', { jahr: true }),
        ...rukuBlock('s-fajr-r2'),
        // Qunut du Fajr (sunnah mu'akkada en Shafi'i) — APRÈS le ruku'
        {
          id: 's-fajr-r2-qunut',
          position: 'qunut',
          ruling: 'sunnah-muakkada',
          name: 'Qunut du Fajr',
          nameAr: 'القنوت في الفجر',
          dhikr: 'O Allah, guide-moi parmi ceux que Tu as guides, accorde-moi le bien-etre parmi ceux a qui Tu l\'as accorde, prends-moi en charge parmi ceux dont Tu as pris la charge, benis pour moi ce que Tu m\'as donne, et protege-moi du mal de ce que Tu as decrete. Tu decernes et nul ne peut decreter sur Toi, nul n\'est humilie que Tu honores, nul n\'est puissant que Tu prends en ennemi, beni sois-Tu notre Seigneur et eleve.',
          dhikrAr: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ ، وَعَافِنِي فِيمَنْ عَافَيْتَ ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ ، وَقِنِي شَرَّ مَا قَضَيْتَ ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ ، وَلَا يَعِزُّ مَنْ عَادَيْتَ ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ',
          dhikrTranslit: 'Allahumma ihdini fiman hadayt, wa \'afini fiman \'afayt, wa tawallani fiman tawallayt, wa barik li fima a\'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda \'alayk, wa innahu la yadhillu man walayt, wa la ya\'izzu man \'adayt, tabarakta Rabbana wa ta\'alayt.',
          notes: 'Le qunut du Fajr est SUNNAH MU\'AKKADA en Shafi\'i (la plus forte categorie parmi les sunnah). Il est recite APRES le ruku\' de la 2e rak\'a (contrairement au Maliki : avant le ruku\'). Les mains SONT levees pendant le qunut (paumes vers le ciel), contrairement au Maliki. Le texte ci-dessus est le texte specifique rapporte dans le hadith de Hasan ibn Ali. L\'imam le recite a voix haute. Le suiveur dit « Amin » a chaque du\'a. Il est sunnah mu\'akkada de conclure le qunut par les salawat sur le Prophete \uFDFA : « wa sallallahu \'ala sayyidina Muhammad wa \'ala alihi wa sahbihi wa sallam ». Apres le qunut, on descend directement en sujud.',
        },
        ...sujudBlock('s-fajr-r2'),
        ...finalBlock('s-fajr-r2'),
      ],
    },
  ],
};
