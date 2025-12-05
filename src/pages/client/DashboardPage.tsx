import React from 'react';
import StatCard from '../../components/client/StatCard';
import { dashboardStats, clientOrders } from '../../data/client/dummyData';

const ClientDashboardPage: React.FC = () => {
  // Convert icon strings to SVG components
  const renderIcon = (path: string) => (
    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={path} />
    </svg>
  );

  // Function to render status badges
  const renderStatusBadge = (status: string) => {
    let bgColor = 'bg-gray-100 text-gray-800';
    if (status === 'Delivered') bgColor = 'bg-green-100 text-green-800';
    if (status === 'In Transit') bgColor = 'bg-blue-100 text-blue-800';
    if (status === 'Pending') bgColor = 'bg-yellow-100 text-yellow-800';
    if (status === 'Cancelled') bgColor = 'bg-red-100 text-red-800';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
        {status}
      </span>
    );
  };

  return (
    <div className="dashboard">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, John!</h1>
        <p className="text-gray-600 mt-1">Here's what's happening with your orders today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
      <div className="card p-6 mb-8" role="region" aria-labelledby="recent-orders-heading">
        <div className="flex justify-between items-center mb-6">
          <h2 id="recent-orders-heading" className="text-lg font-semibold text-gray-900">Recent Orders</h2>
          <button className="text-blue-600 hover:text-blue-800 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md px-2 py-1">
            View All Orders
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Order ID
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Recipient
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {clientOrders.slice(0, 3).map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.id}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.recipient}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {order.amount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {renderStatusBadge(order.status)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card p-6" role="region" aria-labelledby="quick-actions-heading">
          <h3 id="quick-actions-heading" className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
          <div className="space-y-4">
            <button className="w-full btn btn-primary">
              Create New Order
            </button>
            <button className="w-full btn btn-secondary">
              Track Existing Order
            </button>
          </div>
        </div>
        
        <div className="card p-6 md:col-span-2" role="region" aria-labelledby="saved-addresses-heading">
          <h3 id="saved-addresses-heading" className="text-lg font-semibold text-gray-900 mb-4">Saved Addresses</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Home</p>
                <p className="text-sm text-gray-500">123 Main Street, Paris, France</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Use
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                <p className="font-medium text-gray-900">Office</p>
                <p className="text-sm text-gray-500">456 Business Ave, Lyon, France</p>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm">
                Use
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardPage;