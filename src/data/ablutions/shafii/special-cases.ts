import type { SpecialCase } from '../types';

/**
 * Cas particuliers des ablutions selon l'école Chafiite — positions propres à l'école chafiite.
 * Références : Al-Umm, Al-Majmu' (Nawawi), Minhaj at-Talibin, Tuhfat al-Muhtaj.
 */
export const shafiiSpecialCases: SpecialCase[] = [
  {
    id: 's-abl-socks',
    title: 'Essuyer sur les chaussures en cuir (Khuff)',
    titleAr: 'المسح على الخفين',
    description: 'Il est permis d\'essuyer sur les khuff (chaussures en cuir) au lieu de laver les pieds. En Chafiite, il y a une LIMITE DE TEMPS stricte : 24h pour le résident, 72h pour le voyageur.',
    rules: [
      'LIMITE DE TEMPS : 24 heures pour le résident (muqim), 72 heures pour le voyageur (musafir)',
      'Le délai commence au premier essuyage après le hadath (perte du wudu), pas au moment de chausser',
      'Les khuff doivent avoir été enfilés en état de pureté COMPLÈTE (wudu complet)',
      'Doivent être en cuir (ou matériau équivalent en durabilité et imperméabilité)',
      'Doivent couvrir le pied entier jusqu\'aux chevilles incluses',
      'Doivent être suffisamment durables pour la marche continue habituelle',
      'Doivent être propres (pas d\'impureté dessus)',
      'Ne doivent pas avoir de trous exposant une partie du pied obligatoire à laver',
      'Essuyer le DESSUS du pied uniquement avec les mains mouillées (de la pointe vers la cheville)',
      'Le retrait d\'un seul khuff oblige à laver les DEUX pieds',
      'Ce qui annule le mashu : expiration du délai, tout ce qui nécessite le ghusl, ou retrait des khuff. À l\'expiration du délai ou au retrait, il suffit de LAVER LES PIEDS uniquement (pas besoin de refaire tout le wudu) si le wudu est encore valide par ailleurs',
      'Les chaussettes fines (jawrab) : l\'école chafiite est la PLUS STRICTE sur les chaussettes — elles doivent être assez épaisses pour marcher dessus de manière continue, maintenir leur forme sans attache, et être imperméables à l\'eau. La plupart des chaussettes ordinaires en coton/laine ne remplissent PAS ces conditions selon le mu\'tamad chafiite strict',
    ],
  },
  {
    id: 's-abl-cast',
    title: 'Wudu avec un plâtre ou bandage (Jabira)',
    titleAr: 'المسح على الجبيرة',
    description: 'Si une partie du corps est recouverte d\'un bandage ou plâtre, la position chafiite est la plus prudente : on effectue le wudu normalement en essuyant sur la jabira pour la zone couverte, PUIS on fait un tayammum SUPPLEMENTAIRE pour compenser la zone qu\'on n\'a pas pu laver correctement. Le tayammum est pour la zone couverte spécifiquement, pas un acte séparé complet.',
    rules: [
      'Essuyer sur la jabira (bandage/plâtre) avec les mains mouillées',
      'Laver les zones saines autour du bandage normalement',
      'EN PLUS de l\'essuyage, faire le tayammum comme mesure de PRÉCAUTION (ihtiyat) — position retenue en Chafiite, UNIQUE à cette école',
      'Cette double précaution (essuyage + tayammum) garantit la validité de la purification',
      'Le bandage ne doit pas dépasser excessivement la zone de blessure',
      'Pas de limite de temps — tant que le bandage est médicalement nécessaire',
      'Si le bandage a été posé en état d\'impureté, il faut le retirer si possible, sinon l\'essuyage + tayammum suffisent',
    ],
  },
  {
    id: 's-abl-continuous-flow',
    title: 'Écoulement continu (Istihadha)',
    titleAr: 'الاستحاضة',
    description: 'La personne souffrant d\'un écoulement continu (istihadha, incontinence) doit renouveler son wudu pour CHAQUE prière fard en Chafiite.',
    rules: [
      'Renouveler le wudu pour CHAQUE prière fard est OBLIGATOIRE en Chafiite (comme en Hanafite)',
      'Un seul wudu permet UNE prière fard + autant de nafl qu\'on veut dans le même temps de prière',
      'Le wudu doit être fait APRÈS l\'entrée du temps de la prière visée, et la prière doit être accomplie IMMÉDIATEMENT après le wudu (fawriyya). La fawriyya tolère les délais mineurs nécessaires : se rendre au lieu de prière, ajuster ses vêtements, attendre l\'iqama, prier les sunnah ratiba. Seuls les délais injustifiés et prolongés invalident le wudu',
      'Se protéger avec un pansement ou une protection avant le wudu',
      'L\'écoulement pendant la prière n\'annule ni la prière ni le wudu (facilité — rukhsa)',
      'Si l\'écoulement s\'arrête pendant un temps de prière, elle doit profiter de ce moment pour prier',
      'Cette obligation de renouvellement est basée sur le hadith de Fatima bint Hubaych (Bukhari/Muslim)',
    ],
  },
  {
    id: 's-abl-certainty-doubt',
    title: 'Certitude et doute (al-yaqin la yazulu bi-sh-shakk)',
    titleAr: 'اليقين لا يزول بالشك',
    description: 'Principe fondamental du fiqh : la certitude n\'est pas levée par le doute (al-yaqin la yazulu bi-sh-shakk).',
    rules: [
      'Si l\'on est certain d\'avoir fait le wudu et qu\'on doute de l\'avoir annulé, le wudu reste VALIDE',
      'Si l\'on est certain d\'avoir annulé le wudu et qu\'on doute de l\'avoir refait, le wudu est INVALIDE',
      'C\'est la règle de al-yaqin la yazulu bi-sh-shakk (la certitude n\'est pas levée par le doute)',
      'Ce principe s\'applique aussi au ghusl, au tayammum et à toutes les adorations',
      'Référence : Al-Ashbah wa an-Naza\'ir (as-Suyuti), Al-Majmu\' (Nawawi)',
    ],
  },
  {
    id: 's-abl-turban',
    title: 'Essuyage sur le turban (\'imama)',
    titleAr: 'المسح على العمامة',
    description: 'L\'essuyage sur le turban (\'imama) seul N\'est PAS valide en Chafiite — il faut essuyer directement la tête (même une petite partie suffit). Contrairement à l\'école hanbalite qui autorise l\'essuyage sur le turban sous conditions.',
    rules: [
      'L\'essuyage sur le turban seul N\'EST PAS VALIDE — il faut toucher directement le cuir chevelu ou les cheveux',
      'Même une petite partie de la tête suffit pour le fard (position chafiite sur l\'essuyage partiel)',
      'On peut soulever légèrement le turban pour essuyer une partie visible de la tête',
      'L\'école hanbalite est la seule à permettre l\'essuyage sur le turban sous conditions strictes',
    ],
  },
  {
    id: 's-abl-nail-polish',
    title: 'Vernis à ongles et barrières imperméables',
    titleAr: 'طلاء الأظافر والحواجز',
    description: 'Toute substance empêchant l\'eau d\'atteindre la peau ou les ongles invalide le wudu et le ghusl.',
    rules: [
      'Le vernis à ongles classique forme une couche imperméable — le wudu n\'est PAS valide avec',
      'Il faut retirer le vernis AVANT le wudu',
      'Les vernis dits « halal » / perméables : acceptés UNIQUEMENT si l\'eau les traverse réellement (tester)',
      'Le henné (henna) ne pose pas de problème (colore sans former de couche imperméable)',
      'La cire, la colle, le gel ou toute substance formant une pellicule doivent être retirés',
      'En Chafiite, l\'absence de dalk rend la question centrée uniquement sur le passage de l\'eau — si l\'eau ne traverse pas, c\'est invalide',
    ],
  },
];
