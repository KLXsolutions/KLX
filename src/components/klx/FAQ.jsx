import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader';

export default function FAQ() {
  const { t } = useI18n();
  const f = t.faq;
  const [openIdx, setOpenIdx] = useState(null);
  return (
    <section id="faq" className="py-24 px-6 md:px-8 bg-card">
      <div className="max-w-4xl mx-auto">
        <SectionHeader title={f.title} titleAccent={f.titleAccent} sub={f.sub} />
        <div className="space-y-3">
          {f.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`bg-background border rounded-xl overflow-hidden transition-colors ${isOpen ? 'border-primary' : 'border-border'}`}>
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} className="w-full flex justify-between items-center px-6 py-5 text-left font-bold text-base select-none">
                  {item.q}
                  <span className={`text-primary text-2xl font-light transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}>+</span>
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-48 pb-5 px-6' : 'max-h-0'}`}>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}