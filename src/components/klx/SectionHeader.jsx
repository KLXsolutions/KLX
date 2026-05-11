import React from 'react';

export default function SectionHeader({ title, titleAccent, sub }) {
  return (
    <div style={{ textAlign: 'center', marginBottom: '48px' }}>
      <div style={{ width: '48px', height: '3px', background: 'linear-gradient(90deg, hsl(42,98%,53%), hsl(24,100%,50%))', borderRadius: '999px', margin: '0 auto 24px' }} />
      <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px' }}>
        {title} <span style={{ color: 'hsl(42,98%,53%)' }}>{titleAccent}</span>
      </h2>
      {sub && <p style={{ color: 'hsl(0,0%,55%)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>{sub}</p>}
    </div>
  );
}
