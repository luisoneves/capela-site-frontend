import ListaServicos from "@/components/features/ListaServicos";

export default function HomePage() {
  return (
    // O container da página agora pode ser mais simples
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-400">
        Serviços da Capela
      </h1>

      <div className="flex justify-center">
         <ListaServicos />
      </div>
    </div>
  );
}
