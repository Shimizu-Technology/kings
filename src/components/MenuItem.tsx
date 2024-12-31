import React, { useState } from 'react';

interface MenuItemProps {
  name: string;
  description?: string;
  price: string;
}

export default function MenuItem({ name, description, price }: MenuItemProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="menu-item bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 p-4"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-800 mb-1 group-hover:text-purple-700 transition-colors">
            {name}
          </h3>
          {description && (
            <p className={`text-gray-600 text-sm transition-all duration-300 ${
              isHovered ? 'max-h-32' : 'max-h-16 overflow-hidden'
            }`}>
              {description}
            </p>
          )}
        </div>
        <span className="text-lg font-bold text-purple-700 ml-4 bg-purple-50 px-3 py-1 rounded-full">
          {price}
        </span>
      </div>
    </div>
  );
}