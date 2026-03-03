'use client';

import { ScrollReveal } from '@/components/ScrollReveal';
import { histoireMeta, histoireTimeline, type TimelineItem } from '@/data/histoire';

function renderContenu(contenu: string) {
  const paragraphs = contenu.split('\n\n');
  return paragraphs.map((p, i) => {
    const dialogueMatch = p.match(/^(.+?)\s*:\s*«\s*([\s\S]+?)\s*»$/);
    if (dialogueMatch) {
      return (
        <div key={i} style={{ paddingLeft: '1rem', borderLeft: '2px solid var(--color-gold)', margin: '0.75rem 0', opacity: 0.9 }}>
          <span className="font-outfit font-semibold" style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', display: 'block', marginBottom: '0.25rem' }}>
            {dialogueMatch[1]}
          </span>
          <p style={{ fontSize: '0.9375rem', lineHeight: 1.7, margin: 0, fontStyle: 'italic' }}>
            « {dialogueMatch[2]} »
          </p>
        </div>
      );
    }
    return (
      <p key={i} style={{ fontSize: '0.9375rem', lineHeight: 1.8, margin: '0.75rem 0', color: 'var(--color-text)' }}>
        {p}
      </p>
    );
  });
}

function ChapterHeader({ item }: { item: Extract<TimelineItem, { type: 'chapter' }> }) {
  return (
    <ScrollReveal>
      <div style={{
        textAlign: 'center',
        padding: '3rem 1rem',
        marginTop: '3rem',
        marginBottom: '1rem',
      }}>
        <span style={{
          fontSize: '0.75rem',
          fontWeight: 600,
          textTransform: 'uppercase',
          letterSpacing: '0.15em',
          color: 'var(--color-gold)',
          display: 'block',
          marginBottom: '0.5rem',
        }}>
          Chapitre {item.numero}
        </span>
        <h2 className="font-outfit font-bold" style={{
          fontSize: 'clamp(1.5rem, 3.5vw, 2rem)',
          letterSpacing: '-0.02em',
        }}>
          {item.titre}
        </h2>
      </div>
    </ScrollReveal>
  );
}

function SectionHeader({ item }: { item: Extract<TimelineItem, { type: 'section' }> }) {
  return (
    <ScrollReveal>
      <div style={{
        textAlign: 'center',
        padding: '1.5rem 1rem',
        marginBottom: '1.5rem',
      }}>
        <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '0.5rem' }}>{item.emoji}</span>
        <h3 className="font-outfit font-semibold" style={{
          fontSize: '1.125rem',
          marginBottom: '0.375rem',
        }}>
          {item.titre}
        </h3>
        <p className="text-muted" style={{ fontSize: '0.875rem', maxWidth: '28rem', margin: '0 auto' }}>
          {item.sousTitre}
        </p>
      </div>
    </ScrollReveal>
  );
}

function EventCard({ item, isLast }: { item: Extract<TimelineItem, { type: 'event' }>; isLast: boolean }) {
  return (
    <ScrollReveal>
      <div style={{ position: 'relative', paddingLeft: '2.5rem', paddingBottom: isLast ? 0 : '2rem' }}>
        {/* Timeline line */}
        {!isLast && (
          <div style={{
            position: 'absolute',
            left: '7px',
            top: '12px',
            bottom: 0,
            width: '1px',
            background: 'var(--color-border)',
          }} />
        )}
        {/* Timeline dot */}
        <div style={{
          position: 'absolute',
          left: 0,
          top: '6px',
          width: '15px',
          height: '15px',
          borderRadius: '50%',
          background: 'var(--color-gold)',
        }} />

        <div className="surah-card" style={{ padding: 'clamp(1.25rem, 2.5vw, 1.75rem)' }}>
          {/* Date badge */}
          <span style={{
            fontSize: '0.75rem',
            color: 'var(--color-gold)',
            fontWeight: 500,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            display: 'block',
            marginBottom: '0.5rem',
          }}>
            {item.date}
          </span>

          {/* Title */}
          <h3 className="font-outfit font-semibold" style={{
            fontSize: '1.0625rem',
            marginBottom: '1rem',
          }}>
            {item.id}. {item.titre}
          </h3>

          {/* Content */}
          <div style={{ marginBottom: '1rem' }}>
            {renderContenu(item.contenu)}
          </div>

          {/* Lesson box */}
          <div style={{
            background: 'rgba(212, 175, 55, 0.06)',
            border: '1px solid rgba(212, 175, 55, 0.15)',
            borderRadius: '8px',
            padding: '1rem',
            marginTop: '1rem',
          }}>
            <span style={{
              fontSize: '0.75rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--color-gold)',
              display: 'block',
              marginBottom: '0.375rem',
            }}>
              Leçon
            </span>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, margin: 0, color: 'var(--color-text)', opacity: 0.85 }}>
              {item.lecon}
            </p>
          </div>

          {/* Sourates */}
          {item.sourates && (
            <div style={{ marginTop: '0.75rem' }}>
              <span style={{
                fontSize: '0.75rem',
                color: 'var(--color-muted)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.375rem',
              }}>
                📖 Sourates : {item.sourates}
              </span>
            </div>
          )}
        </div>
      </div>
    </ScrollReveal>
  );
}

export default function HistoirePage() {
  // Find the indices of events to determine which is last
  const events = histoireTimeline.filter((item): item is Extract<TimelineItem, { type: 'event' }> => item.type === 'event');
  const lastEventId = events[events.length - 1]?.id;

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              {histoireMeta.titreAr}
            </p>
            <h1 className="font-outfit font-bold" style={{
              fontSize: 'clamp(2.25rem, 5vw, 3.5rem)',
              letterSpacing: '-0.03em',
              marginBottom: '1rem',
            }}>
              Histoire du Coran.
            </h1>
            <p className="text-muted" style={{ fontSize: '1.0625rem', maxWidth: '32rem', margin: '0 auto', marginBottom: '1rem' }}>
              {histoireMeta.description}
            </p>
            <p style={{ fontSize: '0.8125rem', color: 'var(--color-gold)', opacity: 0.7 }}>
              {histoireMeta.stats}
            </p>
          </div>
        </ScrollReveal>

        {/* Timeline */}
        <div style={{ maxWidth: '40rem', margin: '0 auto' }}>
          {histoireTimeline.map((item, index) => {
            if (item.type === 'chapter') {
              return <ChapterHeader key={`ch-${index}`} item={item} />;
            }
            if (item.type === 'section') {
              return <SectionHeader key={`sec-${index}`} item={item} />;
            }
            return (
              <EventCard
                key={`ev-${item.id}`}
                item={item}
                isLast={item.id === lastEventId}
              />
            );
          })}
        </div>

        {/* Epilogue */}
        <ScrollReveal delay={200}>
          <div style={{
            marginTop: '4rem',
            textAlign: 'center',
            padding: '2rem 1rem',
            borderTop: '1px solid var(--color-border)',
          }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.5rem', marginBottom: '1.5rem', opacity: 0.5 }}>
              الخاتمة
            </p>
            {histoireMeta.epilogue.split('\n\n').map((paragraph, i) => (
              <p key={i} style={{
                fontSize: '1.0625rem',
                lineHeight: 1.8,
                color: 'var(--color-text)',
                maxWidth: '32rem',
                margin: '0 auto',
                marginBottom: '1rem',
                opacity: 0.85,
              }}>
                {paragraph.split('\n').map((line, j) => (
                  <span key={j}>
                    {j > 0 && <br />}
                    {line}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
