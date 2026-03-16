export const SITE_NAME = 'Al-Ilm';
export const SITE_NAME_AR = 'العلم';
export const SITE_DESCRIPTION = "Explorez les 114 sourates du Coran, les 99 Noms d'Allah, les 25 Prophètes et bien plus encore.";
export const SITE_URL = 'https://al-ilm.vercel.app';

export const STATS = {
  sourates: 114,
  versets: 6236,
  nomsAllah: 99,
  prophetes: 25,
} as const;

export const NAV_LINKS = [
  { label: 'Coran', href: '/coran' },
  { label: 'Hadiths', href: '/hadiths' },
  { label: 'Invocations', href: '/invocations' },
  { label: 'Apprendre', href: '/apprendre' },
  { label: 'Pratique', href: '/pratique' },
  { label: 'Quiz', href: '/quiz' },
] as const;

/* ── Apprendre — hub catégorisé ── */

export interface ApprendreCategory {
  title: string;
  titleAr: string;
  items: readonly ApprendreLink[];
}

export interface ApprendreLink {
  label: string;
  href: string;
  icon: string;
  desc: string;
}

export const APPRENDRE_CATEGORIES: ApprendreCategory[] = [
  {
    title: 'Les bases',
    titleAr: 'الأساسيات',
    items: [
      { label: '5 piliers de l\'Islam', href: '/apprendre/piliers-islam', icon: 'Pilcrow', desc: 'Shahada, Salat, Zakat, Sawm, Hajj' },
      { label: '6 piliers de la foi', href: '/apprendre/piliers-foi', icon: 'Sparkles', desc: 'Allah, Anges, Livres, Prophètes, Akhira, Qadr' },
      { label: '99 Noms d\'Allah', href: '/apprendre/noms-allah', icon: 'Star', desc: 'Les plus beaux noms d\'Allah' },
      { label: 'Glossaire', href: '/apprendre/glossaire', icon: 'BookOpen', desc: 'Vocabulaire essentiel de l\'Islam' },
    ],
  },
  {
    title: 'Figures de l\'Islam',
    titleAr: 'شخصيات الإسلام',
    items: [
      { label: 'Biographie du Prophète ﷺ', href: '/apprendre/sira', icon: 'BookHeart', desc: 'La Sira de la naissance au décès' },
      { label: '25 Prophètes', href: '/apprendre/prophetes', icon: 'Users', desc: 'Les messagers mentionnés dans le Coran' },
      { label: 'Compagnons', href: '/apprendre/compagnons', icon: 'Shield', desc: 'Les Sahaba du Prophète ﷺ' },
      { label: 'Femmes en Islam', href: '/apprendre/femmes-en-islam', icon: 'Heart', desc: 'Les grandes femmes du Coran' },
    ],
  },
  {
    title: 'Au-delà & Spiritualité',
    titleAr: 'الآخرة والروحانية',
    items: [
      { label: 'La vie après la mort', href: '/apprendre/vie-apres-mort', icon: 'Infinity', desc: 'Tombe, Résurrection, Jugement, Paradis, Enfer' },
      { label: 'Miracles scientifiques', href: '/apprendre/miracles-scientifiques', icon: 'Microscope', desc: 'Points de réflexion entre Coran et science' },
    ],
  },
  {
    title: 'Savoir & Histoire',
    titleAr: 'العلم والتاريخ',
    items: [
      { label: 'Compilation du Coran', href: '/apprendre/compilation', icon: 'BookMarked', desc: 'Histoire de la préservation du Coran' },
      { label: 'Les 4 écoles', href: '/apprendre/ecoles', icon: 'Scale', desc: 'Hanafi, Maliki, Shafi\'i, Hanbali' },
      { label: 'Courants de l\'Islam', href: '/apprendre/courants', icon: 'GitBranch', desc: 'Sunnisme, Chiisme, Ibadisme...' },
      { label: 'Index thématique', href: '/apprendre/index-thematique', icon: 'List', desc: 'Sourates classées par thème' },
    ],
  },
];

/* Flat list for sitemap/footer */
export const APPRENDRE_LINKS = APPRENDRE_CATEGORIES.flatMap((c) => c.items);

/* ── Pratique — hub outils quotidiens ── */

export const PRATIQUE_LINKS = [
  { label: 'La Prière', href: '/pratique/priere', icon: 'HandMetal', desc: 'Horaires, Adhan, Ablutions, Guide de prière' },
  { label: 'Guide pratique', href: '/pratique/guide', icon: 'Compass', desc: 'Quelle sourate lire et quand' },
  { label: 'Guide du Ramadan', href: '/pratique/ramadan', icon: 'Moon', desc: 'Jeûne, prières et conseils pratiques' },
  { label: 'Zakat & Dons', href: '/pratique/zakat', icon: 'HandCoins', desc: 'Calculateur et associations' },
] as const;
