import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Gère l'effet de défilement (Sticky Header)
  useEffect(() => {
    const handleScroll = () => { setScrolled(window.scrollY > 10); };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Gère la fermeture du menu au clic/échap
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) setIsMenuOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsMenuOpen(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  useEffect(() => { setIsMenuOpen(false); }, [location]);

  const navItems = [
    { name: 'Accueil', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Tarifs', path: '/pricing' },
    { name: 'À Propos', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const authItems = [
    { name: 'Admin', path: '/admin/login' },
    { name: 'Client', path: '/client/login' },
    { name: 'Livreur', path: '/livreur/login' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-soft-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}
      role="banner"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Accueil Delevrie">
            <div className="bg-dark text-white font-extrabold text-xl w-10 h-10 rounded-full flex-center shadow-soft hover:shadow-lg transition-all duration-300">
              D
            </div>
            <span className="text-2xl font-bold text-dark tracking-tight">Delevrie</span>
          </Link>

          {/* Navigation Desktop: تم تغيير lg:flex إلى md:flex */}
          <nav className="hidden **md:flex** items-center space-x-1" role="navigation" aria-label="Navigation principale">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-base ${location.pathname === item.path ? 'text-primary bg-red-50 font-semibold' : 'text-dark hover:text-primary hover:bg-gray-50'}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Boutons d'Action et Connexion: تم تغيير lg:flex إلى md:flex */}
          <div className="hidden **md:flex** items-center space-x-3">
            {authItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="px-4 py-2 text-dark hover:text-secondary font-medium transition-colors hover:bg-gray-50 rounded-lg focus:ring-secondary"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/client/login" 
              className="btn btn-primary px-5 py-2.5 font-semibold text-lg" 
            >
              Commencer
            </Link>
          </div>

          {/* Bouton Menu Mobile: تم تغيير lg:hidden إلى md:hidden */}
          <button 
            className="**md:hidden** text-dark focus:outline-none focus:ring-2 focus:ring-primary rounded-md p-2 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <svg className="h-6 w-6 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Mobile: تم تغيير lg:hidden إلى md:hidden */}
        <div 
          ref={menuRef} 
          className={`**md:hidden** transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'} bg-white rounded-xl shadow-soft-xl border border-gray-100`}
          role="dialog" 
          aria-modal="true" 
          aria-label="Navigation mobile"
        >
          <div className="py-4">
            <div className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-3 rounded-lg font-medium transition-colors text-base ${location.pathname === item.path ? 'text-primary bg-red-50' : 'text-dark hover:text-primary hover:bg-gray-50'}`}
                  onClick={() => setIsMenuOpen(false)}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="border-t border-gray-100 my-4"></div>
            
            <div className="flex flex-col space-y-3 px-4">
              {authItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className="px-4 py-3 text-dark hover:text-secondary font-medium transition-colors hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/client/login" 
                className="btn btn-primary px-4 py-3 text-center shadow-md hover:shadow-lg mt-4 font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Commencer
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;