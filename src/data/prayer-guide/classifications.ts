import type { RulingType } from './types';

export interface ClassificationMeta {
  label: string;
  labelAr: string;
  color: string;
  bg: string;
  border: string;
}

export const classifications: Record<RulingType, ClassificationMeta> = {
  fard: {
    label: 'Fard',
    labelAr: 'فرض',
    color: 'var(--color-rose)',
    bg: 'rgba(251,113,133,0.10)',
    border: 'rgba(251,113,133,0.18)',
  },
  wajib: {
    label: 'Wajib',
    labelAr: 'واجب',
    color: 'var(--color-amber)',
    bg: 'rgba(251,191,36,0.10)',
    border: 'rgba(251,191,36,0.18)',
  },
  'sunnah-muakkada': {
    label: 'Sunnah mu\'akkada',
    labelAr: 'سنة مؤكدة',
    color: 'var(--color-emerald)',
    bg: 'rgba(52,211,153,0.10)',
    border: 'rgba(52,211,153,0.18)',
  },
  sunnah: {
    label: 'Sunnah',
    labelAr: 'سنة',
    color: 'var(--color-teal)',
    bg: 'rgba(45,212,191,0.10)',
    border: 'rgba(45,212,191,0.18)',
  },
  mandoub: {
    label: 'Mandoub',
    labelAr: 'مندوب',
    color: 'var(--color-blue)',
    bg: 'rgba(96,165,250,0.10)',
    border: 'rgba(96,165,250,0.18)',
  },
  makrouh: {
    label: 'Makrouh',
    labelAr: 'مكروه',
    color: 'var(--color-purple)',
    bg: 'rgba(167,139,250,0.10)',
    border: 'rgba(167,139,250,0.18)',
  },
};
