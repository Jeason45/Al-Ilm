import type { WuduInvalidator } from '../types';

/**
 * Annulateurs du wudu selon l'école Hanbalite — positions propres à l'école hanbalite.
 *
 * Différences majeures vs autres écoles :
 *   - VIANDE DE CHAMEAU = ANNULE (UNIQUE au Hanbalite !)
 *   - Contact homme/femme = annule SEULEMENT AVEC DÉSIR (comme Malikite, contrairement à Chafiite)
 *   - Toucher ses parties intimes (homme ET femme) = ANNULE (comme Chafiite)
 *   - Sommeil profond dans toute position = ANNULE (sommeil léger assis fermement = n'annule pas)
 *   - Sang/pus ABONDANT qui coule = ANNULE (comme Hanafite, contrairement à Chafiite/Malikite)
 *   - Vomissement ABONDANT = ANNULE (comme Hanafite, contrairement à Chafiite/Malikite)
 *   - Rire dans la prière = N'annule PAS le wudu (comme Chafiite/Malikite)
 *
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const hanbaliInvalidators: WuduInvalidator[] = [
  {
    id: 'h-inv-exit-passages',
    title: 'Toute sortie des deux voies naturelles',
    titleAr: '\u0627\u0644\u062e\u0627\u0631\u062c \u0645\u0646 \u0627\u0644\u0633\u0628\u064a\u0644\u064a\u0646',
    description: 'Tout ce qui sort des voies naturelles (avant ou arri\u00e8re) annule le wudu : urine, selles, gaz, madhi (liquide pr\u00e9-s\u00e9minal), wadi (s\u00e9cr\u00e9tion blanch\u00e2tre). L\'\u00e9mission de mani (sperme) avec plaisir n\u00e9cessite le ghusl, pas seulement le wudu.',
    consensus: 'unanime',
  },
  {
    id: 'h-inv-touching-private',
    title: 'Toucher des parties intimes (les siennes ou celles d\'autrui)',
    titleAr: '\u0645\u0633 \u0627\u0644\u0641\u0631\u062c',
    description: 'Toucher des parties intimes (les siennes OU celles d\'autrui) avec l\'int\u00e9rieur de la paume ou l\'int\u00e9rieur des doigts annule le wudu. Cela s\'applique aux HOMMES ET AUX FEMMES en Hanbalite (comme en Chafiite). Seule la personne qui TOUCHE perd son wudu. Le toucher avec le dos de la main ou le poignet n\'annule PAS.',
    consensus: 'majoritaire',
    madhabNote: 'ANNULE pour homme ET femme en Hanbalite et Chafiite. En Malikite, annule pour l\'homme (p\u00e9nis) seulement. N\'annule PAS en Hanafite. En Hanbalite, seul celui qui TOUCHE perd son wudu (pas la personne touch\u00e9e).',
  },
  {
    id: 'h-inv-camel',
    title: 'Manger de la viande de chameau',
    titleAr: '\u0623\u0643\u0644 \u0644\u062d\u0645 \u0627\u0644\u0625\u0628\u0644',
    description: 'Manger de la viande de chameau (dromadaire) annule le wudu en Hanbalite. C\'est la position la plus c\u00e9l\u00e8bre et la plus UNIQUE de l\'\u00e9cole hanbalite. Cela s\'applique \u00e0 TOUTE viande de chameau, qu\'elle soit cuite, crue, grill\u00e9e, bouilli ou pr\u00e9par\u00e9e de quelque mani\u00e8re que ce soit. Le lait et le bouillon de chameau n\'annulent pas selon la position retenue.',
    consensus: 'dispute',
    madhabNote: 'ANNULE UNIQUEMENT en Hanbalite. N\'annule PAS en Chafiite, Malikite ni Hanafite. Bas\u00e9 sur le hadith de Jabir ibn Samura rapport\u00e9 par Muslim : \u00ab Un homme demanda au Proph\u00e8te \u1e63 : Dois-je faire le wudu apr\u00e8s avoir mang\u00e9 de la viande de chameau ? Il r\u00e9pondit : Oui. \u00bb Les trois autres \u00e9coles interpr\u00e8tent ce hadith comme abrog\u00e9 ou facultatif.',
  },
  {
    id: 'h-inv-sleep',
    title: 'Sommeil profond (dans toute position)',
    titleAr: '\u0627\u0644\u0646\u0648\u0645',
    description: 'Le sommeil profond annule le wudu en Hanbalite QUELLE QUE SOIT LA POSITION (couch\u00e9, assis, debout, en pri\u00e8re). EXCEPTION : le sommeil l\u00e9ger (nu\'as) en position assise avec les fesses fermement pos\u00e9es (au sol, sur une chaise, etc.) N\'annule PAS le wudu. Le Hanbalite est l\u00e9g\u00e8rement plus souple que le Chafiite sur ce point \u2014 la position assise fermement est largement d\u00e9finie.',
    consensus: 'majoritaire',
    madhabNote: 'En Hanbalite, le sommeil l\u00e9ger assis fermement n\'annule pas (position assez souple). En Chafiite, presque tout sommeil annule (sauf somnolence assise). En Hanafite, dormir assis fermement ne casse jamais. En Malikite, le crit\u00e8re est la profondeur du sommeil.',
  },
  {
    id: 'h-inv-unconsciousness',
    title: 'Perte de conscience',
    titleAr: '\u0641\u0642\u062f\u0627\u0646 \u0627\u0644\u0648\u0639\u064a',
    description: '\u00c9vanouissement, anesth\u00e9sie g\u00e9n\u00e9rale, ivresse ou folie annulent le wudu dans tous les cas, \u00e0 l\'unanimit\u00e9 des savants.',
    consensus: 'unanime',
  },
  {
    id: 'h-inv-blood',
    title: 'Écoulement ABONDANT de sang, pus ou sérosité',
    titleAr: 'خروج الدم الكثير أو القيح',
    description: 'Le sang, le pus ou la sérosité qui COULE ABONDAMMENT (kathir) au-delà du point de sortie annule le wudu en Hanbalite. Cela inclut : saignement de nez abondant, blessure qui coule, ventouses (hijama). Un PETIT écoulement qui ne se propage pas au-delà du point de sortie n\'annule PAS.',
    consensus: 'dispute',
    madhabNote: 'ANNULE si abondant en Hanbalite et Hanafite. N\'annule PAS en Chafiite ni Malikite (quelle que soit la quantité). Le critère en Hanbalite est le même qu\'en Hanafite : le sang/pus doit couler au-delà du point de sortie (yasilu). Réf. : Zad al-Mustaqni\' — « al-kharij al-kathir min ghayr as-sabilayn ».',
  },
  {
    id: 'h-inv-vomiting',
    title: 'Vomissement ABONDANT',
    titleAr: 'القيء الكثير',
    description: 'Le vomissement abondant (kathir — remplissant la bouche) annule le wudu en Hanbalite. Un petit vomissement (qui ne remplit pas la bouche) n\'annule PAS. Le critère est la quantité : « mil\' al-fam » (plein la bouche).',
    consensus: 'dispute',
    madhabNote: 'ANNULE si abondant en Hanbalite et Hanafite. N\'annule PAS en Chafiite ni Malikite (quelle que soit la quantité). Réf. : Zad al-Mustaqni\', Ar-Rawd al-Murbi\'.',
  },
  {
    id: 'h-inv-touch-opposite-desire',
    title: 'Toucher le sexe oppos\u00e9 AVEC D\u00c9SIR',
    titleAr: '\u0645\u0644\u0627\u0645\u0633\u0629 \u0627\u0644\u0645\u0631\u0623\u0629 \u0628\u0634\u0647\u0648\u0629',
    description: 'Le contact direct peau-à-peau entre un homme et une femme annule le wudu UNIQUEMENT s\'il y a shahwa (désir/plaisir). SANS désir = le wudu n\'est PAS annulé. La condition est la shahwa, pas le statut mahram/non-mahram — toucher toute femme avec désir annule. C\'est une différence majeure avec le Chafiite qui annule DANS TOUS LES CAS (même sans désir, mais uniquement pour les non-mahram).',
    consensus: 'dispute',
    madhabNote: 'Annule AVEC D\u00c9SIR en Hanbalite et Malikite. Annule M\u00caME SANS d\u00e9sir en Chafiite (position la plus stricte). N\'annule JAMAIS en Hanafite. Bas\u00e9 sur l\'interpr\u00e9tation du verset 4:43 \u00ab aw lamastum an-nisa\' \u00bb : Hanbalite interpr\u00e8te \u00ab lamasa \u00bb comme toucher avec d\u00e9sir.',
  },
  {
    id: 'h-inv-apostasy',
    title: 'Apostasie (Ridda)',
    titleAr: '\u0627\u0644\u0631\u062f\u0629',
    description: 'L\'apostasie (abandon de l\'Islam) annule le wudu et toutes les adorations. R\u00e9f. : Zad al-Mustaqni\' parmi les nawaqid.',
    consensus: 'majoritaire',
  },
];

/**
 * Ce qui N'ANNULE PAS le wudu en Hanbalite (mais annule dans d'autres écoles).
 */
export const hanbaliNonInvalidators: WuduInvalidator[] = [
  {
    id: 'h-non-inv-laughing',
    title: 'Rire dans la pri\u00e8re',
    titleAr: '\u0627\u0644\u0636\u062d\u0643 \u0641\u064a \u0627\u0644\u0635\u0644\u0627\u0629',
    description: 'Rire \u00e0 voix haute dans la pri\u00e8re N\'annule PAS le wudu en Hanbalite. Cela annule la pri\u00e8re elle-m\u00eame, mais pas le wudu. L\'annulation du wudu par le rire est une position UNIQUE \u00e0 l\'\u00e9cole hanafite.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS le wudu en Hanbalite, Chafiite ni Malikite. ANNULE le wudu uniquement en Hanafite (qahqaha dans une pri\u00e8re avec ruku\'/sujud).',
  },
  {
    id: 'h-non-inv-touch-no-desire',
    title: 'Toucher le sexe oppos\u00e9 SANS d\u00e9sir',
    titleAr: '\u0645\u0644\u0627\u0645\u0633\u0629 \u0627\u0644\u0645\u0631\u0623\u0629 \u0628\u062f\u0648\u0646 \u0634\u0647\u0648\u0629',
    description: 'Toucher une personne du sexe oppos\u00e9 (non-mahram) SANS d\u00e9sir ni plaisir N\'annule PAS le wudu en Hanbalite. C\'est une diff\u00e9rence majeure avec le Chafiite qui annule DANS TOUS LES CAS. Par exemple, serrer la main d\'une femme non-mahram sans aucun d\u00e9sir ne casse pas le wudu en Hanbalite.',
    consensus: 'dispute',
    madhabNote: 'N\'annule PAS SANS d\u00e9sir en Hanbalite et Malikite. ANNULE M\u00caME SANS d\u00e9sir en Chafiite. N\'annule JAMAIS (m\u00eame avec d\u00e9sir) en Hanafite.',
  },
];
