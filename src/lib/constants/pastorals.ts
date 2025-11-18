export interface Pastoral {
  id: number;
  nome: string;
  descricao: string;
  icone: string;
}

export const PASTORALS: Pastoral[] = [
  {
    id: 1,
    nome: 'Pastoral da Caridade',
    descricao: 'Ação social e assistência aos necessitados',
    icone: 'HandHeart',
  },
  {
    id: 2,
    nome: 'Pastoral Litúrgica',
    descricao: 'Preparação e animação das celebrações',
    icone: 'Music',
  },
  {
    id: 3,
    nome: 'Catequese',
    descricao: 'Formação na fé para crianças e adultos',
    icone: 'BookOpen',
  },
  {
    id: 4,
    nome: 'Pastoral da Juventude',
    descricao: 'Formação e ação dos jovens na comunidade',
    icone: 'Users',
  },
];
