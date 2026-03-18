import type { PrayerDefinition } from '../../types';
import {
  firstRakahOpening,
  subsequentRakahWithSurah,
  rukuBlock,
  sujudBlock,
  finalBlock,
} from './_helpers';

/**
 * Witr Hanbali — sunnah MU'AKKADA (pas wajib comme Hanafi). Shafi'i le classe aussi sunnah mu'akkada.
 *
 * Structure : le minimum est 1 rak'a seule. Peut être 1, 3, 5, 7, 9, ou 11 rak'at.
 * La méthode PRÉFÉRÉE en Hanbali pour 3 rak'at :
 *   3 rak'at CONTINUES avec tashahhud UNIQUEMENT dans la DERNIÈRE rak'a.
 *   On ne s'assoit PAS après la 2e rak'a (pas de tashahhud intermédiaire).
 *   C'est l'INVERSE de Shafi'i qui fait 2+1 séparés par un salam.
 *
 * Qunut du Witr :
 *   - TOUTE L'ANNÉE (contrairement à Shafi'i : seulement 2e moitié de Ramadan)
 *   - APRÈS le ruku' de la dernière rak'a
 *   - Mains levées
 *   - Texte : du'a de Hasan ibn Ali + addition du qunut de 'Umar
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi'.
 */
export const witr: PrayerDefinition = {
  id: 'witr',
  name: 'Witr',
  nameAr: 'الوتر',
  ruling: 'sunnah-muakkada',
  rakaatCount: 3,
  madhabNote: 'Le Witr est sunnah MU\'AKKADA en Hanbali (comme en Shafi\'i). En Hanafi, il est wajib. La différence avec Shafi\'i est la STRUCTURE (3 continues vs 2+1) et le qunut (toute l\'année vs 2e moitié de Ramadan).',
  description: 'Prière impaire après le Isha — sunnah MU\'AKKADA en Hanbali. Le minimum est 1 rak\'a. La méthode préférée pour 3 rak\'at : 3 continues SANS tashahhud intermédiaire (on ne s\'assied pas après la 2e). C\'est l\'inverse de Shafi\'i qui fait 2+1 séparés par un salam. Le qunut est récité TOUTE L\'ANNÉE après le ruku\' de la dernière rak\'a (contrairement à Shafi\'i : seulement en 2e moitié de Ramadan). Il est sunnah de réciter : Sourate al-A\'la (1re rak\'a), Sourate al-Kafirun (2e rak\'a) et Sourate al-Ikhlas (3e rak\'a). Voix haute. Qabd sur la poitrine.',
  rakaat: [
    {
      number: 1,
      steps: [
        ...firstRakahOpening('h-witr-r1', { jahr: true }),
        ...rukuBlock('h-witr-r1'),
        ...sujudBlock('h-witr-r1'),
      ],
    },
    {
      number: 2,
      steps: [
        // PAS de tashahhud intermédiaire dans le Witr 3 rak'at en Hanbali
        // On se relève directement pour la 3e rak'a
        ...subsequentRakahWithSurah('h-witr-r2', { jahr: true }),
        ...rukuBlock('h-witr-r2'),
        ...sujudBlock('h-witr-r2'),
        // Note : PAS de tashahhud ici — on se lève directement
        {
          id: 'h-witr-r2-no-tashahud',
          position: 'julus',
          ruling: 'sunnah',
          name: 'Se lever directement (pas de tashahhud)',
          nameAr: 'القيام مباشرة (بدون تشهد)',
          notes: 'En Hanbali, pour le Witr de 3 rak\'at, on ne s\'assied PAS pour un tashahhud intermédiaire après la 2e rak\'a. On se lève directement pour la 3e rak\'a. C\'est la méthode PRÉFÉRÉE dans le madhhab. Cela diffère de Shafi\'i qui fait 2+1 séparés par un salam, et de Hanafi qui fait 3 continues mais AVEC tashahhud après la 2e. Réf. : Zad al-Mustaqni\', Al-Mughni.',
        },
      ],
    },
    {
      number: 3,
      steps: [
        ...subsequentRakahWithSurah('h-witr-r3', { jahr: true }).slice(1),
        ...rukuBlock('h-witr-r3'),
        // Qunut du Witr — TOUTE L'ANNÉE en Hanbali (après le ruku')
        {
          id: 'h-witr-r3-qunut',
          position: 'qunut',
          ruling: 'sunnah',
          name: 'Qunut du Witr (toute l\'année)',
          nameAr: 'القنوت في الوتر (طوال السنة)',
          dhikr: 'Ô Allah, guide-moi parmi ceux que Tu as guidés, accorde-moi le bien-être parmi ceux à qui Tu l\'as accordé, prends-moi en charge parmi ceux dont Tu as pris la charge, bénis pour moi ce que Tu m\'as donné, et protège-moi du mal de ce que Tu as décrété. Tu décrètes et nul ne peut décréter sur Toi, nul n\'est humilié que Tu honores, nul n\'est puissant que Tu prends en ennemi, béni sois-Tu notre Seigneur et élevé. Ô Allah, nous Te demandons aide, nous Te demandons pardon, nous Te demandons guidance, nous croyons en Toi, nous nous repentons vers Toi, nous nous en remettons à Toi, et nous Te louons de tout bien, nous Te remercions et ne Te renions pas, nous abandonnons et délaissons quiconque Te désobéit. Ô Allah, c\'est Toi que nous adorons, c\'est pour Toi que nous prions et nous prosternons, c\'est vers Toi que nous accourons et nous empressons, nous espérons Ta miséricorde et craignons Ton châtiment, certes Ton châtiment atteint les mécréants.',
          dhikrAr: 'اللَّهُمَّ اهْدِنِي فِيمَنْ هَدَيْتَ ، وَعَافِنِي فِيمَنْ عَافَيْتَ ، وَتَوَلَّنِي فِيمَنْ تَوَلَّيْتَ ، وَبَارِكْ لِي فِيمَا أَعْطَيْتَ ، وَقِنِي شَرَّ مَا قَضَيْتَ ، فَإِنَّكَ تَقْضِي وَلَا يُقْضَى عَلَيْكَ ، وَإِنَّهُ لَا يَذِلُّ مَنْ وَالَيْتَ ، وَلَا يَعِزُّ مَنْ عَادَيْتَ ، تَبَارَكْتَ رَبَّنَا وَتَعَالَيْتَ ، اللَّهُمَّ إِنَّا نَسْتَعِينُكَ وَنَسْتَغْفِرُكَ وَنُثْنِي عَلَيْكَ الْخَيْرَ كُلَّهُ ، نَشْكُرُكَ وَلَا نَكْفُرُكَ ، وَنَخْلَعُ وَنَتْرُكُ مَنْ يَفْجُرُكَ ، اللَّهُمَّ إِيَّاكَ نَعْبُدُ ، وَلَكَ نُصَلِّي وَنَسْجُدُ ، وَإِلَيْكَ نَسْعَى وَنَحْفِدُ ، نَرْجُو رَحْمَتَكَ وَنَخْشَى عَذَابَكَ ، إِنَّ عَذَابَكَ بِالْكُفَّارِ مُلْحِقٌ',
          dhikrTranslit: 'Allahumma ihdini fiman hadayt, wa \'afini fiman \'afayt, wa tawallani fiman tawallayt, wa barik li fima a\'tayt, wa qini sharra ma qadayt, fa innaka taqdi wa la yuqda \'alayk, wa innahu la yadhillu man walayt, wa la ya\'izzu man \'adayt, tabarakta Rabbana wa ta\'alayt. Allahumma inna nasta\'inuka wa nastaghfiruka wa nuthni \'alaykal-khayra kullah, nashkuruka wa la nakfuruk, wa nakhla\'u wa natruku man yafjuruk. Allahumma iyyaka na\'bud, wa laka nusalli wa nasjud, wa ilayka nas\'a wa nahfid, narju rahmataka wa nakhsha \'adhabak, inna \'adhabaka bil-kuffari mulhiq.',
          notes: 'Le qunut du Witr est sunnah (mustahabb) en Hanbali selon Zad al-Mustaqni\' et se fait TOUTE L\'ANNÉE (contrairement à Shafi\'i : seulement la 2e moitié du Ramadan). Récité APRÈS le ruku\' de la dernière rak\'a. Les mains sont levées (paumes vers le ciel). Le texte combine le du\'a de Hasan ibn Ali (première partie) avec le qunut de \'Umar ibn al-Khattab (« Allahumma inna nasta\'inuka… »). C\'est une spécificité hanbali d\'ajouter la seconde partie. L\'imam le récite à voix haute. Le suiveur dit « Amin » à chaque du\'a. Après le qunut, on descend directement en sujud. Réf. : Zad al-Mustaqni\', Ar-Rawd al-Murbi\', Al-Mughni.',
        },
        ...sujudBlock('h-witr-r3'),
        // Iftirash car le Witr de 3 rak'at en Hanbali n'a qu'UN SEUL tashahhud (le final)
        ...finalBlock('h-witr-r3', { tawarruk: false }),
      ],
    },
  ],
};
