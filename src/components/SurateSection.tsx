interface SurateSectionProps {
  id: string;
  title: string;
  icon?: React.ReactNode;
  iconColor?: string;
  children: React.ReactNode;
  className?: string;
}

export function SurateSection({ id, title, icon, iconColor = 'var(--color-gold)', children }: SurateSectionProps) {
  return (
    <section id={id} style={{ scrollMarginTop: '120px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        marginBottom: '1.25rem',
      }}>
        {icon && <span style={{ color: iconColor, display: 'flex' }}>{icon}</span>}
        <h2 className="font-outfit font-semibold" style={{ fontSize: '1.25rem', letterSpacing: '-0.02em', color: iconColor }}>
          {title}
        </h2>
      </div>
      <div style={{
        fontSize: '1rem',
        lineHeight: 1.85,
        color: 'var(--color-foreground)',
      }}>
        {children}
      </div>
    </section>
  );
}
