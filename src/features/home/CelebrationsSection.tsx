import { SectionTitle } from '@/components/atoms/SectionTitle';
import { CelebrationCard } from '@/components/molecules/CelebrationCard';
import { CELEBRATIONS } from '@/lib/constants/celebrations';

export function CelebrationsSection() {
  return (
    <section id="celebracoes" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Celebrações Sacramentais"
          subtitle="Participe das celebrações que fortalecem nossa comunidade de fé"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {CELEBRATIONS.map((celebration) => (
            <CelebrationCard
              key={celebration.id}
              nome={celebration.nome}
              descricao={celebration.descricao}
              icone={celebration.icone}
              action={celebration.action}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
