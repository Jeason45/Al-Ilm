'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { PrayerTabs, type PrayerTab } from '@/components/prayer/PrayerTabs';
import { HorairesTab } from '@/components/prayer/HorairesTab';
import { PrayerGuideTab } from '@/components/prayer/PrayerGuideTab';
import { AdhanTab } from '@/components/prayer/AdhanTab';
import { AblutionsTab } from '@/components/prayer/AblutionsTab';

export default function HorairesPage() {
  const [activeTab, setActiveTab] = useState<PrayerTab>('horaires');

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '700px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              الصلاة
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              La Prière.
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <PrayerTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>
        </ScrollReveal>

        {activeTab === 'horaires' && <HorairesTab />}
        {activeTab === 'guide' && <PrayerGuideTab />}
        {activeTab === 'adhan' && <AdhanTab />}
        {activeTab === 'ablutions' && <AblutionsTab />}
      </div>
    </div>
  );
}
