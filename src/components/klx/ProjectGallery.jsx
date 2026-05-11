import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import { useI18n } from '@/lib/i18n.jsx';

const CATEGORIES = [
  { id: 'all',         en: 'All Projects',  es: 'Todos',          hu: 'Mind' },
  { id: 'residential', en: 'Residential',   es: 'Residencial',    hu: 'Lakóingatlan' },
  { id: 'industrial',  en: 'Industrial',    es: 'Industrial',     hu: 'Ipari' },
  { id: 'fuse',        en: 'Fuse Boxes',    es: 'Cuadros',        hu: 'Biztosítótáblák' },
  { id: 'ev',          en: 'EV Chargers',   es: 'Cargadores EV',  hu: 'EV Töltők' },
  { id: 'lighting',    en: 'Lighting',      es: 'Iluminación',    hu: 'Világítás' },
];

const PROJECTS = [
  { id: 1,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/ff11d72ce_IMG_4431.jpg',                           label: { en: 'Kitchen Pendant Lighting',        es: 'Iluminación colgante cocina',      hu: 'Konyhai függőlámpa' } },
  { id: 2,  category: 'residential', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e3a86654b_IMG_6405.jpg',                           label: { en: 'Interior LED Strip & Lighting',   es: 'LED interior',                     hu: 'Beltéri LED csík' } },
  { id: 3,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b0d966dfb_IMG_0994.jpg',                           label: { en: 'Outdoor Wall Lighting (Day)',      es: 'Iluminación exterior (día)',        hu: 'Kültéri fali lámpa (nappal)' } },
  { id: 4,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/2615b822c_IMG_0995.jpg',                           label: { en: 'Outdoor Wall Lighting',           es: 'Iluminación exterior',             hu: 'Kültéri fali lámpa' } },
  { id: 5,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/d81bc14f8_c923bda0-3da7-4225-b477-38dbb82f954c.jpg', label: { en: 'House Facade Lighting (Evening)', es: 'Fachada iluminada (tarde)',         hu: 'Homlokzat megvilágítás (este)' } },
  { id: 6,  category: 'lighting',    src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/017e25b17_b659bdce-43aa-47fb-a73d-10e6029e1581.jpg', label: { en: 'House Facade Lighting (Night)',   es: 'Fachada iluminada (noche)',         hu: 'Homlokzat megvilágítás (éjjel)' } },
  { id: 7,  category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/71eb4482c_1EBFFC07-9735-41EF-A822-5DFBF3E06249.png', label: { en: 'Fuse Box Replacement (Residential)', es: 'Cuadro residencial',             hu: 'Biztosítótábla csere (lakás)' } },
  { id: 8,  category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e5010fffc_23E9AA15-A366-4F20-A0A6-F098ED42A2AC.png', label: { en: 'Industrial Panel Upgrade',        es: 'Panel industrial',                 hu: 'Ipari panel felújítás' } },
  { id: 9,  category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/64359b5aa_F2C2377F-77EC-46B1-B89D-4F18F56B3A77.png', label: { en: 'Panel Before & After',           es: 'Panel antes y después',            hu: 'Panel előtte-utána' } },
  { id: 10, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/cc1f53d11_D16CCD9E-C0F6-4388-93BF-D137D21EB9ED.png', label: { en: 'Consumer Unit Modernisation',    es: 'Modernización cuadro',             hu: 'Biztosítótábla modernizálás' } },
  { id: 11, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/bb12bb9a8_IMG_6524.jpg',                           label: { en: 'Large Industrial Panel',          es: 'Panel industrial grande',          hu: 'Nagy ipari szekrény' } },
  { id: 12, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/e4c06433a_IMG_4165.jpg',                           label: { en: 'Industrial Cable Management',     es: 'Gestión de cables industrial',     hu: 'Ipari kábelvezetés' } },
  { id: 13, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/a67b77ad2_IMG_4164.jpg',                           label: { en: 'Industrial Wiring Detail',        es: 'Detalle cableado industrial',      hu: 'Ipari kábelezés részlet' } },
  { id: 14, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b773eb86b_IMG_4163.jpg',                           label: { en: 'Industrial Distribution Board',  es: 'Cuadro de distribución',           hu: 'Ipari elosztó' } },
  { id: 16, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/ae7753c3c_IMG_0979.jpg',                           label: { en: 'Commercial Cable Trays',          es: 'Bandejas de cables comerciales',   hu: 'Kereskedelmi kábeltálcák' } },
  { id: 17, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/444467d62_IMG_0978.jpg',                           label: { en: 'Large Commercial Installation',   es: 'Instalación comercial grande',     hu: 'Nagy kereskedelmi kivitelezés' } },
  { id: 18, category: 'ev',          src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/473077be1_IMG_4086.jpg',                           label: { en: 'Tesla EV Charger Installation',   es: 'Instalación cargador EV Tesla',    hu: 'Tesla EV töltő szerelés' } },
  { id: 28, category: 'ev',          src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/4a971cb8d_IMG_4087.jpg',                           label: { en: 'Tesla Wall Charger',              es: 'Cargador de pared Tesla',          hu: 'Tesla fali töltő' } },
  { id: 19, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/1e973940f_IMG_9564.jpg',                           label: { en: 'Outdoor Distribution Board',      es: 'Cuadro exterior',                  hu: 'Kültéri elosztó' } },
  { id: 20, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/b2ab71254_IMG_9712.jpg',                           label: { en: 'Industrial Wiring Route',         es: 'Tendido cables industrial',        hu: 'Ipari kábelút' } },
  { id: 21, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/a1ab44168_IMG_8652.jpg',                           label: { en: 'Industrial Distribution Panel',   es: 'Panel distribución industrial',    hu: 'Ipari elosztó szekrény' } },
  { id: 22, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/836c2e997_IMG_8649.jpg',                           label: { en: 'Main Distribution Board',         es: 'Cuadro principal',                 hu: 'Főelosztó' } },
  { id: 23, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/15e834fc5_IMG_8651.jpg',                           label: { en: 'Panel Wiring',                    es: 'Cableado de panel',                hu: 'Panel bekötés' } },
  { id: 24, category: 'fuse',        src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/c6dd20af5_IMG_6386.jpg',                           label: { en: 'Hotel / Building Panel',          es: 'Panel hotel / edificio',           hu: 'Szállodalai elosztó' } },
  { id: 25, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/62c9f043b_IMG_7300.jpg',                           label: { en: 'Industrial Control Panel',        es: 'Panel de control industrial',      hu: 'Ipari vezérlőszekrény' } },
  { id: 26, category: 'industrial',  src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/d3b803b6f_IMG_7240.jpg',                           label: { en: 'Industrial Panel Refurbishment',  es: 'Reforma panel industrial',         hu: 'Ipari szekrény felújítás' } },
  { id: 27, category: 'residential', src: 'https://media.base44.com/images/public/6a00a87519276e8c3d395df6/c4e23832d_IMG_7259.jpg',                           label: { en: 'New Build Wiring',                es: 'Cableado obra nueva',              hu: 'Új építésű ház villanyszerelés' } },
];

function Carousel({ items, onOpen }) {
  const [index, setIndex] = useState(0);
  const perPage = 3;
  const total = items.length;
  const maxIndex = Math.max(0, total - perPage);

  const prev = () => setIndex(i => Math.max(0, i - 1));
  const next = () => setIndex(i => Math.min(maxIndex, i + 1));

  const visible = items.slice(index, index + perPage);

  return (
    <div className="relative">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <AnimatePresence mode="popLayout">
          {visible.map(project => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-secondary aspect-[4/3] cursor-pointer"
              onClick={() => onOpen(project)}
            >
              <img
                src={project.src}
                alt={project.label.en}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <p className="text-sm font-semibold text-foreground leading-tight">{project.label.en}</p>
              </div>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/70 rounded-full p-1.5">
                <ZoomIn size={16} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {total > perPage && (
        <div className="flex items-center justify-center gap-4 mt-5">
          <button
            onClick={prev}
            disabled={index === 0}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronLeft size={18} />
          </button>
          <span className="text-xs text-muted-foreground">{index + 1} – {Math.min(index + perPage, total)} / {total}</span>
          <button
            onClick={next}
            disabled={index >= maxIndex}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center disabled:opacity-30 hover:border-primary hover:text-primary transition-colors"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  );
}

export default function ProjectGallery() {
  const { lang } = useI18n();
  const [activeFilter, setActiveFilter] = useState('all');
  const [lightbox, setLightbox] = useState(null);

  const filtered = activeFilter === 'all' ? PROJECTS : PROJECTS.filter(p => p.category === activeFilter);

  const getCatLabel = (cat) => cat[lang] || cat.en;

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-10">
        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => setActiveFilter(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all border ${
              activeFilter === cat.id
                ? 'bg-primary text-primary-foreground border-primary'
                : 'bg-secondary text-muted-foreground border-border hover:border-primary hover:text-foreground'
            }`}
          >
            {getCatLabel(cat)}
          </button>
        ))}
      </div>

      <Carousel key={activeFilter} items={filtered} onOpen={setLightbox} />

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative max-w-4xl w-full rounded-2xl overflow-hidden border border-border shadow-2xl"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.label[lang] || lightbox.label.en}
                className="w-full h-auto max-h-[80vh] object-contain bg-black"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-background/80 px-6 py-3">
                <p className="font-semibold text-sm">{lightbox.label[lang] || lightbox.label.en}</p>
              </div>
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-3 right-3 bg-background/80 rounded-full p-1.5 hover:bg-primary/20 transition-colors"
              >
                <X size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}