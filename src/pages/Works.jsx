import { useScrollReveal } from '../animations/gsapAnimations';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import { Camera, Image as ImageIcon, ZoomIn } from 'lucide-react';

const Works = () => {
  useScrollReveal('.reveal-up');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-slate-50 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full geometric-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 reveal-up">
            The Best Way to Know Us <br />
            <span className="text-primary">Is Through Our Work</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-600 text-lg reveal-up">
            Browse our portfolio of cinematic wedding films and professionally edited photo galleries.
          </p>
        </div>
      </section>

      <Gallery />

      {/* Photo Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-4xl font-bold mb-4">Photography Masterpieces</h2>
            <p className="text-slate-600">Stunning color correction and retouching for every mood.</p>
          </div>

          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <div key={i} className="reveal-up group relative rounded-3xl overflow-hidden shadow-lg break-inside-avoid">
                <img
                  src={`https://picsum.photos/seed/photo-gallery-${i}/800/${Math.floor(Math.random() * 400) + 600}`}
                  alt="Gallery"
                  className="w-full h-auto group-hover:scale-110 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-primary flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ZoomIn size={24} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="bg-white">
        <CTA />
      </div>
    </main>
  );
};

export default Works;
