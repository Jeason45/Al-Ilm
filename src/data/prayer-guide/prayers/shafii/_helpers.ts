import type { PrayerStep } from '../../types';

/**
 * Helpers Shafi'i — positions propres à l'école chafiite.
 *
 * Différences clés vs Hanafi :
 *   - 14 fard/arkaan (vs 6 Hanafi). Fard = wajib en Shafi'i (pas de catégorie wajib séparée).
 *     La tuma'ninah (sérénité/pause) dans chaque position (ruku', i'tidal, sujud, julus) est un pilier unique qui s'applique à toutes ces positions.
 *     14. Tartib (accomplir les piliers dans l'ORDRE prescrit)
 *   - QABD : main droite sur le poignet/avant-bras gauche, mains posées sous la poitrine, au-dessus du nombril.
 *   - RAFA' AL-YADAYN à 4 endroits : (1) takbir al-ihram, (2) avant ruku', (3) en se relevant du ruku', (4) en se levant du tashahhud intermédiaire vers la 3e rak'a.
 *   - THANA (du'a istiftah) : sunnah — « Wajjahtu wajhiya… » est le texte préféré.
 *   - TA'AWWUDH : sunnah — récité avant la Fatiha dans CHAQUE rak'a (pas seulement la première).
 *   - BISMILLAH : elle fait PARTIE de la Fatiha en Shafi'i (1er verset, position unique). Récitée à VOIX HAUTE (jahr) dans les prières jahri et silencieusement (sirr) dans les prières sirri, suivant la même règle que le reste de la Fatiha.
 *   - AMIN : prononcé À VOIX HAUTE (jahr) dans les prières jahr par l'imam ET le suiveur (Maliki et Hanafi : silencieusement).
 *   - Descente en sujud : MAINS d'abord (comme Maliki, contrairement à Hanafi genoux d'abord).
 *   - IFTIRASH dans toutes les assises SAUF le dernier tashahhud = TAWARRUK.
 *     - Iftirash : pied gauche plié sous soi (on s'assoit dessus), pied droit vertical orteils vers la qibla.
 *     - Tawarruk : pied gauche sort de sous la jambe droite vers la droite, fesse posée au sol.
 *   - TASHAHHUD version Ibn Abbas avec « al-mubarakatu » (unique).
 *   - INDEX : levé au moment de prononcer « illa Allah » (pas à « la ilaha ») et maintenu pointé sans bouger jusqu'au salam (contrairement à Maliki qui le bouge).
 *   - SALAWAT dans le dernier tashahhud : FARD (unique aux Shafi'ites — sunnah dans les 3 autres écoles).
 *   - DEUX SALAMS : le premier salam est un RUKN (pilier), le second est SUNNAH. « As-salamu alaykum wa rahmatullah » à droite puis à gauche.
 *   - Tashahhud intermédiaire = sunnah AB'AD (son omission est compensée par le sujud as-sahw). Tashahhud final = fard (pilier).
 *   - QUNUT dans le Fajr : sunnah mu'akkada, APRÈS le ruku' de la 2e rak'a (Maliki = avant le ruku').
 *     Les mains sont levées pendant le qunut (contrairement à Maliki).
 *
 * Différences clés vs Maliki :
 *   - Qabd (mains jointes sous la poitrine, au-dessus du nombril) au lieu du sadl (mains le long du corps).
 *   - Thana + ta'awwudh + bismillah sont récités (Maliki ne fait aucun des trois en fard).
 *   - Rafa' al-yadayn à 4 endroits (Maliki : seulement au takbir al-ihram).
 *   - Amin à voix haute dans les prières jahr (Maliki : silencieusement).
 *   - Iftirash sauf dernier tashahhud = tawarruk (Maliki : tawarruk dans toutes les assises selon une opinion, iftirash selon une autre).
 *   - Tashahhud d'Ibn Abbas (Maliki : version de 'Umar avec « az-zakiyyatu »).
 *   - Salawat = fard dans le dernier tashahhud (Maliki : sunnah).
 *   - DEUX salams (premier = fard/rukn, second = sunnah) (Maliki : un seul salam).
 *   - Qunut du Fajr après le ruku' (Maliki : avant le ruku').
 *
 * Références : Al-Umm (ash-Shafi'i), Al-Majmu' (an-Nawawi), Minhaj at-Talibin,
 *              Fath al-'Aziz (ar-Rafi'i), Tuhfat al-Muhtaj (Ibn Hajar al-Haytami).
 */

// ── Texte du tashahhud Shafi'i (version Ibn Abbas) ──
const SHAFII_TASHAHUD_FR = 'Les salutations bénies, les prières et les bonnes œuvres appartiennent à Allah. Paix sur toi, ô Prophète, ainsi que la miséricorde d\'Allah et Ses bénédictions. Paix sur nous et sur les vertueux serviteurs d\'Allah. J\'atteste qu\'il n\'y a de divinité qu\'Allah, et j\'atteste que Muhammad est le messager d\'Allah.';
const SHAFII_TASHAHUD_AR = 'التَّحِيَّاتُ الْمُبَارَكَاتُ الصَّلَوَاتُ الطَّيِّبَاتُ لِلَّهِ ، سَلَامٌ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، سَلَامٌ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ ، وَأَشْهَدُ أَنَّ مُحَمَّدًا رَسُولُ اللَّهِ';
const SHAFII_TASHAHUD_TRANSLIT = 'At-tahiyyatul-mubarakatus-salawatut-tayyibatu lillah. Salamun \'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuh, salamun \'alayna wa \'ala \'ibadillahi as-salihin, ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan rasulullah.';

/**
 * Bloc ruku Shafi'i.
 * Rafa' al-yadayn AVANT le ruku' (mains aux épaules) → takbir → ruku' → i'tidal avec rafa' yadayn.
 */
export function rukuBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-rafa-ruku`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Rafa\' al-Yadayn + Takbir vers le Ruku\'',
      nameAr: 'رفع اليدين + تكبيرة الركوع',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Lever les mains au niveau des épaules, paumes vers la qibla, PUIS dire « Allahu Akbar » en descendant vers le ruku\'. Le rafa\' al-yadayn avant le ruku\' est sunnah mu\'akkada en Shafi\'i (contrairement à Maliki et Hanafi qui ne le font pas). C\'est le 2e des 4 endroits où les mains sont levées.',
    },
    {
      id: `${prefix}-ruku`,
      position: 'ruku',
      ruling: 'fard',
      name: 'Inclinaison (Ruku\')',
      nameAr: 'الركوع',
      dhikr: 'Gloire à mon Seigneur le Très Grand',
      dhikrAr: 'سُبْحَانَ رَبِّيَ الْعَظِيمِ',
      dhikrTranslit: 'Subhana Rabbiyal-\'Azim',
      repetitions: 3,
      notes: 'Dos droit et plat, parallèle au sol. Mains saisissant les genoux, doigts écartés. Tête alignée avec le dos — ni relevée ni baissée. Bras éloignés du corps. La tuma\'ninah (immobilité) est FARD en Shafi\'i (pilier n°9).',
    },
    {
      id: `${prefix}-itidal`,
      position: 'itidal',
      ruling: 'fard',
      name: 'Redressement (I\'tidal) + Rafa\' al-Yadayn',
      nameAr: 'الاعتدال + رفع اليدين',
      dhikr: 'Allah entend celui qui Le loue.',
      dhikrAr: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
      dhikrTranslit: 'Sami\'a Allahu liman hamidah.',
      notes: 'Se redresser complètement en levant les mains au niveau des épaules (rafa\' al-yadayn — 3e endroit). L\'i\'tidal est un FARD (pilier n°6) en Shafi\'i. Mains replacées sous la poitrine, au-dessus du nombril (qabd). L\'imam dit « Sami\'a Allahu liman hamidah », le suiveur dit « Rabbana laka al-hamd » (رَبَّنَا لَكَ الْحَمْدُ), le munfarid dit les deux. La tuma\'ninah est fard dans l\'i\'tidal.',
    },
  ];
}

/**
 * Bloc sujud Shafi'i.
 * Mains d'abord pour descendre (comme Maliki, pas genoux d'abord comme Hanafi).
 * Position assise = IFTIRASH (sauf dernier tashahhud = tawarruk).
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
      notes: 'Poser d\'abord les MAINS, puis les genoux (position mashhur en Shafi\'i, comme Maliki). La position mashhur est mains d\'abord, mais les deux avis existent dans l\'école. Al-Nawawi mentionne les deux dans al-Majmu\'. Prosternation sur 7 membres : front + nez, les 2 paumes, les 2 genoux, les orteils des 2 pieds (pilier n°7). Bras éloignés du corps, ventre éloigné des cuisses. Orteils pliés vers la qibla. La tuma\'ninah (immobilité) est FARD.',
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
      ruling: 'fard',
      name: 'Assise entre les deux prosternations',
      nameAr: 'الجلوس بين السجدتين',
      dhikr: 'Seigneur, pardonne-moi',
      dhikrAr: 'رَبِّ اغْفِرْ لِي',
      dhikrTranslit: 'Rabbi ighfir li',
      repetitions: 3,
      notes: 'Position IFTIRASH : pied gauche plié sous soi (on s\'assoit dessus), pied droit vertical avec les orteils vers la qibla. L\'iftirash est utilisé dans TOUTES les assises en Shafi\'i SAUF le dernier tashahhud (qui est en tawarruk). Le julus est un FARD (pilier n°8). Le dhikr « Rabbi ighfir li » est une sunnah AB\'AD (sunnah renforcée dont l\'omission est compensée par le sujud as-sahw). La tuma\'ninah est fard.',
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
      notes: 'La jalsat al-istiraha (brève assise avant de se lever pour la rak\'a suivante) est SUNNAH en Chafiite. Le fidèle s\'assoit brièvement après le second sujud avant de se redresser. C\'est une spécificité chafiite — les trois autres écoles ne la prescrivent pas.',
    },
  ];
}

/** Tashahud intermédiaire Shafi'i — SUNNAH (pas fard). Position IFTIRASH. */
export function tashahudIntermediate(prefix: string): PrayerStep {
  return {
    id: `${prefix}-tashahud`,
    position: 'tashahud',
    ruling: 'sunnah',
    name: 'Tashahud intermédiaire (Qa\'dah ula)',
    nameAr: 'التشهد الأوسط (القعدة الأولى)',
    dhikr: SHAFII_TASHAHUD_FR,
    dhikrAr: SHAFII_TASHAHUD_AR,
    dhikrTranslit: SHAFII_TASHAHUD_TRANSLIT,
    notes: 'Position IFTIRASH (pied gauche plié sous soi, pied droit vertical). Le tashahhud intermédiaire est une sunnah AB\'AD en Chafiite — son omission est compensée par le sujud as-sahw. Version d\'Ibn Abbas avec « al-mubarakatu ». L\'index est levé au moment de prononcer « illa Allah » (pas à « la ilaha ») et maintenu pointé sans bouger jusqu\'au salam. Se lever immédiatement après — pas de salawat dans le tashahhud intermédiaire.',
  };
}

/**
 * Bloc final Shafi'i : tashahud (fard) + salawat (FARD !) + premier salam (fard/rukn) + second salam (sunnah).
 * Position TAWARRUK pour le dernier tashahhud (unique assise en tawarruk).
 */
export function finalBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-tashahud`,
      position: 'tashahud',
      ruling: 'fard',
      name: 'Tashahud final (Qa\'dah akhirah)',
      nameAr: 'التشهد الأخير (القعدة الأخيرة)',
      dhikr: SHAFII_TASHAHUD_FR,
      dhikrAr: SHAFII_TASHAHUD_AR,
      dhikrTranslit: SHAFII_TASHAHUD_TRANSLIT,
      notes: 'Position TAWARRUK : pied gauche sort de sous la jambe droite vers la droite, fesse posée au sol, pied droit vertical orteils vers la qibla. C\'est la SEULE assise en tawarruk en Shafi\'i (toutes les autres sont en iftirash). Le tashahhud final est FARD (pilier n°10) ainsi que l\'assise pour le réciter (pilier n°11). Version d\'Ibn Abbas avec « al-mubarakatu » et « salamun » (sans « al- »). L\'index est levé au moment de prononcer « illa Allah » (pas à « la ilaha ») et maintenu pointé sans bouger jusqu\'au salam.',
    },
    {
      id: `${prefix}-salawat`,
      position: 'tashahud',
      ruling: 'fard',
      name: 'Salutations sur le Prophète (Salawat)',
      nameAr: 'الصلاة على النبي ﷺ',
      dhikr: 'Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d\'Ibrahim…',
      dhikrAr: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
      dhikrTranslit: 'Allahumma salli \'ala Muhammad wa \'ala ali Muhammad kama sallayta \'ala Ibrahim wa \'ala ali Ibrahim, wa barik \'ala Muhammad wa \'ala ali Muhammad kama barakta \'ala Ibrahim wa \'ala ali Ibrahim fil-\'alamin, innaka Hamidun Majid.',
      notes: 'Les salawat sur le Prophète dans le dernier tashahhud sont FARD en Shafi\'i (pilier n°12) — c\'est UNIQUE à l\'école chafiite ! Dans les 3 autres écoles (Hanafi, Maliki, Hanbali) les salawat sont sunnah. Le minimum requis est « Allahumma salli \'ala Muhammad ». La formule ibrahimiya complète est sunnah mu\'akkada.',
    },
    {
      id: `${prefix}-dua-before-salam`,
      position: 'tashahud',
      ruling: 'sunnah',
      name: 'Du\'a avant le salam',
      nameAr: 'الدعاء قبل السلام',
      dhikr: 'O Allah, je cherche refuge auprès de Toi contre le châtiment de l\'Enfer, le châtiment de la tombe, l\'épreuve de la vie et de la mort, et l\'épreuve du faux Messie.',
      dhikrAr: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ وَمِنْ عَذَابِ الْقَبْرِ وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
      dhikrTranslit: 'Allahumma inni a\'udhu bika min \'adhabi jahannam, wa min \'adhabi al-qabr, wa min fitnati al-mahya wal-mamat, wa min fitnati al-masih ad-dajjal.',
      notes: 'Sunnah hay\'at. Hadith d\'Abu Hurayra (Muslim).',
    },
    {
      id: `${prefix}-salam1`,
      position: 'salam',
      ruling: 'fard',
      name: 'Premier Salam (à droite)',
      nameAr: 'التسليمة الأولى',
      dhikr: 'Que la paix soit sur vous ainsi que la miséricorde d\'Allah',
      dhikrAr: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      dhikrTranslit: 'As-salamu \'alaykum wa rahmatullah',
      notes: 'Tourner la tête vers la droite. Le premier salam est FARD (pilier n°13) en Shafi\'i. La formule complète est « As-salamu \'alaykum wa rahmatullah ». Le minimum validant le pilier est « As-salamu \'alaykum », mais l\'ajout de « wa rahmatullah » est si fortement recommandé (sunnah mu\'akkada) qu\'il ne faut pas l\'omettre délibérément.',
    },
    {
      id: `${prefix}-salam2`,
      position: 'salam',
      ruling: 'sunnah',
      name: 'Second Salam (à gauche)',
      nameAr: 'التسليمة الثانية',
      dhikr: 'Que la paix soit sur vous ainsi que la miséricorde d\'Allah',
      dhikrAr: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      dhikrTranslit: 'As-salamu \'alaykum wa rahmatullah',
      notes: 'Tourner la tête vers la gauche. Le second salam est SUNNAH en Shafi\'i (le premier salam est un RUKN/pilier, le second est sunnah mu\'akkada). En Maliki, un seul salam est fard. En Hanafi, les deux sont wajib.',
    },
  ];
}

/**
 * Première rak'a Shafi'i : niyyah → takbir (rafa' yadayn) → thana → ta'awwudh → bismillah → Fatiha → amin → surah.
 * Contrairement à Maliki : thana, ta'awwudh, bismillah sont TOUS récités.
 * Contrairement à Hanafi : amin à voix haute en prière jahr.
 */
export function firstRakahOpening(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  const aminNote = opts.jahr
    ? 'Dire « Amin » À VOIX HAUTE (jahr) — c\'est sunnah mu\'akkada en Shafi\'i pour l\'imam ET le suiveur dans les prières à voix haute. C\'est une spécificité chafiite (Maliki et Hanafi disent amin silencieusement).'
    : 'Dire « Amin » silencieusement.';
  return [
    {
      id: `${prefix}-niyyah`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      notes: 'Formuler dans le cœur l\'intention de prier cette prière spécifique. La niyyah est un FARD (pilier n°1 des 14 arkaan) en Shafi\'i. Elle doit être présente au moment du takbir al-ihram. Il est aussi permis de la former juste avant le takbir, à condition qu\'elle persiste au moment de le prononcer.',
    },
    {
      id: `${prefix}-takbir`,
      position: 'takbir',
      ruling: 'fard',
      name: 'Takbir al-Ihram + Rafa\' al-Yadayn',
      nameAr: 'تكبيرة الإحرام + رفع اليدين',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Lever les mains au niveau des épaules (ou des oreilles), paumes vers la qibla, doigts écartés. Rafa\' al-yadayn au takbir al-ihram est le 1er des 4 endroits en Shafi\'i. Le takbir est FARD (pilier n°2). Doit être prononcé debout pour les prières fard (qiyam = pilier n°3).',
    },
    {
      id: `${prefix}-thana`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Du\'a d\'ouverture (Thana / Istiftah)',
      nameAr: 'دعاء الاستفتاح',
      dhikr: 'J\'ai dirigé mon visage vers Celui qui a créé les cieux et la terre…',
      dhikrAr: 'وَجَّهْتُ وَجْهِيَ لِلَّذِي فَطَرَ السَّمَاوَاتِ وَالْأَرْضَ حَنِيفًا مُسْلِمًا وَمَا أَنَا مِنَ الْمُشْرِكِينَ ، إِنَّ صَلَاتِي وَنُسُكِي وَمَحْيَايَ وَمَمَاتِي لِلَّهِ رَبِّ الْعَالَمِينَ ، لَا شَرِيكَ لَهُ وَبِذَلِكَ أُمِرْتُ وَأَنَا مِنَ الْمُسْلِمِينَ',
      dhikrTranslit: 'Wajjahtu wajhiya lilladhi fatara as-samawati wal-ard, hanifan musliman, wa ma ana minal-mushrikin. Inna salati wa nusuki wa mahyaya wa mamati lillahi Rabbil-\'alamin, la sharika lah, wa bi dhalika umirtu wa ana minal-muslimin.',
      notes: 'Le du\'a d\'ouverture (istiftah) est SUNNAH en Shafi\'i. Le texte préféré est « Wajjahtu wajhiya… » (rapporté par Muslim). C\'est une spécificité — les Maliki ne disent PAS de thana en prière fard. Les mains sont en position de qabd (main droite sur le poignet/avant-bras gauche, posées sous la poitrine, au-dessus du nombril). Récité silencieusement.',
    },
    {
      id: `${prefix}-taawwudh`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Ta\'awwudh (Demande de protection)',
      nameAr: 'التعوذ',
      dhikr: 'Je cherche protection auprès d\'Allah contre Satan le maudit',
      dhikrAr: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
      dhikrTranslit: 'A\'udhu billahi mina ash-shaytani ar-rajim',
      notes: 'Le ta\'awwudh est SUNNAH en Shafi\'i et se récite dans CHAQUE rak\'a avant la Fatiha (pas seulement dans la première comme certaines écoles). Les Maliki ne récitent PAS le ta\'awwudh en prière fard. Récité silencieusement.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Bismillah + Récitation de la Fatiha',
      nameAr: 'البسملة + قراءة الفاتحة',
      dhikr: 'Au nom d\'Allah, le Tout Miséricordieux, le Très Miséricordieux. Louange à Allah, Seigneur des mondes…',
      dhikrAr: 'بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ ، الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      dhikrTranslit: 'Bismillahi ar-Rahmani ar-Rahim. Al-hamdu lillahi Rabbil-\'alamin…',
      notes: `La bismillah fait PARTIE de la Fatiha selon l'école Shafi'i (c'est le premier verset) — position unique parmi les 4 écoles. Puisqu'elle fait partie de la Fatiha, elle suit la même règle de récitation : à VOIX HAUTE (jahr) dans les prières jahri et silencieusement (sirr) dans les prières sirri. La Fatiha est un FARD (pilier n°4) dans CHAQUE rak'a, y compris pour le ma'mum (suiveur) — même derrière un imam. Réciter à ${voix}. Mains en position de qabd sous la poitrine, au-dessus du nombril. ${aminNote}`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `Réciter une sourate après la Fatiha, à ${voix}. La sourate est sunnah mu'akkada en Shafi'i dans les deux premières rak'at. Mains en position de qabd.`,
    },
  ];
}

/** Rak'a 2+ avec surah (pour les 2 premières rak'at). Inclut ta'awwudh + bismillah avant Fatiha. */
export function subsequentRakahWithSurah(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  const aminNote = opts.jahr
    ? 'Dire « Amin » à voix haute.'
    : 'Dire « Amin » silencieusement.';
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
      notes: 'Se relever pour la rak\'a suivante. Pas de rafa\' al-yadayn ici (le rafa\' se fait uniquement aux 4 endroits spécifiques).',
    },
    {
      id: `${prefix}-taawwudh`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Ta\'awwudh',
      nameAr: 'التعوذ',
      dhikr: 'Je cherche protection auprès d\'Allah contre Satan le maudit',
      dhikrAr: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
      dhikrTranslit: 'A\'udhu billahi mina ash-shaytani ar-rajim',
      notes: 'Ta\'awwudh récité dans CHAQUE rak\'a en Shafi\'i (sunnah). Silencieusement.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Bismillah + Récitation de la Fatiha',
      nameAr: 'البسملة + قراءة الفاتحة',
      notes: `Bismillah à ${voix} (fait partie de la Fatiha en Shafi'i, donc suit la même règle de récitation) puis Fatiha à ${voix}. Fard dans chaque rak'a, y compris en tant que ma'mum. ${aminNote} Mains en position de qabd.`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `À ${voix}. Sunnah mu'akkada dans les deux premières rak'at.`,
    },
  ];
}

/** Rak'a 3+ sans surah (3e/4e des prières fard). Ta'awwudh + bismillah + Fatiha seule. */
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
      id: `${prefix}-taawwudh`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Ta\'awwudh',
      nameAr: 'التعوذ',
      dhikr: 'Je cherche protection auprès d\'Allah contre Satan le maudit',
      dhikrAr: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
      dhikrTranslit: 'A\'udhu billahi mina ash-shaytani ar-rajim',
      notes: 'Ta\'awwudh dans chaque rak\'a (sunnah). Silencieusement.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Bismillah + Récitation de la Fatiha',
      nameAr: 'البسملة + قراءة الفاتحة',
      notes: 'Bismillah silencieusement (sirr car les 3e/4e rak\'at sont toujours sirr) puis Fatiha seule à voix basse (sirr). Pas de sourate supplémentaire dans les 3e/4e rak\'at. Fard dans chaque rak\'a en Shafi\'i. Mains en position de qabd. Dire « Amin » silencieusement.',
    },
  ];
}

/** Transition depuis le tashahud intermédiaire — avec RAFA' AL-YADAYN (4e endroit, unique à Shafi'i) */
export function riseFromTashahud(prefix: string): PrayerStep {
  return {
    id: `${prefix}-rise-rafa`,
    position: 'tashahud',
    ruling: 'sunnah',
    name: 'Se lever + Rafa\' al-Yadayn + Takbir',
    nameAr: 'القيام + رفع اليدين + التكبير',
    dhikr: 'Allah est le plus Grand',
    dhikrAr: 'الله أكبر',
    dhikrTranslit: 'Allahu Akbar',
    notes: 'Se lever du tashahhud intermédiaire en levant les mains au niveau des épaules (rafa\' al-yadayn — 4e et dernier endroit, UNIQUE à l\'école Shafi\'i lors de cette transition). Ni les Maliki ni les Hanafi ne lèvent les mains ici. Puis replacer les mains en qabd sous la poitrine, au-dessus du nombril.',
  };
}
