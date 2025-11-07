import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const capitalizeCategory = (category) => {
    return category
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center">
      {categories.map(category => (
        <button
          key={category}
          onClick={() => onSelectCategory(category)}
          className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            selectedCategory === category
              ? 'bg-[#C9A959] text-white shadow-lg scale-105'
              : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C9A959] hover:text-[#C9A959] hover:scale-105'
          }`}
        >
          {capitalizeCategory(category)}
        </button>
      ))}
    </div>
  );
}