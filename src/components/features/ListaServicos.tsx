import { Card } from "@/components/ui/Card";
import { H2, P } from "@/components/ui/Typography";
import { getOficiosLiturgicos, OficioLiturgico } from "@/lib/api";
import Image from 'next/image';

export default async function ListaServicos() {
  const oficios: OficioLiturgico[] = await getOficiosLiturgicos();

  if (!oficios || oficios.length === 0) {
    return <P>Nenhum ofício litúrgico encontrado no momento.</P>;
  }

  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  return (
    <div className="w-full max-w-2xl space-y-4">
      {oficios.map((oficio) => {
        const { nome, descricao, imgoficios } = oficio;
        const imageUrl = imgoficios?.url;

        return (
          <Card key={oficio.id}>
            {imageUrl && (
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-md">
                {/* CORREÇÃO PARA O NEXT.JS MODERNO */}
                <Image
                  src={API_URL + imageUrl}
                  alt={imgoficios?.alternativeText || `Imagem para ${nome}`}
                  fill // Substitui layout="fill"
                  style={{ objectFit: 'cover' }} // Substitui objectFit="cover"
                />
              </div>
            )}
            <H2>{nome}</H2>
            <div
              className="mt-2 text-gray-800 prose"
              dangerouslySetInnerHTML={{ __html: descricao }}
            />
          </Card>
        );
      })}
    </div>
  );
}
