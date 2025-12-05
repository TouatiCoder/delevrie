// src/components/ProtectedRoute.tsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth, UserRole } from '../context/AuthContext';

interface ProtectedRouteProps {
  children: React.ReactNode;
  requiredRole: UserRole;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({
  children,
  requiredRole,
}) => {
  const { user } = useAuth();

  // Not logged in → send to correct login
  if (!user) {
    let loginPath = '/';
    if (requiredRole === 'admin') loginPath = '/admin/login';
    else if (requiredRole === 'client') loginPath = '/client/login';
    else if (requiredRole === 'livreur') loginPath = '/livreur/login';

    return <Navigate to={loginPath} replace />;
  }

  // Logged in but wrong role → send to their dashboard
  if (user.role !== requiredRole) {
    let redirectPath = '/';
    if (user.role === 'admin') redirectPath = '/admin';
    else if (user.role === 'client') redirectPath = '/client';
    else if (user.role === 'livreur') redirectPath = '/livreur';

    return <Navigate to={redirectPath} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
