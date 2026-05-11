import React from 'react';

export default function SectionHeader({ title, titleAccent, sub }) {
  return (
    <div className="text-center mb-16">
      <div className="w-14 h-1 bg-primary mx-auto mb-6 rounded-full" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4" style={{color: 'hsl(0 0% 95%)'}}>
        {title} <span style={{color: 'hsl(42 98% 53%)'}}>{titleAccent}</span>
      </h2>
      {sub && <p className="text-base md:text-lg max-w-xl mx-auto" style={{color: 'hsl(0 0% 55%)'}}>{sub}</p>}
    </div>
  );
}
