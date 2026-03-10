import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useScrollReveal } from '../animations/gsapAnimations';

const CTA = () => {
  useScrollReveal('.cta-content', { y: 30 });

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="cta-content relative bg-slate-900 rounded-[3rem] p-12 md:p-20 text-center overflow-hidden">
          {/* Background Effects */}
          <div className="absolute top-0 left-0 w-full h-full geometric-pattern opacity-10" />
          <div className="absolute -top-24 -left-24 w-64 h-64 bg-primary rounded-full blur-[100px] opacity-20" />
          <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-accent rounded-full blur-[100px] opacity-20" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-accent font-display text-xs font-semibold mb-8">
              <Sparkles size={14} />
              Ready to Scale Your Studio?
            </div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
              Good Editing Makes <br />
              <span className="text-accent italic">Great Memories</span>
            </h2>
            
            <p className="max-w-2xl mx-auto text-slate-400 text-lg mb-12">
              Join 150+ professional photographers and studios who trust Honey Dream Studio for their post-production needs. Get your first edit free.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/register" className="btn-accent flex items-center gap-2 group">
                Send Your First Edit <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="text-white font-display font-medium hover:text-accent transition-colors">
                Talk to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
