import React from 'react';

export default function SectionHeader({ title, titleAccent, sub }) {
  return (
    <div className="text-center mb-16">
      <div className="w-14 h-1 bg-primary mx-auto mb-6 rounded-full" />
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-tight mb-4">
        {title} <span className="text-primary">{titleAccent}</span>
      </h2>
      {sub && <p className="text-muted-foreground text-base md:text-lg max-w-xl mx-auto">{sub}</p>}
    </div>
  );
}