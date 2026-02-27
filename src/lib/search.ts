import Fuse from 'fuse.js';
import type { SurahMeta } from '@/data/types';

/* ── Surah search (existing) ── */
let fuseInstance: Fuse<SurahMeta> | null = null;

export function getSearchInstance(items: SurahMeta[]): Fuse<SurahMeta> {
  if (!fuseInstance) {
    fuseInstance = new Fuse(items, {
      keys: [
        { name: 'nom', weight: 2 },
        { name: 'nomFrancais', weight: 2 },
        { name: 'nomArabe', weight: 1.5 },
        { name: 'themes', weight: 1 },
        { name: 'themeCentral', weight: 1 },
      ],
      threshold: 0.3,
      includeMatches: true,
      minMatchCharLength: 2,
    });
  }
  return fuseInstance;
}

export function searchSurahs(query: string, items: SurahMeta[]) {
  if (!query.trim()) return items;
  const fuse = getSearchInstance(items);
  return fuse.search(query).map(result => result.item);
}

/* ── Unified search ── */
export type SearchCategory = 'all' | 'sourates' | 'noms-allah' | 'prophetes' | 'glossaire' | 'invocations';

export interface SearchResult {
  category: SearchCategory;
  title: string;
  subtitle: string;
  detail?: string;
  href: string;
  arabic?: string;
}

interface SearchableItem {
  category: SearchCategory;
  title: string;
  subtitle: string;
  detail?: string;
  href: string;
  arabic?: string;
  searchText: string; // concatenated text for fuzzy matching
}

let unifiedFuse: Fuse<SearchableItem> | null = null;
let cachedItems: SearchableItem[] | null = null;

export function buildSearchIndex(): SearchableItem[] {
  if (cachedItems) return cachedItems;

  /* eslint-disable @typescript-eslint/no-require-imports */
  const { surahsMeta } = require('@/data/metadata');
  const { nomsAllah } = require('@/data/annexes/noms-allah');
  const { prophetes } = require('@/data/annexes/prophetes');
  const { glossaire } = require('@/data/annexes/glossaire');
  const { invocations } = require('@/data/annexes/invocations');

  const items: SearchableItem[] = [];

  // Sourates
  for (const s of surahsMeta) {
    items.push({
      category: 'sourates',
      title: `${s.nom} — ${s.nomFrancais}`,
      subtitle: `Sourate ${s.numero} · ${s.nombreVersets} versets · ${s.type}`,
      href: `/coran/${s.numero}`,
      arabic: s.nomArabe,
      searchText: `${s.nom} ${s.nomFrancais} ${s.nomArabe} ${s.themes.join(' ')} ${s.themeCentral}`,
    });
  }

  // Noms d'Allah
  for (const n of nomsAllah) {
    items.push({
      category: 'noms-allah',
      title: `${n.nom} — ${n.signification}`,
      subtitle: `Nom d'Allah n°${n.numero}`,
      detail: n.explication.slice(0, 120) + '…',
      href: '/annexes/noms-allah',
      arabic: n.arabe,
      searchText: `${n.nom} ${n.arabe} ${n.signification} ${n.explication}`,
    });
  }

  // Prophètes
  for (const p of prophetes) {
    items.push({
      category: 'prophetes',
      title: p.nom,
      subtitle: p.titre,
      detail: p.histoire.slice(0, 120) + '…',
      href: '/annexes/prophetes',
      arabic: p.nomArabe,
      searchText: `${p.nom} ${p.nomArabe} ${p.titre} ${p.histoire}`,
    });
  }

  // Glossaire
  for (const g of glossaire) {
    items.push({
      category: 'glossaire',
      title: `${g.terme} (${g.arabe})`,
      subtitle: g.definition.slice(0, 100) + '…',
      href: '/annexes/glossaire',
      arabic: g.arabe,
      searchText: `${g.terme} ${g.arabe} ${g.definition}`,
    });
  }

  // Invocations
  for (const inv of invocations) {
    items.push({
      category: 'invocations',
      title: inv.titre,
      subtitle: inv.reference,
      detail: inv.traduction.slice(0, 120) + '…',
      href: '/annexes/invocations',
      arabic: inv.arabe.slice(0, 80),
      searchText: `${inv.titre} ${inv.traduction} ${inv.arabe} ${inv.occasion} ${inv.reference}`,
    });
  }

  cachedItems = items;
  return items;
}

export function unifiedSearch(query: string, category: SearchCategory = 'all'): SearchResult[] {
  const items = buildSearchIndex();

  if (!unifiedFuse) {
    unifiedFuse = new Fuse(items, {
      keys: [
        { name: 'searchText', weight: 1 },
        { name: 'title', weight: 2 },
        { name: 'arabic', weight: 1.5 },
      ],
      threshold: 0.35,
      minMatchCharLength: 2,
    });
  }

  const results = unifiedFuse.search(query, { limit: 30 });

  return results
    .map(r => r.item)
    .filter(item => category === 'all' || item.category === category)
    .map(({ searchText: _, ...rest }) => rest);
}
