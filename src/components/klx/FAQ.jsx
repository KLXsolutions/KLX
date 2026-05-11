import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function FAQ() {
  const { t } = useI18n();
  const f = t.faq;
  const [openIdx, setOpenIdx] = useState(null);

  return (
    <section id="faq" style={{padding:'96px 24px',background:'hsl(0 0% 6%)'}}>
      <div style={{maxWidth:'896px',margin:'0 auto'}}>
        <SectionHeader title={f.title} titleAccent={f.titleAccent} sub={f.sub} />
        <div style={{display:'flex',flexDirection:'column',gap:'12px'}}>
          {f.items.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} style={{background:'hsl(0 0% 4%)',border:`1px solid ${isOpen ? 'hsl(42 98% 53%)' : 'hsl(0 0% 14%)'}`,borderRadius:'12px',overflow:'hidden'}}>
                <button onClick={() => setOpenIdx(isOpen ? null : idx)} style={{width:'100%',display:'flex',justifyContent:'space-between',alignItems:'center',padding:'20px 24px',textAlign:'left',fontWeight:700,fontSize:'15px',color:'hsl(0 0% 95%)',background:'none',border:'none',cursor:'pointer'}}>
                  {item.q}
                  <span style={{color:'hsl(42 98% 53%)',fontSize:'24px',fontWeight:300,transform: isOpen ? 'rotate(45deg)' : 'none',transition:'transform 0.3s'}}>+</span>
                </button>
                <div style={{overflow:'hidden',maxHeight: isOpen ? '200px' : '0',transition:'max-height 0.3s',paddingLeft:'24px',paddingRight:'24px',paddingBottom: isOpen ? '20px' : '0'}}>
                  <p style={{color:'hsl(0 0% 55%)',fontSize:'14px',lineHeight:1.7}}>{item.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
