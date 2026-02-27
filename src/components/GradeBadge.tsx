interface GradeBadgeProps {
  grade?: string;
  allSahih: boolean;
}

type GradeLevel = 'sahih' | 'hasan' | 'daif' | 'consensus';

function classifyGrade(grade: string): GradeLevel {
  const g = grade.toLowerCase().trim();
  if (g.includes('daif') || g.includes("da'if") || g.includes('munkar') || g.includes('maudu') || g.includes('mawdu')) return 'daif';
  if (g.includes('hasan')) return 'hasan';
  return 'sahih';
}

const gradeStyles: Record<GradeLevel, { color: string; bg: string; border: string }> = {
  sahih:     { color: 'var(--color-emerald)', bg: 'rgba(52,211,153,0.10)', border: 'rgba(52,211,153,0.18)' },
  consensus: { color: 'var(--color-emerald)', bg: 'rgba(52,211,153,0.10)', border: 'rgba(52,211,153,0.18)' },
  hasan:     { color: 'var(--color-amber)',   bg: 'rgba(251,191,36,0.10)', border: 'rgba(251,191,36,0.18)' },
  daif:      { color: 'var(--color-rose)',    bg: 'rgba(251,113,133,0.10)', border: 'rgba(251,113,133,0.18)' },
};

export function GradeBadge({ grade, allSahih }: GradeBadgeProps) {
  let level: GradeLevel;
  let label: string;

  if (allSahih) {
    level = 'consensus';
    label = 'Sahih (consensus)';
  } else if (!grade) {
    return null;
  } else {
    level = classifyGrade(grade);
    label = grade;
  }

  const style = gradeStyles[level];

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '6px',
        fontSize: '0.6875rem',
        fontWeight: 500,
        color: style.color,
        background: style.bg,
        border: `1px solid ${style.border}`,
        whiteSpace: 'nowrap',
      }}
    >
      {level === 'sahih' || level === 'consensus' ? '✓ ' : level === 'daif' ? '✗ ' : ''}{label}
    </span>
  );
}

export function getPrimaryGrade(grades: { name: string; grade: string }[]): string | undefined {
  if (grades.length === 0) return undefined;
  return grades[0].grade;
}

export function getGradeLevel(grade: string): GradeLevel {
  return classifyGrade(grade);
}
