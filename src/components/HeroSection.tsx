import Link from 'next/link';
import Image from 'next/image';

export function HeroSection() {
  return (
    <section
      style={{
        width: '100%',
        minHeight: '100dvh',
        display: 'flex',
        flexDirection: 'column' as const,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative' as const,
        overflow: 'hidden',
      }}
    >
      {/* Background image */}
      <Image
        src="/hero-mosque.jpg"
        alt="Mosquée Sheikh Zayed"
        fill
        priority
        quality={90}
        style={{
          objectFit: 'cover',
          objectPosition: 'center center',
          zIndex: 0,
        }}
      />

      {/* Minimal top overlay (navbar readability only) */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), transparent)',
          zIndex: 1,
        }}
      />

      {/* Bottom fade — adapts to theme: black in dark, white in light */}
      <style dangerouslySetInnerHTML={{ __html: `
        .hero-fade {
          position: absolute; bottom: 0; left: 0; right: 0; height: 25%; z-index: 1;
          background: linear-gradient(to bottom, transparent 0%, var(--color-background) 100%);
        }
      `}} />
      <div className="hero-fade" />

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 10, textAlign: 'center' as const, maxWidth: '768px', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <p className="font-amiri animate-fade-in" style={{
          fontSize: 'clamp(3rem, 6vw, 4.5rem)',
          marginBottom: '1.5rem',
          color: '#C9A84C',
          textShadow: '0 2px 20px rgba(0,0,0,0.5)',
        }}>
          العلم
        </p>

        <h1 className="font-outfit font-bold animate-fade-up delay-200" style={{
          fontSize: 'clamp(3.5rem, 10vw, 8rem)',
          letterSpacing: '-0.03em',
          lineHeight: 1,
          color: '#fff',
          textShadow: '0 4px 30px rgba(0,0,0,0.6), 0 1px 3px rgba(0,0,0,0.4)',
        }}>
          Al-Ilm
        </h1>

        <p className="font-outfit animate-fade-up delay-400" style={{
          fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
          marginTop: '1.5rem',
          fontWeight: 300,
          letterSpacing: '-0.01em',
          color: 'rgba(255,255,255,0.85)',
          textShadow: '0 2px 12px rgba(0,0,0,0.5)',
        }}>
          Explorez le Coran, sourate par sourate.
        </p>

        <div className="animate-fade-up delay-600" style={{ marginTop: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link href="/coran" className="btn-primary">
            Lire le Coran
          </Link>
          {[
            { href: '/apprendre', label: 'Apprendre' },
            { href: '/annexes', label: 'Les annexes' },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '12px 28px',
                fontSize: '14px',
                fontWeight: 500,
                borderRadius: '8px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                background: 'rgba(0, 0, 0, 0.65)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                color: '#fff',
                textDecoration: 'none',
                transition: 'background 0.2s, border-color 0.2s',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
