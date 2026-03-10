import { Link } from 'react-router-dom';
import { Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">
              H
            </div>
            <span className="font-serif text-xl font-bold tracking-tight text-white">
              Honey Dream <span className="text-accent">Studio</span>
            </span>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Professional wedding video and photo editing outsourcing studio serving photographers and studios globally. We bring your vision to life with cinematic precision.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
              <Instagram size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
              <Facebook size={18} />
            </a>
            <a href="#" className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center hover:bg-accent hover:border-accent transition-all duration-300">
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-accent">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/works" className="hover:text-white transition-colors">Our Works</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-accent">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <Mail size={16} className="text-accent" />
              <span>info@honeydreamstudio.com</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={16} className="text-accent" />
              <span>+1 (555) 123-4567</span>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={16} className="text-accent mt-1" />
              <span>123 Creative Way, Suite 100<br />Los Angeles, CA 90001</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-serif text-lg font-bold mb-6 text-accent">Instagram Feed</h4>
          <div className="grid grid-cols-3 gap-2">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="aspect-square bg-slate-800 rounded-md overflow-hidden group">
                <img
                  src={`https://picsum.photos/seed/wedding${i}/200/200`}
                  alt="Instagram"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
        <p>© 2026 Honey Dream Studio. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
