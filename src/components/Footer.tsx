import Link from 'next/link';
import { SITE_NAME, SITE_NAME_AR, NAV_LINKS, ANNEXES_LINKS } from '@/lib/constants';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

export function Footer() {
  return (
    <footer style={{ width: '100%', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ ...center, paddingTop: 'clamp(2.5rem, 5vw, 4rem)', paddingBottom: 'clamp(3rem, 5vw, 5rem)' }}>
        <div className="footer-grid">
          <div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '1rem' }}>
              <span className="font-outfit font-semibold" style={{ fontSize: '17px', letterSpacing: '-0.01em' }}>{SITE_NAME}</span>
              <span className="font-amiri text-gold" style={{ fontSize: '15px' }}>{SITE_NAME_AR}</span>
            </div>
            <p className="text-muted" style={{ fontSize: '15px', lineHeight: 1.6, maxWidth: '20rem' }}>
              Apprendre l&apos;Islam, sourate par sourate — une plateforme accessible à tous.
            </p>
          </div>

          <div>
            <h4 className="text-muted" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '1.25rem' }}>Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-foreground transition-colors duration-200" style={{ fontSize: '14px', textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-muted" style={{ fontSize: '13px', fontWeight: 500, textTransform: 'uppercase' as const, letterSpacing: '0.05em', marginBottom: '1.25rem' }}>Annexes</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' as const, gap: '0.75rem' }}>
              {ANNEXES_LINKS.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-muted hover:text-foreground transition-colors duration-200" style={{ fontSize: '14px', textDecoration: 'none' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div style={{ marginTop: 'clamp(2.5rem, 4vw, 4rem)', paddingTop: '2rem', borderTop: '1px solid var(--color-border)', textAlign: 'center' }}>
          <p className="font-amiri" style={{ color: 'rgba(201, 168, 76, 0.4)', fontSize: '1.125rem', marginBottom: '0.75rem' }}>
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </p>
          <p style={{ fontSize: '13px', color: 'var(--color-muted)' }}>
            © {new Date().getFullYear()} {SITE_NAME}
          </p>
        </div>
      </div>
    </footer>
  );
}
