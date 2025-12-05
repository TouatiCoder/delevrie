import React from 'react';
import { usePricing } from '../../context/PricingContext';
import CitiesTable from '../../components/admin/CitiesTable';

const CitiesPage: React.FC = () => {
  const { cities } = usePricing();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Cities Management</h1>
        <p className="text-gray-600 mt-2">
          Manage delivery prices for different cities. Add new cities, update prices, or remove existing ones.
        </p>
      </div>
      
      <div className="card p-6">
        <CitiesTable cities={cities} />
      </div>
    </div>
  );
};

export default CitiesPage;