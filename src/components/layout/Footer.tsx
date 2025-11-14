import { getGlobalData } from '@/lib/api'; // Vamos reutilizar nossa função da API!

export default async function Footer() {
  // 1. Buscamos os mesmos dados globais
  const globalData = await getGlobalData();
  const { textoRodape, redesSociais, telefone, emailContato } = globalData;

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6 text-center">

        {/* Seção de Redes Sociais */}
        {redesSociais && redesSociais.length > 0 && (
          <div className="mb-4 flex justify-center space-x-4">
            {redesSociais.map((rede) => (
              <a
                key={rede.id}
                href={rede.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
                aria-label={rede.nome} // Bom para acessibilidade
              >
                {/* Aqui poderíamos ter ícones, mas por enquanto vamos usar o nome */}
                {rede.nome}
              </a>
            ))}
          </div>
        )}

        {/* Seção de Contato */}
        <div className="mb-4 text-gray-400">
          {telefone && <span className="mx-2">{telefone}</span>}
          {emailContato && <span className="mx-2">{emailContato}</span>}
        </div>

        {/* Texto do Rodapé */}
        <p className="text-gray-500 text-sm">
          {/* Usamos o texto do Strapi, com um fallback */}
          {textoRodape || `© ${currentYear} Capela Santa Clara. Todos os direitos reservados.`}
        </p>

      </div>
    </footer>
  );
}
