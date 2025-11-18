import { GlobalData } from "@/types/global";

// As interfaces refletem a estrutura real do Strapi v5
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

// ⚡ CLIENTE HTTP UNIFICADO com fallback automático
async function fetchWithFallback<T>(
  endpoint: string, 
  fallback: T,
  options?: RequestInit
): Promise<T> {
  try {
    const res = await fetch(`${API_URL}${endpoint}`, {
      cache: 'no-store',
      ...options
    });

    if (!res.ok) {
      console.warn(`🔧 ${endpoint} falhou (${res.status}) - usando fallback`);
      return fallback;
    }

    const json = await res.json();
    return json.data ?? fallback;
  } catch (error) {
    console.error(`🔧 Erro em ${endpoint} - usando fallback:`, error);
    return fallback;
  }
}

// 🎯 FUNÇÕES ESPECÍFICAS atualizadas
export async function getGlobalData(): Promise<GlobalData> {
  const endpoint = `/api/configuracao-geral?populate[menuPrincipal]=*&populate[redesSociais]=*&populate=logo`;
  return fetchWithFallback<GlobalData>(endpoint, {} as GlobalData);
}

export async function getOficiosLiturgicos(): Promise<OficioLiturgico[]> {
  const endpoint = `/api/oficios-liturgicos?populate=imgoficios`;
  return fetchWithFallback<OficioLiturgico[]>(endpoint, []);
}

// 🎨 FUNÇÃO AUXILIAR MELHORADA para cores cinza
export function isFallbackData(data: any): boolean {
  if (!data) return true;
  if (Array.isArray(data)) return data.length === 0;
  return Object.keys(data).length === 0;
}

// 🆕 DADOS DE FALLBACK PADRÃO (opcional - para textos mais realistas)
export const FALLBACK_DATA = {
  site: {
    nome: 'Capela Santa Clara',
    telefone: '(11) 9999-9999',
    email: 'contato@capela.com'
  },
  menu: [
    { id: 1, label: 'Início', url: '/' },
    { id: 2, label: 'Sobre', url: '/sobre' },
    { id: 3, label: 'Contato', url: '/contato' }
  ]
} as const;
