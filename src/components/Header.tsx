'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { UserMenu } from './UserMenu';
import { NAV_LINKS, SITE_NAME, SITE_NAME_AR } from '@/lib/constants';
import { cn } from '@/lib/utils';

const center: React.CSSProperties = {
  width: '100%',
  maxWidth: '1100px',
  marginLeft: 'auto',
  marginRight: 'auto',
  paddingLeft: '24px',
  paddingRight: '24px',
};

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setIsMobileOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50',
          'backdrop-blur-2xl backdrop-saturate-150',
          'transition-all duration-300',
          isScrolled
            ? 'bg-background/80 border-b border-border'
            : 'bg-black/30 border-b border-transparent'
        )}
      >
        <div style={center}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'baseline', gap: '8px', textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
              <span className="font-outfit font-semibold text-foreground" style={{ fontSize: '17px', letterSpacing: '-0.01em' }}>
                {SITE_NAME}
              </span>
              <span className="font-amiri text-gold" style={{ fontSize: '15px' }}>
                {SITE_NAME_AR}
              </span>
            </Link>

            <nav className="hidden md:flex" style={{ alignItems: 'center', gap: '28px' }}>
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="transition-colors duration-200 hover:text-white"
                    style={{
                      fontSize: '14px',
                      fontWeight: 500,
                      textDecoration: 'none',
                      color: isActive
                        ? '#fff'
                        : isScrolled ? 'var(--color-muted)' : 'rgba(255,255,255,0.75)',
                    }}
                  >
                    {link.label}
                  </Link>
                );
              })}
              <ThemeToggle />
              <UserMenu />
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <UserMenu />
              <ThemeToggle />
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-muted hover:text-foreground transition-colors"
                style={{ width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'none', border: 'none', cursor: 'pointer' }}
                aria-label="Menu"
              >
                {isMobileOpen ? <X style={{ width: '20px', height: '20px' }} /> : <Menu style={{ width: '20px', height: '20px' }} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div
        className={cn(
          'fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-all duration-300 md:hidden',
          isMobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        )}
      >
        <nav style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', gap: '2rem' }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileOpen(false)}
              className={cn(
                'font-outfit font-medium tracking-tight transition-colors',
                pathname === link.href || pathname.startsWith(link.href + '/')
                  ? 'text-foreground'
                  : 'text-muted hover:text-foreground'
              )}
              style={{ fontSize: '1.5rem', textDecoration: 'none' }}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </>
  );
}
