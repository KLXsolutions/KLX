import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Services() {
  var ctx = useI18n();
  var s = ctx.t.services;
  return (
    <section id="services" style={{ padding: '96px 24px' }}>
      <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
        <SectionHeader title={s.title} titleAccent={s.titleAccent} sub={s.sub} />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: '16px' }}>
          {s.items.map(function(item, idx) { return (
            <div key={idx} style={{ background: 'hsl(0,0%,6%)', border: '1px solid hsl(0,0%,14%)', borderRadius: '16px', padding: '24px', transition: 'border-color 0.2s' }}>
              <div style={{ fontSize: '2rem', marginBottom: '12px' }}>{item.i}</div>
              <div style={{ fontWeight: 700, marginBottom: '8px', fontSize: '0.9375rem' }}>{item.t}</div>
              <div style={{ color: 'hsl(0,0%,55%)', fontSize: '0.8125rem', lineHeight: 1.6 }}>{item.d}</div>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}
