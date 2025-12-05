import React, { forwardRef } from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  success?: boolean;
  icon?: React.ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, success, icon, className = '', ...props }, ref) => {
    // Base classes
    const baseClasses = 'w-full px-3 py-2 border rounded-md shadow-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-opacity-50';
    
    // State classes
    const stateClasses = error 
      ? 'border-red-300 focus:border-red-500 focus:ring-red-200' 
      : success 
      ? 'border-green-300 focus:border-green-500 focus:ring-green-200' 
      : 'border-gray-300 focus:border-blue-500 focus:ring-blue-200';
    
    // Animation classes
    const animationClasses = 'transform focus:scale-[1.02] hover:shadow-md';
    
    // Combined classes
    const classes = `${baseClasses} ${stateClasses} ${animationClasses} ${className}`;
    
    return (
      <div className="relative">
        {icon && (
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          className={`${classes} ${icon ? 'pl-10' : ''}`}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg 
              className="h-5 w-5 text-red-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}
        {success && !error && (
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <svg 
              className="h-5 w-5 text-green-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path 
                fillRule="evenodd" 
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" 
                clipRule="evenodd" 
              />
            </svg>
          </div>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;