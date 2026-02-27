'use client';

import { wuduDuas } from '@/data/ablutions';

export function WuduDuaSection() {
  return (
    <div style={{ marginTop: '2.5rem' }}>
      <h3 className="font-outfit font-semibold" style={{ fontSize: '1.125rem', marginBottom: '1rem' }}>
        Du&apos;a après le wudu
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {wuduDuas.map((dua) => (
          <div
            key={dua.id}
            className="surah-card"
            style={{ padding: '1.25rem' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
              <span className="font-outfit" style={{ fontSize: '0.9375rem', fontWeight: 600 }}>
                {dua.title}
              </span>
              <span className="font-amiri" style={{ fontSize: '0.875rem', color: 'var(--color-muted)', opacity: 0.5 }}>
                {dua.titleAr}
              </span>
            </div>

            <div style={{
              padding: '12px 16px', borderRadius: '10px',
              background: 'rgba(201, 168, 76, 0.04)',
              border: '1px solid rgba(201, 168, 76, 0.08)',
              marginBottom: '10px',
            }}>
              <p className="font-amiri" style={{
                fontSize: '1.125rem', lineHeight: 1.8,
                color: 'var(--color-gold)', textAlign: 'right',
              }}>
                {dua.arabic}
              </p>
            </div>

            <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)', fontStyle: 'italic', marginBottom: '4px' }}>
              {dua.transliteration}
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-muted)' }}>
              {dua.french}
            </p>
            <p style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', opacity: 0.5, marginTop: '8px', lineHeight: 1.5 }}>
              {dua.source}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
