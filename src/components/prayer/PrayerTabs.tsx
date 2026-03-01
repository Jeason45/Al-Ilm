'use client';

export type PrayerTab = 'horaires' | 'guide' | 'adhan' | 'ablutions';

interface PrayerTabsProps {
  activeTab: PrayerTab;
  onTabChange: (tab: PrayerTab) => void;
}

const tabs: { id: PrayerTab; label: string }[] = [
  { id: 'horaires', label: 'Horaires' },
  { id: 'guide', label: 'Guide' },
  { id: 'adhan', label: 'Adhan' },
  { id: 'ablutions', label: 'Ablutions' },
];

export function PrayerTabs({ activeTab, onTabChange }: PrayerTabsProps) {
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '4px',
      padding: '4px',
      borderRadius: '12px',
      background: 'rgba(255, 255, 255, 0.04)',
      border: '1px solid var(--color-border)',
    }}>
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          style={{
            padding: '10px 14px',
            fontSize: '13px',
            fontWeight: 500,
            borderRadius: '8px',
            border: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s',
            fontFamily: 'inherit',
            background: activeTab === tab.id ? 'var(--color-gold)' : 'transparent',
            color: activeTab === tab.id ? '#000' : 'var(--color-muted)',
          }}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
