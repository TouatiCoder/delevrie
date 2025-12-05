import React from 'react';
import DataTable from '../../components/admin/DataTable';
import { livreursData } from '../../data/admin/dummyData';

const LivreursPage: React.FC = () => {
  const columns = [
    { key: 'id', title: 'Livreur ID', sortable: true },
    { key: 'name', title: 'Name', sortable: true },
    { key: 'email', title: 'Email', sortable: true },
    { key: 'phone', title: 'Phone', sortable: true },
    { key: 'deliveries', title: 'Deliveries', sortable: true },
    { key: 'rating', title: 'Rating', sortable: true },
    { key: 'status', title: 'Status', sortable: true },
  ];

  // Function to render status badges
  const renderStatusBadge = (status: string) => {
    const bgColor = status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800';
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
        {status}
      </span>
    );
  };

  // Function to render star ratings
  const renderRating = (rating: number) => {
    return (
      <div className="flex items-center">
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <svg 
              key={i} 
              className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'}`} 
              fill="currentColor" 
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="ml-1 text-sm text-gray-600">{rating}</span>
      </div>
    );
  };

  // Process data to include status badges and ratings
  const processedData = livreursData.map(livreur => ({
    ...livreur,
    status: renderStatusBadge(livreur.status),
    rating: renderRating(livreur.rating)
  }));

  return (
    <div className="livreurs-page">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Livreurs Management</h1>
        <p className="text-gray-600 mt-1">View and manage all delivery personnel</p>
      </div>

      <div className="mb-6 flex justify-between items-center">
        <div>
          <button className="btn btn-primary">
            Add New Livreur
          </button>
        </div>
        <div className="flex space-x-2">
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
          <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500">
            <option>Top Rated</option>
            <option>Newest</option>
            <option>Most Deliveries</option>
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

export default LivreursPage;