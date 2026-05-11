import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Services() {
  var ctx = useI18n();
  var s = ctx.t.services;
  return (
    <section id="services" style={{ padding:'96px 24px' }}>
      <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
        <SectionHeader title={s.title} titleAccent={s.titleAccent} sub={s.sub} />
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(220px, 1fr))', gap:'20px' }}>
          {s.items.map(function(item, idx) { return (
            <div key={idx} style={{ background:'hsl(0,0%,6%)', border:'1px solid hsl(0,0%,14%)', borderRadius:'16px', padding:'24px', transition:'all 0.3s', cursor:'default' }}
              onMouseEnter={function(e) { e.currentTarget.style.borderColor='hsl(42,98%,53%)'; e.currentTarget.style.transform='translateY(-6px)'; }}
              onMouseLeave={function(e) { e.currentTarget.style.borderColor='hsl(0,0%,14%)'; e.currentTarget.style.transform='translateY(0)'; }}>
              <div style={{ width:'48px', height:'48px', borderRadius:'12px', background:'rgba(250,180,0,0.1)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'1.5rem', marginBottom:'16px' }}>
                {item.i}
              </div>
              <h3 style={{ fontSize:'1rem', fontWeight:700, marginBottom:'8px', lineHeight:1.3 }}>{item.t}</h3>
              <p style={{ fontSize:'0.875rem', color:'hsl(0,0%,55%)', lineHeight:1.6 }}>{item.d}</p>
            </div>
          ); })}
        </div>
      </div>
    </section>
  );
}
