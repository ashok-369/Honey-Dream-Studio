import { Check, Star } from 'lucide-react';
import { useScrollReveal } from '../animations/gsapAnimations';
import { Link } from 'react-router-dom';
import clsx from 'clsx';

const plans = [
  {
    name: 'Wedding Photo Editing',
    price: '125',
    description: 'Perfect for full wedding galleries.',
    features: [
      'Color correction',
      'Culling (Selection)',
      'Color temperature adjustments',
      'Up to 1500 photos',
      '5 day turnaround',
      'Unlimited revisions',
      'Risk free trial for 50 photos'
    ],
    popular: false
  },
  {
    name: 'Real Estate Video',
    price: '90',
    description: 'High-end property showcases.',
    features: [
      '2 hours RAW footage',
      'Cinematic transitions',
      'Video stabilization',
      'Music with license',
      '2 day turnaround',
      '4K Export',
      'Sky replacement'
    ],
    popular: true
  },
  {
    name: 'Wedding Raw Edit',
    price: '120',
    description: 'Full documentary style editing.',
    features: [
      '10 hour footage support',
      'Multi camera support',
      'Professional sound mixing',
      '4K output',
      '7 day turnaround',
      'Digital delivery',
      'Project file included'
    ],
    popular: false
  }
];

const PricingCards = () => {
  useScrollReveal('.pricing-card', { y: 50, stagger: 0.2 });

  return (
    <section className="section-padding bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Luxury Pricing Plans</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            Transparent pricing with no hidden fees. Premium quality post-production at competitive rates.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={clsx(
                'pricing-card group relative p-8 rounded-3xl transition-all duration-500 hover:-translate-y-4 flex flex-col h-full',
                plan.popular 
                  ? 'bg-primary text-white shadow-2xl scale-105 z-10' 
                  : 'bg-white text-slate-900 border border-slate-100'
              )}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-lg">
                  <Star size={12} fill="white" /> MOST POPULAR
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className={clsx('text-sm', plan.popular ? 'text-blue-100' : 'text-slate-500')}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className={clsx('text-sm', plan.popular ? 'text-blue-200' : 'text-slate-400')}>
                    / project
                  </span>
                </div>
              </div>

              <ul className="space-y-4 mb-10 flex-grow">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm">
                    <div className={clsx(
                      'w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0',
                      plan.popular ? 'bg-white/20 text-white' : 'bg-accent/10 text-accent'
                    )}>
                      <Check size={12} />
                    </div>
                    <span className={plan.popular ? 'text-blue-50' : 'text-slate-600'}>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/register"
                className={clsx(
                  'w-full py-4 rounded-xl font-display font-bold transition-all duration-300 text-center block mt-auto',
                  plan.popular 
                    ? 'bg-accent text-white hover:bg-white hover:text-primary' 
                    : 'bg-primary text-white hover:bg-accent'
                )}
              >
                Book This Plan
              </Link>

              {/* Gold Border on Hover for Non-Popular */}
              {!plan.popular && (
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/30 rounded-3xl pointer-events-none transition-all duration-500" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingCards;
