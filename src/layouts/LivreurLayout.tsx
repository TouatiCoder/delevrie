import React, { useState } from 'react';
import Sidebar from '../components/livreur/Sidebar';
import TopBar from '../components/livreur/TopBar';
import BottomNav from '../components/livreur/BottomNav';

interface LivreurLayoutProps {
  children: React.ReactNode;
}

const LivreurLayout: React.FC<LivreurLayoutProps> = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="livreur-layout flex flex-col min-h-screen" role="main">
      <TopBar isSidebarOpen={isSidebarOpen} setIsSidebarOpen={setIsSidebarOpen} />
      <div className="flex flex-1">
        <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
        <main 
          className="flex-1 p-4 md:p-6 bg-gray-50 pb-16 md:pb-6" 
          id="main-content"
          onClick={() => setIsSidebarOpen(false)}
        >
          {children}
        </main>
      </div>
      <BottomNav />
    </div>
  );
};

export default LivreurLayout;