import React from 'react';
import Sidebar from '../components/client/Sidebar';
import Topbar from '../components/client/Topbar';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="client-layout flex min-h-screen" role="main">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-4 md:p-6 bg-gray-50" id="main-content">
          {children}
        </main>
      </div>
    </div>
  );
};

export default ClientLayout;