import type { InvocationCategory } from '../types';

export interface CategoryMeta {
  id: InvocationCategory;
  slug: string;
  titre: string;
  titreArabe: string;
  description: string;
  icon: string;
}

export const CATEGORIES: CategoryMeta[] = [
  { id: 'matin', slug: 'matin', titre: 'Adhkar du matin', titreArabe: 'أذكار الصباح', description: 'Invocations à réciter après la prière du Fajr jusqu\'au lever du soleil.', icon: 'Sunrise' },
  { id: 'soir', slug: 'soir', titre: 'Adhkar du soir', titreArabe: 'أذكار المساء', description: 'Invocations à réciter après la prière du Asr jusqu\'au coucher du soleil.', icon: 'Sunset' },
  { id: 'apres-priere', slug: 'apres-priere', titre: 'Après la prière', titreArabe: 'أذكار بعد الصلاة', description: 'Dhikr et invocations à réciter après chaque prière obligatoire.', icon: 'HandHeart' },
  { id: 'sommeil', slug: 'sommeil', titre: 'Avant le sommeil', titreArabe: 'أذكار النوم', description: 'Invocations et sourates à réciter avant de dormir.', icon: 'Moon' },
  { id: 'reveil', slug: 'reveil', titre: 'Au réveil', titreArabe: 'أذكار الاستيقاظ', description: 'Invocations à réciter au réveil du sommeil.', icon: 'Sun' },
  { id: 'repas', slug: 'repas', titre: 'Repas & boisson', titreArabe: 'أذكار الطعام', description: 'Invocations avant et après le repas et la boisson.', icon: 'UtensilsCrossed' },
  { id: 'voyage', slug: 'voyage', titre: 'Voyage', titreArabe: 'أذكار السفر', description: 'Invocations pour le voyage, le départ et le retour.', icon: 'Plane' },
  { id: 'mosquee', slug: 'mosquee', titre: 'Mosquée', titreArabe: 'أذكار المسجد', description: 'Invocations en entrant et en sortant de la mosquée.', icon: 'Building' },
  { id: 'pluie', slug: 'pluie', titre: 'Pluie & intempéries', titreArabe: 'أذكار المطر', description: 'Invocations lors de la pluie, du tonnerre et du vent.', icon: 'CloudRain' },
  { id: 'stress', slug: 'stress', titre: 'Stress & angoisse', titreArabe: 'أذكار الهم والحزن', description: 'Invocations contre l\'anxiété, le stress et la tristesse.', icon: 'ShieldAlert' },
  { id: 'maladie', slug: 'maladie', titre: 'Maladie & guérison', titreArabe: 'أذكار المرض', description: 'Invocations pour la guérison et la visite du malade.', icon: 'Heart' },
  { id: 'protection', slug: 'protection', titre: 'Protection', titreArabe: 'أذكار الحماية', description: 'Invocations de protection contre le mal, le mauvais œil et Shaytan.', icon: 'Shield' },
  { id: 'general', slug: 'general', titre: 'Invocations générales', titreArabe: 'أدعية عامة', description: 'Du\'as complètes pour le pardon, la guidance et la réussite.', icon: 'Sparkles' },
  { id: 'mariage', slug: 'mariage', titre: 'Mariage & famille', titreArabe: 'أذكار الزواج', description: 'Invocations pour le mariage, les époux et les enfants.', icon: 'Users' },
  { id: 'vetements', slug: 'vetements', titre: 'Vêtements & apparence', titreArabe: 'أذكار اللباس', description: 'Invocations en s\'habillant, en se regardant dans le miroir, etc.', icon: 'Shirt' },
  { id: 'deuil', slug: 'deuil', titre: 'Deuil & condoléances', titreArabe: 'أذكار العزاء', description: 'Invocations pour le défunt, les condoléances et le cimetière.', icon: 'Flower2' },
  { id: 'coranique', slug: 'coranique', titre: 'Invocations coraniques', titreArabe: 'الدعاء من القرآن', description: 'Les plus belles invocations tirées directement du Coran.', icon: 'BookOpen' },
  { id: 'istikhara', slug: 'istikhara', titre: 'Prière de consultation', titreArabe: 'صلاة الاستخارة', description: 'La prière et l\'invocation de consultation (Istikhara).', icon: 'Compass' },
];

export function getCategoryBySlug(slug: string): CategoryMeta | undefined {
  return CATEGORIES.find(c => c.slug === slug);
}
