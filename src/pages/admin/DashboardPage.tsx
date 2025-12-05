import React from 'react';
import StatCard from '../../components/admin/StatCard';
import { dashboardStats } from '../../data/admin/dummyData';

const AdminDashboardPage: React.FC = () => {
  // Convert icon strings to SVG components
  const renderIcon = (path: string) => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  return (
    <div className="dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600 mt-1">Welcome back! Here's what's happening today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={renderIcon(stat.icon)}
            color="bg-blue-500"
          />
        ))}
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <div className="card p-6" role="region" aria-labelledby="recent-orders-heading">
          <div className="flex justify-between items-center mb-6">
            <h2 id="recent-orders-heading" className="text-lg font-semibold text-gray-900">Recent Orders</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center justify-between pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div>
                  <h3 className="font-medium text-gray-900">Order #{1000 + item}</h3>
                  <p className="text-sm text-gray-500">Client: John Doe</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-gray-900">€{45.99 + item * 5}</p>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Delivered
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Clients */}
        <div className="card p-6" role="region" aria-labelledby="new-clients-heading">
          <div className="flex justify-between items-center mb-6">
            <h2 id="new-clients-heading" className="text-lg font-semibold text-gray-900">New Clients</h2>
            <button className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {[1, 2, 3, 4].map((item) => (
              <div key={item} className="flex items-center pb-4 border-b border-gray-100 last:border-0 last:pb-0">
                <div className="flex-shrink-0">
                  <div className="bg-gray-200 border-2 border-dashed rounded-xl w-10 h-10" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900">Client Name {item}</h3>
                  <p className="text-sm text-gray-500">Joined today</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboardPage;