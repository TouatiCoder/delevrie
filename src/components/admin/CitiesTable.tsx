import React, { useState } from 'react';
import type { City } from '../../data/cities/citiesData';
import { usePricing } from '../../context/PricingContext';
import CityForm from './CityForm';

interface CitiesTableProps {
  cities: City[];
}

const CitiesTable: React.FC<CitiesTableProps> = ({ cities }) => {
  const { deleteCity } = usePricing();
  const [editingCity, setEditingCity] = useState<City | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleEdit = (city: City) => {
    setEditingCity(city);
  };

  const handleDelete = (id: number) => {
    if (window.confirm('Are you sure you want to delete this city?')) {
      deleteCity(id);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-gray-900">Manage Cities</h2>
        <button
          onClick={() => setShowAddForm(true)}
          className="btn btn-primary"
        >
          Add New City
        </button>
      </div>

      {showAddForm && (
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Add New City</h3>
          <CityForm onCancel={() => setShowAddForm(false)} />
        </div>
      )}

      {editingCity && (
        <div className="card p-6">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Edit {editingCity.name}</h3>
          <CityForm city={editingCity} onCancel={() => setEditingCity(null)} />
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Price (€)
              </th>
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {cities.map((city) => (
              <tr key={city.id} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">{city.name}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-500">{city.country}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm font-medium text-gray-900">€{city.price.toFixed(2)}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <button
                    onClick={() => handleEdit(city)}
                    className="text-blue-600 hover:text-blue-900 mr-4"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(city.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CitiesTable;