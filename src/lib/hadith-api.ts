const CDN_PRIMARY = 'https://cdn.jsdelivr.net/gh/fawazahmed0/hadith-api@1';
const CDN_FALLBACK = 'https://raw.githubusercontent.com/fawazahmed0/hadith-api/1';

// ── Types ──

export interface HadithGrade {
  name: string;
  grade: string;
}

export interface Hadith {
  number: number;
  textFr: string;
  textAr: string;
  grades: HadithGrade[];
  reference: { book: number; hadith: number };
  sectionName: string;
}

export interface HadithSection {
  number: number;
  name: string;
  hadithFirst: number;
  hadithLast: number;
  count: number;
}

export interface HadithCollectionMeta {
  id: string;
  name: string;
  nameAr: string;
  author: string;
  count: number;
  allSahih: boolean;
  grades: { sahih: number; hasan: number; daif: number } | null; // null = pas de grades disponibles
}

// ── Static metadata for 9 collections ──
// Pourcentages calculés depuis l'API (grade[0] de chaque hadith)

export const HADITH_COLLECTIONS: HadithCollectionMeta[] = [
  { id: 'bukhari', name: 'Sahih al-Bukhari', nameAr: 'صحيح البخاري', author: 'Imam al-Bukhari', count: 7563, allSahih: true, grades: { sahih: 100, hasan: 0, daif: 0 } },
  { id: 'muslim', name: 'Sahih Muslim', nameAr: 'صحيح مسلم', author: 'Imam Muslim', count: 3033, allSahih: true, grades: { sahih: 100, hasan: 0, daif: 0 } },
  { id: 'abudawud', name: 'Sunan Abu Dawud', nameAr: 'سنن أبي داود', author: 'Imam Abu Dawud', count: 5274, allSahih: false, grades: { sahih: 72, hasan: 9, daif: 20 } },
  { id: 'ibnmajah', name: 'Sunan Ibn Majah', nameAr: 'سنن ابن ماجه', author: 'Imam Ibn Majah', count: 4341, allSahih: false, grades: { sahih: 71, hasan: 8, daif: 21 } },
  { id: 'nasai', name: "Sunan an-Nasa'i", nameAr: 'سنن النسائي', author: "Imam an-Nasa'i", count: 5758, allSahih: false, grades: { sahih: 90, hasan: 3, daif: 7 } },
  { id: 'malik', name: 'Muwatta Malik', nameAr: 'موطأ مالك', author: 'Imam Malik', count: 1858, allSahih: false, grades: { sahih: 77, hasan: 3, daif: 18 } },
  { id: 'nawawi', name: '40 Hadiths an-Nawawi', nameAr: 'الأربعون النووية', author: 'Imam an-Nawawi', count: 42, allSahih: false, grades: null },
  { id: 'qudsi', name: '40 Hadiths Qudsi', nameAr: 'الأحاديث القدسية', author: 'Hadiths Qudsi', count: 40, allSahih: false, grades: null },
  { id: 'dehlawi', name: '40 Hadiths Shah Waliullah', nameAr: 'أربعون الدهلوي', author: 'Shah Waliullah Dehlawi', count: 40, allSahih: false, grades: null },
];

export function getCollectionMeta(id: string): HadithCollectionMeta | undefined {
  return HADITH_COLLECTIONS.find((c) => c.id === id);
}

export function isSmallCollection(id: string): boolean {
  const meta = getCollectionMeta(id);
  return !!meta && meta.count <= 50;
}

// ── Fetch helpers ──

async function fetchWithFallback(path: string): Promise<Response> {
  const primary = `${CDN_PRIMARY}${path}`;
  try {
    const res = await fetch(primary);
    if (res.ok) return res;
  } catch {
    // fallback
  }
  const fallback = `${CDN_FALLBACK}${path}`;
  const res = await fetch(fallback);
  if (!res.ok) throw new Error(`Failed to fetch ${path}: ${res.status}`);
  return res;
}

// ── Sections metadata (statique, pré-généré) ──

import { HADITH_SECTIONS } from '@/data/hadith-sections';

export function getCollectionSections(id: string): HadithSection[] {
  return HADITH_SECTIONS[id] || [];
}

// ── Fetch hadiths for a specific section ──

interface RawHadith {
  hadithnumber: number;
  text: string;
  grades: HadithGrade[];
  reference: { book: number; hadith: number };
}

export async function fetchSectionHadiths(id: string, sectionNum: number, sectionName: string): Promise<Hadith[]> {
  const [frRes, arRes] = await Promise.all([
    fetchWithFallback(`/editions/fra-${id}/sections/${sectionNum}.min.json`),
    fetchWithFallback(`/editions/ara-${id}/sections/${sectionNum}.min.json`),
  ]);

  const frData = await frRes.json();
  const arData = await arRes.json();

  const arMap = new Map<number, string>();
  for (const h of arData.hadiths as RawHadith[]) {
    arMap.set(h.hadithnumber, h.text);
  }

  return (frData.hadiths as RawHadith[]).map((h) => ({
    number: h.hadithnumber,
    textFr: h.text,
    textAr: arMap.get(h.hadithnumber) || '',
    grades: h.grades || [],
    reference: h.reference,
    sectionName,
  }));
}

// ── Fetch full collection (for small collections ≤50 hadiths) ──

export async function fetchFullCollection(id: string): Promise<Hadith[]> {
  const [frRes, arRes] = await Promise.all([
    fetchWithFallback(`/editions/fra-${id}.min.json`),
    fetchWithFallback(`/editions/ara-${id}.min.json`),
  ]);

  const frData = await frRes.json();
  const arData = await arRes.json();

  const arMap = new Map<number, string>();
  for (const h of arData.hadiths as RawHadith[]) {
    arMap.set(h.hadithnumber, h.text);
  }

  const sections = frData.metadata?.sections || {};

  return (frData.hadiths as RawHadith[]).map((h) => ({
    number: h.hadithnumber,
    textFr: h.text,
    textAr: arMap.get(h.hadithnumber) || '',
    grades: h.grades || [],
    reference: h.reference,
    sectionName: sections[String(h.reference?.book)] || '',
  }));
}
