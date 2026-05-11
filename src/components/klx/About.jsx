import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader';

export default function About() {
  const { t } = useI18n();
  const a = t.about;
  return (
    <section id="about" className="py-24 px-6 md:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <SectionHeader title={a.title} titleAccent={a.titleAccent} sub={a.sub} />
        <div className="max-w-2xl">
          <p className="text-muted-foreground leading-relaxed mb-5">{a.p1}</p>
          <p className="text-muted-foreground leading-relaxed mb-5">{a.p2}</p>
          <p className="text-muted-foreground leading-relaxed mb-8">{a.p3}</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {[a.f1, a.f2, a.f3, a.f4].map(f => (
              <div key={f} className="flex items-center gap-3 bg-secondary px-4 py-3 rounded-xl border border-border text-sm font-semibold">
                <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0" />{f}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}