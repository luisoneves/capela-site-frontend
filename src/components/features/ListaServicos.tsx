import { Card } from "@/components/ui/Card";
import { H2, P } from "@/components/ui/Typography";

// A interface e a função de buscar dados continuam as mesmas
interface Servico {
  id: number;
  nome: string;
  descricao: string;
}

async function getServicos() {
  const apiUrl = process.env.STRAPI_API_URL || 'http://localhost:1337';
  const res = await fetch(`${apiUrl}/api/servicos`, { cache: 'no-store' });

  if (!res.ok) { throw new Error('Falha ao buscar os dados da API'); }
  const data = await res.json();
  return data.data;
}


export default async function ListaServicos() {
  const servicos: Servico[] = await getServicos();

  // Olhe como o JSX ficou muito mais limpo e semântico!
  return (
    <div className="w-full max-w-2xl space-y-4">
      {servicos.map((servico) => (
        <Card key={servico.id}>
          <H2>{servico.nome}</H2>
          <P>{servico.descricao}</P>
        </Card>
      ))}
    </div>
  );
}
