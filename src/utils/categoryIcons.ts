// Map categories to relevant emojis/icons
export const getCategoryEmoji = (category: string): string => {
  const mapping: { [key: string]: string } = {
    // Breakfast categories
    'Fried Rice Specialties': '🍚',
    'King\'s Favorites': '👑',
    'Eggs N\' Stuff': '🍳',
    'Off The Griddle': '🥞',
    'Breakfast Minis': '🥐',
    'Breakfast Sides': '🥓',
    
    // Starters & Appetizers
    'Chesa & Pupus': '🍱',
    'Fresh Salads': '🥗',
    
    // Main courses
    'Burgers & Specialty Sandwiches': '🍔',
    'Great Meals Anytime': '🍖',
    'Hot Poultry & Seafood': '🦐',
    'Pasta & Noodles': '🍝',
    'Local Favorites': '⭐',
    'Fiesta Food & Platters': '🎉',
    
    // Others
    'Mini Meals': '🍽️',
    'Desserts': '🍰',
    'Beverages': '🥤'
  };

  return mapping[category] || '🍴';
};