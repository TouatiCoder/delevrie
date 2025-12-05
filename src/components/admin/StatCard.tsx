import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  change?: string;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, color }) => {
  // Determine if the change is positive or negative for accessibility
  const isPositive = change && parseFloat(change) >= 0;
  
  return (
    <div className="card p-6 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-2xl font-semibold text-gray-900 mt-1" aria-live="polite">{value}</p>
          {change && (
            <p 
              className={`text-sm mt-1 flex items-center ${isPositive ? 'text-green-600' : 'text-red-600'}`}
              aria-label={`${isPositive ? 'Increase' : 'Decrease'} of ${Math.abs(parseFloat(change))} percent`}
            >
              <svg 
                className={`w-4 h-4 mr-1 ${isPositive ? 'rotate-0' : 'rotate-180'}`} 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
              {Math.abs(parseFloat(change))}%
            </p>
          )}
        </div>
        <div className={`p-3 rounded-full ${color} transition-all duration-300`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;