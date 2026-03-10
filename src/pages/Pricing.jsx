import PricingCards from '../components/PricingCards';
import CTA from '../components/CTA';
import { useScrollReveal } from '../animations/gsapAnimations';
import { ShieldCheck, Zap, RefreshCw, Headphones } from 'lucide-react';

const Pricing = () => {
  useScrollReveal('.reveal-up');

  return (
    <main className="pt-20">
      {/* Hero */}
      <section className="section-padding bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-pattern opacity-10" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 reveal-up">
            Simple, Transparent <br />
            <span className="text-accent">Luxury Pricing</span>
          </h1>
          <p className="max-w-2xl mx-auto text-blue-100 text-lg reveal-up">
            No hidden fees. No complex contracts. Just premium editing services delivered on time, every time.
          </p>
        </div>
      </section>

      <PricingCards />

      {/* Features Grid */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="reveal-up text-center">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ShieldCheck size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Risk-Free Trial</h4>
              <p className="text-slate-500 text-sm">Not sure? Try us with a free edit of 50 photos or a 1-minute teaser video.</p>
            </div>
            <div className="reveal-up text-center">
              <div className="w-16 h-16 bg-amber-50 text-accent rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Fast Delivery</h4>
              <p className="text-slate-500 text-sm">We respect your deadlines. Our standard turnaround is 2-5 business days.</p>
            </div>
            <div className="reveal-up text-center">
              <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <RefreshCw size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">Unlimited Revisions</h4>
              <p className="text-slate-500 text-sm">We edit until it's perfect. Your satisfaction is our absolute priority.</p>
            </div>
            <div className="reveal-up text-center">
              <div className="w-16 h-16 bg-purple-50 text-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Headphones size={32} />
              </div>
              <h4 className="text-xl font-bold mb-4">24/7 Support</h4>
              <p className="text-slate-500 text-sm">Our dedicated account managers are always available to assist you.</p>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </main>
  );
};

export default Pricing;
