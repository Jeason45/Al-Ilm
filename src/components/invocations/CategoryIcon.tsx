import {
  Sunrise,
  Sunset,
  Moon,
  Sun,
  UtensilsCrossed,
  Plane,
  CloudRain,
  ShieldAlert,
  HeartPulse,
  ShieldCheck,
  Sparkles,
  Users,
  Shirt,
  Flower2,
  BookOpen,
  Compass,
  HandHeart,
  Hand,
  DoorOpen,
  Home,
  Wind,
  Flame,
  Eye,
  UsersRound,
  MoonStar,
  Mountain,
  Baby,
  Wallet,
  ShieldBan,
  PartyPopper,
} from 'lucide-react';
import type { InvocationCategory } from '@/data/types';

/* ── Style map: couleur + fond par catégorie ── */

const CATEGORY_STYLES: Record<string, { color: string; bg: string }> = {
  matin:         { color: '#F59E0B', bg: 'rgba(245,158,11,0.14)' },
  soir:          { color: '#818CF8', bg: 'rgba(129,140,248,0.14)' },
  'apres-priere':{ color: '#C9A84C', bg: 'rgba(201,168,76,0.14)' },
  sommeil:       { color: '#A78BFA', bg: 'rgba(167,139,250,0.14)' },
  reveil:        { color: '#FB923C', bg: 'rgba(251,146,60,0.14)' },
  repas:         { color: '#34D399', bg: 'rgba(52,211,153,0.14)' },
  voyage:        { color: '#60A5FA', bg: 'rgba(96,165,250,0.14)' },
  mosquee:       { color: '#2DD4BF', bg: 'rgba(45,212,191,0.14)' },
  pluie:         { color: '#94A3B8', bg: 'rgba(148,163,184,0.14)' },
  stress:        { color: '#FB7185', bg: 'rgba(251,113,133,0.14)' },
  maladie:       { color: '#4ADE80', bg: 'rgba(74,222,128,0.14)' },
  protection:    { color: '#38BDF8', bg: 'rgba(56,189,248,0.14)' },
  general:       { color: '#FBBF24', bg: 'rgba(251,191,36,0.14)' },
  mariage:       { color: '#F472B6', bg: 'rgba(244,114,182,0.14)' },
  vetements:     { color: '#C084FC', bg: 'rgba(192,132,252,0.14)' },
  deuil:         { color: '#9CA3AF', bg: 'rgba(156,163,175,0.14)' },
  coranique:     { color: '#D4B96A', bg: 'rgba(212,185,106,0.14)' },
  istikhara:     { color: '#22D3EE', bg: 'rgba(34,211,238,0.14)' },
  qunut:         { color: '#A3E635', bg: 'rgba(163,230,53,0.14)' },
  toilettes:     { color: '#78716C', bg: 'rgba(120,113,108,0.14)' },
  maison:        { color: '#F97316', bg: 'rgba(249,115,22,0.14)' },
  eternuement:   { color: '#67E8F9', bg: 'rgba(103,232,249,0.14)' },
  colere:        { color: '#EF4444', bg: 'rgba(239,68,68,0.14)' },
  reves:         { color: '#E879F9', bg: 'rgba(232,121,249,0.14)' },
  assemblee:     { color: '#2DD4BF', bg: 'rgba(45,212,191,0.14)' },
  jeune:         { color: '#FCD34D', bg: 'rgba(252,211,77,0.14)' },
  hajj:          { color: '#A78BFA', bg: 'rgba(167,139,250,0.14)' },
  'nouveau-ne':  { color: '#FDA4AF', bg: 'rgba(253,164,175,0.14)' },
  dette:         { color: '#86EFAC', bg: 'rgba(134,239,172,0.14)' },
  oppression:    { color: '#F87171', bg: 'rgba(248,113,113,0.14)' },
  eid:           { color: '#FDE047', bg: 'rgba(253,224,71,0.14)' },
};

export function getCategoryStyle(id: string) {
  return CATEGORY_STYLES[id] ?? { color: '#C9A84C', bg: 'rgba(201,168,76,0.14)' };
}

/* ── Custom mosque SVG ── */

function MosqueIcon({ color, size }: { color: string; size: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={1.75}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Dome */}
      <path d="M12 3C8.5 3 6 6.5 6 9h12c0-2.5-2.5-6-6-6z" />
      {/* Crescent */}
      <circle cx="12" cy="4.5" r="0.75" fill={color} stroke="none" />
      {/* Building body */}
      <rect x="6" y="9" width="12" height="9" rx="0.5" />
      {/* Door */}
      <path d="M10 18v-3a2 2 0 0 1 4 0v3" />
      {/* Left minaret */}
      <rect x="3" y="7" width="2" height="11" rx="0.5" />
      <path d="M3.2 7a0.8 0.8 0 0 1 1.6 0" />
      {/* Right minaret */}
      <rect x="19" y="7" width="2" height="11" rx="0.5" />
      <path d="M19.2 7a0.8 0.8 0 0 1 1.6 0" />
      {/* Base */}
      <line x1="2" y1="18" x2="22" y2="18" />
    </svg>
  );
}

/* ── Icon map ── */

const ICON_MAP: Record<string, React.ComponentType<{ size: number; color: string }>> = {
  matin: Sunrise,
  soir: Sunset,
  'apres-priere': HandHeart,
  sommeil: Moon,
  reveil: Sun,
  repas: UtensilsCrossed,
  voyage: Plane,
  pluie: CloudRain,
  stress: ShieldAlert,
  maladie: HeartPulse,
  protection: ShieldCheck,
  general: Sparkles,
  mariage: Users,
  vetements: Shirt,
  deuil: Flower2,
  coranique: BookOpen,
  istikhara: Compass,
  qunut: Hand,
  toilettes: DoorOpen,
  maison: Home,
  eternuement: Wind,
  colere: Flame,
  reves: Eye,
  assemblee: UsersRound,
  jeune: MoonStar,
  hajj: Mountain,
  'nouveau-ne': Baby,
  dette: Wallet,
  oppression: ShieldBan,
  eid: PartyPopper,
};

/* ── Composant principal ── */

interface CategoryIconProps {
  categoryId: InvocationCategory;
  size?: number;
}

export function CategoryIcon({ categoryId, size = 26 }: CategoryIconProps) {
  const style = getCategoryStyle(categoryId);
  const Icon = ICON_MAP[categoryId];

  return (
    <div
      style={{
        width: 52,
        height: 52,
        borderRadius: 14,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: style.bg,
        flexShrink: 0,
      }}
    >
      {categoryId === 'mosquee' ? (
        <MosqueIcon color={style.color} size={size} />
      ) : Icon ? (
        <Icon size={size} color={style.color} />
      ) : (
        <Sparkles size={size} color={style.color} />
      )}
    </div>
  );
}
