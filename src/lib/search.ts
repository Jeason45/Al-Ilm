import Fuse from 'fuse.js';
import type { SurahMeta } from '@/data/types';

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
