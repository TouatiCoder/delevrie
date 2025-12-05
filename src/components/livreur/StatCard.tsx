import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className="card p-4 md:p-6 transition-all duration-300 hover:shadow-soft-lg hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="text-xl md:text-2xl font-semibold text-gray-900 mt-1" aria-live="polite">{value}</p>
        </div>
        <div className={`p-3 rounded-full ${color} transition-all duration-300`}>
          {icon}
        </div>
      </div>
    </div>
  );
};

export default StatCard;