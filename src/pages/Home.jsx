import Hero from '../components/Hero';
import Services from '../components/Services';
import PricingCards from '../components/PricingCards';
import Gallery from '../components/Gallery';
import CTA from '../components/CTA';
import { useScrollReveal } from '../animations/gsapAnimations';
import { Users, Clock, Award, ShieldCheck } from 'lucide-react';
import { useEffect, useState } from 'react';

const Counter = ({ end, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const currentCount = Math.min(Math.floor((progress / duration) * end), end);
      setCount(currentCount);
      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };
    
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        requestAnimationFrame(animate);
        observer.disconnect();
      }
    });
    
    const el = document.getElementById(`counter-${end}`);
    if (el) observer.observe(el);
    
    return () => observer.disconnect();
  }, [end, duration]);

  return <span id={`counter-${end}`}>{count}</span>;
};

const Home = () => {
  useScrollReveal('.reveal-up');

  return (
    <main>
      <Hero />
      
      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div className="reveal-up">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Trusted Post-Production Partner for Global Studios</h2>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Honey Dream Studio is known for quality editing, exceptional efficiency, and professional workflows. We don't just edit; we replicate your unique style to ensure consistency across all your projects.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
                    <Clock size={24} />
                  </div>
                  <h4 className="font-bold mb-2">Fast Turnaround</h4>
                  <p className="text-slate-500 text-sm">Delivery within 2-5 business days.</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <div className="w-12 h-12 bg-accent/10 text-accent rounded-xl flex items-center justify-center mb-4">
                    <Award size={24} />
                  </div>
                  <h4 className="font-bold mb-2">Premium Quality</h4>
                  <p className="text-slate-500 text-sm">Cinematic standards in every frame.</p>
                </div>
              </div>
            </div>
            
            <div className="relative reveal-up">
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/studio-work/800/800"
                  alt="Studio Work"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-3xl shadow-2xl max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
                    <ShieldCheck size={24} />
                  </div>
                  <div>
                    <h5 className="font-bold">100% Secure</h5>
                    <p className="text-slate-500 text-xs">Your data is always safe.</p>
                  </div>
                </div>
                <p className="text-slate-600 text-sm italic">
                  "The best outsourcing decision we've ever made. Their attention to detail is unmatched."
                </p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-20 border-t border-slate-100">
            <div className="text-center reveal-up">
              <div className="text-5xl font-bold text-primary mb-2">
                <Counter end={500} />+
              </div>
              <p className="text-slate-500 font-display font-medium uppercase tracking-widest text-xs">Projects Edited</p>
            </div>
            <div className="text-center reveal-up">
              <div className="text-5xl font-bold text-accent mb-2">
                <Counter end={150} />+
              </div>
              <p className="text-slate-500 font-display font-medium uppercase tracking-widest text-xs">Studios Served</p>
            </div>
            <div className="text-center reveal-up">
              <div className="text-5xl font-bold text-primary mb-2">
                <Counter end={100} />%
              </div>
              <p className="text-slate-500 font-display font-medium uppercase tracking-widest text-xs">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
      <Gallery />
      <PricingCards />
      <CTA />
    </main>
  );
};

export default Home;
