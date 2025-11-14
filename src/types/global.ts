// Esta interface descreve o objeto que a função getGlobalData retorna.
export interface GlobalData {
  id: number;
  nomeDoSite: string;
  descricaoSite: string | null; // Permite que o valor seja string ou nulo
  logo: any; // Mantemos 'any' por enquanto para simplificar o tipo de mídia
  telefone: string | null;
  whatsapp: string | null;
  emailContato: string | null;
  endereco: string | null;
  textoRodape: string | null;

  // O menu principal é um array de objetos, cada um com esta forma:
  menuPrincipal: {
    id: number;
    label: string;
    url: string | null;
  }[]; // O '[]' no final significa que é um array desses objetos

  // As redes sociais também são um array de objetos
  redesSociais: {
    id: number;
    nome: string;
    url: string | null; // Corrigimos de 'link' para 'url' para bater com o que você criou
  }[];
}
