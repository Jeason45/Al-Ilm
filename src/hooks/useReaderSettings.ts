'use client';

import { useLocalStorage } from './useLocalStorage';

export type LayerId = 'transliteration' | 'french' | 'english' | 'tafsir';
export type DisplayMode = 'verse' | 'continuous' | 'group';

export interface TranslationLayer {
  id: LayerId;
  label: string;
  enabled: boolean;
}

const DEFAULT_LAYERS: TranslationLayer[] = [
  { id: 'transliteration', label: 'Phonétique', enabled: true },
  { id: 'french', label: 'Français', enabled: true },
  { id: 'english', label: 'Anglais', enabled: false },
  { id: 'tafsir', label: 'Tafsir (exégèse)', enabled: false },
];

const ALL_IDS: LayerId[] = ['transliteration', 'french', 'english', 'tafsir'];
const VALID_MODES: DisplayMode[] = ['verse', 'continuous', 'group'];

function ensureAllLayers(stored: TranslationLayer[]): TranslationLayer[] {
  if (!Array.isArray(stored) || stored.length === 0) return DEFAULT_LAYERS;
  const existingIds = new Set(stored.map(l => l.id));
  const missing = DEFAULT_LAYERS.filter(d => !existingIds.has(d.id));
  const valid = stored.filter(l => ALL_IDS.includes(l.id));
  if (missing.length > 0 || valid.length !== stored.length) {
    return [...valid, ...missing];
  }
  return stored;
}

export function useReaderSettings() {
  const [rawLayers, setLayers] = useLocalStorage<TranslationLayer[]>('al-ilm-reader-layers', DEFAULT_LAYERS);
  const [rawMode, setDisplayMode] = useLocalStorage<DisplayMode>('al-ilm-display-mode', 'verse');
  const layers = ensureAllLayers(rawLayers);
  const displayMode = VALID_MODES.includes(rawMode) ? rawMode : 'verse';

  const toggleLayer = (id: LayerId) => {
    setLayers(
      layers.map((l) => (l.id === id ? { ...l, enabled: !l.enabled } : l))
    );
  };

  const moveLayer = (id: LayerId, direction: 'up' | 'down') => {
    const idx = layers.findIndex((l) => l.id === id);
    if (idx === -1) return;
    const swapIdx = direction === 'up' ? idx - 1 : idx + 1;
    if (swapIdx < 0 || swapIdx >= layers.length) return;
    const next = [...layers];
    [next[idx], next[swapIdx]] = [next[swapIdx], next[idx]];
    setLayers(next);
  };

  return { layers, toggleLayer, moveLayer, displayMode, setDisplayMode };
}
