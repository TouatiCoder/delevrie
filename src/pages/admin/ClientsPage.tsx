import React from 'react';
import DataTable from '../../components/admin/DataTable';
import { clientsData } from '../../data/admin/dummyData';

const ClientsPage: React.FC = () => {
  const columns = [
    { key: 'id', title: 'Client ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'phone', title: 'Phone', sortable: true },
    { key: 'orders', title: 'Orders', sortable: true },
    { key: 'joined', title: 'Joined', sortable: true },
  ];

  return (
    <div className="clients-page">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Clients Management</h1>
        <p className="text-gray-600 mt-1">View and manage all registered clients</p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div>
          <button className="btn btn-primary">
            Add New Client
          </button>
        </div>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Time Periods</option>
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
          </select>
        </div>
      </div>

      <DataTable 
        columns={columns} 
        data={clientsData} 
        searchable={true} 
        pagination={true} 
      />
    </div>
  );
};

export default ClientsPage;