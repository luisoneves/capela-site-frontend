import { ReactNode } from 'react';

// Este é o nosso componente Card reutilizável.
// Ele não sabe nada sobre "Serviços", ele só sabe como desenhar uma caixa.
export function Card({ children, className }: { children: ReactNode, className?: string }) {
  return (
    <div className={`bg-white p-6 rounded-lg shadow-md border border-gray-200 ${className}`}>
      {children}
    </div>
  );
}
