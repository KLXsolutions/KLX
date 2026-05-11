import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';

export default function Footer() {
  const { t } = useI18n();

  return (
    <footer style={{borderTop:'1px solid hsl(0 0% 14%)',padding:'40px 24px',background:'#050505'}}>
      <div style={{maxWidth:'1152px',margin:'0 auto'}}>
        <div style={{display:'grid',gridTemplateColumns:'repeat(4,1fr)',gap:'32px',fontSize:'14px',marginBottom:'32px'}}>
          <div>
            <div style={{fontWeight:900,fontSize:'16px',letterSpacing:'2px',marginBottom:'8px',color:'hsl(0 0% 95%)'}}>
              KLX <span style={{color:'hsl(42 98% 53%)'}}>SOLUTIONS</span>
            </div>
            <p style={{color:'hsl(0 0% 55%)',fontSize:'12px',fontStyle:'italic'}}>Empowering Homes, Energizing Industries.</p>
          </div>
          <div>
            <div style={{fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'2px',marginBottom:'12px',fontWeight:700}}>Contact</div>
            <p style={{color:'hsl(0 0% 55%)',marginBottom:'4px'}}>🇪🇸 +34 666 114 258</p>
            <p style={{color:'hsl(0 0% 55%)',marginBottom:'4px'}}>🇧🇪 +32 473 45 46 93</p>
            <p style={{color:'hsl(0 0% 55%)'}}>info@klxsolutions.com</p>
          </div>
          <div>
            <div style={{fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'2px',marginBottom:'12px',fontWeight:700}}>Area</div>
            <p style={{color:'hsl(0 0% 55%)'}}>{t.footer.area}</p>
          </div>
          <div>
            <div style={{fontSize:'11px',color:'hsl(0 0% 55%)',textTransform:'uppercase',letterSpacing:'2px',marginBottom:'12px',fontWeight:700}}>Navigation</div>
            <div style={{display:'flex',flexDirection:'column',gap:'6px'}}>
              {['#about','#services','#references','#faq','#contact'].map(href => (
                <a key={href} href={href} style={{color:'hsl(0 0% 55%)',textDecoration:'none',fontSize:'12px'}}>
                  {href.replace('#','').charAt(0).toUpperCase()+href.replace('#','').slice(1)}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid hsl(0 0% 14%)',paddingTop:'24px',textAlign:'center',fontSize:'12px',color:'hsl(0 0% 55%)'}}>
          © 2026 KLX Solutions. {t.footer.rights}
        </div>
      </div>
    </footer>
  );
}
