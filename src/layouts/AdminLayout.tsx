// src/layouts/AdminLayout.tsx
import React from 'react';
import Sidebar from '../components/admin/Sidebar';
import Topbar from '../components/admin/Topbar';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex bg-slate-50">
      <aside className="w-64 hidden lg:block border-r bg-white">
        <Sidebar />
      </aside>

      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 p-4 lg:p-6">{children}</main>
      </div>
    </div>
  );
};

export default AdminLayout;
