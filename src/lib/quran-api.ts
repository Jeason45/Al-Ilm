const QURAN_API_BASE = 'https://api.quran.com/api/v4';
const AUDIO_CDN_BASE = 'https://verses.quran.com';

export const RECITERS = [
  { id: 7, name: 'Mishary Rashid Al-Afasy' },
  { id: 2, name: 'AbdulBaset AbdulSamad (Murattal)' },
  { id: 3, name: 'Abdur-Rahman as-Sudais' },
  { id: 6, name: 'Mahmoud Khalil Al-Husary' },
] as const;

export const DEFAULT_RECITER_ID = 7;

// Translation IDs
const FRENCH_TRANSLATION = 31;       // Hamidullah
const ENGLISH_TRANSLATION = 20;      // Saheeh International
const TRANSLITERATION_ID = 57;       // Transliteration

export interface QuranVerse {
  verse_number: number;
  verse_key: string;
  text_uthmani: string;
  transliteration: string;
  translation_fr: string;
  translation_en: string;
  audio_url: string | null;
}

function stripFootnotes(text: string): string {
  return text.replace(/<sup[^>]*>.*?<\/sup>/gi, '').replace(/<[^>]+>/g, '').trim();
}

export async function fetchVerses(chapterNumber: number): Promise<QuranVerse[]> {
  // Fetch verses with French + English translations
  const versesRes = await fetch(
    `${QURAN_API_BASE}/verses/by_chapter/${chapterNumber}?language=fr&translations=${FRENCH_TRANSLATION},${ENGLISH_TRANSLATION}&fields=text_uthmani&per_page=300`
  );
  if (!versesRes.ok) throw new Error(`Failed to fetch verses: ${versesRes.status}`);
  const versesData = await versesRes.json();

  // Fetch transliteration separately
  const translitRes = await fetch(
    `${QURAN_API_BASE}/quran/translations/${TRANSLITERATION_ID}?chapter_number=${chapterNumber}`
  );
  if (!translitRes.ok) throw new Error(`Failed to fetch transliteration: ${translitRes.status}`);
  const translitData = await translitRes.json();

  // Build transliteration array (no verse_key in this endpoint, matched by index)
  const translitTexts: string[] = translitData.translations.map(
    (t: { text: string }) => stripFootnotes(t.text)
  );

  // Merge into unified QuranVerse[]
  return versesData.verses.map((v: { verse_number: number; verse_key: string; text_uthmani: string; translations: { resource_id: number; text: string }[] }, index: number) => {
    const frTranslation = v.translations.find((t: { resource_id: number }) => t.resource_id === FRENCH_TRANSLATION);
    const enTranslation = v.translations.find((t: { resource_id: number }) => t.resource_id === ENGLISH_TRANSLATION);

    return {
      verse_number: v.verse_number,
      verse_key: v.verse_key,
      text_uthmani: v.text_uthmani,
      transliteration: translitTexts[index] || '',
      translation_fr: frTranslation ? stripFootnotes(frTranslation.text) : '',
      translation_en: enTranslation ? stripFootnotes(enTranslation.text) : '',
      audio_url: null,
    };
  });
}

// Tafsir al-Muyassar (Arabic, simplified)
const TAFSIR_ID = 16;

export async function fetchTafsir(chapterNumber: number): Promise<Map<number, string>> {
  const res = await fetch(
    `${QURAN_API_BASE}/quran/tafsirs/${TAFSIR_ID}?chapter_number=${chapterNumber}`
  );
  if (!res.ok) throw new Error(`Failed to fetch tafsir: ${res.status}`);
  const data = await res.json();

  const tafsirMap = new Map<number, string>();
  for (const t of data.tafsirs) {
    const verseNum = parseInt(t.verse_key.split(':')[1], 10);
    tafsirMap.set(verseNum, stripFootnotes(t.text));
  }
  return tafsirMap;
}

export async function fetchAudio(chapterNumber: number, reciterId: number): Promise<Map<string, string>> {
  const res = await fetch(
    `${QURAN_API_BASE}/recitations/${reciterId}/by_chapter/${chapterNumber}`
  );
  if (!res.ok) throw new Error(`Failed to fetch audio: ${res.status}`);
  const data = await res.json();

  const audioMap = new Map<string, string>();
  for (const af of data.audio_files) {
    audioMap.set(af.verse_key, `${AUDIO_CDN_BASE}/${af.url}`);
  }
  return audioMap;
}
