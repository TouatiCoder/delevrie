import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface VisitorLayoutProps {
  children: React.ReactNode;
}

const VisitorLayout: React.FC<VisitorLayoutProps> = ({ children }) => {
  return (
    <div className="visitor-layout min-h-screen flex flex-col" role="main">
      <Header />
      <main className="flex-grow pt-20" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default VisitorLayout;