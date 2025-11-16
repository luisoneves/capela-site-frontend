// Esta interface descreve o objeto que a função getGlobalData retorna.
export interface GlobalData {
  id: number;
  nomeDoSite: string;
  descricaoSite: string | null;
  logo: any; // Mantemos 'any' por enquanto para simplificar
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
  }[];

  // As redes sociais também são um array de objetos
  // CORREÇÃO: Usamos 'label' aqui para bater com o que foi cadastrado no Strapi
  redesSociais: {
    id: number;
    label: string; // ANTES ESTAVA 'nome', AGORA ESTÁ 'label'
    url: string | null;
  }[];
}
