import React from "react";

export function Alert({ children, className = "" }) {
  return (
    <div
      className={`p-4 rounded-xl border border-[#C9A959]/30 bg-[#C9A959]/5 text-[#111] ${className}`}
    >
      {children}
    </div>
  );
}

export function AlertDescription({ children, className = "" }) {
  return <p className={`text-sm leading-relaxed ${className}`}>{children}</p>;
}