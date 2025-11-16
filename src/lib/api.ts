import { GlobalData } from "@/types/global";

// Função para buscar as configurações globais
export async function getGlobalData(): Promise<GlobalData> {
   const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

  // A URL está correta, vamos mantê-la
  const url = `${apiUrl}/api/configuracao-geral?populate[menuPrincipal][populate]=*&populate[redesSociais][populate]=*&populate=logo`;

  try {
    const res = await fetch(url, { cache: 'no-store' });

    if (!res.ok) {
      console.error("Erro na resposta da API:", res.status, res.statusText);
      throw new Error('Falha ao buscar as configurações globais da API');
    }

    const data = await res.json();

    if (!data.data) {
      console.error("A API retornou 'data' como nulo. Verifique se o 'ConfiguracaoGeral' está publicado no Strapi.");
      throw new Error("Nenhum dado encontrado para a Configuração Geral.");
    }

    // A CORREÇÃO PRINCIPAL ESTÁ AQUI: retornamos data.data diretamente.
    return data.data;

  } catch (error) {
    console.error("Erro ao buscar dados globais:", error);
    throw error;
  }
}
