export interface VersetCle {
  numero: string;
  arabe: string;
  traduction: string;
  explication: string;
}

export interface Surah {
  numero: number;
  nom: string;
  nomArabe: string;
  nomFrancais: string;
  nombreVersets: number;
  type: 'mecquoise' | 'medinoise';
  themes: string[];
  prophetesmentionnes: string[];
  themeCentral: string;
  contexteRevelation: string;
  recitsEtHistoires: string;
  leconsARetenir: string;
  versetsCles: VersetCle[];
  meritesEtRecompenses: string;
  lienSurateSuivante?: string;
}

export interface SurahMeta {
  numero: number;
  nom: string;
  nomArabe: string;
  nomFrancais: string;
  nombreVersets: number;
  type: 'mecquoise' | 'medinoise';
  themes: string[];
  themeCentral: string;
}

export interface NomAllah {
  numero: number;
  nom: string;
  arabe: string;
  signification: string;
  explication: string;
}

export interface Prophete {
  nom: string;
  nomArabe: string;
  titre: string;
  sourates: string[];
  histoire: string;
}

export interface GlossaireItem {
  terme: string;
  arabe: string;
  definition: string;
}

export interface MiracleScientifique {
  titre: string;
  verset: string;
  reference: string;
  explication: string;
  decouverteModerne: string;
}

export interface Invocation {
  titre: string;
  arabe: string;
  traduction: string;
  reference: string;
  occasion: string;
}

export interface GuidePratique {
  situation: string;
  sourates: string[];
  explication: string;
}

export interface ThemeIndex {
  theme: string;
  sourates: number[];
  description: string;
}

export interface FemmeEnIslam {
  nom: string;
  titre: string;
  sourate: string;
  histoire: string;
}

export interface Compagnon {
  nom: string;
  nomArabe: string;
  titre: string;
  histoire: string;
}

export type InvocationCategory = 'matin' | 'soir' | 'apres-priere' | 'sommeil' | 'reveil'
  | 'repas' | 'voyage' | 'mosquee' | 'pluie' | 'stress' | 'maladie' | 'protection'
  | 'general' | 'mariage' | 'vetements' | 'deuil' | 'coranique' | 'istikhara';

export interface InvocationItem {
  id: string;
  category: InvocationCategory;
  titre: string;
  arabe: string;
  transliteration?: string;
  traduction: string;
  source: string;
  isQuranic: boolean;
  quranRef?: string;
  repetitions?: number;
  notes?: string;
}
