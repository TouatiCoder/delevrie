import React, { useState } from 'react';
import { livreurOrders } from '../../data/livreur/dummyData';

const LivreurOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState(livreurOrders);

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

  // Function to update order status
  const updateOrderStatus = (orderId: string, newStatus: string) => {
    setOrders(prevOrders => 
      prevOrders.map(order => 
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  return (
    <div className="orders-page">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">My Deliveries</h1>
        <p className="text-gray-600 mt-1">Manage your delivery orders and update their status</p>
      </div>

      <div className="mb-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <button className="btn btn-primary">
            Export Data
          </button>
        </div>
        <div className="flex flex-wrap gap-2">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Statuses</option>
            <option>Pending</option>
            <option>En Route</option>
            <option>Livrée</option>
            <option>Annulée</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Time</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>

      <div className="card">
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
                  Date
                </th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th scope="col" className="px-4 md:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {orders.map((order, index) => (
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
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {order.date}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                    {renderStatusBadge(order.status)}
                  </td>
                  <td className="px-4 md:px-6 py-4 whitespace-nowrap text-sm">
                    {order.status !== 'livrée' && order.status !== 'annulée' && (
                      <div className="flex flex-wrap gap-2">
                        {order.status === 'pending' && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'en route')}
                            className="text-xs bg-blue-100 text-blue-800 hover:bg-blue-200 px-2 py-1 rounded"
                          >
                            Start Delivery
                          </button>
                        )}
                        {(order.status === 'pending' || order.status === 'en route') && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'livrée')}
                            className="text-xs bg-green-100 text-green-800 hover:bg-green-200 px-2 py-1 rounded"
                          >
                            Mark Delivered
                          </button>
                        )}
                        {(order.status === 'pending' || order.status === 'en route') && (
                          <button
                            onClick={() => updateOrderStatus(order.id, 'annulée')}
                            className="text-xs bg-red-100 text-red-800 hover:bg-red-200 px-2 py-1 rounded"
                          >
                            Cancel
                          </button>
                        )}
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LivreurOrdersPage;