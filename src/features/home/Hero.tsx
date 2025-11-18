import { Church } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-r from-[#2F4F4F] to-[#8B4513] text-white py-20"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
            Sacramento Ação Pastoral
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Celebrações Sacramentais e Ação Pastoral para Fortalecer sua Fé
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#DAA520] text-[#2F4F4F] hover:bg-[#C89518] font-semibold transform hover:scale-105 transition-all duration-300"
            >
              Participe das Celebrações
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-[#2F4F4F] font-semibold transition-all duration-300"
            >
              <Church className="mr-2" size={20} />
              Conheça Nossas Pastorais
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#F5F5DC] to-transparent" />
    </section>
  );
}
