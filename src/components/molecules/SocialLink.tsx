import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface SocialLinkProps {
  icon: LucideIcon;
  href: string;
  className?: string;
}

export function SocialLink({ icon: IconComponent, href, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        'w-10 h-10 bg-[#8B4513] text-white rounded-full flex items-center justify-center hover:bg-[#6B3410] transition-colors duration-300',
        className
      )}
      target="_blank"
      rel="noopener noreferrer"
    >
      <IconComponent size={18} />
    </a>
  );
}
