import { ReactNode } from 'react';

export function H2({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <h2 className={`text-2xl font-semibold text-blue-700 ${className}`}>
      {children}
    </h2>
  );
}

export function P({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <p className={`mt-2 text-gray-800 ${className}`}>
      {children}
    </p>
  );
}
