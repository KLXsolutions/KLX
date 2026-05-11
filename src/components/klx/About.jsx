import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function About() {
  var ctx = useI18n();
  var a = ctx.t.about;
  return (
    <section id="about" style={{ padding: '96px 24px', background: 'hsl(0,0%,6%)' }}>
      <div style={{ maxWidth: '72rem', margin: '0 auto' }}>
        <SectionHeader title={a.title} titleAccent={a.titleAccent} sub={a.sub} />
        <div style={{ maxWidth: '640px' }}>
          <p style={{ color: 'hsl(0,0%,55%)', lineHeight: 1.7, marginBottom: '20px' }}>{a.p1}</p>
          <p style={{ color: 'hsl(0,0%,55%)', lineHeight: 1.7, marginBottom: '20px' }}>{a.p2}</p>
          <p style={{ color: 'hsl(0,0%,55%)', lineHeight: 1.7, marginBottom: '32px' }}>{a.p3}</p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[a.f1, a.f2, a.f3, a.f4].map(function(f) { return (
              <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'hsl(0,0%,10%)', padding: '12px 16px', borderRadius: '12px', border: '1px solid hsl(0,0%,14%)', fontSize: '0.875rem', fontWeight: 600 }}>
                <span style={{ width: '8px', height: '8px', background: 'hsl(42,98%,53%)', borderRadius: '50%', flexShrink: 0 }} />
                {f}
              </div>
            ); })}
          </div>
        </div>
      </div>
    </section>
  );
}
