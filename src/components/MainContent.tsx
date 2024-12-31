import React from 'react';
import MenuSection from './MenuSection';
import Sidebar from './Sidebar';
import { MENU_DATA } from '../data/menuData';

interface MainContentProps {
  activeCategory: string;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function MainContent({ 
  activeCategory, 
  isMobileMenuOpen, 
  setIsMobileMenuOpen 
}: MainContentProps) {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <div className="lg:grid lg:grid-cols-[1fr,auto] lg:gap-8">
        <div className="space-y-12">
          {Object.entries(MENU_DATA).map(([category, items]) => (
            <MenuSection
              key={category}
              category={category}
              items={items}
            />
          ))}
        </div>

        <Sidebar
          categories={Object.keys(MENU_DATA)}
          activeCategory={activeCategory}
          onCategoryClick={(category) => {
            document
              .getElementById(category.toLowerCase())
              ?.scrollIntoView({ behavior: 'smooth' });
          }}
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      </div>
    </main>
  );
}