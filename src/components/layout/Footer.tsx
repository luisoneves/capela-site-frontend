import { getGlobalData } from '@/lib/api';

export default async function Footer() {
  const globalData = await getGlobalData();
  // Se globalData falhar, redesSociais pode ser undefined, então damos um fallback
  const { textoRodape, redesSociais = [], telefone, emailContato } = globalData;

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
                aria-label={rede.label} // CORREÇÃO AQUI
              >
                {/* Aqui poderíamos ter ícones, mas por enquanto vamos usar o label */}
                {rede.label} {/* CORREÇÃO AQUI */}
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
          {textoRodape || `© ${currentYear} Capela Santa Clara. Todos os direitos reservados.`}
        </p>

      </div>
    </footer>
  );
}
