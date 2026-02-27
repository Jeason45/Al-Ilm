'use client';

import { useState, useEffect, useCallback } from 'react';
import { useGLTF } from '@react-three/drei';

// ─── Preset avatars ───

interface PresetAvatar {
  id: string;
  name: string;
  gender: 'male' | 'female';
  glbUrl: string;
  thumbnailUrl: string;
}

const PRESET_AVATARS: PresetAvatar[] = [
  {
    id: 'male-1',
    name: 'Adam',
    gender: 'male',
    glbUrl: 'https://models.readyplayer.me/696ce18a29115399d7fe924c.glb',
    thumbnailUrl: 'https://models.readyplayer.me/696ce18a29115399d7fe924c.png?size=256',
  },
  {
    id: 'female-1',
    name: 'Hawa',
    gender: 'female',
    glbUrl: 'https://models.readyplayer.me/696cdaef13dd42b7164c700f.glb',
    thumbnailUrl: 'https://models.readyplayer.me/696cdaef13dd42b7164c700f.png?size=256',
  },
];

// ─── RPM Creator Modal ───

function RPMCreatorModal({ isOpen, onClose, onAvatarCreated }: {
  isOpen: boolean;
  onClose: () => void;
  onAvatarCreated: (glbUrl: string) => void;
}) {
  const [loading, setLoading] = useState(true);

  const handleMessage = useCallback((event: MessageEvent) => {
    if (!event.origin.includes('readyplayer.me')) return;

    try {
      const data = typeof event.data === 'string' ? JSON.parse(event.data) : event.data;

      if (data.eventName === 'v1.avatar.exported' && data.data?.url) {
        // Ensure full-body GLB URL
        let url = data.data.url as string;
        if (!url.includes('morphTargets') && !url.includes('?')) {
          url += '?morphTargets=none&textureAtlas=none&lod=0';
        }
        onAvatarCreated(url);
        onClose();
      }

      if (data.eventName === 'v1.frame.ready') {
        setLoading(false);
      }
    } catch {
      // Not a JSON message
    }
  }, [onAvatarCreated, onClose]);

  useEffect(() => {
    if (!isOpen) {
      setLoading(true);
      return;
    }
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, [isOpen, handleMessage]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0, 0, 0, 0.8)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '1rem',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div style={{
        width: '100%', maxWidth: '640px', height: '80vh',
        borderRadius: '16px', overflow: 'hidden',
        background: 'var(--color-card)',
        border: '1px solid var(--color-border)',
        display: 'flex', flexDirection: 'column',
      }}>
        {/* Header */}
        <div style={{
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          padding: '12px 16px',
          borderBottom: '1px solid var(--color-border)',
        }}>
          <span className="font-outfit font-semibold" style={{ fontSize: '0.9375rem' }}>
            Créer mon avatar
          </span>
          <button
            onClick={onClose}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              color: 'var(--color-muted)', fontSize: '1.25rem', lineHeight: 1,
              padding: '4px',
            }}
          >
            ✕
          </button>
        </div>

        {/* Iframe */}
        <div style={{ flex: 1, position: 'relative' }}>
          {loading && (
            <div style={{
              position: 'absolute', inset: 0,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'var(--color-card)',
            }}>
              <div style={{
                width: '32px', height: '32px', borderRadius: '50%',
                border: '3px solid var(--color-border)',
                borderTopColor: 'var(--color-gold)',
                animation: 'spin 1s linear infinite',
              }} />
            </div>
          )}
          <iframe
            src="https://demo.readyplayer.me/avatar?frameApi&bodyType=fullbody"
            style={{ width: '100%', height: '100%', border: 'none' }}
            allow="camera *; microphone *"
          />
        </div>
      </div>
    </div>
  );
}

// ─── Main customizer component ───

interface AvatarCustomizerProps {
  currentUrl: string;
  onSelect: (url: string) => void;
}

export function AvatarCustomizer({ currentUrl, onSelect }: AvatarCustomizerProps) {
  const [showCreator, setShowCreator] = useState(false);
  const [expanded, setExpanded] = useState(false);

  // Preload preset avatars
  useEffect(() => {
    PRESET_AVATARS.forEach(a => useGLTF.preload(a.glbUrl));
  }, []);

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setExpanded(prev => !prev)}
        style={{
          display: 'flex', alignItems: 'center', gap: '6px',
          background: 'none', border: '1px solid var(--color-border)',
          borderRadius: '8px', padding: '6px 12px',
          color: 'var(--color-muted)', cursor: 'pointer',
          fontSize: '0.75rem', transition: 'all 0.2s',
        }}
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
          <circle cx="12" cy="7" r="4" />
        </svg>
        Changer d&apos;avatar
        <svg
          width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
          style={{ transition: 'transform 0.2s', transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Expanded panel */}
      {expanded && (
        <div style={{
          marginTop: '10px',
          padding: '12px',
          background: 'var(--color-card)',
          border: '1px solid var(--color-border)',
          borderRadius: '12px',
          display: 'flex', flexDirection: 'column', gap: '12px',
          animation: 'fade-in 0.2s ease-out',
        }}>
          {/* Presets */}
          <div>
            <p style={{ fontSize: '0.6875rem', color: 'var(--color-muted)', marginBottom: '8px', fontWeight: 500 }}>
              Avatars prédéfinis
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
              {PRESET_AVATARS.map(avatar => {
                const isActive = currentUrl === avatar.glbUrl;
                return (
                  <button
                    key={avatar.id}
                    onClick={() => onSelect(avatar.glbUrl)}
                    style={{
                      display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px',
                      background: 'none', border: isActive ? '2px solid var(--color-gold)' : '2px solid var(--color-border)',
                      borderRadius: '12px', padding: '8px',
                      cursor: 'pointer', transition: 'all 0.2s',
                      opacity: isActive ? 1 : 0.7,
                    }}
                  >
                    <img
                      src={avatar.thumbnailUrl}
                      alt={avatar.name}
                      style={{
                        width: '56px', height: '56px', borderRadius: '8px',
                        objectFit: 'cover', background: 'var(--color-bg)',
                      }}
                    />
                    <span style={{ fontSize: '0.6875rem', color: isActive ? 'var(--color-gold)' : 'var(--color-muted)' }}>
                      {avatar.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Create custom */}
          <div>
            <button
              onClick={() => setShowCreator(true)}
              style={{
                width: '100%',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: 'rgba(201, 168, 76, 0.08)',
                border: '1px dashed rgba(201, 168, 76, 0.3)',
                borderRadius: '10px', padding: '10px 16px',
                color: 'var(--color-gold)', cursor: 'pointer',
                fontSize: '0.8125rem', fontWeight: 500,
                transition: 'all 0.2s',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Créer mon avatar personnalisé
            </button>
          </div>
        </div>
      )}

      {/* RPM Creator Modal */}
      <RPMCreatorModal
        isOpen={showCreator}
        onClose={() => setShowCreator(false)}
        onAvatarCreated={(url) => {
          onSelect(url);
          setShowCreator(false);
        }}
      />
    </>
  );
}
