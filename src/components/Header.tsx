import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close menu when pressing Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const authItems = [
    { name: 'Admin', path: '/admin/login' },
    { name: 'Client', path: '/client/login' },
    { name: 'Livreur', path: '/livreur/login' },
  ];

  return (
    <header 
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-3'}`}
      role="banner"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2" aria-label="Delevrie Home">
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-shadow duration-300" aria-hidden="true">
              D
            </div>
            <span className="text-xl font-bold text-gray-800">Delevrie</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1" role="navigation" aria-label="Main navigation">
            {navItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
                aria-current={location.pathname === item.path ? 'page' : undefined}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            {authItems.map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className="px-4 py-2 text-gray-600 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <Link 
              to="/client/login" 
              className="px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button 
            className="lg:hidden text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-2 hover:bg-gray-100 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
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

        {/* Mobile Navigation */}
        <div 
          ref={menuRef} 
          className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'} bg-white rounded-xl shadow-xl border border-gray-100`}
          role="dialog" 
          aria-modal="true" 
          aria-label="Mobile navigation"
        >
          <div className="py-4">
            <div className="flex flex-col space-y-1 px-4">
              {navItems.map((item) => (
                <Link 
                  key={item.path}
                  to={item.path} 
                  className={`px-4 py-3 rounded-lg font-medium transition-colors ${location.pathname === item.path ? 'text-blue-600 bg-blue-50' : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'}`}
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
                  className="px-4 py-3 text-gray-600 hover:text-blue-600 font-medium transition-colors hover:bg-gray-50 rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link 
                to="/client/login" 
                className="px-4 py-3 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 text-center shadow-md hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;