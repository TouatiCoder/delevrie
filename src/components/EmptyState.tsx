import React from 'react';

interface EmptyStateProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  action?: {
    label: string;
    onClick: () => void;
  };
  size?: 'sm' | 'md' | 'lg';
}

const EmptyState: React.FC<EmptyStateProps> = ({ 
  title, 
  description, 
  icon,
  action,
  size = 'md'
}) => {
  // Size classes
  const sizeClasses = {
    sm: {
      title: 'text-lg',
      description: 'text-sm',
      icon: 'h-12 w-12'
    },
    md: {
      title: 'text-xl',
      description: 'text-base',
      icon: 'h-16 w-16'
    },
    lg: {
      title: 'text-2xl',
      description: 'text-lg',
      icon: 'h-20 w-20'
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 text-center">
      {icon && (
        <div className={`mx-auto ${sizeClasses[size].icon} text-gray-400 mb-4`}>
          {icon}
        </div>
      )}
      
      <h3 className={`font-medium text-gray-900 mb-1 ${sizeClasses[size].title}`}>
        {title}
      </h3>
      
      {description && (
        <p className={`text-gray-500 mb-6 max-w-md ${sizeClasses[size].description}`}>
          {description}
        </p>
      )}
      
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          {action.label}
        </button>
      )}
    </div>
  );
};

export default EmptyState;