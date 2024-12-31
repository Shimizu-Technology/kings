import { useState, useEffect } from 'react';
import { MENU_DATA } from '../data/menuData';

export function useScrollSpy() {
  const [activeCategory, setActiveCategory] = useState(Object.keys(MENU_DATA)[0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = Object.keys(MENU_DATA).map(category => ({
        id: category,
        offset: document.getElementById(category.toLowerCase())?.offsetTop || 0
      }));

      const scrollPosition = window.scrollY + 100;

      const currentSection = sections.reduce((acc, section) => {
        return scrollPosition >= section.offset ? section.id : acc;
      }, sections[0].id);

      setActiveCategory(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return activeCategory;
}