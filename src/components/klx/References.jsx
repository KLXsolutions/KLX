import React from 'react';
import { useI18n } from '../../lib/i18n.jsx';
import SectionHeader from './SectionHeader';
import ProjectGallery from './ProjectGallery';

export default function References() {
  const { t } = useI18n();
  const r = t.refs;
  return (
    <section id="references" className="py-24 px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <SectionHeader title={r.title} titleAccent={r.titleAccent} sub={r.sub} />
        <ProjectGallery />
      </div>
    </section>
  );
}