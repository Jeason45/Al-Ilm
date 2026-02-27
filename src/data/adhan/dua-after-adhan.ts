export interface Dua {
  id: string;
  title: string;
  titleAr: string;
  arabic: string;
  transliteration: string;
  french: string;
  source: string;
}

export const duaAfterAdhan: Dua[] = [
  {
    id: 'wasila',
    title: 'Du\'a Al-Wasila',
    titleAr: 'دعاء الوسيلة',
    arabic: 'اللهم رب هذه الدعوة التامة والصلاة القائمة، آت محمدا الوسيلة والفضيلة وابعثه مقاما محمودا الذي وعدته',
    transliteration: 'Allahumma Rabba hadhihi ad-da\'wati at-tammah, wa as-salati al-qa\'imah, ati Muhammadan al-wasilata wal-fadilah, wab\'ath-hu maqaman mahmudan alladhi wa\'adtah',
    french: 'Ô Allah, Seigneur de cet appel parfait et de cette prière qui va être accomplie, accorde à Muhammad la Wasila (le degré le plus élevé au Paradis) et la grâce, et ressuscite-le à la station louable que Tu lui as promise.',
    source: 'Rapporté par Al-Bukhari',
  },
  {
    id: 'repeat-muezzin',
    title: 'Répéter après le muezzin',
    titleAr: 'الترديد خلف المؤذن',
    arabic: 'يقول السامع مثل ما يقول المؤذن إلا عند «حي على الصلاة» و«حي على الفلاح» فيقول: لا حول ولا قوة إلا بالله',
    transliteration: 'On répète chaque phrase du muezzin, sauf pour « Hayya \'ala as-salah » et « Hayya \'ala al-falah » où l\'on dit : La hawla wa la quwwata illa billah',
    french: 'L\'auditeur répète les paroles du muezzin, sauf pour « Venez à la prière » et « Venez au succès » où il dit : « Il n\'y a de force ni de puissance qu\'en Allah ».',
    source: 'Rapporté par Muslim',
  },
];
