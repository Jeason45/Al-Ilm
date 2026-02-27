import type { SpecialCase } from './types';

export const ablutionSpecialCases: SpecialCase[] = [
  {
    id: 'abl-socks',
    title: 'Essuyer sur les chaussettes (Khuff)',
    titleAr: 'المسح على الخفين',
    description: 'Il est permis d\'essuyer sur les chaussettes ou les chaussures au lieu de laver les pieds, sous certaines conditions.',
    rules: [
      'Les chaussettes doivent avoir été enfilées en état de pureté (après un wudu valide)',
      'Durée maximale : 24 heures pour le résident, 72 heures pour le voyageur',
      'Le délai commence au premier essuyage après l\'annulation du wudu',
      'Essuyer le dessus du pied avec les mains mouillées, du bout des orteils vers la cheville',
      'Les chaussettes doivent être épaisses et couvrir la zone obligatoire (jusqu\'aux chevilles)',
      'Le ghusl annule la permission d\'essuyer — il faut alors laver les pieds',
    ],
  },
  {
    id: 'abl-cast',
    title: 'Wudu avec un plâtre ou bandage (Jabira)',
    titleAr: 'المسح على الجبيرة',
    description: 'Si une partie du corps est recouverte d\'un bandage, plâtre ou pansement qu\'on ne peut pas retirer, on peut essuyer par-dessus.',
    rules: [
      'Essuyer avec les mains mouillées sur toute la surface du bandage ou du plâtre',
      'Pas besoin d\'avoir été en état de pureté au moment de la pose (contrairement aux chaussettes)',
      'Pas de limite de durée — tant que le bandage est nécessaire',
      'Si le bandage couvre plus que la zone blessée, laver ce qui peut être lavé et essuyer le reste',
      'Valable pour le wudu et le ghusl',
    ],
  },
  {
    id: 'abl-continuous-flow',
    title: 'Écoulement continu (Istihadha)',
    titleAr: 'الاستحاضة',
    description: 'La personne souffrant d\'un écoulement continu (saignement hors menstrues, incontinence urinaire, gaz continus) a des règles spécifiques.',
    rules: [
      'Faire le wudu pour chaque prière après l\'entrée de son temps',
      'Le wudu reste valide le temps de la prière même si l\'écoulement continue pendant celle-ci',
      'Se protéger avec un pansement ou une protection pour limiter l\'écoulement',
      'Prier avec ce wudu toutes les prières surérogatoires souhaitées dans le temps de la prière',
      'L\'écoulement pendant la prière n\'annule pas la prière ni le wudu dans ce cas',
    ],
  },
  {
    id: 'abl-nail-polish',
    title: 'Vernis à ongles et barrières',
    titleAr: 'طلاء الأظافر',
    description: 'Toute substance qui empêche l\'eau d\'atteindre la peau ou les ongles invalide le wudu et le ghusl.',
    rules: [
      'Le vernis à ongles classique forme une couche imperméable — le wudu n\'est pas valide avec',
      'Il faut retirer le vernis avant de faire le wudu ou utiliser un vernis perméable à l\'eau',
      'Les vernis « halal » / perméables sont acceptés si l\'eau les traverse réellement (tester avant)',
      'Les mêmes règles s\'appliquent à la colle, la peinture, la cire ou toute couche imperméable',
      'Le henné (henna) ne pose pas de problème car il colore sans former de couche',
    ],
  },
];
