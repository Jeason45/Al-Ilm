interface BadgeProps {
  children: React.ReactNode;
  variant?: 'default' | 'gold' | 'emerald' | 'muted' | 'teal' | 'blue' | 'purple' | 'rose' | 'amber';
  className?: string;
}

const colorMap: Record<string, { color: string; bg: string; border: string }> = {
  default:  { color: 'var(--color-foreground)', bg: 'rgba(128,128,128,0.08)', border: 'rgba(128,128,128,0.12)' },
  gold:     { color: 'var(--color-gold)',    bg: 'rgba(201,168,76,0.10)',  border: 'rgba(201,168,76,0.18)' },
  emerald:  { color: 'var(--color-emerald)', bg: 'rgba(52,211,153,0.10)', border: 'rgba(52,211,153,0.18)' },
  teal:     { color: 'var(--color-teal)',    bg: 'rgba(45,212,191,0.10)', border: 'rgba(45,212,191,0.18)' },
  blue:     { color: 'var(--color-blue)',    bg: 'rgba(96,165,250,0.10)', border: 'rgba(96,165,250,0.18)' },
  purple:   { color: 'var(--color-purple)',  bg: 'rgba(167,139,250,0.10)',border: 'rgba(167,139,250,0.18)' },
  rose:     { color: 'var(--color-rose)',    bg: 'rgba(251,113,133,0.10)',border: 'rgba(251,113,133,0.18)' },
  amber:    { color: 'var(--color-amber)',   bg: 'rgba(251,191,36,0.10)', border: 'rgba(251,191,36,0.18)' },
  muted:    { color: 'var(--color-muted)',   bg: 'rgba(128,128,128,0.08)', border: 'rgba(128,128,128,0.12)' },
};

// Rotation de couleurs pour les tags de thèmes
const themeColors = ['blue', 'purple', 'teal', 'rose', 'amber', 'emerald'] as const;

function getThemeColor(text: string): string {
  let hash = 0;
  for (let i = 0; i < text.length; i++) {
    hash = text.charCodeAt(i) + ((hash << 5) - hash);
  }
  return themeColors[Math.abs(hash) % themeColors.length];
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  // Si variante "muted", on assigne une couleur basée sur le texte
  const resolvedVariant = variant === 'muted'
    ? getThemeColor(typeof children === 'string' ? children : '')
    : variant;

  const colors = colorMap[resolvedVariant] || colorMap.default;

  return (
    <span
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: '3px 10px',
        borderRadius: '6px',
        fontSize: '0.75rem',
        fontWeight: 500,
        color: colors.color,
        background: colors.bg,
        border: `1px solid ${colors.border}`,
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </span>
  );
}
