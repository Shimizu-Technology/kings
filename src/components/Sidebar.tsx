import React from 'react';
import { Menu } from 'lucide-react';
import { getCategoryEmoji } from '../utils/categoryIcons';

interface SidebarProps {
  categories: string[];
  activeCategory: string;
  onCategoryClick: (category: string) => void;
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export default function Sidebar({
  categories,
  activeCategory,
  onCategoryClick,
  isMobileMenuOpen,
  setIsMobileMenuOpen,
}: SidebarProps) {
  return (
    <>
      <button
        className="fixed top-4 right-4 z-50 p-2 rounded-lg bg-purple-700 text-white lg:hidden"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
      >
        <Menu size={24} />
      </button>

      <nav
        className={`fixed top-0 right-0 h-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-40
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}
          lg:w-56 lg:sticky lg:top-4 lg:h-[calc(100vh-2rem)]`}
      >
        <div className="p-4">
          <h2 className="text-xl font-bold text-purple-800 mb-4 flex items-center gap-2">
            <span>📖</span> Menu
          </h2>
          <ul className="space-y-1">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => {
                    onCategoryClick(category);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center gap-2
                    ${
                      activeCategory === category
                        ? 'bg-purple-700 text-white shadow-md'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`}
                >
                  <span>{getCategoryEmoji(category)}</span>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}