import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader.jsx';
import ProjectGallery from './ProjectGallery.jsx';

export default function References() {
  const { t } = useI18n();
  const r = t.refs;

  return (
    <section id="references" style={{padding:'96px 24px',background:'hsl(0 0% 4%)'}}>
      <div style={{maxWidth:'1280px',margin:'0 auto'}}>
        <SectionHeader title={r.title} titleAccent={r.titleAccent} sub={r.sub} />
        <ProjectGallery />
      </div>
    </section>
  );
}
