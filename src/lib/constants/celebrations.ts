export interface Celebration {
  id: number;
  nome: string;
  descricao: string;
  icone: string;
  action: string;
}

export const CELEBRATIONS: Celebration[] = [
  {
    id: 1,
    nome: 'Santa Missa',
    descricao: 'Celebração Eucarística diária e dominical',
    icone: 'Bible',
    action: 'Ver Horários',
  },
  {
    id: 2,
    nome: 'Batismo',
    descricao: 'Sacramento do renascimento espiritual',
    icone: 'Droplet',
    action: 'Agendar Celebração',
  },
  {
    id: 3,
    nome: 'Matrimônio',
    descricao: 'Aliança sagrada de amor e compromisso',
    icone: 'Heart',
    action: 'Preparar Cerimônia',
  },
];
