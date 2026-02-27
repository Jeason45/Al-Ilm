import type { RulingType, PrayerPositionId, CommonError, SpecialCase } from '../prayer-guide/types';

export type AblutionTypeId = 'wudu' | 'ghusl-men' | 'ghusl-women' | 'tayammum';

export interface AblutionStep {
  id: string;
  order: number;
  name: string;
  nameAr: string;
  description: string;
  ruling: RulingType;
  position?: PrayerPositionId;
  repetitions?: number;
  madhabNote?: string;
}

export interface AblutionCondition {
  id: string;
  title: string;
  titleAr: string;
  description: string;
}

export interface AblutionDefinition {
  id: AblutionTypeId;
  name: string;
  nameAr: string;
  description: string;
  steps: AblutionStep[];
  conditions?: AblutionCondition[];
}

export type ConsensusLevel = 'unanime' | 'majoritaire' | 'dispute';

export interface WuduInvalidator {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  consensus: ConsensusLevel;
  madhabNote?: string;
}

export interface WuduDua {
  id: string;
  title: string;
  titleAr: string;
  arabic: string;
  transliteration: string;
  french: string;
  source: string;
}

// Re-export for convenience
export type { CommonError, SpecialCase };
