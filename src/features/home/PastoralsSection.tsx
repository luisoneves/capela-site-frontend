import { SectionTitle } from '@/components/atoms/SectionTitle';
import { PastoralCard } from '@/components/molecules/PastoralCard';
import { PASTORALS } from '@/lib/constants/pastorals';

export function PastoralsSection() {
  return (
    <section id="pastorais" className="py-16 bg-[#2F4F4F] text-white">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Nossas Pastorais"
          subtitle="Grupos de ação pastoral que servem a comunidade com amor e dedicação"
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PASTORALS.map((pastoral) => (
            <PastoralCard
              key={pastoral.id}
              nome={pastoral.nome}
              descricao={pastoral.descricao}
              icone={pastoral.icone}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
