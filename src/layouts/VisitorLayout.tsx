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
      {/* تم تعيين الهامش العلوي (pt) لترك مساحة للـ Header الثابت */}
      <main className="flex-grow pt-24 md:pt-28" id="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default VisitorLayout;