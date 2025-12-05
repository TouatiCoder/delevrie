import React from 'react';
import StatCard from '../../components/livreur/StatCard';
import { dashboardStats, livreurOrders } from '../../data/livreur/dummyData';

const LivreurDashboardPage: React.FC = () => {
  // Convert icon strings to SVG components
  const renderIcon = (path: string) => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  // Function to render status badges
  const renderStatusBadge = (status: string) => {
    let bgColor = 'bg-gray-100 text-gray-800';
    if (status === 'pending') bgColor = 'bg-yellow-100 text-yellow-800';
    if (status === 'en route') bgColor = 'bg-blue-100 text-blue-800';
    if (status === 'livrée') bgColor = 'bg-green-100 text-green-800';
    if (status === 'annulée') bgColor = 'bg-red-100 text-red-800';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="dashboard">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Welcome back, Michael!</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your deliveries today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6">
        {dashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={renderIcon(stat.icon)}
            color="bg-blue-500"
          />
        ))}
      </div>

      {/* Recent Orders */}
      <div className="card p-4 md:p-6 mb-6" role="region" aria-labelledby="recent-deliveries-heading">
        <div className="flex justify-between items-center mb-4 md:mb-6">
          <h2 id="recent-deliveries-heading" className="text-lg font-semibold text-gray-900">Recent Deliveries</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client
                </th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destination
                </th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {livreurOrders.slice(0, 3).map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.client}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500 max-w-xs truncate">
                    {order.destination}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                    {renderStatusBadge(order.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div className="card p-4 md:p-6" role="region" aria-labelledby="quick-actions-heading">
          <h3 id="quick-actions-heading" className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-3">
            <button className="w-full btn btn-primary py-2 px-4 text-sm">
              Start Delivery
            </button>
            <button className="w-full btn btn-secondary py-2 px-4 text-sm">
              Mark as Delivered
            </button>
          </div>
        </div>
        
        <div className="card p-4 md:p-6" role="region" aria-labelledby="vehicle-info-heading">
          <h3 id="vehicle-info-heading" className="text-lg font-semibold text-gray-900 mb-4">Vehicle Info</h3>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Current Vehicle</span>
              <span className="font-medium">Van - ABC-123-EF</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Last Maintenance</span>
              <span className="font-medium">2023-05-15</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Next Checkup</span>
              <span className="font-medium text-blue-600">2023-08-15</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LivreurDashboardPage;