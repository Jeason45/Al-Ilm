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
  description: 'Prière de l\'aube — 2 rak\'at à voix haute (jahr). En Malikite, le qunut est récité dans le Fajr (mandoub), avant le ruku\' de la 2e rak\'a. Mains le long du corps (sadl), pas de thana ni de bismillah.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('m-fajr-r1', { jahr: true }),
        ...rukuBlock('m-fajr-r1'),
        ...sujudBlock('m-fajr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        ...subsequentRakahWithSurah('m-fajr-r2', { jahr: true }),
        // Qunut du Fajr (mandoub en Malikite) — avant le ruku'
        {
          id: 'm-fajr-r2-qunut',
          position: 'qiyam',
          ruling: 'mandoub',
          name: 'Qunut du Fajr',
          nameAr: 'القنوت في الصبح',
          dhikr: 'Ô Allah, nous Te demandons aide et nous Te demandons pardon, nous croyons en Toi et nous nous en remettons à Toi, nous Te louons de tout bien, nous Te remercions et ne Te renions pas…',
          dhikrAr: 'اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ ، وَنُؤْمِنُ بِكَ وَنَتَوَكَّلُ عَلَيْكَ ، وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ ، وَنَشْكُرُكَ وَلَا نَكْفُرُكَ ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ ، وَلَكَ نُصَلِّي وَنَسْجُدُ ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ ، وَنَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ',
          dhikrTranslit: 'Allahumma inna nasta\'inuka wa nastaghfiruka, wa nu\'minu bika wa natawakkalu \'alayk, wa nuthni \'alayka al-khayra kullahu, wa nashkuruka wa la nakfuruk, wa nakhla\'u wa natruku man yafjuruk. Allahumma iyyaka na\'budu, wa laka nusalli wa nasjudu, wa ilayka nas\'a wa nahfidu, wa narju rahmataka wa nakhsha \'adhabaka, inna \'adhabaka bil-kuffari mulhiq.',
          notes: 'Le qunut est mandoub (recommandé) dans le Fajr en Malikite selon la position retenue. Certains savants malikites le classent comme sunnah. Il ne se fait que dans cette prière (pas dans le Witr). Récité silencieusement. Les mains ne sont pas levées selon l\'avis le plus répandu, mais certains savants malikites autorisent de les lever. Récité AVANT le ruku\' (position d\'Ibn al-Qasim) ou APRÈS le ruku\' (position attribuée à l\'Imam Malik dans certaines narrations, préférée par ad-Dardir). Les deux positions sont fortes dans l\'école. Ce texte est à titre indicatif. En Malikite, il n\'y a pas de texte unique imposé pour le qunut — toute invocation est permise. Le fidèle peut faire ses propres du\'as.',
        },
        ...rukuBlock('m-fajr-r2'),
        ...sujudBlock('m-fajr-r2'),
        ...finalBlock('m-fajr-r2'),
      ],
    },
  ],
};
