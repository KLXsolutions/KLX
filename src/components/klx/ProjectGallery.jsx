import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';

var CATEGORIES = [
  { id: 'all',         en: 'All Projects',  es: 'Todos',          hu: 'Mind' },
  { id: 'residential', en: 'Residential',   es: 'Residencial',    hu: 'Lakoingatan' },
  { id: 'industrial',  en: 'Industrial',    es: 'Industrial',     hu: 'Ipari' },
  { id: 'fuse',        en: 'Fuse Boxes',    es: 'Cuadros',        hu: 'Biztositotablak' },
  { id: 'ev',          en: 'EV Chargers',   es: 'Cargadores EV',  hu: 'EV Toltok' },
  { id: 'lighting',    en: 'Lighting',      es: 'Iluminacion',    hu: 'Vilagitas' },
];

var PROJECTS = [
  { id: 1,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/ff11d72ce_IMG_4431.jpg',                             label: { en: 'Kitchen Pendant Lighting', es: 'Iluminacion colgante cocina', hu: 'Konyhailamp' } },
  { id: 2,  category: 'residential', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e3a86654b_IMG_6405.jpg',                             label: { en: 'Interior LED Lighting', es: 'LED interior', hu: 'Beltéri LED' } },
  { id: 3,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b0d966dfb_IMG_0994.jpg',                             label: { en: 'Outdoor Wall Lighting Day', es: 'Iluminacion exterior dia', hu: 'Kultéri lámpa nappal' } },
  { id: 4,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/2615b822c_IMG_0995.jpg',                             label: { en: 'Outdoor Wall Lighting', es: 'Iluminacion exterior', hu: 'Kultéri lámpa' } },
  { id: 5,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/d81bc14f8_c923bda0-3da7-4225-b477-38dbb82f954c.jpg', label: { en: 'Facade Lighting Evening', es: 'Fachada tarde', hu: 'Homlokzat este' } },
  { id: 6,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/017e25b17_b659bdce-43aa-47fb-a73d-10e6029e1581.jpg', label: { en: 'Facade Lighting Night', es: 'Fachada noche', hu: 'Homlokzat ejjel' } },
  { id: 7,  category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/71eb4482c_1EBFFC07-9735-41EF-A822-5DFBF3E06249.png', label: { en: 'Fuse Box Residential', es: 'Cuadro residencial', hu: 'Biztositotabla lakas' } },
  { id: 8,  category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e5010fffc_23E9AA15-A366-4F20-A0A6-F098ED42A2AC.png', label: { en: 'Industrial Panel Upgrade', es: 'Panel industrial', hu: 'Ipari panel' } },
  { id: 9,  category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/64359b5aa_F2C2377F-77EC-46B1-B89D-4F18F56B3A77.png', label: { en: 'Panel Before After', es: 'Panel antes despues', hu: 'Panel elotte utan' } },
  { id: 10, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/cc1f53d11_D16CCD9E-C0F6-4388-93BF-D137D21EB9ED.png', label: { en: 'Consumer Unit Modern', es: 'Modernizacion cuadro', hu: 'Tabla modernizalas' } },
  { id: 11, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/bb12bb9a8_IMG_6524.jpg',                             label: { en: 'Large Industrial Panel', es: 'Panel industrial grande', hu: 'Nagy ipari szekreny' } },
  { id: 12, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e4c06433a_IMG_4165.jpg',                             label: { en: 'Industrial Cable Management', es: 'Gestion cables industrial', hu: 'Ipari kabelvezetés' } },
  { id: 13, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/a67b77ad2_IMG_4164.jpg',                             label: { en: 'Industrial Wiring Detail', es: 'Detalle cableado', hu: 'Ipari kabelezés' } },
  { id: 14, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b773eb86b_IMG_4163.jpg',                             label: { en: 'Industrial Distribution Board', es: 'Cuadro distribucion', hu: 'Ipari eloszto' } },
  { id: 16, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/ae7753c3c_IMG_0979.jpg',                             label: { en: 'Commercial Cable Trays', es: 'Bandejas cables', hu: 'Kabeltalcak' } },
  { id: 17, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/444467d62_IMG_0978.jpg',                             label: { en: 'Large Commercial Installation', es: 'Instalacion comercial', hu: 'Kereskedelmi kivitelez' } },
  { id: 18, category: 'ev',          src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/473077be1_IMG_4086.jpg',                             label: { en: 'Tesla EV Charger', es: 'Cargador EV Tesla', hu: 'Tesla EV tolto' } },
  { id: 28, category: 'ev',          src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/4a971cb8d_IMG_4087.jpg',                             label: { en: 'Tesla Wall Charger', es: 'Cargador pared Tesla', hu: 'Tesla fali tolto' } },
  { id: 19, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/1e973940f_IMG_9564.jpg',                             label: { en: 'Outdoor Distribution Board', es: 'Cuadro exterior', hu: 'Kultéri eloszto' } },
  { id: 20, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b2ab71254_IMG_9712.jpg',                             label: { en: 'Industrial Wiring Route', es: 'Tendido cables', hu: 'Ipari kabelut' } },
  { id: 27, category: 'residential', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/c4e23832d_IMG_7259.jpg',                             label: { en: 'New Build Wiring', es: 'Cableado obra nueva', hu: 'Uj epitesu haz' } },
];

export default function ProjectGallery() {
  var ctx = useI18n();
  var lang = ctx.lang;
  var s1 = useState('all'); var activeFilter = s1[0]; var setActiveFilter = s1[1];
  var s2 = useState(null); var lightbox = s2[0]; var setLightbox = s2[1];
  var s3 = useState(0); var page = s3[0]; var setPage = s3[1];
  var perPage = 6;
  var filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter(function(p) { return p.category === activeFilter; });
  var totalPages = Math.ceil(filtered.length / perPage);
  var visible = filtered.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div style={{ display:'flex', flexWrap:'wrap', justifyContent:'center', gap:'8px', marginBottom:'40px' }}>
        {CATEGORIES.map(function(cat) { return (
          <button key={cat.id} onClick={function() { setActiveFilter(cat.id); setPage(0); }}
            style={{ padding:'8px 16px', borderRadius:'999px', fontSize:'0.875rem', fontWeight:600, border:'1px solid', cursor:'pointer',
              background: activeFilter === cat.id ? 'hsl(42,98%,53%)' : 'hsl(0,0%,10%)',
              color: activeFilter === cat.id ? 'hsl(0,0%,4%)' : 'hsl(0,0%,55%)',
              borderColor: activeFilter === cat.id ? 'hsl(42,98%,53%)' : 'hsl(0,0%,14%)' }}>
            {cat[lang] || cat.en}
          </button>
        ); })}
      </div>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))', gap:'16px' }}>
        {visible.map(function(project) { return (
          <div key={project.id} onClick={function() { setLightbox(project); }}
            style={{ position:'relative', overflow:'hidden', borderRadius:'16px', border:'1px solid hsl(0,0%,14%)', background:'hsl(0,0%,10%)', aspectRatio:'4/3', cursor:'pointer' }}>
            <img src={project.src} alt={project.label.en} style={{ width:'100%', height:'100%', objectFit:'cover' }} />
          </div>
        ); })}
      </div>
      {totalPages > 1 && (
        <div style={{ display:'flex', justifyContent:'center', gap:'16px', marginTop:'20px', alignItems:'center' }}>
          <button onClick={function() { setPage(function(p) { return Math.max(0, p - 1); }); }} disabled={page === 0}
            style={{ padding:'6px 16px', borderRadius:'999px', border:'1px solid hsl(0,0%,14%)', background:'transparent', color:'hsl(0,0%,55%)', cursor:'pointer', opacity: page === 0 ? 0.3 : 1 }}>Prev</button>
          <span style={{ fontSize:'0.75rem', color:'hsl(0,0%,55%)' }}>{page + 1} / {totalPages}</span>
          <button onClick={function() { setPage(function(p) { return Math.min(totalPages - 1, p + 1); }); }} disabled={page >= totalPages - 1}
            style={{ padding:'6px 16px', borderRadius:'999px', border:'1px solid hsl(0,0%,14%)', background:'transparent', color:'hsl(0,0%,55%)', cursor:'pointer', opacity: page >= totalPages - 1 ? 0.3 : 1 }}>Next</button>
        </div>
      )}
      {lightbox && (
        <div onClick={function() { setLightbox(null); }}
          style={{ position:'fixed', inset:0, zIndex:100, background:'rgba(0,0,0,0.92)', display:'flex', alignItems:'center', justifyContent:'center', padding:'16px' }}>
          <div onClick={function(e) { e.stopPropagation(); }}
            style={{ position:'relative', maxWidth:'56rem', width:'100%', borderRadius:'16px', overflow:'hidden', border:'1px solid hsl(0,0%,14%)' }}>
            <img src={lightbox.src} alt={lightbox.label[lang] || lightbox.label.en}
              style={{ width:'100%', maxHeight:'80vh', objectFit:'contain', background:'black', display:'block' }} />
            <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'rgba(0,0,0,0.8)', padding:'12px 24px' }}>
              <p style={{ fontWeight:600, fontSize:'0.875rem' }}>{lightbox.label[lang] || lightbox.label.en}</p>
            </div>
            <button onClick={function() { setLightbox(null); }}
              style={{ position:'absolute', top:'12px', right:'12px', background:'rgba(0,0,0,0.7)', border:'none', borderRadius:'50%', width:'32px', height:'32px', cursor:'pointer', color:'white', fontSize:'1rem' }}>X</button>
          </div>
        </div>
      )}
    </div>
  );
}
