import React from 'react';
import { useI18n } from '@/lib/i18n.jsx';
import SectionHeader from './SectionHeader';

export default function WhyUs() {
  const { t } = useI18n();
  const w = t.why;

  return (
    <section id="why" className="py-24 px-6 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={w.title} titleAccent={w.titleAccent + "?"} sub={w.sub} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {w.items.map((item, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-background border border-border rounded-2xl transition-all duration-300 hover:border-primary hover:-translate-y-1"
            >
              <div className="text-4xl text-primary mb-4 inline-block">{item.i}</div>
              <h4 className="text-base font-bold mb-2">{item.t}</h4>
              <p className="text-sm text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}