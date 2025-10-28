import React from 'react';

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const cap = (s = '') => s.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');

  return (
    <div className="flex flex-wrap gap-3 justify-center" role="tablist" aria-label="Filter by category">
      {categories.map(category => {
        const active = selectedCategory === category;
        return (
          <button
            key={category}
            type="button"
            role="tab"
            aria-selected={active}
            aria-pressed={active}
            onClick={() => onSelectCategory(category)}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
              active
                ? 'bg-[#C9A959] text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-[#C9A959] hover:text-[#C9A959] hover:scale-105'
            }`}
          >
            {cap(category)}
          </button>
        );
      })}
    </div>
  );
}
