import React from "react";

export function Button({ children, onClick, className = "", type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`px-6 py-3 rounded-full font-medium transition-all duration-300 bg-[#C9A959] text-white hover:bg-[#b89640] hover:scale-105 shadow-md ${className}`}
    >
      {children}
    </button>
  );
}
