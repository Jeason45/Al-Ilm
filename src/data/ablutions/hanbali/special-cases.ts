import type { SpecialCase } from '../types';

/**
 * Cas particuliers des ablutions selon l'école Hanbalite — positions propres à l'école hanbalite.
 * Références : Al-Mughni (Ibn Qudama), Zad al-Mustaqni', Ar-Rawd al-Murbi' (al-Buhuti),
 *              Kashaf al-Qina' (al-Buhuti).
 */
export const hanbaliSpecialCases: SpecialCase[] = [
  {
    id: 'h-abl-socks',
    title: 'Essuyer sur les chaussures en cuir (Khuff)',
    titleAr: '\u0627\u0644\u0645\u0633\u062d \u0639\u0644\u0649 \u0627\u0644\u062e\u0641\u064a\u0646',
    description: 'Il est permis d\'essuyer sur les khuff (chaussures en cuir) au lieu de laver les pieds. En Hanbalite, il y a une LIMITE DE TEMPS stricte : 24h pour le r\u00e9sident, 72h pour le voyageur (m\u00eames r\u00e8gles que le Chafiite).',
    rules: [
      'LIMITE DE TEMPS : 24 heures pour le r\u00e9sident (muqim), 72 heures pour le voyageur (musafir)',
      'Le d\u00e9lai commence au premier essuyage apr\u00e8s le hadath (perte du wudu), pas au moment de chausser',
      'Les khuff doivent avoir \u00e9t\u00e9 enfil\u00e9s en \u00e9tat de puret\u00e9 COMPL\u00c8TE (wudu complet)',
      'Doivent couvrir le pied entier jusqu\'aux chevilles incluses',
      'Doivent \u00eatre suffisamment durables pour la marche continue habituelle',
      'Doivent \u00eatre propres (pas d\'impuret\u00e9 dessus)',
      'Essuyer le DESSUS du pied uniquement avec les mains mouill\u00e9es (de la pointe vers la cheville)',
      'Le retrait d\'un seul khuff oblige \u00e0 laver les DEUX pieds',
      '\u00c0 l\'expiration du d\u00e9lai ou au retrait des khuff : il suffit de LAVER LES PIEDS uniquement (pas besoin de refaire tout le wudu) si le wudu est encore valide par ailleurs',
      'Les chaussettes (jawrab) assez durables pour la marche continue (yumkin mutalat al-mashi fihima) sont accept\u00e9es comme les khuff en Hanbalite. L\'\u00e9cole hanbalite est relativement PERMISSIVE sur les chaussettes compar\u00e9e aux autres \u00e9coles',
      'Ce qui annule le mashu : expiration du d\u00e9lai, tout ce qui n\u00e9cessite le ghusl, ou retrait des khuff',
    ],
  },
  {
    id: 'h-abl-cast',
    title: 'Wudu avec un pl\u00e2tre ou bandage (Jabira)',
    titleAr: '\u0627\u0644\u0645\u0633\u062d \u0639\u0644\u0649 \u0627\u0644\u062c\u0628\u064a\u0631\u0629',
    description: 'Si une partie du corps est recouverte d\'un bandage ou pl\u00e2tre, la position hanbalite est plus simple que le Chafiite : essuyer sur la jabira suffit, PAS besoin de tayammum suppl\u00e9mentaire.',
    rules: [
      'Essuyer sur la jabira (bandage/pl\u00e2tre) avec les mains mouill\u00e9es',
      'Laver les zones saines autour du bandage normalement',
      'PAS de tayammum suppl\u00e9mentaire n\u00e9cessaire (contrairement au Chafiite qui exige essuyage + tayammum !)',
      'C\'est une diff\u00e9rence MAJEURE avec le Chafiite : en Hanbalite, l\'essuyage seul suffit',
      'Le bandage ne doit pas d\u00e9passer excessivement la zone de blessure',
      'Pas de limite de temps \u2014 tant que le bandage est m\u00e9dicalement n\u00e9cessaire',
      'La question de la jabira pos\u00e9e en \u00e9tat d\'impuret\u00e9 est d\u00e9battue : le mu\'tamad dans Kashaf al-Qina\' tend \u00e0 exiger que la jabira ait \u00e9t\u00e9 pos\u00e9e en \u00e9tat de puret\u00e9. Toutefois, la position de facilit\u00e9 (accept\u00e9e par certains) valide l\'essuyage m\u00eame si pos\u00e9e en \u00e9tat d\'impuret\u00e9',
      'L\'essuyage doit couvrir la TOTALIT\u00c9 de la surface du bandage',
    ],
  },
  {
    id: 'h-abl-continuous-flow',
    title: '\u00c9coulement continu (Istihadha)',
    titleAr: '\u0627\u0644\u0627\u0633\u062a\u062d\u0627\u0636\u0629',
    description: 'La personne souffrant d\'un \u00e9coulement continu (istihadha, incontinence) doit renouveler son wudu pour chaque TEMPS de pri\u00e8re en Hanbalite (pas pour chaque pri\u00e8re comme en Chafiite).',
    rules: [
      'Renouveler le wudu pour chaque TEMPS de pri\u00e8re (pas chaque pri\u00e8re individuelle)',
      'Un seul wudu permet de prier TOUTES les pri\u00e8res (fard + nafl) dans un m\u00eame temps de pri\u00e8re',
      'Exemple : un wudu fait apr\u00e8s l\'entr\u00e9e du temps de Dhuhr permet de prier les sunnah ratiba, le fard de Dhuhr, et autant de nafl qu\'on veut, jusqu\'\u00e0 l\'entr\u00e9e du temps de \'Asr',
      'C\'est une diff\u00e9rence avec le Chafiite qui exige un wudu pour CHAQUE pri\u00e8re fard',
      'Se prot\u00e9ger avec un pansement ou une protection avant le wudu',
      'L\'\u00e9coulement pendant la pri\u00e8re n\'annule ni la pri\u00e8re ni le wudu (facilit\u00e9 \u2014 rukhsa)',
      'Si l\'\u00e9coulement s\'arr\u00eate d\u00e9finitivement, le wudu doit \u00eatre refait',
    ],
  },
  {
    id: 'h-sc-turban',
    title: 'Essuyage sur le turban (\'imama)',
    titleAr: '\u0627\u0644\u0645\u0633\u062d \u0639\u0644\u0649 \u0627\u0644\u0639\u0645\u0627\u0645\u0629',
    description: 'L\'\u00e9cole hanbalite autorise l\'essuyage sur le turban (\'imama) \u00e0 condition qu\'il couvre la majeure partie de la t\u00eate et qu\'il ait \u00e9t\u00e9 enroul\u00e9 en \u00e9tat de puret\u00e9. C\'est une particularit\u00e9 hanbalite \u2014 les trois autres \u00e9coles n\'autorisent PAS l\'essuyage sur le turban seul. On peut aussi combiner essuyage du turban et essuyage de la partie d\u00e9couverte de la t\u00eate. PERMIS en Hanbalite (position unique). NON valide en Chafiite, Malikite ni Hanafite.',
    rules: [
      'Le turban doit couvrir la majeure partie de la t\u00eate',
      'Il doit avoir \u00e9t\u00e9 enroul\u00e9 en \u00e9tat de puret\u00e9 compl\u00e8te (wudu valide)',
      'L\'essuyage se fait sur la surface du turban avec les mains mouill\u00e9es',
      'On peut combiner l\'essuyage du turban avec l\'essuyage de la partie d\u00e9couverte de la t\u00eate',
      'C\'est une PARTICULARIT\u00c9 HANBALITE \u2014 les trois autres \u00e9coles n\'acceptent PAS l\'essuyage sur le turban seul',
    ],
  },
  {
    id: 'h-abl-nail-polish',
    title: 'Vernis \u00e0 ongles et barri\u00e8res imperm\u00e9ables',
    titleAr: '\u0637\u0644\u0627\u0621 \u0627\u0644\u0623\u0638\u0627\u0641\u0631 \u0648\u0627\u0644\u062d\u0648\u0627\u062c\u0632',
    description: 'Toute substance emp\u00eachant l\'eau d\'atteindre la peau ou les ongles invalide le wudu et le ghusl.',
    rules: [
      'Le vernis \u00e0 ongles classique forme une couche imperm\u00e9able \u2014 le wudu n\'est PAS valide avec',
      'Il faut retirer le vernis AVANT le wudu',
      'Les vernis dits \u00ab halal \u00bb / perm\u00e9ables : accept\u00e9s UNIQUEMENT si l\'eau les traverse r\u00e9ellement (tester)',
      'Le henn\u00e9 (henna) ne pose pas de probl\u00e8me (colore sans former de couche imperm\u00e9able)',
      'La cire, la colle, le gel ou toute substance formant une pellicule doivent \u00eatre retir\u00e9s',
      'En Hanbalite, comme le dalk n\'est pas requis, la question est centr\u00e9e sur le passage de l\'eau \u2014 si l\'eau ne traverse pas, c\'est invalide',
    ],
  },
];
