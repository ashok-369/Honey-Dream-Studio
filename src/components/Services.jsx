import { Link } from 'react-router-dom';
import { Video, Camera, Home, Instagram, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../animations/gsapAnimations';

const services = [
  {
    title: 'Wedding Video Editing',
    description: 'Cinematic storytelling with professional color grading, sound design, and seamless transitions.',
    details: [
      'Multi-camera synchronization',
      'Professional color grading & LUTs',
      'Advanced sound design & mixing',
      'Licensed cinematic music',
      'VFX & motion graphics',
      'Style replication'
    ],
    icon: <Video className="w-8 h-8" />,
    color: 'bg-blue-50 text-blue-600',
    image: 'https://picsum.photos/seed/video-edit/600/400'
  },
  {
    title: 'Wedding Photo Editing',
    description: 'Expert culling, color correction, and artistic retouching to match your unique studio style.',
    details: [
      'Smart culling & selection',
      'Consistent color correction',
      'High-end skin retouching',
      'Object removal & clean up',
      'Sky replacement',
      'Custom preset creation'
    ],
    icon: <Camera className="w-8 h-8" />,
    color: 'bg-amber-50 text-amber-600',
    image: 'https://picsum.photos/seed/photo-edit/600/400'
  },
  {
    title: 'Real Estate Video Editing',
    description: 'High-end property showcases with stabilization, sky replacement, and professional pacing.',
    details: [
      'Smooth drone footage stabilization',
      'Dynamic sky replacement',
      'HDR color enhancement',
      'Text tracking & callouts',
      'Agent intro/outro integration',
      'Fast 24-48h turnaround'
    ],
    icon: <Home className="w-8 h-8" />,
    color: 'bg-emerald-50 text-emerald-600',
    image: 'https://picsum.photos/seed/realestate/600/400'
  },
  {
    title: 'Instagram Teaser Videos',
    description: 'Fast-paced, engaging vertical edits optimized for social media growth and engagement.',
    details: [
      'Vertical 9:16 optimization',
      'Trending music integration',
      'Engaging captions & subtitles',
      'Hook-driven storytelling',
      'Platform-specific exports',
      'Viral-ready pacing'
    ],
    icon: <Instagram className="w-8 h-8" />,
    color: 'bg-purple-50 text-purple-600',
    image: 'https://picsum.photos/seed/social/600/400'
  }
];

const Services = () => {
  useScrollReveal('.service-card', { y: 100, stagger: 0.2 });

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent" />
      
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Services We Offer</h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6" />
          <p className="text-slate-600 max-w-2xl mx-auto">
            We provide a comprehensive range of post-production services tailored for creative professionals worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-accent/30 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="flex flex-col lg:flex-row h-full">
                <div className="lg:w-1/2 p-8 flex flex-col justify-between">
                  <div>
                    <div className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500`}>
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{service.title}</h3>
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                  <Link 
                    to="/works"
                    className="flex items-center gap-2 text-primary font-display font-semibold group/btn"
                  >
                    Learn More <ArrowRight size={18} className="group-hover/btn:translate-x-2 transition-transform" />
                  </Link>
                </div>
                <div className="lg:w-1/2 h-64 lg:h-auto overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              
              {/* Glow Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/20 rounded-3xl pointer-events-none transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
