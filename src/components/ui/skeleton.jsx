import React from "react";

export function Skeleton({ className = "" }) {
  return (
    <div
      className={`animate-pulse bg-gray-100 rounded-md ${className}`}
      role="status"
      aria-label="Loading content"
    />
  );
}
