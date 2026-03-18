import type { SpecialCase } from '../types';

/**
 * Cas particuliers des ablutions selon l'école Hanafite — positions propres à l'école hanafite.
 *
 * Références : Nur al-Idah, Al-Hidayah, Radd al-Muhtar.
 */
export const hanafiSpecialCases: SpecialCase[] = [
  {
    id: 'h-abl-socks',
    title: 'Essuyer sur les chaussettes / khuff (Mashu \'ala al-khuffayn)',
    titleAr: 'المسح على الخفين',
    description: 'Il est permis d\'essuyer sur les chaussures en cuir (khuff) ou les chaussettes épaisses (jawrab) au lieu de laver les pieds, sous des conditions strictes en Hanafite.',
    rules: [
      'Les khuff/chaussettes doivent avoir été enfilés en état de pureté complète (après un wudu valide)',
      'Durée : 24 heures pour le résident (muqim), 72 heures pour le voyageur (musafir)',
      'Le délai commence au PREMIER HADATH (annulation du wudu) après avoir enfilé les khuff, pas au moment de les enfiler',
      'Conditions des chaussettes (jawrab) en Hanafite : assez épaisses pour que l\'eau ne les traverse pas immédiatement, qu\'on ne voie pas la peau à travers, qu\'elles tiennent seules sur les pieds sans attache, et qu\'on puisse marcher environ 5 km sans qu\'elles se déchirent',
      'Les chaussettes doivent couvrir toute la zone obligatoire (jusqu\'aux chevilles incluses)',
      'Si un trou de plus de 3 orteils (des plus petits) apparaît, le mashu est invalide',
      'Essuyer le DESSUS du pied uniquement (pas le dessous) avec les mains mouillées, des orteils vers la cheville, sur un minimum de 3 doigts de largeur',
      'Si un voyageur (72h) devient résident : le délai se réduit à 24h depuis le début',
      'Si un résident (24h) commence à voyager : le délai s\'étend à 72h depuis le début',
      'Les chaussettes fines en coton/nylon ordinaires NE sont PAS valides en Hanafite',
      'Ce qui annule le mashu : expiration du délai, tout ce qui nécessite le ghusl, retirer un khuff (même un seul pied), eau qui entre et lave la majorité du pied',
      'Débat interne hanafite : la position classique (zahir ar-riwaya) exige des chaussettes très épaisses, mais de nombreux muftis hanafites contemporains (suivant la fatwa d\'Abu Yusuf) autorisent l\'essuyage sur des chaussettes épaisses ordinaires',
      'Après l\'expiration du délai ou le retrait des khuff, il suffit de LAVER LES PIEDS uniquement (pas de refaire le wudu entier) si aucun autre annulateur n\'est survenu',
    ],
  },
  {
    id: 'h-abl-cast',
    title: 'Wudu avec un plâtre ou bandage (Jabira)',
    titleAr: 'المسح على الجبيرة',
    description: 'Si une partie du corps est recouverte d\'un bandage, plâtre ou pansement qu\'on ne peut pas retirer, on peut essuyer par-dessus en Hanafite.',
    rules: [
      'Essuyer avec les mains mouillées sur la MAJORITÉ de la surface du bandage (plus de la moitié)',
      'PAS besoin d\'avoir été en état de pureté au moment de la pose (contrairement aux khuff)',
      'PAS de limite de durée — tant que le bandage est médicalement nécessaire',
      'Si le bandage couvre plus que la zone blessée, laver ce qui peut être lavé normalement et essuyer le bandage',
      'Valable pour le wudu ET le ghusl (contrairement aux khuff qui ne valent que pour le wudu)',
      'Si retirer le bandage est possible sans danger ni aggravation, il faut le retirer et laver la zone normalement',
      'Si même essuyer le bandage cause un préjudice, on peut omettre cette zone entièrement',
    ],
  },
  {
    id: 'h-abl-continuous-flow',
    title: 'Écoulement continu (Ma\'dhur / Istihadha)',
    titleAr: 'المعذور / الاستحاضة',
    description: 'La personne souffrant d\'un écoulement continu (istihadha, incontinence, gaz continus, plaie qui saigne sans arrêt) est considérée comme « excusée » (ma\'dhur) en Hanafite.',
    rules: [
      'Condition pour être ma\'dhur : l\'excuse doit durer UN TEMPS DE PRIÈRE COMPLET (par ex. du Dhuhr au Asr) sans qu\'il y ait assez de temps pour faire le wudu et prier',
      'Une fois le statut de ma\'dhur établi, il est maintenu tant que l\'excuse se produit au moins UNE FOIS par temps de prière',
      'Le ma\'dhur fait un NOUVEAU wudu à l\'entrée de CHAQUE temps de prière',
      'Ce wudu reste valide jusqu\'à la FIN du temps de cette prière (pas jusqu\'à la prière suivante)',
      'Avec ce wudu, le ma\'dhur peut prier les prières obligatoires et surérogatoires, toucher le Coran, etc.',
      'L\'écoulement pendant la prière n\'annule ni la prière ni le wudu du ma\'dhur',
      'Se protéger avec un pansement ou une protection pour limiter l\'écoulement',
      'Si l\'excuse cesse de se produire pendant un temps de prière complet, le statut de ma\'dhur est levé',
    ],
  },
  {
    id: 'h-abl-nail-polish',
    title: 'Vernis à ongles et barrières imperméables',
    titleAr: 'طلاء الأظافر والحواجز',
    description: 'Toute substance qui empêche l\'eau d\'atteindre la peau ou les ongles invalide le wudu et le ghusl.',
    rules: [
      'Le vernis à ongles classique forme une couche imperméable — le wudu n\'est PAS valide avec',
      'Il faut retirer le vernis AVANT de faire le wudu',
      'Les vernis dits « halal » / perméables : acceptés UNIQUEMENT si l\'eau les traverse réellement (tester en versant de l\'eau dessus)',
      'Les mêmes règles s\'appliquent à : colle, peinture, cire, résine, tout revêtement imperméable',
      'Le henné (henna) ne pose PAS de problème car il colore la peau sans former de couche imperméable',
      'La crème / lotion absorbée par la peau ne pose pas de problème — seule une couche visible et imperméable en surface pose problème',
      'La bague doit être déplacée/retirée pour que l\'eau atteigne la peau dessous',
    ],
  },
];
