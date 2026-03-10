import { useCallback } from "react";
import { Particles } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Link } from 'react-router-dom';
import { Play, ChevronRight } from 'lucide-react';
import { useTextReveal } from '../animations/gsapAnimations';

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  useTextReveal('.hero-title');

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "repulse" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              repulse: { distance: 200, duration: 0.4 },
            },
          },
          particles: {
            color: { value: "#D4AF37" },
            links: {
              color: "#1E3A8A",
              distance: 150,
              enable: true,
              opacity: 0.2,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 80 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10 animate-pulse delay-1000" />
      <div className="absolute inset-0 geometric-pattern opacity-30 -z-20" />
      
      {/* SVG Illustration Background */}
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 -z-10 pointer-events-none">
        <svg viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <circle cx="400" cy="400" r="300" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <circle cx="400" cy="400" r="250" stroke="currentColor" strokeWidth="0.5" className="text-accent" />
          <path d="M400 100V700M100 400H700" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
          <rect x="200" y="200" width="400" height="400" rx="200" stroke="currentColor" strokeWidth="0.5" className="text-accent" transform="rotate(45 400 400)" />
          <path d="M200 200L600 600M600 200L200 600" stroke="currentColor" strokeWidth="0.5" className="text-primary" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/5 border border-primary/10 text-primary font-display text-xs font-semibold mb-8 animate-bounce">
          <span className="w-2 h-2 rounded-full bg-accent animate-ping" />
          Trusted by 150+ Global Studios
        </div>

        <h1 className="hero-title text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 leading-tight">
          Professional Wedding <br />
          <span className="text-primary">Video & Photo</span> Editing
        </h1>

        <p className="max-w-2xl mx-auto text-slate-600 text-lg md:text-xl mb-12 leading-relaxed">
          Helping photographers and studios worldwide deliver stunning edits faster. 
          Outsource your post-production to the experts.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Link to="/register" className="btn-primary flex items-center gap-2 group">
            Book Free Trial <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link to="/works" className="btn-outline flex items-center gap-2 group">
            <Play size={18} className="fill-primary group-hover:fill-white transition-all" />
            View Our Works
          </Link>
        </div>

        {/* Floating Icons/Elements */}
        <div className="hidden lg:block">
          <div className="absolute top-1/3 left-10 animate-bounce delay-150">
            <div className="p-4 glass rounded-2xl shadow-xl">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center text-accent">
                <Play size={24} />
              </div>
            </div>
          </div>
          <div className="absolute bottom-1/3 right-10 animate-bounce delay-500">
            <div className="p-4 glass rounded-2xl shadow-xl">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-primary">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
