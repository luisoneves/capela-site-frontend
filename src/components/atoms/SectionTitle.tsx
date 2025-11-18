import { cn } from '@/lib/utils';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
  light?: boolean;
}

export function SectionTitle({ title, subtitle, className, light = false }: SectionTitleProps) {
  return (
    <div className={cn('text-center mb-12', className)}>
      <h2 className={cn(
        'text-3xl md:text-4xl font-serif font-bold mb-4',
        light ? 'text-white' : 'text-[#2F4F4F]'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'max-w-2xl mx-auto',
          light ? 'opacity-80' : 'text-gray-600'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
