'use client';

import { useState } from 'react';
import { ScrollReveal } from '@/components/ScrollReveal';
import { CoranTabs, type CoranTab } from '@/components/coran/CoranTabs';
import { SouratesTab } from '@/components/coran/SouratesTab';
import { ApprendreTab } from '@/components/coran/ApprendreTab';
import { HistoireTab } from '@/components/coran/HistoireTab';

export default function CoranPage() {
  const [activeTab, setActiveTab] = useState<CoranTab>('sourates');

  return (
    <div style={{ paddingTop: 'clamp(4rem, 8vw, 7rem)', paddingBottom: 'clamp(3rem, 6vw, 6rem)', width: '100%' }}>
      <div style={{ width: '100%', maxWidth: '1100px', marginLeft: 'auto', marginRight: 'auto', paddingLeft: 'clamp(14px, 4vw, 24px)', paddingRight: 'clamp(14px, 4vw, 24px)' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <p className="font-amiri text-gold" style={{ fontSize: '1.75rem', marginBottom: '1rem', opacity: 0.5 }}>
              القرآن الكريم
            </p>
            <h1 className="font-outfit font-bold" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', letterSpacing: '-0.03em', marginBottom: '1.5rem' }}>
              Le Coran.
            </h1>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <CoranTabs activeTab={activeTab} onTabChange={setActiveTab} />
            </div>
          </div>
        </ScrollReveal>

        {activeTab === 'sourates' && <SouratesTab />}
        {activeTab === 'apprendre' && <ApprendreTab />}
        {activeTab === 'histoire' && <HistoireTab />}
      </div>
    </div>
  );
}
