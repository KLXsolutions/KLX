import React from 'react';

export default function SectionHeader({ title, titleAccent, sub }) {
  return (
    <div style={{ textAlign:'center', marginBottom:'64px' }}>
      <div style={{ width:'56px', height:'4px', background:'hsl(42 98% 53%)', margin:'0 auto 24px', borderRadius:'999px' }} />
      <h2 style={{ fontSize:'clamp(1.75rem, 4vw, 3rem)', fontWeight:900, letterSpacing:'-0.02em', marginBottom:'16px' }}>
        {title} <span style={{ color:'hsl(42 98% 53%)' }}>{titleAccent}</span>
      </h2>
      {sub && (
        <p style={{ color:'hsl(0 0% 55%)', fontSize:'1rem', maxWidth:'36rem', margin:'0 auto' }}>{sub}</p>
      )}
    </div>
  );
}
