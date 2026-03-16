'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';
import { Copy, Download, Upload, RotateCcw } from 'lucide-react';
import type { PrayerPositionId } from '@/data/prayer-guide/types';
import type { Gender } from '../types';
import { AVATAR_MODELS } from '../constants';
import { PRAYER_POSES } from '../poses';
import { ZERO_POSE } from '../poses/defaults';
import { TheatreAvatar } from './TheatreAvatar';
import { readCurrentPose, loadPoseIntoTheatre } from './theatreSetup';

const POSE_IDS: { id: PrayerPositionId; label: string }[] = [
  { id: 'qiyam', label: 'Qiyam (debout)' },
  { id: 'takbir', label: 'Takbir' },
  { id: 'qiyam-hands', label: 'Qiyam (mains)' },
  { id: 'ruku', label: 'Ruku' },
  { id: 'itidal', label: "I'tidal" },
  { id: 'sujud', label: 'Sujud' },
  { id: 'julus', label: 'Julus' },
  { id: 'tashahud', label: 'Tashahud' },
  { id: 'salam', label: 'Salam' },
  { id: 'qunut', label: 'Qunut' },
  { id: 'wudu-hands', label: 'Wudu — Mains' },
  { id: 'wudu-mouth', label: 'Wudu — Bouche' },
  { id: 'wudu-nose', label: 'Wudu — Nez' },
  { id: 'wudu-face', label: 'Wudu — Visage' },
  { id: 'wudu-arms', label: 'Wudu — Bras' },
  { id: 'wudu-head', label: 'Wudu — Tête' },
  { id: 'wudu-ears', label: 'Wudu — Oreilles' },
  { id: 'wudu-feet', label: 'Wudu — Pieds' },
];

function SceneContent({ gender }: { gender: Gender }) {
  return (
    <>
      <ambientLight intensity={0.6} />
      <directionalLight position={[3, 5, 3]} intensity={0.8} />
      <directionalLight position={[-3, 3, -3]} intensity={0.3} />
      <Grid
        args={[10, 10]}
        position={[0, 0, 0]}
        cellColor="rgba(201, 168, 76, 0.15)"
        sectionColor="rgba(201, 168, 76, 0.3)"
        fadeDistance={8}
        infiniteGrid
      />
      <TheatreAvatar modelUrl={AVATAR_MODELS[gender]} scale={1} />
      <OrbitControls makeDefault minDistance={1} maxDistance={6} target={[0, 0.9, 0]} />
    </>
  );
}

export function TheatrePoseEditor() {
  const [gender, setGender] = useState<Gender>('male');
  const [exportedJson, setExportedJson] = useState<string>('');
  const [studioReady, setStudioReady] = useState(false);

  // Initialize Theatre.js Studio on mount
  useEffect(() => {
    let cancelled = false;
    import('@theatre/studio').then((mod) => {
      if (cancelled) return;
      mod.default.initialize();
      setStudioReady(true);
    });
    return () => { cancelled = true; };
  }, []);

  const handleLoadPose = useCallback(async (poseId: PrayerPositionId) => {
    const pose = PRAYER_POSES[poseId];
    if (pose) {
      await loadPoseIntoTheatre(pose);
    }
  }, []);

  const handleReset = useCallback(async () => {
    await loadPoseIntoTheatre(structuredClone(ZERO_POSE));
    setExportedJson('');
  }, []);

  const handleExport = useCallback(() => {
    const pose = readCurrentPose();
    const json = JSON.stringify(pose, null, 2);
    setExportedJson(json);
  }, []);

  const handleCopy = useCallback(() => {
    if (exportedJson) {
      navigator.clipboard.writeText(exportedJson);
    }
  }, [exportedJson]);

  const btnStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '6px',
    padding: '8px 14px',
    fontSize: '0.8125rem',
    fontWeight: 600,
    borderRadius: '8px',
    border: '1px solid rgba(201, 168, 76, 0.25)',
    background: 'rgba(201, 168, 76, 0.08)',
    color: '#c9a84c',
    cursor: 'pointer',
    transition: 'all 0.15s',
  };

  const selectStyle: React.CSSProperties = {
    padding: '6px 10px',
    fontSize: '0.8125rem',
    fontWeight: 500,
    borderRadius: '6px',
    border: '1px solid rgba(201, 168, 76, 0.2)',
    background: 'rgba(255, 255, 255, 0.03)',
    color: '#e0e0e0',
    cursor: 'pointer',
    outline: 'none',
  };

  if (!studioReady) {
    return (
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 'calc(100vh - 60px)',
        color: '#888',
        fontSize: '0.875rem',
      }}>
        Initialisation de Theatre.js Studio...
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 60px)' }}>
      {/* Toolbar */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '12px 20px',
        borderBottom: '1px solid rgba(201, 168, 76, 0.1)',
        flexWrap: 'wrap',
      }}>
        {/* Load pose preset */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <label style={{ fontSize: '0.75rem', fontWeight: 600, color: '#888' }}>
            Charger pose :
          </label>
          <select
            style={selectStyle}
            onChange={(e) => {
              if (e.target.value) handleLoadPose(e.target.value as PrayerPositionId);
            }}
            defaultValue=""
          >
            <option value="" disabled>Choisir...</option>
            {POSE_IDS.map((p) => (
              <option key={p.id} value={p.id}>{p.label}</option>
            ))}
          </select>
        </div>

        {/* Gender toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          {(['male', 'female'] as const).map((g) => (
            <button
              key={g}
              onClick={() => setGender(g)}
              style={{
                ...btnStyle,
                padding: '6px 12px',
                background: gender === g ? 'rgba(201, 168, 76, 0.2)' : 'transparent',
                color: gender === g ? '#c9a84c' : '#888',
              }}
            >
              {g === 'male' ? 'Homme' : 'Femme'}
            </button>
          ))}
        </div>

        <div style={{ flex: 1 }} />

        {/* Actions */}
        <button onClick={handleReset} style={btnStyle}>
          <RotateCcw style={{ width: '14px', height: '14px' }} />
          Reset
        </button>
        <button onClick={handleExport} style={btnStyle}>
          <Download style={{ width: '14px', height: '14px' }} />
          Export JSON
        </button>
      </div>

      {/* Main area */}
      <div style={{ flex: 1, display: 'flex', position: 'relative' }}>
        {/* 3D Canvas */}
        <div style={{ flex: 1, minHeight: '400px' }}>
          <Canvas
            camera={{ position: [0, 1.2, 2.5], fov: 50 }}
            style={{ width: '100%', height: '100%', background: '#0d0d1a' }}
          >
            <SceneContent gender={gender} />
          </Canvas>
        </div>

        {/* Exported JSON panel (slides in when exported) */}
        {exportedJson && (
          <div style={{
            width: '400px',
            overflowY: 'auto',
            padding: '16px',
            background: '#0a0a18',
            borderLeft: '1px solid rgba(201, 168, 76, 0.1)',
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '12px',
            }}>
              <span style={{ fontSize: '0.8125rem', fontWeight: 700, color: '#c9a84c' }}>
                PrayerPoseConfig
              </span>
              <button onClick={handleCopy} style={{ ...btnStyle, padding: '4px 10px', fontSize: '0.75rem' }}>
                <Copy style={{ width: '12px', height: '12px' }} />
                Copier
              </button>
            </div>
            <pre style={{
              fontSize: '0.6875rem',
              lineHeight: 1.5,
              color: '#aaa',
              background: 'rgba(255, 255, 255, 0.02)',
              padding: '12px',
              borderRadius: '8px',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              overflow: 'auto',
              whiteSpace: 'pre-wrap',
              wordBreak: 'break-word',
            }}>
              {exportedJson}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
