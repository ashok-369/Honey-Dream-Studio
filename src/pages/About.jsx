import { useScrollReveal } from '../animations/gsapAnimations';
import { ChevronDown, ChevronUp, Users, Target, Zap, Heart } from 'lucide-react';
import { useState } from 'react';
import clsx from 'clsx';
import CTA from '../components/CTA';
import Lottie from 'lottie-react';

const faqs = [
  {
    q: 'Why is professional video editing important?',
    a: 'Professional editing transforms raw footage into a cinematic story. It ensures consistent color grading, clear audio, and a pacing that keeps viewers engaged, ultimately reflecting the high quality of your studio.'
  },
  {
    q: 'Can you match my editing style?',
    a: 'Absolutely. We spend time analyzing your previous works and style references to ensure our edits feel like they were done in-house. We replicate your color palettes, transition styles, and storytelling flow.'
  },
  {
    q: 'How does the workflow work?',
    a: 'It’s simple: Register your project, upload your raw files via our secure link, we edit based on your instructions, and you receive the first draft for review. We offer unlimited revisions until you are 100% satisfied.'
  },
  {
    q: 'What is the power of great editing?',
    a: 'Great editing doesn’t just show what happened; it makes the viewer feel what happened. It builds your brand reputation and allows you to charge premium rates for your services.'
  }
];

const About = () => {
  const [openFaq, setOpenFaq] = useState(0);
  useScrollReveal('.reveal-up');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 reveal-up">
            Outsourcing Helps You <br />
            <span className="text-accent">Grow Your Business</span>
          </h1>
          <p className="max-w-2xl mx-auto text-slate-400 text-lg reveal-up">
            Focus on what you love—shooting and building relationships. Let us handle the heavy lifting of post-production.
          </p>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="reveal-up">
              <span className="text-accent font-display font-bold tracking-widest uppercase text-sm mb-4 block">Our Story</span>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Excellence in Every Frame</h2>
              <p className="text-slate-600 text-lg mb-6 leading-relaxed">
                Honey Dream Studio was founded with a single mission: to provide world-class editing services that empower photographers and videographers to scale their businesses without compromising on quality.
              </p>
              <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                Our team of expert editors is trained to adapt to any creative style. Whether you prefer a dark and moody look or a bright and airy aesthetic, we replicate your vision with surgical precision.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                    <Target size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Mission</h4>
                    <p className="text-slate-500 text-sm">To be the invisible backbone of the world's most successful creative studios.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center flex-shrink-0">
                    <Zap size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Our Vision</h4>
                    <p className="text-slate-500 text-sm">Redefining post-production through innovation, efficiency, and artistic excellence.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 reveal-up relative">
              <div className="absolute -top-20 -right-20 w-64 h-64 z-0 opacity-50 hidden lg:block">
                <Lottie 
                  animationData={null}
                  path="https://lottie.host/67702677-9494-44d4-86a0-e2d93e21876e/T8B5P5N5N5.json"
                  loop={true}
                />
              </div>
              <img src="https://picsum.photos/seed/about1/400/600" alt="About" className="rounded-3xl shadow-xl mt-12 relative z-10" referrerPolicy="no-referrer" />
              <img src="https://picsum.photos/seed/about2/400/600" alt="About" className="rounded-3xl shadow-xl relative z-10" referrerPolicy="no-referrer" />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Everything you need to know about our workflow and services.</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="reveal-up">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
                  className="w-full p-6 bg-white rounded-2xl flex items-center justify-between text-left hover:shadow-md transition-all border border-slate-100"
                >
                  <span className="font-bold text-lg">{faq.q}</span>
                  {openFaq === index ? <ChevronUp className="text-accent" /> : <ChevronDown className="text-slate-400" />}
                </button>
                <div className={clsx(
                  'overflow-hidden transition-all duration-500',
                  openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                )}>
                  <div className="p-8 text-slate-600 leading-relaxed">
                    {faq.a}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal-up">
            <h2 className="text-4xl font-bold mb-4">Meet Our Lead Editors</h2>
            <p className="text-slate-600">The creative minds behind your stunning visuals.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="reveal-up group">
                <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
                  <img src={`https://picsum.photos/seed/editor${i}/400/600`} alt="Editor" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" referrerPolicy="no-referrer" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <p className="text-white text-sm italic">"Editing is where the magic truly happens."</p>
                  </div>
                </div>
                <h4 className="text-xl font-bold mb-1">Editor Name {i}</h4>
                <p className="text-slate-500 text-sm">Senior Video Editor</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default About;
