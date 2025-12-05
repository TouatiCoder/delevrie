import React, { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import LoadingSpinner from './LoadingSpinner';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: string;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children, requiredRole }) => {
  const { user } = useAuth();
  const [isLoading, setIsLoading] = useState(true);

  // Simulate async check for authentication state
  useEffect(() => {
    // In a real app, this would be an API call to verify the user's auth state
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  // Show loading state while checking auth
  if (isLoading) {
    return <LoadingSpinner fullScreen message="Verifying your credentials..." />;
  }

  // If user is not authenticated, redirect to appropriate login page
  if (!user) {
    switch (requiredRole) {
      case 'admin':
        return <Navigate to="/admin/login" replace />;
      case 'client':
        return <Navigate to="/client/login" replace />;
      case 'livreur':
        return <Navigate to="/livreur/login" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // If user doesn't have the required role, redirect to their login page
  if (user.role !== requiredRole) {
    switch (user.role) {
      case 'admin':
        return <Navigate to="/admin" replace />;
      case 'client':
        return <Navigate to="/client" replace />;
      case 'livreur':
        return <Navigate to="/livreur" replace />;
      default:
        return <Navigate to="/" replace />;
    }
  }

  // User is authenticated and has the required role
  return <>{children}</>;
};

export default ProtectedRoute;