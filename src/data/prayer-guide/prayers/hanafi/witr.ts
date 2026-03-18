import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  tashahudIntermediate,
  riseFromTashahud,
  finalBlock,
} from './_helpers';

export const witr: PrayerDefinition = {
  id: 'witr',
  name: 'Witr',
  nameAr: 'الوتر',
  ruling: 'wajib',
  rakaatCount: 3,
  description: 'Prière impaire après l\'Isha — 3 rak\'at. Wajib (obligatoire) dans l\'école hanafite. Réciter une sourate dans chaque rak\'a. Du\'a al-Qunut à la 3e rak\'a avant le ruku\'.',
  rakaat: [
    // R1 : voix basse, avec surah
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-witr-r1', { jahr: true }),
        ...rukuBlock('h-witr-r1'),
        ...sujudBlock('h-witr-r1'),
      ],
    },
    // R2 : avec surah + tashahud intermédiaire
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('h-witr-r2', { jahr: true }),
        ...rukuBlock('h-witr-r2'),
        ...sujudBlock('h-witr-r2'),
        tashahudIntermediate('h-witr-r2'),
      ],
    },
    // R3 : avec surah + qunut AVANT ruku + final
    {
      number: 3,
      steps: [
        riseFromTashahud('h-witr-r3'),
        {
          id: 'h-witr-r3-fatiha',
          position: 'qiyam-hands',
          ruling: 'wajib',
          name: 'Récitation de la Fatiha',
          nameAr: 'قراءة الفاتحة',
          notes: 'Sourate Al-Ikhlas recommandée après la Fatiha.',
        },
        {
          id: 'h-witr-r3-surah',
          position: 'qiyam-hands',
          ruling: 'wajib',
          name: 'Récitation d\'une sourate',
          nameAr: 'قراءة سورة',
          notes: 'Réciter une sourate dans chaque rak\'a du witr.',
        },
        {
          id: 'h-witr-r3-takbir-qunut',
          position: 'qiyam-hands',
          ruling: 'sunnah',
          name: 'Takbir du Qunut',
          nameAr: 'تكبيرة القنوت',
          dhikr: 'Allah est le plus Grand',
          dhikrAr: 'الله أكبر',
          dhikrTranslit: 'Allahu Akbar',
          notes: 'Lever les mains au niveau des oreilles (comme au takbir d\'ouverture) puis les rabaisser. Ce takbir supplémentaire est sunnah dans le witr hanafite (le du\'a al-qunut lui-même est wajib).',
        },
        {
          id: 'h-witr-r3-qunut',
          position: 'qunut',
          ruling: 'wajib',
          name: 'Du\'a al-Qunut',
          nameAr: 'دعاء القنوت',
          dhikr: 'Ô Allah, nous implorons Ton aide et Ton pardon, nous croyons en Toi, nous nous en remettons à Toi, nous Te louons de tout bien, nous Te remercions et ne Te renions pas. Nous délaissons et abandonnons quiconque Te désobéit. Ô Allah, c\'est Toi seul que nous adorons, pour Toi seul nous prions et nous prosternons. Vers Toi nous accourons et nous empressons. Nous espérons Ta miséricorde et craignons Ton châtiment. Certes Ton châtiment atteindra les mécréants.',
          dhikrAr: 'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ ، نَشْكُرُكَ وَلَا نَكْفُرُكَ وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ وَلَكَ نُصَلِّي وَنَسْجُدُ ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ ، نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ',
          dhikrTranslit: 'Allahumma inna nasta\'inuka wa nastaghfiruka wa nu\'minu bika wa natawakkalu \'alayka wa nuthni \'alaykal-khayra kullahu, nashkuruka wa la nakfuruka wa nakhla\'u wa natruku man yafjuruk. Allahumma iyyaka na\'budu wa laka nusalli wa nasjud, wa ilayka nas\'a wa nahfid, narju rahmataka wa nakhsha \'adhabak, inna \'adhabaka bil-kuffari mulhiq.',
          notes: 'Mains levées, paumes vers le ciel. Le qunut est wajib dans le witr hanafite et se récite AVANT le ruku\' (contrairement aux Chafiites qui le récitent après).',
          madhabNote: 'En Hanafite, le qunut se récite AVANT le ruku\' TOUTE L\'ANNÉE. En Chafiite, le qunut se récite APRÈS le ruku\' (pas avant) et uniquement dans le Witr pendant la seconde moitié du Ramadan (à partir de la nuit du 16).',
        },
        ...rukuBlock('h-witr-r3'),
        ...sujudBlock('h-witr-r3'),
        ...finalBlock('h-witr-r3'),
      ],
    },
  ],
};
