import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, LOGO_URL, SOCIAL_LINKS } from '../constants';

const Layout: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col font-sans text-ivory-100 bg-charcoal-900 selection:bg-gold-500 selection:text-charcoal-900">
      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-white/5 ${
          isScrolled ? 'bg-charcoal-900/95 backdrop-blur-md py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-3 group">
            <img src={LOGO_URL} alt="Gathering of the Watchmen" className="h-12 w-auto object-contain transition-transform group-hover:scale-105" />
            <div className="hidden lg:block">
              <span className="block font-display font-bold text-lg tracking-widest text-gold-500 uppercase">Gathering</span>
              <span className="block font-serif text-xs tracking-[0.2em] text-ivory-200">Of The Watchmen</span>
            </div>
          </NavLink>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm uppercase tracking-widest font-medium transition-colors hover:text-gold-500 ${
                    isActive ? 'text-gold-500' : 'text-ivory-200'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <NavLink to="/events" className="px-5 py-2 border border-gold-500 text-gold-500 uppercase text-xs tracking-widest hover:bg-gold-500 hover:text-charcoal-900 transition-all">
              Join Us
            </NavLink>
          </nav>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden text-gold-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-charcoal-900 flex flex-col justify-center items-center gap-8 transition-transform duration-500 lg:hidden ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {NAV_ITEMS.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className="font-serif text-3xl text-ivory-100 hover:text-gold-500 transition-colors"
          >
            {item.label}
          </NavLink>
        ))}
        <div className="mt-8 flex gap-6">
          {SOCIAL_LINKS.map((link, idx) => (
            <a key={idx} href={link.href} className="text-gold-500 hover:text-ivory-100 transition-colors">
              <link.icon size={24} />
            </a>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-800 border-t border-white/5 py-16 mt-20">
        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-1 md:col-span-2">
            <img src={LOGO_URL} alt="Logo" className="h-16 mb-6 opacity-80" />
            <p className="text-ivory-200/60 max-w-md font-light leading-relaxed">
              A digital sanctuary for those seeking peace, meaning, and authentic connection.
              Mobilizing prayer across regions to align with heaven's agenda.
            </p>
          </div>

          <div>
            <h4 className="font-display text-gold-500 tracking-widest uppercase mb-6">Navigation</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.slice(0, 5).map((item) => (
                <li key={item.path}>
                  <NavLink to={item.path} className="text-ivory-200/60 hover:text-gold-500 transition-colors text-sm">
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-gold-500 tracking-widest uppercase mb-6">Connect</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-ivory-200/60 hover:text-gold-500 transition-colors text-sm">Join Mailing List</a>
              </li>
              <li>
                <NavLink to="/prayer-request" className="text-ivory-200/60 hover:text-gold-500 transition-colors text-sm">Submit Prayer Request</NavLink>
              </li>
              <li className="flex gap-4 mt-4">
                {SOCIAL_LINKS.map((link, idx) => (
                  <a key={idx} href={link.href} className="text-gold-500/80 hover:text-gold-500 transition-colors">
                    <link.icon size={18} />
                  </a>
                ))}
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-xs text-ivory-200/30">
          <p>&copy; {new Date().getFullYear()} Gathering of the Watchmen. All rights reserved.</p>
          <p>Designed with purpose.</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;