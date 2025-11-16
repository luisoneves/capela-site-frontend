import { GlobalData } from "@/types/global";

// As interfaces refletem a estrutura real do Strapi v5 (sem 'attributes' no nível superior)
export interface OficioLiturgico {
  id: number;
  nome: string;
  descricao: string;
  imgoficios: {
    url: string;
    alternativeText: string | null;
  } | null;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

// Função para buscar as configurações globais
export async function getGlobalData(): Promise<GlobalData> {
  const endpoint = `/api/configuracao-geral?populate[menuPrincipal]=*&populate[redesSociais]=*&populate=logo`;

  try {
    const res = await fetch(API_URL + endpoint, { cache: 'no-store' });
    if (!res.ok) {
      console.error(`API para Globals falhou com status: ${res.status}`);
      // Lança o erro para que o Next.js possa tratá-lo (ex: mostrar uma página de erro)
      throw new Error('Falha ao buscar dados globais.');
    }

    const json = await res.json();
    if (!json.data) {
      throw new Error("Dados globais não encontrados no Strapi. Verifique se o conteúdo está publicado.");
    }
    // A resposta é simplesmente o objeto dentro de 'data'
    return json.data;
  } catch (error) {
    console.error("Erro detalhado em getGlobalData:", error);
    // Em caso de erro, lançamos novamente para que a página quebre e nos avise do problema.
    // O ideal, no futuro, é tratar isso com uma página de erro customizada.
    throw error;
  }
}

// Função para buscar os Ofícios Litúrgicos
export async function getOficiosLiturgicos(): Promise<OficioLiturgico[]> {
  const endpoint = `/api/oficios-liturgicos?populate=imgoficios`;

  try {
    const res = await fetch(API_URL + endpoint, { cache: 'no-store' });
    if (!res.ok) {
       console.error(`API para Ofícios falhou com status: ${res.status}`);
       throw new Error('Falha ao buscar ofícios.');
    }

    const json = await res.json();
    // A resposta é o array que está dentro de 'data'
    return json.data || []; // Retorna os dados ou um array vazio se não houver nada
  } catch (error) {
    console.error("Erro detalhado em getOficiosLiturgicos:", error);
    throw error;
  }
}
