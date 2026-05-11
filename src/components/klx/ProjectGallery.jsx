import React, { useState } from 'react';
import { useI18n } from '../../lib/i18n.jsx';

const CATEGORIES = [
  { id: 'all', en: 'All Projects', es: 'Todos', hu: 'Mind' },
  { id: 'residential', en: 'Residential', es: 'Residencial', hu: 'Lak\u00f3ingatlan' },
  { id: 'industrial', en: 'Industrial', es: 'Industrial', hu: 'Ipari' },
  { id: 'fuse', en: 'Fuse Boxes', es: 'Cuadros', hu: 'Biztos\u00edt\u00f3t\u00e1bl\u00e1k' },
  { id: 'ev', en: 'EV Chargers', es: 'Cargadores EV', hu: 'EV T\u00f6lt\u0151k' },
  { id: 'lighting', en: 'Lighting', es: 'Iluminaci\u00f3n', hu: 'Vil\u00e1g\u00edt\u00e1s' },
];

const PROJECTS = [
  { id: 1, category: 'lighting', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/ff11d72ce_IMG_4431.jpg', label: { en: 'Kitchen Pendant Lighting', es: 'Iluminaci\u00f3n colgante cocina', hu: 'Konyhai f\u00fcgg\u0151l\u00e1mpa' } },
  { id: 2, category: 'residential', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e3a86654b_IMG_6405.jpg', label: { en: 'Interior LED Strip & Lighting', es: 'LED interior', hu: 'Belt\u00e9ri LED cs\u00edk' } },
  { id: 3, category: 'lighting', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b0d966dfb_IMG_0994.jpg', label: { en: 'Outdoor Wall Lighting (Day)', es: 'Iluminaci\u00f3n exterior (d\u00eda)', hu: 'K\u00fclt\u00e9ri fali l\u00e1mpa (nappal)' } },
  { id: 4, category: 'lighting', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/2615b822c_IMG_0995.jpg', label: { en: 'Outdoor Wall Lighting', es: 'Iluminaci\u00f3n exterior', hu: 'K\u00fclt\u00e9ri fali l\u00e1mpa' } },
  { id: 5, category: 'lighting', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/d81bc14f8_c923bda0-3da7-4225-b477-38dbb82f954c.jpg', label: { en: 'House Facade Lighting (Evening)', es: 'Fachada iluminada (tarde)', hu: 'Homlokzat megvil\u00e1g\u00edt\u00e1s (este)' } },
  { id: 6, category: 'lighting', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/017e25b17_b659bdce-43aa-47fb-a73d-10e6029e1581.jpg', label: { en: 'House Facade Lighting (Night)', es: 'Fachada iluminada (noche)', hu: 'Homlokzat megvil\u00e1g\u00edt\u00e1s (\u00e9jjel)' } },
  { id: 7, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/71eb4482c_1EBFFC07-9735-41EF-A822-5DFBF3E06249.png', label: { en: 'Fuse Box Replacement', es: 'Cuadro residencial', hu: 'Biztos\u00edt\u00f3t\u00e1bla csere' } },
  { id: 8, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e5010fffc_23E9AA15-A366-4F20-A0A6-F098ED42A2AC.png', label: { en: 'Industrial Panel Upgrade', es: 'Panel industrial', hu: 'Ipari panel fel\u00faj\u00edt\u00e1s' } },
  { id: 9, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/64359b5aa_F2C2377F-77EC-46B1-B89D-4F18F56B3A77.png', label: { en: 'Panel Before & After', es: 'Panel antes y despu\u00e9s', hu: 'Panel el\u0151tte-ut\u00e1na' } },
  { id: 10, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/cc1f53d11_D16CCD9E-C0F6-4388-93BF-D137D21EB9ED.png', label: { en: 'Consumer Unit Modernisation', es: 'Modernizaci\u00f3n cuadro', hu: 'Biztos\u00edt\u00f3t\u00e1bla moderniz\u00e1l\u00e1s' } },
  { id: 11, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/bb12bb9a8_IMG_6524.jpg', label: { en: 'Large Industrial Panel', es: 'Panel industrial grande', hu: 'Nagy ipari szekr\u00e9ny' } },
  { id: 12, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e4c06433a_IMG_4165.jpg', label: { en: 'Industrial Cable Management', es: 'Gesti\u00f3n de cables industrial', hu: 'Ipari k\u00e1belvezel\u00e9s' } },
  { id: 13, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/a67b77ad2_IMG_4164.jpg', label: { en: 'Industrial Wiring Detail', es: 'Detalle cableado industrial', hu: 'Ipari k\u00e1belez\u00e9s r\u00e9szlet' } },
  { id: 14, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b773eb86b_IMG_4163.jpg', label: { en: 'Industrial Distribution Board', es: 'Cuadro de distribuci\u00f3n', hu: 'Ipari eloszt\u00f3' } },
  { id: 16, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/ae7753c3c_IMG_0979.jpg', label: { en: 'Commercial Cable Trays', es: 'Bandejas de cables comerciales', hu: 'Kereskedelmi k\u00e1belt\u00e1lc\u00e1k' } },
  { id: 17, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/444467d62_IMG_0978.jpg', label: { en: 'Large Commercial Installation', es: 'Instalaci\u00f3n comercial grande', hu: 'Nagy kereskedelmi kivitelez\u00e9s' } },
  { id: 18, category: 'ev', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/473077be1_IMG_4086.jpg', label: { en: 'Tesla EV Charger Installation', es: 'Instalaci\u00f3n cargador EV Tesla', hu: 'Tesla EV t\u00f6lt\u0151 szerel\u00e9s' } },
  { id: 28, category: 'ev', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/4a971cb8d_IMG_4087.jpg', label: { en: 'Tesla Wall Charger', es: 'Cargador de pared Tesla', hu: 'Tesla fali t\u00f6lt\u0151' } },
  { id: 19, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/1e973940f_IMG_9564.jpg', label: { en: 'Outdoor Distribution Board', es: 'Cuadro exterior', hu: 'K\u00fclt\u00e9ri eloszt\u00f3' } },
  { id: 20, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b2ab71254_IMG_9712.jpg', label: { en: 'Industrial Wiring Route', es: 'Tendido cables industrial', hu: 'Ipari k\u00e1bel\u00fat' } },
  { id: 21, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/a1ab44168_IMG_8652.jpg', label: { en: 'Industrial Distribution Panel', es: 'Panel distribuci\u00f3n industrial', hu: 'Ipari eloszt\u00f3 szekr\u00e9ny' } },
  { id: 22, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/836c2e997_IMG_8649.jpg', label: { en: 'Main Distribution Board', es: 'Cuadro principal', hu: 'F\u0151eloszt\u00f3' } },
  { id: 23, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/15e834fc5_IMG_8651.jpg', label: { en: 'Panel Wiring', es: 'Cableado de panel', hu: 'Panel bek\u00f6t\u00e9s' } },
  { id: 24, category: 'fuse', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/c6dd20af5_IMG_6386.jpg', label: { en: 'Hotel / Building Panel', es: 'Panel hotel / edificio', hu: 'Sz\u00e1llodai eloszt\u00f3' } },
  { id: 25, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/62c9f043b_IMG_7300.jpg', label: { en: 'Industrial Control Panel', es: 'Panel de control industrial', hu: 'Ipari vez\u00e9rl\u0151szekr\u00e9ny' } },
  { id: 26, category: 'industrial', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/d3b803b6f_IMG_7240.jpg', label: { en: 'Industrial Panel Refurbishment', es: 'Reforma panel industrial', hu: 'Ipari szekr\u00e9ny fel\u00faj\u00edt\u00e1s' } },
  { id: 27, category: 'residential', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/c4e23832d_IMG_7259.jpg', label: { en: 'New Build Wiring', es: 'Cableado obra nueva', hu: '\u00daj \u00e9p\u00edt\u00e9s\u0171 h\u00e1z villanyszerel\u00e9s' } },
];

export default function ProjectGallery() {
  const { lang } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);
  const [page, setPage] = useState(0);
  const perPage = 6;

  const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);
  const totalPages = Math.ceil(filtered.length / perPage);
  const visible = filtered.slice(page * perPage, page * perPage + perPage);

  const getCatLabel = (cat) => cat[lang] || cat.en;

  return (
    <div>
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'8px',marginBottom:'40px'}}>
        {CATEGORIES.map(cat => (
          <button key={cat.id} onClick={() => { setActiveFilter(cat.id); setPage(0); }} style={{padding:'8px 16px',borderRadius:'999px',fontSize:'14px',fontWeight:600,border:`1px solid ${activeFilter === cat.id ? 'hsl(42 98% 53%)' : 'hsl(0 0% 14%)'}`,background: activeFilter === cat.id ? 'hsl(42 98% 53%)' : 'hsl(0 0% 10%)',color: activeFilter === cat.id ? 'hsl(0 0% 4%)' : 'hsl(0 0% 55%)',cursor:'pointer'}}>
            {getCatLabel(cat)}
          </button>
        ))}
      </div>

      <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill, minmax(280px, 1fr))',gap:'16px'}}>
        {visible.map(project => (
          <div key={project.id} onClick={() => setLightbox(project)} style={{position:'relative',overflow:'hidden',borderRadius:'16px',border:'1px solid hsl(0 0% 14%)',background:'hsl(0 0% 10%)',aspectRatio:'4/3',cursor:'pointer'}}>
            <img src={project.src} alt={project.label.en} style={{width:'100%',height:'100%',objectFit:'cover',transition:'transform 0.5s'}} onMouseOver={e=>e.target.style.transform='scale(1.1)'} onMouseOut={e=>e.target.style.transform='scale(1)'} />
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',gap:'16px',marginTop:'24px'}}>
          <button onClick={() => setPage(p => Math.max(0, p-1))} disabled={page === 0} style={{width:'36px',height:'36px',borderRadius:'50%',border:'1px solid hsl(0 0% 14%)',background:'none',color:'hsl(0 0% 95%)',cursor:'pointer',opacity: page===0 ? 0.3 : 1}}>\u2190</button>
          <span style={{fontSize:'13px',color:'hsl(0 0% 55%)'}}>{page+1} / {totalPages}</span>
          <button onClick={() => setPage(p => Math.min(totalPages-1, p+1))} disabled={page === totalPages-1} style={{width:'36px',height:'36px',borderRadius:'50%',border:'1px solid hsl(0 0% 14%)',background:'none',color:'hsl(0 0% 95%)',cursor:'pointer',opacity: page===totalPages-1 ? 0.3 : 1}}>\u2192</button>
        </div>
      )}

      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{position:'fixed',inset:0,zIndex:9999,background:'rgba(10,10,10,0.95)',display:'flex',alignItems:'center',justifyContent:'center',padding:'16px'}}>
          <div onClick={e => e.stopPropagation()} style={{position:'relative',maxWidth:'900px',width:'100%',borderRadius:'16px',overflow:'hidden',border:'1px solid hsl(0 0% 14%)'}}>
            <img src={lightbox.src} alt={lightbox.label[lang] || lightbox.label.en} style={{width:'100%',height:'auto',maxHeight:'80vh',objectFit:'contain',background:'#000',display:'block'}} />
            <div style={{position:'absolute',bottom:0,left:0,right:0,background:'rgba(10,10,10,0.8)',padding:'12px 24px'}}>
              <p style={{fontWeight:600,fontSize:'14px',color:'hsl(0 0% 95%)'}}>{lightbox.label[lang] || lightbox.label.en}</p>
            </div>
            <button onClick={() => setLightbox(null)} style={{position:'absolute',top:'12px',right:'12px',background:'rgba(10,10,10,0.8)',border:'none',borderRadius:'50%',width:'32px',height:'32px',color:'hsl(0 0% 95%)',cursor:'pointer',fontSize:'18px',display:'flex',alignItems:'center',justifyContent:'center'}}>\u00d7</button>
          </div>
        </div>
      )}
    </div>
  );
}
