export interface AdhanLine {
  id: string;
  arabic: string;
  transliteration: string;
  french: string;
  repetitions: number;
}

export const adhanLines: AdhanLine[] = [
  {
    id: 'takbir-1',
    arabic: 'الله أكبر',
    transliteration: 'Allahu Akbar',
    french: 'Allah est le plus Grand',
    repetitions: 4,
  },
  {
    id: 'shahada-1',
    arabic: 'أشهد أن لا إله إلا الله',
    transliteration: 'Ash-hadu an la ilaha illallah',
    french: 'J\'atteste qu\'il n\'y a pas de divinité en dehors d\'Allah',
    repetitions: 2,
  },
  {
    id: 'shahada-2',
    arabic: 'أشهد أن محمدا رسول الله',
    transliteration: 'Ash-hadu anna Muhammadan rasulullah',
    french: 'J\'atteste que Muhammad est le Messager d\'Allah',
    repetitions: 2,
  },
  {
    id: 'hayya-salah',
    arabic: 'حي على الصلاة',
    transliteration: 'Hayya \'ala as-salah',
    french: 'Venez à la prière',
    repetitions: 2,
  },
  {
    id: 'hayya-falah',
    arabic: 'حي على الفلاح',
    transliteration: 'Hayya \'ala al-falah',
    french: 'Venez au succès',
    repetitions: 2,
  },
  {
    id: 'takbir-2',
    arabic: 'الله أكبر',
    transliteration: 'Allahu Akbar',
    french: 'Allah est le plus Grand',
    repetitions: 2,
  },
  {
    id: 'tawhid',
    arabic: 'لا إله إلا الله',
    transliteration: 'La ilaha illallah',
    french: 'Il n\'y a pas de divinité en dehors d\'Allah',
    repetitions: 1,
  },
];

export const iqamaLines: AdhanLine[] = [
  {
    id: 'iq-takbir-1',
    arabic: 'الله أكبر',
    transliteration: 'Allahu Akbar',
    french: 'Allah est le plus Grand',
    repetitions: 2,
  },
  {
    id: 'iq-shahada-1',
    arabic: 'أشهد أن لا إله إلا الله',
    transliteration: 'Ash-hadu an la ilaha illallah',
    french: 'J\'atteste qu\'il n\'y a pas de divinité en dehors d\'Allah',
    repetitions: 1,
  },
  {
    id: 'iq-shahada-2',
    arabic: 'أشهد أن محمدا رسول الله',
    transliteration: 'Ash-hadu anna Muhammadan rasulullah',
    french: 'J\'atteste que Muhammad est le Messager d\'Allah',
    repetitions: 1,
  },
  {
    id: 'iq-hayya-salah',
    arabic: 'حي على الصلاة',
    transliteration: 'Hayya \'ala as-salah',
    french: 'Venez à la prière',
    repetitions: 1,
  },
  {
    id: 'iq-hayya-falah',
    arabic: 'حي على الفلاح',
    transliteration: 'Hayya \'ala al-falah',
    french: 'Venez au succès',
    repetitions: 1,
  },
  {
    id: 'iq-qad-qamat',
    arabic: 'قد قامت الصلاة',
    transliteration: 'Qad qamati as-salah',
    french: 'La prière est établie',
    repetitions: 2,
  },
  {
    id: 'iq-takbir-2',
    arabic: 'الله أكبر',
    transliteration: 'Allahu Akbar',
    french: 'Allah est le plus Grand',
    repetitions: 2,
  },
  {
    id: 'iq-tawhid',
    arabic: 'لا إله إلا الله',
    transliteration: 'La ilaha illallah',
    french: 'Il n\'y a pas de divinité en dehors d\'Allah',
    repetitions: 1,
  },
];

export function getTotalAdhanLines(): number {
  return adhanLines.reduce((sum, line) => sum + line.repetitions, 0);
}

export function getTotalIqamaLines(): number {
  return iqamaLines.reduce((sum, line) => sum + line.repetitions, 0);
}
