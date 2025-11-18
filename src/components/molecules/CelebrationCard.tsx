import { BookOpen, Droplet, Heart, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  Bible: BookOpen,
  Droplet,
  Heart,
};

interface CelebrationCardProps {
  nome: string;
  descricao: string;
  icone: string;
  action: string;
  className?: string;
}

export function CelebrationCard({ nome, descricao, icone, action, className }: CelebrationCardProps) {
  const IconComponent = iconMap[icone] || BookOpen;

  return (
    <div className={cn(
      'bg-[#F5F5DC] rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300',
      className
    )}>
      <div className="text-center mb-4">
        <IconComponent className="text-[#8B4513] mx-auto mb-4" size={40} />
        <h3 className="text-xl font-serif font-semibold text-[#2F4F4F] mb-2">
          {nome}
        </h3>
        <p className="text-gray-600 mb-4">{descricao}</p>
        <button className="text-[#8B4513] hover:text-[#DAA520] font-semibold transition-colors duration-300">
          {action} →
        </button>
      </div>
    </div>
  );
}
