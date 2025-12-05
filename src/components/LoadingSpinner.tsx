import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'white';
  message?: string;
  fullScreen?: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ 
  size = 'md', 
  color = 'primary',
  message,
  fullScreen = false
}) => {
  // Size classes
  const sizeClasses = {
    sm: 'h-4 w-4',
    md: 'h-8 w-8',
    lg: 'h-12 w-12'
  };

  // Color classes
  const colorClasses = {
    primary: 'border-blue-500',
    secondary: 'border-orange-500',
    white: 'border-white'
  };

  const spinner = (
    <div className="flex flex-col items-center justify-center" role="status" aria-label={message || "Loading"}>
      <div 
        className={`animate-spin rounded-full border-t-2 border-b-2 ${sizeClasses[size]} ${colorClasses[color]}`}
        aria-hidden="true"
      ></div>
      {message && (
        <p className={`mt-2 text-${size === 'sm' ? 'xs' : size === 'lg' ? 'lg' : 'sm'} text-gray-600`}>
          {message}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default LoadingSpinner;