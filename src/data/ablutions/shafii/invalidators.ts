import type { WuduInvalidator } from '../types';

/**
 * Annulateurs du wudu selon l'école Chafiite — positions propres à l'école chafiite.
 *
 * Différences majeures vs autres écoles :
 *   - Contact peau-à-peau homme/femme non-mahram = ANNULE MÊME SANS DÉSIR (UNIQUE Chafiite !)
 *     Malikite : seulement avec désir/plaisir. Hanafite : n'annule jamais.
 *   - Toucher ses parties intimes (homme ET femme) = ANNULE (Malikite : homme seulement)
 *   - Sommeil dans TOUTE position = ANNULE (sauf légère somnolence assis fermement)
 *     Hanafite : assis fermement ne casse pas. Malikite : basé sur la profondeur.
 *   - Sang/pus qui coule = N'annule PAS (comme Malikite, contrairement à Hanafite)
 *   - Vomissement = N'annule PAS (comme Malikite, contrairement à Hanafite)
 *   - Apostasie = ANNULE
 *
 * Références : Al-Umm (Imam al-Shafi'i), Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const shafiiInvalidators: WuduInvalidator[] = [
  {
    id: 's-inv-exit-passages',
    title: 'Toute sortie des deux voies naturelles',
    titleAr: 'الخارج من السبيلين',
    description: 'Tout ce qui sort des voies naturelles (avant ou arrière) annule le wudu : urine, selles, gaz, madhi (liquide pré-séminal), wadi (sécrétion blanchâtre). L\'émission de mani (sperme) avec plaisir nécessite le ghusl, pas seulement le wudu.',
    consensus: 'unanime',
  },
  {
    id: 's-inv-touch-opposite',
    title: 'Contact peau-à-peau avec le sexe opposé (non-mahram)',
    titleAr: 'ملامسة المرأة الأجنبية',
    description: 'Le contact direct peau-à-peau entre un homme et une femme non-mahram annule le wudu des DEUX personnes, MÊME SANS DÉSIR NI PLAISIR. C\'est la position la plus stricte parmi les quatre écoles. Cela INCLUT le conjoint/la conjointe — en Chafiite, le mariage ne crée PAS de mahramiyya (statut mahram). Toucher son époux/épouse peau-à-peau annule le wudu, même sans désir. Conditions : (1) le contact doit être peau contre peau — à travers un tissu, cela N\'annule PAS. (2) La personne touchée doit être non-mahram et d\'un âge suscitant normalement le désir. (3) Le toucher d\'un enfant en bas âge n\'annule pas.',
    consensus: 'dispute',
    madhabNote: 'ANNULE même SANS désir en Chafiite (position la plus stricte). En Malikite, annule seulement avec désir/plaisir. N\'annule JAMAIS en Hanafite. Basé sur l\'interprétation chafiite du verset 4:43 « aw lamastum an-nisa\' » pris au sens littéral (tout toucher).',
  },
  {
    id: 's-inv-touching-private',
    title: 'Toucher ses propres parties intimes',
    titleAr: 'مس الفرج',
    description: 'Toucher ses propres parties intimes (avant ou arrière) avec l\'intérieur de la paume ou l\'intérieur des doigts annule le wudu. Cela s\'applique aux HOMMES ET AUX FEMMES en Chafiite (contrairement au Malikite où seul l\'homme touchant son pénis est concerné). Le mu\'tamad est que toucher les parties intimes d\'AUTRUI (adulte) avec l\'intérieur de la main annule également le wudu. Pour un enfant, c\'est débattu. Le toucher doit être direct (sans barrière). Toucher avec le dos de la main ou le poignet n\'annule PAS.',
    consensus: 'majoritaire',
    madhabNote: 'ANNULE pour homme ET femme en Chafiite. En Malikite, annule pour l\'homme (pénis) seulement — la femme touchant sa vulve n\'annule pas. N\'annule PAS en Hanafite. Basé sur le hadith de Busra bint Safwan et étendu aux femmes par analogie (qiyas).',
  },
  {
    id: 's-inv-sleep',
    title: 'Sommeil (dans toute position)',
    titleAr: 'النوم',
    description: 'Le sommeil annule le wudu EN CHAFIITE QUELLE QUE SOIT LA POSITION (couché, assis, debout, en prière). Seule EXCEPTION : la légère somnolence (nu\'as) en position assise avec les fesses fermement posées (au sol, sur une chaise, etc.) — cela N\'annule PAS. Dès que la personne s\'endort suffisamment pour que ses fesses se décollent ou glissent (même légèrement), le wudu est annulé.',
    consensus: 'majoritaire',
    madhabNote: 'En Chafiite, presque tout sommeil annule (sauf somnolence assis fermement). En Hanafite, dormir assis fermement ne casse jamais. En Malikite, le critère est la profondeur (sommeil profond annule quelle que soit la position, léger n\'annule pas).',
  },
  {
    id: 's-inv-unconsciousness',
    title: 'Perte de conscience',
    titleAr: 'فقدان الوعي',
    description: 'Évanouissement, anesthésie générale, ivresse ou folie annulent le wudu dans tous les cas, à l\'unanimité des savants.',
    consensus: 'unanime',
  },
  {
    id: 's-inv-apostasy',
    title: 'Apostasie (sortie de l\'Islam)',
    titleAr: 'الردة',
    description: 'L\'apostasie annule le wudu et toutes les adorations. Si la personne revient à l\'Islam, elle doit refaire ses ablutions.',
    consensus: 'majoritaire',
  },
];

/**
 * Ce qui N'ANNULE PAS le wudu en Chafiite (mais annule dans d'autres écoles).
 */
export const shafiiNonInvalidators: WuduInvalidator[] = [
  {
    id: 's-non-inv-blood',
    title: 'Écoulement de sang, pus ou sérosité',
    titleAr: 'خروج الدم أو القيح',
    description: 'Le sang, le pus, les saignements de nez, la pose de ventouses — rien de cela N\'annule le wudu en Chafiite, quelle que soit la quantité. L\'impureté doit être lavée du corps/vêtements avant la prière, mais le wudu reste valide.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Chafiite ni Malikite. ANNULE en Hanafite (si coule au-delà du point de sortie).',
  },
  {
    id: 's-non-inv-vomiting',
    title: 'Vomissement',
    titleAr: 'القيء',
    description: 'Le vomissement N\'annule PAS le wudu en Chafiite, quelle que soit la quantité. Le vomi doit être nettoyé s\'il est tombé sur le corps ou les vêtements.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Chafiite ni Malikite. ANNULE en Hanafite (bouche pleine).',
  },
  {
    id: 's-non-inv-laughing',
    title: 'Rire dans la prière',
    titleAr: 'الضحك في الصلاة',
    description: 'Rire à voix haute dans la prière N\'annule PAS le wudu en Chafiite. Cela annule la prière elle-même, mais pas le wudu. L\'annulation du wudu par le rire est une position UNIQUE à l\'école hanafite.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS le wudu en Chafiite ni Malikite. ANNULE le wudu uniquement en Hanafite (qahqaha dans une prière avec ruku\'/sujud).',
  },
  {
    id: 's-non-inv-camel-meat',
    title: 'Manger de la viande de chameau',
    titleAr: 'أكل لحم الإبل',
    description: 'Manger de la viande de chameau N\'annule PAS le wudu en Chafiite. La position retenue est que le hadith sur ce sujet est soit abrogé, soit interprété comme recommandation, pas obligation.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS en Chafiite, Malikite ni Hanafite. Seule l\'école hanbalite l\'annule.',
  },
];
