// Esta função transforma um texto como "Pedidos de Oração" em "pedidos-de-oracao"
export function slugify(text: string): string {
  return text
    .toString()
    .toLowerCase()
    .normalize('NFD') // Separa acentos das letras
    .replace(/[\u0300-\u036f]/g, '') // Remove os acentos
    .replace(/\s+/g, '-') // Substitui espaços por -
    .replace(/[^\w-]+/g, '') // Remove todos os caracteres não-palavra, exceto -
    .replace(/--+/g, '-') // Substitui múltiplos - por um único -
    .replace(/^-+/, '') // Remove hífens do início
    .replace(/-+$/, ''); // Remove hífens do fim
}
