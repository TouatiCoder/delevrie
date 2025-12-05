import React from 'react';
import DataTable from '../../components/admin/DataTable';
import { ordersData } from '../../data/admin/dummyData';

const OrdersPage: React.FC = () => {
  const columns = [
    { key: 'id', title: 'Order ID', sortable: true },
    { key: 'client', title: 'Client', sortable: true },
    { key: 'livreur', title: 'Livreur', sortable: true },
    { key: 'date', title: 'Date', sortable: true },
    { key: 'amount', title: 'Amount', sortable: true },
    { key: 'status', title: 'Status', sortable: true },
    { key: 'city', title: 'City', sortable: true },
  ];

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

  // Process data to include status badges
  const processedData = ordersData.map(order => ({
    ...order,
    status: renderStatusBadge(order.status)
  }));

  return (
    <div className="orders-page">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Orders Management</h1>
        <p className="text-gray-600 mt-1">View and manage all delivery orders</p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div>
          <button className="btn btn-primary">
            Export Data
          </button>
        </div>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Statuses</option>
            <option>Delivered</option>
            <option>In Transit</option>
            <option>Pending</option>
            <option>Cancelled</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Cities</option>
            <option>Paris</option>
            <option>Lyon</option>
            <option>Marseille</option>
          </select>
        </div>
      </div>

      <DataTable 
        columns={columns} 
        data={processedData} 
        searchable={true} 
        pagination={true} 
      />
    </div>
  );
};

export default OrdersPage;