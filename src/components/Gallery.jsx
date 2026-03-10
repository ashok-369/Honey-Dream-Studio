import { useState } from 'react';
import { Play, Maximize2, Filter } from 'lucide-react';
import { useScrollReveal } from '../animations/gsapAnimations';
import clsx from 'clsx';

const categories = ['All', 'Short Film', 'Full Film', 'Promo', 'Real Estate'];

const works = [
  { id: 1, title: 'Elegant Estate', category: 'Real Estate', image: 'https://picsum.photos/seed/re1/800/600' },
  { id: 2, title: 'Sarah & James', category: 'Short Film', image: 'https://picsum.photos/seed/wedding1/800/600' },
  { id: 3, title: 'Luxury Resort', category: 'Promo', image: 'https://picsum.photos/seed/promo1/800/600' },
  { id: 4, title: 'The Grand Wedding', category: 'Full Film', image: 'https://picsum.photos/seed/wedding2/800/600' },
  { id: 5, title: 'Modern Loft', category: 'Real Estate', image: 'https://picsum.photos/seed/re2/800/600' },
  { id: 6, title: 'Emily & Michael', category: 'Short Film', image: 'https://picsum.photos/seed/wedding3/800/600' },
];

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  useScrollReveal('.gallery-item', { scale: 0.9, stagger: 0.1 });

  const filteredWorks = activeFilter === 'All' 
    ? works 
    : works.filter(work => work.category === activeFilter);

  return (
    <section className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
          <div className="max-w-xl">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Masterpieces</h2>
            <p className="text-slate-600">
              A glimpse into the cinematic experiences we've crafted for studios across the globe.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={clsx(
                  'px-6 py-2 rounded-full text-sm font-display font-medium transition-all duration-300',
                  activeFilter === cat 
                    ? 'bg-primary text-white shadow-lg' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                )}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredWorks.map((work) => (
            <div
              key={work.id}
              className="gallery-item group relative aspect-[4/3] rounded-3xl overflow-hidden shadow-lg"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8">
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-accent text-xs font-bold tracking-widest uppercase mb-2 block">
                    {work.category}
                  </span>
                  <h3 className="text-white text-2xl font-bold mb-4">{work.title}</h3>
                  <div className="flex gap-4">
                    <button className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300">
                      <Play size={20} fill="currentColor" />
                    </button>
                    <button className="w-12 h-12 rounded-full bg-white/20 text-white backdrop-blur-md flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                      <Maximize2 size={20} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
