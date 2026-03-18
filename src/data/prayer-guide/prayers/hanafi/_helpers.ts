import type { PrayerStep } from '../../types';

/**
 * Bloc ruku commun Hanafi.
 * Inclut : takbir de transition (sans rafa yadain) → ruku → i'tidal (mains le long du corps).
 */
export function rukuBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-takbir-ruku`,
      position: 'qiyam-hands',
      ruling: 'sunnah',
      name: 'Takbir de transition',
      nameAr: 'تكبيرة الانتقال',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Dire « Allahu Akbar » sans lever les mains.',
    },
    {
      id: `${prefix}-ruku`,
      position: 'ruku',
      ruling: 'fard',
      name: 'Inclinaison (Ruku\')',
      nameAr: 'الركوع',
      dhikr: 'Gloire à mon Seigneur le Très Grand',
      dhikrAr: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
      dhikrTranslit: 'Subhana Rabbiyal-\'Adhim',
      repetitions: 3,
      notes: 'Dos droit et parallèle au sol. Saisir les genoux, doigts écartés. Bras éloignés du corps. Tête alignée avec le dos, regard vers les pieds. Pour les femmes en Hanafite : le ruku\' est moins prononcé, les mains sur les genoux sans écarter les doigts, le dos légèrement incliné.',
    },
    {
      id: `${prefix}-itidal`,
      position: 'itidal',
      ruling: 'wajib',
      name: 'Redressement (I\'tidal)',
      nameAr: 'الاعتدال',
      dhikr: 'Allah entend celui qui Le loue. Notre Seigneur, à Toi la louange.',
      dhikrAr: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ ، رَبَّنَا وَلَكَ الْحَمْدُ',
      dhikrTranslit: 'Sami\'a Allahu liman hamidah. Rabbana wa lakal-hamd.',
      notes: 'Se redresser complètement. Les mains restent le long du corps, non jointes. Marquer un temps d\'arrêt.',
      madhabNote: 'L\'imam dit uniquement le tasmee\' (\'Sami\'a Allahu liman hamidah\'). Le muqtadi (qui suit l\'imam) dit uniquement le tahmid (\'Rabbana wa lakal-hamd\'). Celui qui prie seul (munfarid) dit les deux.',
    },
  ];
}

/**
 * Bloc sujud commun Hanafi.
 * Inclut : takbir → sujud 1 → takbir → julus → takbir → sujud 2.
 */
export function sujudBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-takbir-sujud1`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Takbir vers la prosternation',
      nameAr: 'تكبيرة الانتقال للسجود',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
    },
    {
      id: `${prefix}-sujud1`,
      position: 'sujud',
      ruling: 'fard',
      name: 'Première prosternation (Sujud)',
      nameAr: 'السجود الأول',
      dhikr: 'Gloire à mon Seigneur le Très Haut',
      dhikrAr: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
      dhikrTranslit: 'Subhana Rabbiyal-A\'la',
      repetitions: 3,
      notes: 'Poser d\'abord les genoux, puis les mains, puis le front avec le nez. Paumes à plat près des oreilles, doigts serrés. Avant-bras relevés du sol. Orteils vers la qibla. Pour les femmes en Hanafite : les bras sont collés au corps (pas écartés), le ventre repose sur les cuisses.',
    },
    {
      id: `${prefix}-takbir-julus`,
      position: 'sujud',
      ruling: 'sunnah',
      name: 'Takbir vers la position assise',
      nameAr: 'تكبيرة الانتقال للجلوس',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
    },
    {
      id: `${prefix}-julus`,
      position: 'julus',
      ruling: 'wajib',
      name: 'Assise entre les deux prosternations',
      nameAr: 'الجلوس بين السجدتين',
      dhikr: 'Seigneur, pardonne-moi',
      dhikrAr: 'رَبِّ اغْفِرْ لِي',
      dhikrTranslit: 'Rabbi ighfir li',
      repetitions: 3,
      notes: 'Position iftirash : pied gauche étendu, assis dessus ; pied droit vertical, orteils vers la qibla. La position assise (julus) est WAJIB. Le dhikr « Rabbi ighfir li » récité pendant l\'assise est sunnah (pas wajib).',
    },
    {
      id: `${prefix}-takbir-sujud2`,
      position: 'julus',
      ruling: 'sunnah',
      name: 'Takbir vers la 2e prosternation',
      nameAr: 'تكبيرة الانتقال للسجدة الثانية',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
    },
    {
      id: `${prefix}-sujud2`,
      position: 'sujud',
      ruling: 'fard',
      name: 'Deuxième prosternation (Sujud)',
      nameAr: 'السجود الثاني',
      dhikr: 'Gloire à mon Seigneur le Très Haut',
      dhikrAr: 'سُبْحَانَ رَبِّيَ الْأَعْلَى',
      dhikrTranslit: 'Subhana Rabbiyal-A\'la',
      repetitions: 3,
    },
  ];
}

/** Tashahud intermédiaire (qa'dah ula) — wajib */
export function tashahudIntermediate(prefix: string): PrayerStep {
  return {
    id: `${prefix}-tashahud`,
    position: 'tashahud',
    ruling: 'wajib',
    name: 'Tashahud intermédiaire (Qa\'dah ula)',
    nameAr: 'التشهد الأوسط (القعدة الأولى)',
    dhikr: 'Les salutations sont pour Allah, ainsi que les prières et les bonnes œuvres…',
    dhikrAr: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
    dhikrTranslit: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahi as-salihin, ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.',
    notes: 'Position iftirash. Lever l\'index à « La ilaha » et le baisser à « illallah ». Réciter uniquement le tashahud (sans salawat). Se lever immédiatement après pour la rak\'a suivante.',
    madhabNote: 'En Hanafite, l\'index est levé à « la ilaha » et baissé à « illa Allah ». En Chafiite, l\'index est levé à « illa Allah » et maintenu pointé jusqu\'au salam. En Hanbalite, l\'index est bougé légèrement de haut en bas pendant tout le tashahhud. En Malikite, l\'index bouge de droite à gauche pendant tout le tashahhud.',
  };
}

/** Bloc final : tashahud (fard) + salawat + salam droite + salam gauche */
export function finalBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-tashahud`,
      position: 'tashahud',
      ruling: 'fard',
      name: 'Tashahud final (Qa\'dah akhirah)',
      nameAr: 'التشهد الأخير (القعدة الأخيرة)',
      dhikr: 'Les salutations sont pour Allah, ainsi que les prières et les bonnes œuvres. La paix soit sur toi, ô Prophète, ainsi que la miséricorde d\'Allah et Ses bénédictions. La paix soit sur nous et sur les vertueux serviteurs d\'Allah. J\'atteste qu\'il n\'y a de divinité qu\'Allah et j\'atteste que Muhammad est Son serviteur et Son messager.',
      dhikrAr: 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ',
      dhikrTranslit: 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahi as-salihin, ash-hadu an la ilaha illallah wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.',
      notes: 'Position iftirash. Lever l\'index à « La ilaha » et le baisser à « illallah ». L\'assise finale (qa\'dah akhirah) est un pilier (fard) de la prière.',
      madhabNote: 'En Hanafite, l\'index est levé à « la ilaha » et baissé à « illa Allah ». En Chafiite, l\'index est levé à « illa Allah » et maintenu pointé jusqu\'au salam. En Hanbalite, l\'index est bougé légèrement de haut en bas pendant tout le tashahhud. En Malikite, l\'index bouge de droite à gauche pendant tout le tashahhud.',
    },
    {
      id: `${prefix}-salawat`,
      position: 'tashahud',
      ruling: 'sunnah-muakkada',
      name: 'Salutations sur le Prophète (Salawat)',
      nameAr: 'الصلاة على النبي ﷺ',
      dhikr: 'Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d\'Ibrahim…',
      dhikrAr: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
      dhikrTranslit: 'Allahumma salli \'ala Muhammad wa \'ala ali Muhammad kama sallayta \'ala Ibrahim wa \'ala ali Ibrahim, wa barik \'ala Muhammad wa \'ala ali Muhammad kama barakta \'ala Ibrahim wa \'ala ali Ibrahim fil-\'alamin, innaka Hamidun Majid.',
    },
    {
      id: `${prefix}-dua-before-salam`,
      position: 'tashahud',
      ruling: 'sunnah',
      name: 'Du\'a avant le salam',
      nameAr: 'الدعاء قبل السلام',
      dhikr: 'Ô Allah, je cherche refuge auprès de Toi contre le châtiment de l\'Enfer, le châtiment de la tombe, l\'épreuve de la vie et de la mort, et l\'épreuve du faux Messie.',
      dhikrAr: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
      dhikrTranslit: 'Allahumma inni a\'udhu bika min \'adhabi jahannam, wa min \'adhabil-qabr, wa min fitnatil-mahya wal-mamat, wa min fitnatil-masihid-dajjal.',
      notes: 'Sunnah de faire du\'a entre les salawat et le salam. On peut ajouter d\'autres invocations.',
    },
    {
      id: `${prefix}-salam-right`,
      position: 'salam',
      ruling: 'wajib',
      name: 'Salam à droite',
      nameAr: 'التسليم يمينًا',
      dhikr: 'Que la paix et la miséricorde d\'Allah soient sur vous',
      dhikrAr: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      dhikrTranslit: 'As-salamu \'alaykum wa rahmatullah',
      notes: 'Tourner la tête vers la droite.',
    },
    {
      id: `${prefix}-salam-left`,
      position: 'salam',
      ruling: 'wajib',
      name: 'Salam à gauche',
      nameAr: 'التسليم يسارًا',
      dhikr: 'Que la paix et la miséricorde d\'Allah soient sur vous',
      dhikrAr: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      dhikrTranslit: 'As-salamu \'alaykum wa rahmatullah',
      notes: 'Tourner la tête vers la gauche.',
    },
  ];
}

/** Première rak'a standard : takbir + thana + ta'awwudh + fatiha + surah + ruku + sujud */
export function firstRakahOpening(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  return [
    {
      id: `${prefix}-niyyah`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      notes: 'Formuler l\'intention dans le cœur de prier la prière spécifique (ex: Fajr fard). La niyyah est un shart (condition) de la prière. Elle doit être présente au moment du takbir al-ihram.',
    },
    {
      id: `${prefix}-takbir`,
      position: 'takbir',
      ruling: 'fard',
      name: 'Takbir al-Ihram',
      nameAr: 'تكبيرة الإحرام',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Lever les mains au niveau des lobes d\'oreilles (hommes) ou des épaules (femmes). Seul moment où les mains sont levées dans l\'école hanafite.',
      madhabNote: 'En Hanafite, les mains ne sont levées QU\'au takbir d\'ouverture. En Chafiite et Hanbalite, elles sont levées aussi avant et après le ruku\'. En Malikite, seulement au takbir d\'ouverture (comme Hanafite).',
    },
    {
      id: `${prefix}-thana`,
      position: 'qiyam-hands',
      ruling: 'sunnah',
      name: 'Thana (invocation d\'ouverture)',
      nameAr: 'دعاء الاستفتاح (الثناء)',
      dhikr: 'Gloire à Toi ô Allah et louange à Toi, béni soit Ton nom, exaltée soit Ta majesté, et il n\'y a de divinité que Toi.',
      dhikrAr: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ وَتَبَارَكَ اسْمُكَ وَتَعَالَى جَدُّكَ وَلَا إِلَهَ غَيْرُكَ',
      dhikrTranslit: 'Subhanaka Allahumma wa bihamdika, wa tabaraka ismuka, wa ta\'ala jadduka, wa la ilaha ghayruk.',
      notes: 'Mains sous le nombril : main droite sur le dos de la main gauche, poignet et avant-bras. La main droite ENTOURE le poignet gauche (le pouce et l\'auriculaire forment un anneau autour du poignet), pas simplement posée dessus. Réciter silencieusement.',
      madhabNote: 'Sous le nombril en Hanafite. Sur la poitrine (\'ala as-sadr) en Hanbalite. Sous la poitrine, au-dessus du nombril en Chafiite. Sadl (mains le long du corps) ou qabd en Malikite.',
    },
    {
      id: `${prefix}-taawwudh`,
      position: 'qiyam-hands',
      ruling: 'sunnah',
      name: 'Ta\'awwudh et Basmalah',
      nameAr: 'التعوذ والبسملة',
      dhikr: 'Je cherche refuge auprès d\'Allah contre Satan le maudit. Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux.',
      dhikrAr: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ ، بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ',
      dhikrTranslit: 'A\'udhu billahi mina ash-shaytani ar-rajim. Bismillahi ar-Rahmani ar-Rahim.',
      notes: 'Réciter silencieusement. Le ta\'awwudh et la basmalah ne se récitent qu\'à la première rak\'a.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam-hands',
      ruling: 'wajib',
      name: 'Récitation de la Fatiha',
      nameAr: 'قراءة الفاتحة',
      dhikr: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur des mondes…',
      dhikrAr: 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      dhikrTranslit: 'Bismillahi ar-Rahmani ar-Rahim. Al-hamdu lillahi Rabbi al-\'alamin…',
      notes: `Réciter à ${voix}. Dire « Amin » silencieusement à la fin.`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam-hands',
      ruling: 'wajib',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `Réciter une sourate ou au minimum 3 courts versets, à ${voix}.`,
    },
  ];
}

/** Rak'a 2+ avec surah (pour les 2 premières rak'at) */
export function subsequentRakahWithSurah(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  return [
    {
      id: `${prefix}-takbir`,
      position: 'sujud',
      ruling: 'sunnah',
      name: 'Takbir de transition',
      nameAr: 'تكبيرة الانتقال',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Se relever pour la rak\'a suivante.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam-hands',
      ruling: 'wajib',
      name: 'Récitation de la Fatiha',
      nameAr: 'قراءة الفاتحة',
      notes: `Basmalah silencieusement puis Fatiha à ${voix}. Pas de thana ni ta'awwudh. Dire « Amin » silencieusement.`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam-hands',
      ruling: 'wajib',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `À ${voix}.`,
    },
  ];
}

/** Rak'a 3+ sans surah (3e/4e des prières fard) */
export function subsequentRakahFatihaOnly(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-takbir`,
      position: 'sujud',
      ruling: 'sunnah',
      name: 'Takbir de transition',
      nameAr: 'تكبيرة الانتقال',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Se relever pour la rak\'a suivante.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam-hands',
      ruling: 'sunnah',
      name: 'Récitation de la Fatiha',
      nameAr: 'قراءة الفاتحة',
      notes: 'Fatiha seule à voix basse (sirr). Dire « Amin » silencieusement. Pas de sourate supplémentaire. La Fatiha à la 3e/4e rak\'a est sunnah (non wajib en Hanafi).',
    },
  ];
}

/** Transition depuis le tashahud intermédiaire vers la rak'a suivante */
export function riseFromTashahud(prefix: string): PrayerStep {
  return {
    id: `${prefix}-takbir`,
    position: 'tashahud',
    ruling: 'sunnah',
    name: 'Takbir de transition',
    nameAr: 'تكبيرة الانتقال',
    dhikr: 'Allah est le plus Grand',
    dhikrAr: 'الله أكبر',
    dhikrTranslit: 'Allahu Akbar',
    notes: 'Se relever pour la rak\'a suivante.',
  };
}
