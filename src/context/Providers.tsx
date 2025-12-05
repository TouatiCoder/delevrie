import React from 'react';
import { AuthProvider } from './AuthContext';
import { PricingProvider } from './PricingContext';

interface ProvidersProps {
  children: React.ReactNode;
}

const Providers: React.FC<ProvidersProps> = ({ children }) => {
  return (
    <AuthProvider>
      <PricingProvider>
        {children}
      </PricingProvider>
    </AuthProvider>
  );
};

export default Providers;