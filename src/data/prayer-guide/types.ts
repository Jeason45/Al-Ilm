export type RulingType = 'fard' | 'wajib' | 'sunnah-muakkada' | 'sunnah' | 'mandoub' | 'makrouh';

export type PrayerPositionId =
  | 'qiyam'
  | 'takbir'
  | 'qiyam-hands'
  | 'ruku'
  | 'itidal'
  | 'sujud'
  | 'julus'
  | 'tashahud'
  | 'salam'
  | 'qunut'
  | 'wudu-hands'
  | 'wudu-mouth'
  | 'wudu-nose'
  | 'wudu-face'
  | 'wudu-arms'
  | 'wudu-head'
  | 'wudu-ears'
  | 'wudu-feet';

export interface PrayerPosition {
  id: PrayerPositionId;
  name: string;
  nameAr: string;
  svgPath: string;
}

export interface PrayerStep {
  id: string;
  position: PrayerPositionId;
  ruling: RulingType;
  name: string;
  nameAr: string;
  dhikr?: string;
  dhikrAr?: string;
  dhikrTranslit?: string;
  repetitions?: number;
  notes?: string;
}

export interface Rakaa {
  number: number;
  steps: PrayerStep[];
}

export type PrayerId = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha' | 'witr' | 'sunnah-rawatib' | 'tarawih';

export interface PrayerDefinition {
  id: PrayerId;
  name: string;
  nameAr: string;
  ruling: RulingType;
  rakaatCount: number | string;
  description: string;
  rakaat: Rakaa[];
}

export interface CommonError {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  correction: string;
}

export interface SpecialCase {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  rules: string[];
}
