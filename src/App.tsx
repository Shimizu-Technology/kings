import React, { useState } from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import BackToTop from './components/BackToTop';
import { useScrollSpy } from './hooks/useScrollSpy';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeCategory = useScrollSpy();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <MainContent
        activeCategory={activeCategory}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <BackToTop />
    </div>
  );
}