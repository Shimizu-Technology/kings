import React from 'react';
import MenuItem from './MenuItem';
import { getCategoryEmoji } from '../utils/categoryIcons';

interface MenuSectionProps {
  category: string;
  items: {
    name: string;
    description?: string;
    price: string;
  }[];
}

export default function MenuSection({ category, items }: MenuSectionProps) {
  return (
    <section id={category.toLowerCase()} className="scroll-mt-8">
      <div className="section-divider" />
      <h2 className="text-3xl font-bold text-purple-800 mb-6 flex items-center gap-3">
        <span className="text-4xl">{getCategoryEmoji(category)}</span>
        {category}
      </h2>
      <div className="grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <MenuItem
            key={`${category}-${index}-${item.name}`}
            {...item}
          />
        ))}
      </div>
    </section>
  );
}