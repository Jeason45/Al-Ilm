export interface Muezzin {
  id: string;
  name: string;
  nameAr: string;
  audioUrl: string;
}

export const muezzins: Muezzin[] = [
  {
    id: 'afasy',
    name: 'Mishary Al-Afasy',
    nameAr: 'مشاري العفاسي',
    audioUrl: 'https://cdn.aladhan.com/audio/adhans/a9.mp3',
  },
  {
    id: 'afasy-dubai',
    name: 'Mishary Al-Afasy (Dubai)',
    nameAr: 'مشاري العفاسي (دبي)',
    audioUrl: 'https://cdn.aladhan.com/audio/adhans/a4.mp3',
  },
  {
    id: 'nafees',
    name: 'Ahmad Al-Nafees',
    nameAr: 'أحمد النفيس',
    audioUrl: 'https://cdn.aladhan.com/audio/adhans/a1.mp3',
  },
  {
    id: 'zahrani',
    name: 'Mansour Al-Zahrani',
    nameAr: 'منصور الزهراني',
    audioUrl: 'https://cdn.aladhan.com/audio/adhans/a11-mansour-al-zahrani.mp3',
  },
];

export function getMuezzinById(id: string): Muezzin | undefined {
  return muezzins.find(m => m.id === id);
}
