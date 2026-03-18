import type { PrayerStep } from '../../types';

/**
 * Helpers Maliki — positions propres à l'école malikite.
 *
 * Différences clés vs Hanafi :
 *   - 14 fard/arkan (piliers). En Malikite, fard et rukn sont synonymes. Les shurut (conditions) sont séparées des arkan. (vs 6 fard Hanafi). Fard = wajib en Maliki (pas de catégorie wajib séparée).
 *   - Sadl (mains le long du corps) pendant le qiyam — position la plus connue. Le qabd est également rapporté et accepté.
 *   - PAS de thana (du'a istiftah), PAS de bismillah en prière fard. Ta'awwudh = mandoub (1re rak'a, silencieusement).
 *   - Fatiha = fard (rukn) dans chaque rak'a (pas wajib comme Hanafi).
 *   - Amin silencieusement (position prépondérante de l'école).
 *   - Pas de rafa' al-yadayn sauf au takbir al-ihram (comme Hanafi).
 *   - Descente en sujud : GENOUX d'abord (comme Hanafi et Hanbali ; Shafi'i : mains d'abord).
 *   - Iftirash dans TOUTES les assises (comme Hanafi). Tawarruk = Shafi'i/Hanbali.
 *   - Tashahhud version 'Umar (avec "az-zakiyyatu lillah").
 *   - Index bouge de droite à gauche pendant TOUT le tashahhud (Hanafi : levé à "la ilaha", baissé à "illallah").
 *   - UN seul salam (imam/munfarid) — fard (Hanafi : deux salams).
 *   - Tashahhud intermédiaire = sunnah. Tashahhud final = fard (pilier).
 *
 * Références : Al-Risala (Ibn Abi Zayd), Mukhtasar Khalil, Al-Mudawwana.
 */

// ── Texte du tashahhud Maliki (version 'Umar ibn al-Khattab) ──
const MALIKI_TASHAHUD_FR = 'Les salutations appartiennent à Allah, les œuvres pures à Allah, les bonnes paroles et les prières à Allah. La paix soit sur toi, ô Prophète, ainsi que la miséricorde d\'Allah et Ses bénédictions. La paix soit sur nous et sur les vertueux serviteurs d\'Allah. J\'atteste qu\'il n\'y a de divinité qu\'Allah, Seul sans associé, et j\'atteste que Muhammad est Son serviteur et Son messager.';
const MALIKI_TASHAHUD_AR = 'التَّحِيَّاتُ لِلَّهِ الزَّاكِيَاتُ لِلَّهِ الطَّيِّبَاتُ الصَّلَوَاتُ لِلَّهِ ، السَّلَامُ عَلَيْكَ أَيُّهَا النَّبِيُّ وَرَحْمَةُ اللَّهِ وَبَرَكَاتُهُ ، السَّلَامُ عَلَيْنَا وَعَلَى عِبَادِ اللَّهِ الصَّالِحِينَ ، أَشْهَدُ أَنْ لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُولُهُ';
const MALIKI_TASHAHUD_TRANSLIT = 'At-tahiyyatu lillahi, az-zakiyyatu lillahi, at-tayyibatu was-salawatu lillah. As-salamu \'alayka ayyuha an-Nabiyyu wa rahmatullahi wa barakatuh, as-salamu \'alayna wa \'ala \'ibadillahi as-salihin, ash-hadu an la ilaha illallahu wahdahu la sharika lah, wa ash-hadu anna Muhammadan \'abduhu wa rasuluh.';

/**
 * Bloc ruku Maliki.
 * Takbir de transition (sans rafa yadain) → ruku → i'tidal (mains aux côtés = sadl).
 */
export function rukuBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-takbir-ruku`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Takbir de transition',
      nameAr: 'تكبيرة الانتقال',
      dhikr: 'Allah est le plus Grand',
      dhikrAr: 'الله أكبر',
      dhikrTranslit: 'Allahu Akbar',
      notes: 'Dire « Allahu Akbar » sans lever les mains (pas de rafa\' al-yadayn en Malikite sauf au takbir d\'ouverture).',
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
      notes: 'Dos droit et plat, parallèle au sol. Paumes sur les genoux (pas au-dessus ni en-dessous). Tête alignée avec le dos, ni relevée ni baissée. Bras éloignés du corps, genoux non fléchis. La tuma\'ninah (immobilité) est fard en Malikite. Le dhikr « Subhana Rabbiyal-\'Azim » est mandoub (recommandé), pas fard.',
    },
    {
      id: `${prefix}-itidal`,
      position: 'itidal',
      ruling: 'fard',
      name: 'Redressement (I\'tidal)',
      nameAr: 'الاعتدال',
      dhikr: 'Allah entend celui qui Le loue.',
      dhikrAr: 'سَمِعَ اللَّهُ لِمَنْ حَمِدَهُ',
      dhikrTranslit: 'Sami\'a Allahu liman hamidah.',
      notes: 'Se redresser complètement. L\'acte de se relever (i\'tidal) est FARD (pilier) en Malikite. La formule « Sami\'a Allahu liman hamidah » est SUNNAH (pas fard). Mains le long du corps (sadl). L\'imam dit « Sami\'a Allahu liman hamidah » seulement, le suiveur dit « Rabbana wa laka al-hamd » (رَبَّنَا وَلَكَ الْحَمْدُ) seulement, le munfarid dit les deux.',
    },
  ];
}

/**
 * Bloc sujud Maliki.
 * Genoux d'abord pour descendre (comme Hanafi et Hanbali).
 * Position assise = iftirash dans TOUTES les assises.
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
      notes: 'Poser d\'abord les GENOUX, puis les mains selon la position mu\'tamad (prépondérante) de l\'école. Front ET nez doivent toucher le sol (les deux sont fard en Malikite). Paumes à plat, bras éloignés du corps. Orteils vers la qibla. La tuma\'ninah (immobilité) est fard. Le dhikr « Subhana Rabbiyal-A\'la » est mandoub (recommandé), pas fard.',
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
      notes: 'Position IFTIRASH : s\'asseoir sur le pied gauche, pied droit redressé orteils vers la qibla. Iftirash dans TOUTES les assises en Malikite (comme Hanafi). Le julus est un fard (pilier). Le du\'a « Rabbi ighfir li » est une option recommandée — aucun dhikr spécifique n\'est imposé pour cette assise.',
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

/** Tashahud intermédiaire Maliki — SUNNAH (pas wajib comme Hanafi) */
export function tashahudIntermediate(prefix: string): PrayerStep {
  return {
    id: `${prefix}-tashahud`,
    position: 'tashahud',
    ruling: 'sunnah',
    name: 'Tashahud intermédiaire (Qa\'dah ula)',
    nameAr: 'التشهد الأوسط (القعدة الأولى)',
    dhikr: MALIKI_TASHAHUD_FR,
    dhikrAr: MALIKI_TASHAHUD_AR,
    dhikrTranslit: MALIKI_TASHAHUD_TRANSLIT,
    notes: 'Position IFTIRASH (s\'asseoir sur le pied gauche, pied droit redressé). Le tashahhud intermédiaire est SUNNAH en Malikite (pas wajib). Version de \'Umar avec « az-zakiyyatu lillah ». Bouger l\'index de droite à gauche pendant tout le tashahhud (pas seulement à « la ilaha »). Se lever immédiatement après.',
  };
}

/** Bloc final Maliki : tashahud (fard) + salawat (sunnah) + UN seul salam (fard) */
export function finalBlock(prefix: string): PrayerStep[] {
  return [
    {
      id: `${prefix}-tashahud`,
      position: 'tashahud',
      ruling: 'fard',
      name: 'Tashahud final (Qa\'dah akhirah)',
      nameAr: 'التشهد الأخير (القعدة الأخيرة)',
      dhikr: MALIKI_TASHAHUD_FR,
      dhikrAr: MALIKI_TASHAHUD_AR,
      dhikrTranslit: MALIKI_TASHAHUD_TRANSLIT,
      notes: 'Position IFTIRASH (s\'asseoir sur le pied gauche, pied droit redressé). Le tashahhud final est FARD (pilier) en Malikite, ainsi que l\'assise pour le réciter. Version de \'Umar avec « az-zakiyyatu lillah ». Bouger l\'index de droite à gauche pendant tout le tashahhud.',
    },
    {
      id: `${prefix}-salawat`,
      position: 'tashahud',
      ruling: 'sunnah',
      name: 'Salutations sur le Prophète (Salawat)',
      nameAr: 'الصلاة على النبي ﷺ',
      dhikr: 'Ô Allah, prie sur Muhammad et sur la famille de Muhammad, comme Tu as prié sur Ibrahim et sur la famille d\'Ibrahim…',
      dhikrAr: 'اللَّهُمَّ صَلِّ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا صَلَّيْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ ، وَبَارِكْ عَلَى مُحَمَّدٍ وَعَلَى آلِ مُحَمَّدٍ كَمَا بَارَكْتَ عَلَى إِبْرَاهِيمَ وَعَلَى آلِ إِبْرَاهِيمَ فِي الْعَالَمِينَ إِنَّكَ حَمِيدٌ مَجِيدٌ',
      dhikrTranslit: 'Allahumma salli \'ala Muhammad wa \'ala ali Muhammad kama sallayta \'ala Ibrahim wa \'ala ali Ibrahim, wa barik \'ala Muhammad wa \'ala ali Muhammad kama barakta \'ala Ibrahim wa \'ala ali Ibrahim fil-\'alamin, innaka Hamidun Majid.',
      notes: 'Les salawat sont sunnah en Malikite.',
    },
    {
      id: `${prefix}-salam`,
      position: 'salam',
      ruling: 'fard',
      name: 'Salam (Taslim)',
      nameAr: 'التسليم',
      dhikr: 'Que la paix soit sur vous',
      dhikrAr: 'السَّلَامُ عَلَيْكُمْ',
      dhikrTranslit: 'As-salamu \'alaykum',
      notes: 'UN SEUL salam en tournant légèrement la tête vers la droite (imam et munfarid). Le salam est un fard (pilier) en Malikite. Le minimum obligatoire est « As-salamu \'alaykum ». L\'ajout de « wa rahmatullah » est mandoub (recommandé) et ne doit pas être négligé. Le suiveur peut donner un salam supplémentaire pour répondre à l\'imam.',
    },
  ];
}

/**
 * Première rak'a Maliki : takbir → ta'awwudh (mandoub, silencieux) → Fatiha → surah.
 * PAS de thana, PAS de bismillah en prière fard.
 */
export function firstRakahOpening(prefix: string, opts: { jahr: boolean }): PrayerStep[] {
  const voix = opts.jahr ? 'voix haute (jahr)' : 'voix basse (sirr)';
  return [
    {
      id: `${prefix}-niyyah`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Intention (Niyyah)',
      nameAr: 'النية',
      notes: 'Formuler dans le cœur l\'intention de prier cette prière spécifique. La niyyah est un fard (pilier n°1 des 14 arkaan) en Malikite. Elle doit coïncider avec ou précéder de peu le takbir al-ihram.',
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
      notes: 'Lever les mains au niveau des épaules (muhaadhaat al-mankibayn), paumes tournées vers la qibla. Seul moment où les mains sont levées en Malikite. Doit être prononcé debout.',
    },
    {
      id: `${prefix}-taawwudh`,
      position: 'qiyam',
      ruling: 'mandoub',
      name: 'Ta\'awwudh (demande de protection)',
      nameAr: 'التعوذ',
      dhikr: 'Je cherche protection auprès d\'Allah contre Satan le maudit',
      dhikrAr: 'أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',
      dhikrTranslit: 'A\'udhu billahi min ash-shaytani ar-rajim',
      notes: 'Mandoub (recommandé) en Malikite. Se récite SILENCIEUSEMENT, uniquement dans la première rak\'a. Après le takbir al-ihram, avant la Fatiha.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Récitation de la Fatiha',
      nameAr: 'قراءة الفاتحة',
      dhikr: 'Louange à Allah, Seigneur des mondes…',
      dhikrAr: 'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',
      dhikrTranslit: 'Al-hamdu lillahi Rabbi al-\'alamin…',
      notes: `PAS de thana (du'a al-istiftah), PAS de bismillah en prière fard selon l'école malikite. Le ta'awwudh (mandoub) précède la Fatiha dans la 1re rak'a. Mains le long du corps (sadl). Le sadl est la position la plus connue dans l'école, mais le qabd (mains jointes sur la poitrine) est également rapporté de l'Imam Malik (Muwatta') et accepté par de nombreux savants malikites (Ibn 'Abd al-Barr, al-Baji). Les deux positions sont valides dans le mu'tamad. Réciter à ${voix}. La Fatiha est un FARD (pilier) dans chaque rak'a en Malikite. Dire « Amin » silencieusement.`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `Réciter une sourate après la Fatiha, à ${voix}. La sourate est sunnah en Malikite (pas wajib comme en Hanafite).`,
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
      notes: 'Se relever pour la rak\'a suivante. PAS de jalsat al-istiraha (petite assise avant de se lever) en Malikite. On se relève directement après le second sujud.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Récitation de la Fatiha',
      nameAr: 'قراءة الفاتحة',
      notes: `Fatiha directement (pas de bismillah) à ${voix}. Mains le long du corps (sadl). Dire « Amin » silencieusement. Fard dans chaque rak'a.`,
    },
    {
      id: `${prefix}-surah`,
      position: 'qiyam',
      ruling: 'sunnah',
      name: 'Récitation d\'une sourate',
      nameAr: 'قراءة سورة',
      notes: `À ${voix}. Sunnah.`,
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
      notes: 'Se relever pour la rak\'a suivante. PAS de jalsat al-istiraha (petite assise avant de se lever) en Malikite. On se relève directement après le second sujud.',
    },
    {
      id: `${prefix}-fatiha`,
      position: 'qiyam',
      ruling: 'fard',
      name: 'Récitation de la Fatiha',
      nameAr: 'قراءة الفاتحة',
      notes: 'Fatiha seule à voix basse (sirr), sans bismillah. Pas de sourate supplémentaire. Mains le long du corps (sadl). Dire « Amin » silencieusement. Fard dans chaque rak\'a en Malikite.',
    },
  ];
}

/** Transition depuis le tashahud intermédiaire */
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
    notes: 'Se relever pour la rak\'a suivante. PAS de jalsat al-istiraha en Malikite.',
  };
}
