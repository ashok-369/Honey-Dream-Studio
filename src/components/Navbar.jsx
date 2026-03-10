import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight } from 'lucide-react';
import clsx from 'clsx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Works', path: '/works' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 py-4',
        isScrolled ? 'glass py-3 shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white font-serif text-xl font-bold">
            H
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-primary">
            Honey Dream <span className="text-accent">Studio</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={clsx(
                'font-display text-sm font-medium transition-all relative group',
                location.pathname === link.path ? 'text-primary' : 'text-slate-600 hover:text-primary'
              )}
            >
              {link.name}
              <span
                className={clsx(
                  'absolute -bottom-1 left-0 h-0.5 bg-accent transition-all duration-300',
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                )}
              />
            </Link>
          ))}
          <Link to="/register" className="btn-primary flex items-center gap-2 text-sm">
            Book Free Trial <ChevronRight size={16} />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-primary" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          'fixed inset-0 top-[72px] bg-white z-40 md:hidden transition-transform duration-500 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex flex-col items-center gap-8 pt-12">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-2xl font-medium text-primary"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/register"
            className="btn-primary mt-4"
            onClick={() => setIsOpen(false)}
          >
            Book Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
