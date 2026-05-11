import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';

export default function Footer() {
  var ctx = useI18n();
  var t = ctx.t;
  return (
    <footer style={{ borderTop:'1px solid hsl(0,0%,14%)', padding:'40px 24px', background:'#050505' }}>
      <div style={{ maxWidth:'72rem', margin:'0 auto' }}>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(180px, 1fr))', gap:'32px', fontSize:'0.875rem' }}>
          <div>
            <div style={{ fontWeight:900, fontSize:'1rem', letterSpacing:'0.1em', marginBottom:'8px' }}>KLX <span style={{ color:'hsl(42,98%,53%)' }}>SOLUTIONS</span></div>
            <p style={{ color:'hsl(0,0%,55%)', fontSize:'0.75rem', fontStyle:'italic' }}>Empowering Homes, Energizing Industries.</p>
          </div>
          <div>
            <div style={{ fontSize:'0.7rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'12px', fontWeight:700 }}>Contact</div>
            <p style={{ color:'hsl(0,0%,55%)', marginBottom:'4px' }}>+34 666 114 258</p>
            <p style={{ color:'hsl(0,0%,55%)', marginBottom:'4px' }}>+32 473 45 46 93</p>
            <p style={{ color:'hsl(0,0%,55%)' }}>info@klxsolutions.com</p>
          </div>
          <div>
            <div style={{ fontSize:'0.7rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'12px', fontWeight:700 }}>Area</div>
            <p style={{ color:'hsl(0,0%,55%)' }}>{t.footer.area}</p>
          </div>
          <div>
            <div style={{ fontSize:'0.7rem', color:'hsl(0,0%,55%)', textTransform:'uppercase', letterSpacing:'0.1em', marginBottom:'12px', fontWeight:700 }}>Navigation</div>
            <div style={{ display:'flex', flexDirection:'column', gap:'6px' }}>
              {['#about','#services','#references','#faq','#contact'].map(function(href) { return (
                <a key={href} href={href} style={{ color:'hsl(0,0%,55%)', textDecoration:'none', fontSize:'0.75rem' }}>
                  {href.replace('#','').charAt(0).toUpperCase() + href.replace('#','').slice(1)}
                </a>
              ); })}
            </div>
          </div>
        </div>
        <div style={{ borderTop:'1px solid hsl(0,0%,14%)', marginTop:'32px', paddingTop:'24px', textAlign:'center', fontSize:'0.75rem', color:'hsl(0,0%,55%)' }}>
          2026 KLX Solutions. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
