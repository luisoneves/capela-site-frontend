'use client';

import { cn } from '@/lib/utils';
import { scrollToSection } from '@/lib/utils/scroll';

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export function NavLink({ href, children, className, onClick }: NavLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const sectionId = href.replace('#', '');
    scrollToSection(sectionId);
    onClick?.();
  };

  return (
    <a
      href={href}
      onClick={handleClick}
      className={cn(
        'text-[#2F4F4F] hover:text-[#8B4513] transition-colors duration-300 font-medium',
        className
      )}
    >
      {children}
    </a>
  );
}
