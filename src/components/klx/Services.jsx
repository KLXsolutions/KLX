import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function Services() {
  const { t } = useI18n();
  const s = t.services;

  return (
    <section id="services" style={{padding:'96px 24px',background:'hsl(0 0% 4%)'}}>
      <div style={{maxWidth:'1152px',margin:'0 auto'}}>
        <SectionHeader title={s.title} titleAccent={s.titleAccent} sub={s.sub} />
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(240px, 1fr))',gap:'20px'}}>
          {s.items.map((item, idx) => (
            <div key={idx} style={{background:'hsl(0 0% 6%)',border:'1px solid hsl(0 0% 14%)',borderRadius:'16px',padding:'24px',transition:'all 0.3s'}}>
              <div style={{width:'48px',height:'48px',borderRadius:'12px',background:'rgba(251,191,36,0.1)',display:'flex',alignItems:'center',justifyContent:'center',fontSize:'24px',marginBottom:'16px'}}>
                {item.i}
              </div>
              <h3 style={{fontSize:'15px',fontWeight:700,marginBottom:'8px',color:'hsl(0 0% 95%)'}}>{item.t}</h3>
              <p style={{fontSize:'13px',color:'hsl(0 0% 55%)',lineHeight:1.6}}>{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
