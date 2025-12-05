import React from 'react';
import { Link, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, setIsOpen }) => {
  const location = useLocation();

  const navItems = [
    { name: 'Dashboard', path: '/livreur', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6' },
    { name: 'Orders', path: '/livreur/orders', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
    { name: 'Earnings', path: '/livreur/earnings', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1' },
    { name: 'Profile', path: '/livreur/profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' },
  ];

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}
      
      {/* Sidebar */}
      <div 
        className={`bg-gray-800 text-white w-64 min-h-screen fixed md:relative z-50 transform transition-transform duration-300 ease-in-out md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
        role="navigation" 
        aria-label="Livreur navigation"
      >
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white font-bold text-xl w-10 h-10 rounded-full flex items-center justify-center" aria-hidden="true">
              L
            </div>
            <span className="text-xl font-bold">Livreur Portal</span>
          </div>
        </div>
        
        <nav className="mt-6" aria-label="Main menu">
          <ul>
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-all duration-200 ${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-white shadow-inner'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                  aria-current={location.pathname === item.path ? 'page' : undefined}
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.icon} />
                  </svg>
                  <span className="truncate">{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <button 
            className="w-full text-left text-gray-300 hover:text-white flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1 transition-colors duration-200"
            aria-label="Logout"
          >
            <svg className="w-5 h-5 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            <span>Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;