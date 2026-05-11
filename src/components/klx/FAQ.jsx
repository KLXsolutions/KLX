import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';

export default function FAQ() {
  var ctx = useI18n();
  var f = ctx.t.faq;
  var s1 = useState(null); var openIdx = s1[0]; var setOpenIdx = s1[1];
  return (
    <section id="faq" style={{ padding: '96px 24px', background: 'hsl(0,0%,6%)' }}>
      <div style={{ maxWidth: '56rem', margin: '0 auto' }}>
        <SectionHeader title={f.title} titleAccent={f.titleAccent} sub={f.sub} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {f.items.map(function(item, idx) {
            var isOpen = openIdx === idx;
            return (
              <div key={idx} style={{ background: 'hsl(0,0%,4%)', border: '1px solid', borderColor: isOpen ? 'hsl(42,98%,53%)' : 'hsl(0,0%,14%)', borderRadius: '12px', overflow: 'hidden' }}>
                <button onClick={function() { setOpenIdx(isOpen ? null : idx); }}
                  style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', color: 'hsl(0,0%,95%)', fontWeight: 700, fontSize: '0.9375rem', textAlign: 'left' }}>
                  {item.q}
                  <span style={{ color: 'hsl(42,98%,53%)', fontSize: '1.5rem', transform: isOpen ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s', flexShrink: 0, marginLeft: '16px' }}>+</span>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 20px', color: 'hsl(0,0%,55%)', fontSize: '0.875rem', lineHeight: 1.7 }}>{item.a}</div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
