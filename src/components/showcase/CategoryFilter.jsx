import React from "react";

export default function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4">
      {categories.map((cat) => {
        const isSelected = cat === selectedCategory;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm md:text-base transition-all duration-200 shadow-sm
              ${
                isSelected
                  ? "bg-[#E07856] text-white shadow-md scale-105"
                  : "bg-white text-[#1A1A2E] border border-gray-200 hover:bg-[#F5F5F5] hover:shadow-md"
              }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}
