import React from 'react';
import { earningsData } from '../../data/livreur/dummyData';

const EarningsPage: React.FC = () => {
  // Function to render earning cards
  const renderEarningCard = (title: string, deliveries: number, earnings: number, tips: number) => (
    <div className="card p-4 md:p-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Deliveries</span>
          <span className="font-medium">{deliveries}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Earnings</span>
          <span className="font-medium">€{earnings.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tips</span>
          <span className="font-medium">€{tips.toFixed(2)}</span>
        </div>
        <div className="flex justify-between pt-2 border-t border-gray-200">
          <span className="font-medium">Total</span>
          <span className="font-bold text-lg">€{(earnings + tips).toFixed(2)}</span>
        </div>
      </div>
    </div>
  );

  return (
    <div className="earnings-page">
      <div className="mb-6">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900">Earnings Summary</h1>
        <p className="text-gray-600 mt-1">Track your earnings and performance metrics</p>
      </div>

      {/* Earnings Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6">
        {renderEarningCard(
          "Today's Earnings",
          earningsData.today.deliveries,
          earningsData.today.earnings,
          earningsData.today.tips
        )}
        {renderEarningCard(
          "This Week",
          earningsData.week.deliveries,
          earningsData.week.earnings,
          earningsData.week.tips
        )}
        {renderEarningCard(
          "This Month",
          earningsData.month.deliveries,
          earningsData.month.earnings,
          earningsData.month.tips
        )}
      </div>

      {/* Performance Metrics */}
      <div className="card p-4 md:p-6 mb-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-700">4.8</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
          <div className="bg-green-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-700">98%</div>
            <div className="text-gray-600">On-Time Delivery</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-700">45</div>
            <div className="text-gray-600">Total Deliveries</div>
          </div>
        </div>
      </div>

      {/* Earnings Chart Placeholder */}
      <div className="card p-4 md:p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">Weekly Earnings</h2>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <div className="text-center">
            <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">Earnings Chart</h3>
            <p className="mt-1 text-sm text-gray-500">Visual representation of your weekly earnings</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarningsPage;