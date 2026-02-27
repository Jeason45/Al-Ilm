import type { VersetCle } from '@/data/types';

export function VersetCleCard({ verset }: { verset: VersetCle }) {
  return (
    <div className="surah-card" style={{ padding: '1.75rem 2rem' }}>
      <span style={{
        fontSize: '0.8125rem',
        fontFamily: 'monospace',
        color: 'var(--color-gold)',
        opacity: 0.7,
        display: 'block',
        marginBottom: '1rem',
      }}>
        Verset {verset.numero}
      </span>

      <p className="font-amiri" dir="rtl" style={{
        fontSize: 'clamp(1.25rem, 2.5vw, 1.5rem)',
        color: 'var(--color-gold)',
        textAlign: 'right',
        lineHeight: 2.2,
        marginBottom: '1.25rem',
        paddingBottom: '1.25rem',
        borderBottom: '1px solid var(--color-border)',
      }}>
        {verset.arabe}
      </p>

      <p style={{
        fontStyle: 'italic',
        fontSize: '1rem',
        lineHeight: 1.7,
        marginBottom: '1rem',
        color: 'var(--color-foreground)',
        opacity: 0.9,
      }}>
        &laquo; {verset.traduction} &raquo;
      </p>

      <p style={{
        fontSize: '0.9375rem',
        color: 'var(--color-muted)',
        lineHeight: 1.7,
      }}>
        {verset.explication}
      </p>
    </div>
  );
}
