import type { PrayerStep } from '../../types';

/**
 * Helpers Hanbali — positions propres à l'école hanbalite.
 *
 * Différences clés vs Shafi'i :
 *   - 14 arkaan (piliers) + 8 wajibat (obligations). En usul al-fiqh hanbalite, fard = wajib.
 *     Mais dans le chapitre de la prière, les ARKAAN (14 piliers) sont distincts des WAJIBAT (8 obligations).
 *     Les arkaan invalident la prière si omis. Les wajibat nécessitent le sujud as-sahw si omis
 *     mais n'invalident PAS la prière.
 *   - QABD : main droite sur le poignet/avant-bras gauche, posées SUR LA POITRINE ('ala as-sadr).
 *     C'est PLUS HAUT que Shafi'i (sous la poitrine, au-dessus du nombril).
 *     Réf. : Imam Ahmad, basé sur le hadith de Wa'il ibn Hujr (an-Nasa'i).
 *   - RAFA' AL-YADAYN à 3 endroits (PAS 4 comme Shafi'i) :
 *     (1) takbir al-ihram, (2) avant ruku', (3) en se relevant du ruku'.
 *     PAS en se levant du tashahhud intermédiaire (4e endroit = Shafi'i uniquement).
 *   - THANA : « Subhanaka Allahumma wa bihamdika… » (même texte que Hanafi).
 *     PAS le « Wajjahtu » du Shafi'i. Sunnah, uniquement dans la 1re rak'a.
 *   - TA'AWWUDH : sunnah, uniquement dans la PREMIÈRE rak'a (comme Hanafi).
 *     Contrairement à Shafi'i qui le dit dans CHAQUE rak'a.
 *   - BISMILLAH : récitée silencieusement avant la Fatiha.
 *     N'est PAS partie de la Fatiha (contrairement à Shafi'i où c'est le 1er verset).
 *     Mais elle EST récitée (contrairement à Maliki qui ne la récite pas en fard).
 *   - AMIN : prononcé À VOIX HAUTE (jahr) dans les prières jahr (comme Shafi'i).
 *   - FATIHA : fard dans chaque rak'a. MAIS le ma'mum ne récite PAS derrière l'imam
 *     dans les prières à voix haute (jahri). Il récite uniquement dans les prières silencieuses (sirri).
 *     Contrairement à Shafi'i où le ma'mum récite toujours.
 *   - DESCENTE EN SUJUD : GENOUX d'abord (comme Hanafi et Maliki).
 *     Contrairement à Shafi'i qui pose les mains d'abord.
 *     Réf. : hadith de Wa'il ibn Hujr.
 *   - IFTIRASH dans toutes les assises SAUF le dernier tashahhud des prières
 *     de 3+ rak'at (qui est en TAWARRUK). Pour les prières de 2 rak'at (Fajr) :
 *     iftirash uniquement (un seul tashahhud).
 *   - TASHAHHUD : version d'Ibn Mas'ud (même que Hanafi) — avec « 'abduhu wa rasuluh »
 *     (PAS la version d'Ibn Abbas avec « al-mubarakatu » du Shafi'i).
 *   - INDEX : pointé ET BOUGÉ (légèrement de haut en bas) pendant le tashahhud
 *     (contrairement à Shafi'i qui le maintient immobile).
 *   - SALAWAT dans le dernier tashahhud : RUKN (pilier n°13). Leur omission INVALIDE la prière.
 *     Partagé avec Shafi'i (aussi rukn). En Maliki/Hanafi c'est sunnah.
 *   - DEUX SALAMS : ARKAAN (pilier n°14). « As-salamu alaykum wa rahmatullah ».
 *     Les deux taslimas sont obligatoires — omettre l'une d'elles INVALIDE la prière.
 *   - TASHAHHUD INTERMÉDIAIRE : WAJIB (obligation, pas pilier).
 *     Différence MAJEURE — en Shafi'i c'est sunnah, en Maliki c'est sunnah.
 *     L'omettre nécessite sujud as-sahw, mais n'INVALIDE PAS la prière (c'est un wajib, pas un rukn).
 *   - QUNUT : PAS de qunut dans le Fajr (contrairement à Shafi'i).
 *     Qunut dans le Witr TOUTE L'ANNÉE (pas seulement en Ramadan).
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni' (al-Hajjawi),
 *              Ar-Rawd al-Murbi' (al-Buhuti), al-Insaf (al-Mardawi),
 *              Kashaf al-Qina' (al-Buhuti).
 */

// ── Texte du tashahhud Hanbali (version Ibn Mas'ud) ──
const HANBALI_TASHAHUD_FR = 'Les salutations, les prières et les bonnes œuvres appartiennent à Allah. Paix sur toi, ô Prophète, ainsi que la miséricorde d\'Allah et Ses bénédictions. Paix sur nous et sur les vertueux serviteurs d\'Allah. J\'atteste qu\'il n\'y a de divinité qu\'Allah, et j\'atteste que Muhammad est Son serviteur et Son messager.';
const HANBALI_TASHAHUD_AR = 'التَّحِيَّاتُ لِلَّهِ وَالصَّلَوَاتُ وَالطَّيِّبَاتُ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ';
const HANBALI_TASHAHUD_TRANSLIT = 'At-tahiyyatu lillahi was-salawatu wat-tayyibat, as-salamu \'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahi as-salihin, ash-hadu an la ilaha illallah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.';

/**
 * Bloc ruku' Hanbali.
 * Rafa' al-yadayn AVANT le ruku' (mains aux épaules) → takbir → ruku' → i'tidal avec rafa' yadayn.
 * 3 endroits pour le rafa' (pas 4 comme Shafi'i — pas de rafa' en se levant du tashahhud).
 */
export function rukuBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-rafa-ruku`,
      position: 'qiyam',
      ruling: 'sunnah-muakkada',
      name: 'Rafa\' al-Yadayn + Takbir vers le Ruku\'',
      nameAr: 'رفع اليدين + تكبيرة الركوع',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Lever les mains au niveau des épaules, paumes vers la qibla, PUIS dire « Allahu Akbar » en descendant vers le ruku\'. Le rafa\' al-yadayn avant le ruku\' est sunnah mu\'akkada en Hanbali. C\'est le 2e des 3 endroits où les mains sont levées (le 3e = en se relevant du ruku\'). Contrairement à Shafi\'i, il n\'y a PAS de 4e endroit (pas de rafa\' en se levant du tashahhud intermédiaire).',
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
      notes: 'L\'acte physique du ruku\' est un RUKN (pilier). Le dhikr « Subhana Rabbiyal-\'Azim » est un WAJIB (obligation) — son omission nécessite le sujud as-sahw mais n\'invalide PAS la prière. Dos droit et plat, parallèle au sol. Mains saisissant les genoux, doigts écartés. Tête alignée avec le dos — ni relevée ni baissée. Bras éloignés du corps. La tuma\'ninah (immobilité) est FARD en Hanbali (pilier). Réf. : Zad al-Mustaqni\'.',
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
      notes: 'L\'acte physique de se relever (i\'tidal) est un RUKN (pilier). Les formules « Sami\'a Allahu liman hamidah » (tasmee\') et « Rabbana wa laka al-hamd » (tahmid) sont des WAJIBAT — leur omission nécessite le sujud as-sahw mais n\'invalide PAS la prière. Se redresser complètement en levant les mains au niveau des épaules (rafa\' al-yadayn — sunnah mu\'akkada, 3e et DERNIER endroit en Hanbali). Contrairement à Shafi\'i, il n\'y a pas de 4e rafa\' en se levant du tashahhud intermédiaire. Mains replacées SUR LA POITRINE (\'ala as-sadr — qabd hanbali, plus haut que Shafi\'i). L\'imam dit « Sami\'a Allahu liman hamidah », le suiveur dit « Rabbana wa laka al-hamd » (رَبَّنَا وَلَكَ الْحَمْدُ — avec le « wa » en Hanbali), le munfarid dit les deux. La tuma\'ninah est fard dans l\'i\'tidal.',
    },
  ];
}

/**
 * Bloc sujud Hanbali.
 * GENOUX d'abord pour descendre (comme Hanafi et Maliki, contrairement à Shafi'i mains d'abord).
 * Position assise = IFTIRASH (sauf dernier tashahhud des prières 3+ rak'at = tawarruk).
 */
export function sujudBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-takbir-sujud1`,
      position: 'qiyam',
      ruling: 'wajib',
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
      notes: 'L\'acte physique du sujud est un RUKN (pilier). Le dhikr « Subhana Rabbiyal-A\'la » est un WAJIB (obligation) — son omission nécessite le sujud as-sahw mais n\'invalide PAS la prière. Poser d\'abord les GENOUX, puis les mains (position mashhur en Hanbali, comme Hanafi et Maliki). C\'est l\'inverse de Shafi\'i qui pose les mains d\'abord. La descente genoux d\'abord est aussi appuyée par le hadith d\'Abu Hurayra (\'Abdu-r-Razzaq) et est la position de la majorité des savants. Prosternation sur 7 membres : front + nez, les 2 paumes, les 2 genoux, les orteils des 2 pieds. Bras éloignés du corps, ventre éloigné des cuisses. Orteils pliés vers la qibla. La tuma\'ninah est FARD.',
    },
    {
      id: `${prefix}-takbir-julus`,
      position: 'sujud',
      ruling: 'wajib',
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
      notes: 'Position IFTIRASH : pied gauche plié sous soi (on s\'assoit dessus), pied droit vertical avec les orteils vers la qibla. L\'iftirash est utilisé dans TOUTES les assises en Hanbali SAUF le dernier tashahhud des prières de 3+ rak\'at (qui est en tawarruk). Pour les prières de 2 rak\'at (Fajr), le tashahhud final est aussi en iftirash. Le julus est un FARD (pilier). Le du\'a « Rabbi ighfir li » est WAJIB en Hanbali (fait partie des 8 wajibat de la prière selon Zad al-Mustaqni\' — l\'omettre nécessite sujud as-sahw). La tuma\'ninah est fard. Réf. : Zad al-Mustaqni\', Ar-Rawd al-Murbi\'.',
    },
    {
      id: `${prefix}-takbir-sujud2`,
      position: 'julus',
      ruling: 'wajib',
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
      notes: 'L\'acte physique du sujud est un RUKN (pilier). Le dhikr « Subhana Rabbiyal-A\'la » est un WAJIB (obligation) — son omission nécessite le sujud as-sahw mais n\'invalide PAS la prière. Note : La jalsat al-istiraha (brève assise avant de se lever) est sunnah selon certains savants hanbalites (hadith de Malik ibn al-Huwayrith). D\'autres ne la prescrivent pas. Le mu\'tamad dans les manuels tardifs est de la considérer comme sunnah.',
    },
  ];
}

/**
 * Tashahhud intermédiaire Hanbali — WAJIB (obligation, pas pilier).
 * C'est une différence MAJEURE : en Shafi'i c'est sunnah, en Maliki c'est sunnah.
 * L'omettre nécessite sujud as-sahw mais n'invalide PAS la prière.
 * Position IFTIRASH.
 */
export function tashahudIntermediate(prefix: string): PrayerStep {
  return {
    id: `${prefix}-tashahud`,
    position: 'tashahud',
    ruling: 'wajib',
    name: 'Tashahhud intermédiaire (Qa\'dah ula)',
    nameAr: 'التشهد الأوسط (القعدة الأولى)',
    dhikr: HANBALI_TASHAHUD_FR,
    dhikrAr: HANBALI_TASHAHUD_AR,
    dhikrTranslit: HANBALI_TASHAHUD_TRANSLIT,
    notes: 'Position IFTIRASH (pied gauche plié sous soi, pied droit vertical). Le tashahhud intermédiaire est WAJIB (obligation) en Hanbali — c\'est une différence MAJEURE avec Shafi\'i (sunnah ab\'ad en Chafiite, compensée par le sujud as-sahw si omise) et Maliki (sunnah). L\'omettre nécessite un sujud as-sahw (prosternation de l\'oubli), mais n\'invalide PAS la prière car c\'est un wajib (obligation), pas un rukn (pilier). Si on oublie et qu\'on s\'est déjà levé, on ne redescend PAS — on continue et on fait sujud as-sahw avant le salam. Version d\'Ibn Mas\'ud avec « \'abduhu wa rasuluh ». Pointer l\'index et le BOUGER légèrement de haut en bas (contrairement à Shafi\'i qui le maintient immobile). Se lever immédiatement après — pas de salawat dans le tashahhud intermédiaire. Réf. : Zad al-Mustaqni\' (chapitre des wajibat de la prière).',
  };
}

/**
 * Bloc final Hanbali : tashahhud (fard/rukn) + salawat (fard/rukn n°13) + DEUX salams (fard/arkaan n°14).
 * Position TAWARRUK pour le dernier tashahhud des prières de 3+ rak'at.
 * Position IFTIRASH pour les prières de 2 rak'at (un seul tashahhud).
 */
export function finalBlock(prefix: string, opts?: { tawarruk?: boolean }): PrayerStep[] {
  const useTawarruk = opts?.tawarruk ?? false;

  const positionNote = useTawarruk
    ? 'Position TAWARRUK : pied gauche sort de sous la jambe droite vers la droite, fesse gauche posée au sol, pied droit vertical orteils vers la qibla. Le tawarruk est utilisé UNIQUEMENT dans le dernier tashahhud des prières ayant DEUX tashahhud (3+ rak\'at). Réf. : Zad al-Mustaqni\', rapporté d\'après Abu Humaid as-Sa\'idi.'
    : 'Position IFTIRASH : pied gauche plié sous soi (on s\'assoit dessus), pied droit vertical orteils vers la qibla. Les prières de 2 rak\'at (comme le Fajr) n\'ont qu\'un seul tashahhud, donc pas de tawarruk — on reste en iftirash.';

  return [
    {
      id: `${prefix}-tashahud`,
      position: 'tashahud',
      ruling: 'fard',
      name: 'Tashahhud final (Qa\'dah akhirah)',
      nameAr: 'التشهد الأخير (القعدة الأخيرة)',
      dhikr: HANBALI_TASHAHUD_FR,
      dhikrAr: HANBALI_TASHAHUD_AR,
      dhikrTranslit: HANBALI_TASHAHUD_TRANSLIT,
      notes: `${positionNote} Le tashahhud final est FARD (pilier) en Hanbali ainsi que l\'assise pour le réciter. Version d\'Ibn Mas\'ud avec « \'abduhu wa rasuluh ». Pointer l\'index et le BOUGER légèrement de haut en bas (contrairement à Shafi\'i qui le maintient immobile). Réf. : Al-Mughni (Ibn Qudama).`,
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
      notes: 'Les salawat dans le dernier tashahhud sont un RUKN (pilier n°13) en Hanbalite — leur omission INVALIDE la prière. En Chafiite aussi c\'est un rukn. En Hanafite et Malikite, c\'est sunnah. Le minimum requis est « Allahumma salli \'ala Muhammad ». La formule ibrahimiya complète est sunnah mu\'akkada. Réf. : Al-Mughni, Kashaf al-Qina\', Zad al-Mustaqni\'.',
    },
    {
      id: `${prefix}-dua-final`,
      position: 'tashahud',
      ruling: 'sunnah',
      name: 'Du\'a avant le salam',
      nameAr: 'الدعاء قبل السلام',
      dhikr: 'O Allah, je cherche refuge aupres de Toi contre le chatiment de l\'Enfer, le chatiment de la tombe, l\'epreuve de la vie et de la mort, et l\'epreuve du faux Messie.',
      dhikrAr: 'اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنْ عَذَابِ جَهَنَّمَ ، وَمِنْ عَذَابِ الْقَبْرِ ، وَمِنْ فِتْنَةِ الْمَحْيَا وَالْمَمَاتِ ، وَمِنْ فِتْنَةِ الْمَسِيحِ الدَّجَّالِ',
      dhikrTranslit: 'Allahumma inni a\'udhu bika min \'adhabi jahannam, wa min \'adhabi al-qabr, wa min fitnati al-mahya wal-mamat, wa min fitnati al-masih ad-dajjal.',
      notes: 'Hadith d\'Abu Hurayra (Muslim). Ce du\'a est recommande dans toutes les ecoles. Il est sunnah de faire du\'a entre les salawat et le salam. On peut ajouter d\'autres invocations selon son choix.',
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
      notes: 'Les deux salams sont des ARKAAN (piliers n°14) en Hanbalite — omettre l\'un d\'eux INVALIDE la prière. Tourner la tête vers la droite. La formule est « As-salamu \'alaykum wa rahmatullah ». En Shafi\'i, seul le premier salam est un rukn (pilier), le second est sunnah. En Maliki, un seul salam est fard. Réf. : Zad al-Mustaqni\'.',
    },
    {
      id: `${prefix}-salam2`,
      position: 'salam',
      ruling: 'fard',
      name: 'Second Salam (à gauche)',
      nameAr: 'التسليمة الثانية',
      dhikr: 'Que la paix soit sur vous ainsi que la miséricorde d\'Allah',
      dhikrAr: 'السَّلَامُ عَلَيْكُمْ وَرَحْمَةُ اللَّهِ',
      dhikrTranslit: 'As-salamu \'alaykum wa rahmatullah',
      notes: 'Les deux salams sont des ARKAAN (piliers n°14) en Hanbalite — omettre l\'un d\'eux INVALIDE la prière. Tourner la tête vers la gauche. Réf. : Al-Mughni (Ibn Qudama), Zad al-Mustaqni\'.',
    },
  ];
}

/**
 * Première rak'a Hanbali : niyyah → takbir (rafa' yadayn) → thana → ta'awwudh → bismillah → Fatiha → amin → surah.
 * Différences vs Shafi'i :
 *   - Thana = « Subhanaka Allahumma… » (pas « Wajjahtu »)
 *   - Ta'awwudh uniquement dans la 1re rak'a (pas chaque rak'a)
 *   - Bismillah n'est PAS partie de la Fatiha
 *   - Qabd SUR la poitrine (pas sous)
 *   - Ma'mum ne récite pas la Fatiha en prière jahr (contrairement à Shafi'i)
 */
export function firstRakahOpening(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  const aminNote = opts.jahr
    ? 'Dire « Amin » À VOIX HAUTE (jahr) — sunnah mu\'akkada en Hanbali pour l\'imam ET le suiveur dans les prières à voix haute (comme Shafi\'i, contrairement à Hanafi/Maliki qui le disent silencieusement).'
    : 'Dire « Amin » silencieusement.';
  const mamumNote = opts.jahr
    ? ' Le ma\'mum (suiveur) ne récite PAS la Fatiha derrière l\'imam dans les prières à voix haute (jahri) — c\'est une différence avec Shafi\'i où le ma\'mum récite toujours.'
    : ' Le ma\'mum récite la Fatiha dans les prières silencieuses (sirri).';
  return [
    {
      id: `${prefix}-niyyah`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      notes: 'Formuler dans le cœur l\'intention de prier cette prière spécifique. La niyyah est un FARD en Hanbali. Elle doit être présente au moment du takbir al-ihram. La niyyah est un SHART (condition préalable) de la prière, pas un RUKN (pilier). Les 14 arkaan ne comprennent pas la niyyah — elle figure parmi les 9 shurut (conditions). La distinction est que le shart doit être maintenu tout au long, tandis que le rukn a un moment précis. Réf. : Zad al-Mustaqni\'.',
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
      notes: 'Lever les mains au niveau des épaules (ou des oreilles), paumes vers la qibla, doigts écartés. Rafa\' al-yadayn au takbir al-ihram est le 1er des 3 endroits en Hanbali (3 endroits, contrairement à 4 en Shafi\'i). Le takbir est FARD (pilier). Doit être prononcé debout pour les prières fard (qiyam = pilier). Réf. : Al-Mughni.',
    },
    {
      id: `${prefix}-thana`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Du\'a d\'ouverture (Thana / Istiftah)',
      nameAr: 'دعاء الاستفتاح',
      dhikr: 'Gloire à Toi ô Allah et louange à Toi, béni soit Ton nom, exaltée soit Ta grandeur, et il n\'y a de divinité que Toi.',
      dhikrAr: 'سُبْحَانَكَ اللَّهُمَّ وَبِحَمْدِكَ ، وَتَبَارَكَ اسْمُكَ ، وَتَعَالَى جَدُّكَ ، وَلَا إِلَهَ غَيْرُكَ',
      dhikrTranslit: 'Subhanaka Allahumma wa bihamdika, wa tabaraka ismuka, wa ta\'ala jadduka, wa la ilaha ghayruk.',
      notes: 'Le du\'a d\'ouverture est SUNNAH en Hanbali, récité uniquement dans la PREMIÈRE rak\'a. Le texte est « Subhanaka Allahumma… » (même que Hanafi) — PAS le « Wajjahtu wajhiya… » du Shafi\'i. Les mains sont en position de qabd SUR LA POITRINE (\'ala as-sadr — main droite sur le poignet/avant-bras gauche). Récité silencieusement. Réf. : Zad al-Mustaqni\', Ar-Rawd al-Murbi\'.',
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
      notes: 'Le ta\'awwudh est SUNNAH en Hanbali et se récite uniquement dans la PREMIÈRE rak\'a (comme Hanafi). Contrairement à Shafi\'i qui le récite dans CHAQUE rak\'a. Récité silencieusement. Réf. : Kashaf al-Qina\'.',
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
      notes: `La bismillah est récitée SILENCIEUSEMENT avant la Fatiha. En Hanbali, elle n'est PAS partie de la Fatiha (contrairement à Shafi'i où c'est le 1er verset), mais elle est quand même récitée (contrairement à Maliki qui ne la récite pas en fard). La Fatiha est un FARD (pilier) dans CHAQUE rak'a.${mamumNote} Réciter à ${voix}. Mains en position de qabd SUR la poitrine. ${aminNote} Réf. : Al-Mughni (Ibn Qudama).`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `Réciter une sourate après la Fatiha, à ${voix}. La sourate est sunnah mu'akkada en Hanbali dans les deux premières rak'at. Mains en position de qabd sur la poitrine.`,
    },
  ];
}

/**
 * Rak'a 2+ avec surah (pour les 2 premières rak'at).
 * PAS de ta'awwudh (uniquement dans la 1re rak'a en Hanbali).
 * Bismillah silencieusement avant Fatiha.
 */
export function subsequentRakahWithSurah(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  const aminNote = opts.jahr
    ? 'Dire « Amin » à voix haute.'
    : 'Dire « Amin » silencieusement.';
  const mamumNote = opts.jahr
    ? ' Le ma\'mum ne récite pas la Fatiha en prière à voix haute.'
    : '';
  return [
    {
      id: `${prefix}-takbir`,
      position: 'sujud',
      ruling: 'wajib',
      name: 'Takbir de transition',
      nameAr: 'تكبيرة الانتقال',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Se relever pour la rak\'a suivante. Pas de rafa\' al-yadayn ici (le rafa\' se fait uniquement aux 3 endroits spécifiques en Hanbali). Les takbirat al-intiqal font partie des 8 WAJIBAT de la prière — leur omission nécessite le sujud as-sahw.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Bismillah + Récitation de la Fatiha',
      nameAr: 'البسملة + قراءة الفاتحة',
      notes: `Bismillah silencieusement (n'est PAS partie de la Fatiha en Hanbali) puis Fatiha à ${voix}. Fard dans chaque rak'a.${mamumNote} ${aminNote} Mains en position de qabd sur la poitrine. PAS de ta'awwudh ici (uniquement dans la 1re rak'a en Hanbali, contrairement à Shafi'i qui le dit dans chaque rak'a).`,
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

/**
 * Rak'a 3+ sans surah (3e/4e des prières fard). Bismillah + Fatiha seule.
 * PAS de ta'awwudh (uniquement 1re rak'a en Hanbali).
 */
export function subsequentRakahFatihaOnly(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-takbir`,
      position: 'sujud',
      ruling: 'wajib',
      name: 'Takbir de transition',
      nameAr: 'تكبيرة الانتقال',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Se relever pour la rak\'a suivante. Les takbirat al-intiqal font partie des 8 WAJIBAT de la prière — leur omission nécessite le sujud as-sahw.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Bismillah + Récitation de la Fatiha',
      nameAr: 'البسملة + قراءة الفاتحة',
      notes: 'Bismillah silencieusement puis Fatiha seule à voix basse (sirr). Pas de sourate supplémentaire dans les 3e/4e rak\'at. Fard dans chaque rak\'a en Hanbali. Mains en position de qabd sur la poitrine. Dire « Amin » silencieusement. PAS de ta\'awwudh (uniquement 1re rak\'a en Hanbali).',
    },
  ];
}

/**
 * Transition depuis le tashahhud intermédiaire — SANS rafa' al-yadayn (contrairement à Shafi'i).
 * En Hanbali, il n'y a que 3 endroits pour le rafa', et la transition du tashahhud n'en fait PAS partie.
 */
export function riseFromTashahud(prefix: string): PrayerStep {
  return {
    id: `${prefix}-rise`,
    position: 'tashahud',
    ruling: 'wajib',
    name: 'Se lever + Takbir',
    nameAr: 'القيام + التكبير',
    dhikr: 'Allah est le plus Grand',
    dhikrAr: 'الله أكبر',
    dhikrTranslit: 'Allahu Akbar',
    notes: 'Se lever du tashahhud intermédiaire en disant « Allahu Akbar ». PAS de rafa\' al-yadayn ici — c\'est une différence clé avec Shafi\'i (qui lève les mains à cet endroit, son 4e et dernier rafa\'). En Hanbali, il n\'y a que 3 endroits pour le rafa\' al-yadayn : (1) takbir al-ihram, (2) avant ruku\', (3) en se relevant du ruku\'. Replacer les mains en qabd sur la poitrine. Réf. : Al-Mughni, Zad al-Mustaqni\'.',
  };
}
