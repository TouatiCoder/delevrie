import React, { useState, useRef, useEffect } from 'react';

const Topbar: React.FC = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const profileRef = useRef<HTMLDivElement>(null);

  // Close profile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="bg-white shadow-sm h-16 flex items-center justify-between px-4 md:px-6 sticky top-0 z-10">
      <div className="flex items-center">
        <button className="md:hidden text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-1 mr-4" aria-label="Toggle sidebar">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Client Dashboard</h1>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md p-1" aria-label="Notifications">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>
        
        <div className="relative" ref={profileRef}>
          <button 
            className="flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full"
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            aria-label="User profile"
            aria-haspopup="true"
            aria-expanded={isProfileOpen}
          >
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium" aria-hidden="true">
              C
            </div>
          </button>
          
          {isProfileOpen && (
            <div className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-label="Profile menu">
              <div className="py-1">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md mx-1" role="menuitem">
                  Your Profile
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md mx-1" role="menuitem">
                  Settings
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md mx-1" role="menuitem">
                  Sign out
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Topbar;