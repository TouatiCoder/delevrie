import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Providers from './context/Providers';
import ProtectedRoute from './components/ProtectedRoute';
import VisitorLayout from './layouts/VisitorLayout';
import AdminLayout from './layouts/AdminLayout';
import ClientLayout from './layouts/ClientLayout';
import LivreurLayout from './layouts/LivreurLayout';

// Visitor pages
import HomePage from './pages/visitor/HomePage';
import PricingPage from './pages/visitor/PricingPage';
import ServicesPage from './pages/visitor/ServicesPage';
import AboutPage from './pages/visitor/AboutPage';
import ContactPage from './pages/visitor/ContactPage';

// Admin pages
import AdminLoginPage from './pages/admin/LoginPage';
import AdminDashboardPage from './pages/admin/DashboardPage';
import CitiesPage from './pages/admin/CitiesPage';
import OrdersPage from './pages/admin/OrdersPage';
import ClientsPage from './pages/admin/ClientsPage';
import LivreursPage from './pages/admin/LivreursPage';

// Client pages
import ClientLoginPage from './pages/client/LoginPage';
import ClientDashboardPage from './pages/client/DashboardPage';
import ClientOrdersPage from './pages/client/OrdersPage';
import CreateOrderPage from './pages/client/CreateOrderPage';
import ClientProfilePage from './pages/client/ProfilePage';

// Livreur pages
import LivreurLoginPage from './pages/livreur/LoginPage';
import LivreurDashboardPage from './pages/livreur/DashboardPage';
import LivreurOrdersPage from './pages/livreur/OrdersPage';
import EarningsPage from './pages/livreur/EarningsPage';
import LivreurProfilePage from './pages/livreur/ProfilePage';

// Design System
// import DesignSystemShowcase from './pages/DesignSystemShowcase'; // This component doesn't exist

const App: React.FC = () => {
  return (
    <Providers>
      <Router>
        <Routes>
        {/* Visitor routes */}
        <Route path="/" element={<VisitorLayout><HomePage /></VisitorLayout>} />
        <Route path="/pricing" element={<VisitorLayout><PricingPage /></VisitorLayout>} />
        <Route path="/services" element={<VisitorLayout><ServicesPage /></VisitorLayout>} />
        <Route path="/about" element={<VisitorLayout><AboutPage /></VisitorLayout>} />
        <Route path="/contact" element={<VisitorLayout><ContactPage /></VisitorLayout>} />

        {/* Admin routes */}
        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route path="/admin" element={<ProtectedRoute requiredRole="admin"><AdminLayout><AdminDashboardPage /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/cities" element={<ProtectedRoute requiredRole="admin"><AdminLayout><CitiesPage /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/orders" element={<ProtectedRoute requiredRole="admin"><AdminLayout><OrdersPage /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/clients" element={<ProtectedRoute requiredRole="admin"><AdminLayout><ClientsPage /></AdminLayout></ProtectedRoute>} />
        <Route path="/admin/livreurs" element={<ProtectedRoute requiredRole="admin"><AdminLayout><LivreursPage /></AdminLayout></ProtectedRoute>} />

        {/* Client routes */}
        <Route path="/client/login" element={<ClientLoginPage />} />
        <Route path="/client" element={<ProtectedRoute requiredRole="client"><ClientLayout><ClientDashboardPage /></ClientLayout></ProtectedRoute>} />
        <Route path="/client/orders" element={<ProtectedRoute requiredRole="client"><ClientLayout><ClientOrdersPage /></ClientLayout></ProtectedRoute>} />
        <Route path="/client/create-order" element={<ProtectedRoute requiredRole="client"><ClientLayout><CreateOrderPage /></ClientLayout></ProtectedRoute>} />
        <Route path="/client/profile" element={<ProtectedRoute requiredRole="client"><ClientLayout><ClientProfilePage /></ClientLayout></ProtectedRoute>} />

        {/* Livreur routes */}
        <Route path="/livreur/login" element={<LivreurLoginPage />} />
        <Route path="/livreur" element={<ProtectedRoute requiredRole="livreur"><LivreurLayout><LivreurDashboardPage /></LivreurLayout></ProtectedRoute>} />
        <Route path="/livreur/orders" element={<ProtectedRoute requiredRole="livreur"><LivreurLayout><LivreurOrdersPage /></LivreurLayout></ProtectedRoute>} />
        <Route path="/livreur/earnings" element={<ProtectedRoute requiredRole="livreur"><LivreurLayout><EarningsPage /></LivreurLayout></ProtectedRoute>} />
        <Route path="/livreur/profile" element={<ProtectedRoute requiredRole="livreur"><LivreurLayout><LivreurProfilePage /></LivreurLayout></ProtectedRoute>} />
        
        {/* Design System */}
        {/* <Route path="/design-system" element={<DesignSystemShowcase />} /> */}
      </Routes>
    </Router>
  </Providers>
  );
};

export default App;