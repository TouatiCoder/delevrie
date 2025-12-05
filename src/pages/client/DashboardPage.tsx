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
    let statusFr = status; // Default to English if not found, but we'll translate common ones
    let bgColor = 'bg-gray-100 text-gray-800';

    if (status === 'Delivered') {
      statusFr = 'Livrée';
      bgColor = 'bg-green-100 text-green-800';
    } else if (status === 'In Transit') {
      statusFr = 'En Transit';
      bgColor = 'bg-blue-100 text-blue-800';
    } else if (status === 'Pending') {
      statusFr = 'En Attente';
      bgColor = 'bg-yellow-110 text-yellow-800';
    } else if (status === 'Cancelled') {
      statusFr = 'Annulée';
      bgColor = 'bg-red-100 text-red-800';
    }
    
    return (
      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${bgColor}`}>
        {statusFr}
      </span>
    );
  };

  // Note: dashboardStats from dummyData should also be manually translated in the data file 
  // or adjusted here for professional deployment. We will use translated titles here.
  const translatedDashboardStats = dashboardStats.map(stat => {
    let titleFr = stat.title;
    if (stat.title === 'Total Orders') titleFr = 'Total des Commandes';
    if (stat.title === 'Pending Orders') titleFr = 'Commandes en Attente';
    if (stat.title === 'Loyalty Points') titleFr = 'Points de Fidélité';
    if (stat.title === 'Saved Addresses') titleFr = 'Adresses Enregistrées';
    return { ...stat, title: titleFr };
  });

  return (
    <div className="dashboard">
      <div className="mb-6">
        {/* Translation: Welcome back, John! -> Bienvenue, John ! */}
        <h1 className="text-2xl font-bold text-gray-900">Bienvenue, John !</h1>
        {/* Translation: Here's what's happening with your orders today. */}
        <p className="text-gray-600 mt-1">Voici le statut de vos commandes aujourd'hui.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {translatedDashboardStats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            icon={renderIcon(stat.icon)}
            // Using a standard brand color from the design system for consistency
            color="bg-dark" // Assuming 'dark' is a primary background color
          />
        ))}
      </div>

      {/* Recent Orders */}
      <div className="card p-6 mb-8" role="region" aria-labelledby="recent-orders-heading">
        <div className="flex justify-between items-center mb-6">
          {/* Translation: Recent Orders -> Dernières Commandes */}
          <h2 id="recent-orders-heading" className="text-lg font-semibold text-gray-900">Dernières Commandes</h2>
          {/* Translation: View All Orders -> Voir Toutes les Commandes */}
          <button className="text-primary hover:text-red-700 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50 rounded-md px-2 py-1">
            Voir Toutes les Commandes
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {/* Translation: Order ID -> ID Commande */}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID Commande
                </th>
                {/* Translation: Date -> Date */}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                {/* Translation: Recipient -> Destinataire */}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Destinataire
                </th>
                {/* Translation: Amount -> Montant */}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Montant
                </th>
                {/* Translation: Status -> Statut */}
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Statut
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
          {/* Translation: Quick Actions -> Actions Rapides */}
          <h3 id="quick-actions-heading" className="text-lg font-semibold text-gray-900 mb-4">Actions Rapides</h3>
          <div className="space-y-4">
            {/* Translation: Create New Order -> Créer une Nouvelle Commande */}
            <button className="w-full btn btn-primary">
              Créer une Nouvelle Commande
            </button>
            {/* Translation: Track Existing Order -> Suivre une Commande */}
            <button className="w-full btn btn-secondary">
              Suivre une Commande
            </button>
          </div>
        </div>
        
        <div className="card p-6 md:col-span-2" role="region" aria-labelledby="saved-addresses-heading">
          {/* Translation: Saved Addresses -> Adresses Enregistrées */}
          <h3 id="saved-addresses-heading" className="text-lg font-semibold text-gray-900 mb-4">Adresses Enregistrées</h3>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                {/* Translation: Home -> Domicile */}
                <p className="font-medium text-gray-900">Domicile</p>
                <p className="text-sm text-gray-500">123 Main Street, Paris, France</p>
              </div>
              {/* Translation: Use -> Utiliser */}
              <button className="text-primary hover:text-red-700 text-sm">
                Utiliser
              </button>
            </div>
            <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
              <div>
                {/* Translation: Office -> Bureau */}
                <p className="font-medium text-gray-900">Bureau</p>
                <p className="text-sm text-gray-500">456 Business Ave, Lyon, France</p>
              </div>
              {/* Translation: Use -> Utiliser */}
              <button className="text-primary hover:text-red-700 text-sm">
                Utiliser
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientDashboardPage;