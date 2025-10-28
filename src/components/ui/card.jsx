import React from "react";

/** 
 * A simple reusable Card wrapper 
 */
export function Card({ children, className = "" }) {
  return (
    <div
      className={`rounded-3xl bg-white border border-gray-100 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

/** 
 * CardContent — inner container for spacing and layout 
 */
export function CardContent({ children, className = "" }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
