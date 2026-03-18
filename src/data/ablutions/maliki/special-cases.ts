import type { SpecialCase } from '../types';

/**
 * Cas particuliers des ablutions selon l'école Malikite — positions propres à l'école malikite.
 * Références : Al-Risala, Mukhtasar Khalil.
 */
export const malikiSpecialCases: SpecialCase[] = [
  {
    id: 'm-abl-socks',
    title: 'Essuyer sur les chaussures en cuir (Khuff)',
    titleAr: 'المسح على الخفين',
    description: 'Il est permis d\'essuyer sur les khuff (chaussures en cuir) au lieu de laver les pieds. En Malikite, il n\'y a PAS DE LIMITE DE TEMPS (contrairement aux 24h/72h des autres écoles).',
    rules: [
      'PAS DE LIMITE DE TEMPS en Malikite — valide tant que le ghusl n\'est pas requis (les autres écoles limitent à 24h/72h)',
      'Les khuff doivent avoir été enfilés en état de pureté complète',
      'Doivent être en cuir (ou matériau équivalent en durabilité)',
      'Doivent couvrir le pied entier jusqu\'aux chevilles incluses',
      'Les khuff doivent être assez durables pour marcher environ 3 jours/nuits de marche continue (position mashhur)',
      'Doivent être propres (pas d\'impureté dessus)',
      'Doivent tenir seuls sur les pieds sans être attachés',
      'Ne doivent pas avoir de trous importants exposant une partie significative du pied',
      'Essuyer le DESSUS du pied uniquement avec les mains mouillées',
      'Le retrait d\'un seul khuff invalide le mashu — il faut laver les deux pieds',
      'Ce qui annule le mashu : tout ce qui nécessite le ghusl, ou le retrait des khuff',
      'Il est mandoub (recommandé) de retirer les khuff et laver les pieds chaque vendredi',
    ],
  },
  {
    id: 'm-abl-cast',
    title: 'Wudu avec un plâtre ou bandage (Jabira)',
    titleAr: 'المسح على الجبيرة',
    description: 'Si une partie du corps est recouverte d\'un bandage ou plâtre, on peut essuyer par-dessus.',
    rules: [
      'Essuyer sur la jabira (bandage/plâtre) avec les mains mouillées',
      'Laver les zones saines autour du bandage normalement',
      'Le wudu et la prière restent VALIDES même si le bandage est retiré par la suite — pas besoin de refaire le wudu (position malikite distinctive)',
      'Le bandage ne doit pas dépasser excessivement la zone de blessure',
      'Pas de limite de temps — tant que le bandage est médicalement nécessaire',
      'Le dalk (frottement) n\'est pas requis sur la jabira — un simple essuyage suffit',
    ],
  },
  {
    id: 'm-abl-continuous-flow',
    title: 'Écoulement continu (Istihadha)',
    titleAr: 'الاستحاضة',
    description: 'La personne souffrant d\'un écoulement continu (istihadha, incontinence) a des règles spécifiques. En Malikite, le renouvellement du wudu est RECOMMANDÉ (mandoub), pas obligatoire.',
    rules: [
      'Faire le wudu pour chaque prière est RECOMMANDÉ (mandoub), pas FARD en Malikite (les autres écoles l\'obligent)',
      'Un seul wudu peut servir pour plusieurs prières',
      'Se protéger avec un pansement ou une protection',
      'L\'écoulement pendant la prière n\'annule ni la prière ni le wudu',
      'Cette facilité est basée sur le fait qu\'Imam Malik considérait les hadiths sur le renouvellement obligatoire comme faibles',
    ],
  },
  {
    id: 'm-abl-turban',
    title: 'Essuyage sur le turban ou couvre-chef',
    titleAr: 'المسح على العمامة',
    description: 'L\'essuyage sur le turban (\'imama) ou le couvre-chef N\'est PAS valide en Malikite. Il faut essuyer directement la tête. Contrairement à l\'école hanbalite qui autorise l\'essuyage sur le turban sous conditions.',
    rules: [
      'L\'essuyage sur le turban (\'imama) N\'est PAS valide en Malikite',
      'Il faut retirer le turban ou couvre-chef et essuyer directement la tête',
      'La tête ENTIÈRE doit être essuyée (fard en Malikite)',
      'Seules les écoles hanbalite et chafiite (sous conditions) autorisent l\'essuyage sur le turban',
    ],
  },
  {
    id: 'm-abl-nail-polish',
    title: 'Vernis à ongles et barrières imperméables',
    titleAr: 'طلاء الأظافر والحواجز',
    description: 'Toute substance empêchant l\'eau d\'atteindre la peau empêche la validité du wudu et du ghusl.',
    rules: [
      'Le vernis à ongles classique forme une couche imperméable — le wudu n\'est PAS valide avec',
      'Il faut retirer le vernis AVANT le wudu',
      'Les vernis dits « halal » / perméables : acceptés si l\'eau les traverse réellement',
      'Le henné (henna) ne pose pas de problème (colore sans former de couche)',
      'Le dalk (frottement) rend cette question encore plus importante en Malikite : il faut pouvoir frotter la peau directement',
    ],
  },
];
