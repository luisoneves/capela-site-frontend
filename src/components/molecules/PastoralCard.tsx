import { HandHeart, Music, BookOpen, Users, LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const iconMap: Record<string, LucideIcon> = {
  HandHeart,
  Music,
  BookOpen,
  Users,
};

interface PastoralCardProps {
  nome: string;
  descricao: string;
  icone: string;
  className?: string;
}

export function PastoralCard({ nome, descricao, icone, className }: PastoralCardProps) {
  const IconComponent = iconMap[icone] || HandHeart;

  return (
    <div className={cn(
      'text-center p-6 bg-[#8B4513]/20 rounded-lg hover:bg-[#8B4513]/30 transition-colors duration-300',
      className
    )}>
      <IconComponent className="text-[#DAA520] mx-auto mb-4" size={32} />
      <h3 className="text-lg font-semibold mb-2">{nome}</h3>
      <p className="opacity-80 text-sm">{descricao}</p>
    </div>
  );
}
