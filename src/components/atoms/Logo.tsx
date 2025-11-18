import { Cross } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
  showText?: boolean;
  textClassName?: string;
}

export function Logo({ className, showText = true, textClassName }: LogoProps) {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Cross className="text-[#8B4513] text-2xl" />
      {showText && (
        <span className={cn('text-xl font-serif font-semibold text-[#2F4F4F]', textClassName)}>
          Sacramento Ação Pastoral
        </span>
      )}
    </div>
  );
}
