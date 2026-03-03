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
  { label: 'Annexes', href: '/annexes' },
  { label: 'Prière', href: '/horaires' },
  { label: 'Quiz', href: '/quiz' },
  { label: 'Recherche', href: '/recherche' },
] as const;

export const ANNEXES_LINKS = [
  { label: "99 Noms d'Allah", href: '/annexes/noms-allah', icon: 'Star', desc: "Les plus beaux noms d'Allah" },
  { label: '25 Prophètes', href: '/annexes/prophetes', icon: 'Users', desc: 'Les messagers mentionnés dans le Coran' },
  { label: 'Glossaire', href: '/annexes/glossaire', icon: 'BookOpen', desc: 'Vocabulaire essentiel de l\'Islam' },
  { label: 'Miracles scientifiques', href: '/annexes/miracles-scientifiques', icon: 'Microscope', desc: 'Science et Coran' },
  { label: 'Tuto pratique', href: '/annexes/guide-pratique', icon: 'Compass', desc: 'Quelle sourate lire et quand' },
  { label: 'Index thématique', href: '/annexes/index-thematique', icon: 'List', desc: 'Sourates classées par thème' },
  { label: 'Femmes en Islam', href: '/annexes/femmes-en-islam', icon: 'Heart', desc: 'Les grandes femmes du Coran' },
  { label: 'Compagnons', href: '/annexes/compagnons', icon: 'Shield', desc: 'Les Sahaba du Prophète ﷺ' },
  { label: 'Compilation du Coran', href: '/annexes/compilation', icon: 'BookMarked', desc: 'Histoire de la préservation du Coran' },
  { label: 'Guide du Ramadan', href: '/annexes/ramadan', icon: 'Moon', desc: 'Jeûne, prières et conseils pratiques' },
  { label: 'Les 4 écoles', href: '/annexes/ecoles', icon: 'Scale', desc: 'Hanafi, Maliki, Shafi\'i, Hanbali' },
  { label: 'Zakat & Dons', href: '/annexes/zakat', icon: 'HandCoins', desc: 'Calculateur et associations' },
  { label: 'Courants de l\'Islam', href: '/annexes/courants', icon: 'GitBranch', desc: 'Sunnisme, Chiisme, Ibadisme...' },
  { label: '5 piliers de l\'Islam', href: '/annexes/piliers-islam', icon: 'Pilcrow', desc: 'Shahada, Salat, Zakat, Sawm, Hajj' },
  { label: '6 piliers de la foi', href: '/annexes/piliers-foi', icon: 'Sparkles', desc: 'Allah, Anges, Livres, Prophètes, Akhira, Qadr' },
  { label: 'La vie après la mort', href: '/annexes/vie-apres-mort', icon: 'Infinity', desc: 'Tombe, Résurrection, Jugement, Paradis, Enfer' },
  { label: 'Biographie du Prophète ﷺ', href: '/annexes/sira', icon: 'BookHeart', desc: 'La Sira de la naissance au décès' },
] as const;
