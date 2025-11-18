import { CelebrationsSection } from '@/features/home/CelebrationsSection';
import { ContactSection } from '@/features/home/ContactSection';
import { Hero } from '@/features/home/Hero';
import { PastoralsSection } from '@/features/home/PastoralsSection';

export default function HomePage() {
  return (
    <>
      {/* Hero Section - Página inicial */}
      <Hero />

      {/* Seção de Celebrações (Ofícios Litúrgicos) */}
      <CelebrationsSection />

      {/* Seção de Pastorais */}
      <PastoralsSection />

      {/* Seção de Contato */}
      <ContactSection />
    </>
  );
}
