import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ContactInfoProps {
  icon: LucideIcon;
  text: string;
  className?: string;
}

export function ContactInfo({ icon: IconComponent, text, className }: ContactInfoProps) {
  return (
    <div className={cn('flex items-center space-x-3', className)}>
      <IconComponent className="text-[#8B4513]" size={20} />
      <span>{text}</span>
    </div>
  );
}
