import type { InvocationItem, InvocationCategory } from '../types';
import { CATEGORIES, getCategoryBySlug, type CategoryMeta } from './categories';

import { matinInvocations } from './matin';
import { soirInvocations } from './soir';
import { apresPriereInvocations } from './apres-priere';
import { sommeilInvocations } from './sommeil';
import { reveilInvocations } from './reveil';
import { repasInvocations } from './repas';
import { voyageInvocations } from './voyage';
import { mosqueeInvocations } from './mosquee';
import { pluieInvocations } from './pluie';
import { stressInvocations } from './stress';
import { maladieInvocations } from './maladie';
import { protectionInvocations } from './protection';
import { generalInvocations } from './general';
import { mariageInvocations } from './mariage';
import { vetementsInvocations } from './vetements';
import { deuilInvocations } from './deuil';
import { coraniqueInvocations } from './coranique';
import { istikharaInvocations } from './istikhara';

const ALL_INVOCATIONS_MAP: Record<InvocationCategory, InvocationItem[]> = {
  matin: matinInvocations,
  soir: soirInvocations,
  'apres-priere': apresPriereInvocations,
  sommeil: sommeilInvocations,
  reveil: reveilInvocations,
  repas: repasInvocations,
  voyage: voyageInvocations,
  mosquee: mosqueeInvocations,
  pluie: pluieInvocations,
  stress: stressInvocations,
  maladie: maladieInvocations,
  protection: protectionInvocations,
  general: generalInvocations,
  mariage: mariageInvocations,
  vetements: vetementsInvocations,
  deuil: deuilInvocations,
  coranique: coraniqueInvocations,
  istikhara: istikharaInvocations,
};

export const ALL_INVOCATIONS: InvocationItem[] = Object.values(ALL_INVOCATIONS_MAP).flat();

export function getByCategory(category: InvocationCategory): InvocationItem[] {
  return ALL_INVOCATIONS_MAP[category] || [];
}

export function getByCategorySlug(slug: string): InvocationItem[] {
  const cat = getCategoryBySlug(slug);
  if (!cat) return [];
  return getByCategory(cat.id);
}

export function getCategoryMeta(slug: string): CategoryMeta | undefined {
  return getCategoryBySlug(slug);
}

export function searchInvocations(query: string): InvocationItem[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];
  return ALL_INVOCATIONS.filter(inv =>
    inv.titre.toLowerCase().includes(q) ||
    inv.traduction.toLowerCase().includes(q) ||
    inv.source.toLowerCase().includes(q) ||
    (inv.transliteration && inv.transliteration.toLowerCase().includes(q)) ||
    (inv.notes && inv.notes.toLowerCase().includes(q))
  );
}

export function getCategoryCount(category: InvocationCategory): number {
  return (ALL_INVOCATIONS_MAP[category] || []).length;
}

export { CATEGORIES, getCategoryBySlug };
