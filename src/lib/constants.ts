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
  { label: 'Annexes', href: '/annexes' },
  { label: 'Horaires', href: '/horaires' },
  { label: 'Quiz', href: '/quiz' },
  { label: 'Recherche', href: '/recherche' },
  { label: 'Favoris', href: '/favoris' },
] as const;

export const ANNEXES_LINKS = [
  { label: "99 Noms d'Allah", href: '/annexes/noms-allah', icon: 'Star' },
  { label: '25 Prophètes', href: '/annexes/prophetes', icon: 'Users' },
  { label: 'Glossaire', href: '/annexes/glossaire', icon: 'BookOpen' },
  { label: 'Miracles scientifiques', href: '/annexes/miracles-scientifiques', icon: 'Microscope' },
  { label: 'Invocations', href: '/annexes/invocations', icon: 'HandHeart' },
  { label: 'Guide pratique', href: '/annexes/guide-pratique', icon: 'Compass' },
  { label: 'Index thématique', href: '/annexes/index-thematique', icon: 'List' },
  { label: 'Femmes en Islam', href: '/annexes/femmes-en-islam', icon: 'Heart' },
  { label: 'Compagnons', href: '/annexes/compagnons', icon: 'Shield' },
  { label: 'Compilation du Coran', href: '/annexes/compilation', icon: 'BookMarked' },
] as const;
