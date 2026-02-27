import type { PrayerPosition } from './types';

export const positions: PrayerPosition[] = [
  {
    id: 'qiyam',
    name: 'Debout (Qiyam)',
    nameAr: 'قيام',
    imagePath: '/images/prayer/qiyam.png',
  },
  {
    id: 'takbir',
    name: 'Takbir al-Ihram',
    nameAr: 'تكبيرة الإحرام',
    imagePath: '/images/prayer/takbir.png',
  },
  {
    id: 'qiyam-hands',
    name: 'Debout mains croisées',
    nameAr: 'وضع اليدين',
    imagePath: '/images/prayer/qiyam-hands.png',
  },
  {
    id: 'ruku',
    name: 'Inclinaison (Ruku)',
    nameAr: 'ركوع',
    imagePath: '/images/prayer/ruku.png',
  },
  {
    id: 'itidal',
    name: 'Redressement (I\'tidal)',
    nameAr: 'اعتدال',
    imagePath: '/images/prayer/itidal.png',
  },
  {
    id: 'sujud',
    name: 'Prosternation (Sujud)',
    nameAr: 'سجود',
    imagePath: '/images/prayer/sujud.png',
  },
  {
    id: 'julus',
    name: 'Assis (Julus)',
    nameAr: 'جلوس',
    imagePath: '/images/prayer/julus.png',
  },
  {
    id: 'tashahud',
    name: 'Tashahud',
    nameAr: 'تشهد',
    imagePath: '/images/prayer/tashahud.png',
  },
  {
    id: 'salam',
    name: 'Salutations (Salam)',
    nameAr: 'سلام',
    imagePath: '/images/prayer/salam.png',
  },
  {
    id: 'qunut',
    name: 'Qunut',
    nameAr: 'قنوت',
    imagePath: '/images/prayer/qunut.png',
  },
  // ─── Wudu positions ───
  {
    id: 'wudu-hands',
    name: 'Lavage des mains',
    nameAr: 'غسل اليدين',
    imagePath: '/images/prayer/wudu-hands.png',
  },
  {
    id: 'wudu-mouth',
    name: 'Rinçage de la bouche',
    nameAr: 'المضمضة',
    imagePath: '/images/prayer/wudu-mouth.png',
  },
  {
    id: 'wudu-nose',
    name: 'Rinçage du nez',
    nameAr: 'الاستنشاق',
    imagePath: '/images/prayer/wudu-nose.png',
  },
  {
    id: 'wudu-face',
    name: 'Lavage du visage',
    nameAr: 'غسل الوجه',
    imagePath: '/images/prayer/wudu-face.png',
  },
  {
    id: 'wudu-arms',
    name: 'Lavage des bras',
    nameAr: 'غسل اليدين إلى المرفقين',
    imagePath: '/images/prayer/wudu-arms.png',
  },
  {
    id: 'wudu-head',
    name: 'Essuyage de la tête',
    nameAr: 'مسح الرأس',
    imagePath: '/images/prayer/wudu-head.png',
  },
  {
    id: 'wudu-ears',
    name: 'Essuyage des oreilles',
    nameAr: 'مسح الأذنين',
    imagePath: '/images/prayer/wudu-ears.png',
  },
  {
    id: 'wudu-feet',
    name: 'Lavage des pieds',
    nameAr: 'غسل القدمين',
    imagePath: '/images/prayer/wudu-feet.png',
  },
];

export function getPosition(id: string): PrayerPosition | undefined {
  return positions.find(p => p.id === id);
}
