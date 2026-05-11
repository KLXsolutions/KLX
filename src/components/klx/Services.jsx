import React from 'react';
import { useI18n } from '@/lib/i18n.jsx';
import SectionHeader from './SectionHeader';

export default function Services() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="services" className="py-24 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={s.title} titleAccent={s.titleAccent} sub={s.sub} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {s.items.map((item, idx) => (
            <div
              key={idx}
              className="group relative bg-card border border-border rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-2xl mb-4">
                {item.i}
              </div>
              <h3 className="text-base font-bold mb-2 leading-tight">{item.t}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}