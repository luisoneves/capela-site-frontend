'use client';

import { getGlobalData, isFallbackData } from '@/lib/api';
import { useEffect, useState } from 'react';

// Fallback data profissional
const FALLBACK_DATA = {
  description: "Comunidade unida na fé e no serviço.",
  redesSociais: [],
  ano: new Date().getFullYear(),
};

export function Footer() {
  const [globalData, setGlobalData] = useState<any>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getGlobalData();
        setGlobalData(data);
      } catch (error) {
        console.warn('🔧 Erro ao carregar dados do footer - usando fallback');
        setGlobalData({});
      }
    }
    loadData();
  }, []);

  const isFallback = isFallbackData(globalData);

  // Dados com fallback elegante
  const descricao = globalData?.textoRodape || FALLBACK_DATA.description;
  const redesSociais = globalData?.redesSociais || FALLBACK_DATA.redesSociais;
  const ano = new Date().getFullYear();

  return (
    <footer className="bg-[#2F4F4F] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="text-center">

          {/* Logo/Nome do Site - mantendo design do Bolt */}
          <div className="flex justify-center mb-4">
            <div className={isFallback ? 'fallback-text' : ''}>
              <h2 className="text-2xl font-bold text-[#DAA520]">
                {globalData?.nomeDoSite || 'Capela Santa Clara'}
              </h2>
            </div>
          </div>

          {/* Descrição com fallback visual */}
          <p className={`mb-4 ${isFallback ? 'fallback-text' : 'opacity-80'}`}>
            {descricao}
          </p>

          {/* Redes Sociais - se existirem */}
          {redesSociais.length > 0 && (
            <div className="flex justify-center space-x-6 mb-4">
              {redesSociais.map((rede: any) => (
                <a
                  key={rede.id}
                  href={rede.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={isFallback ?
                    'fallback-text hover:opacity-70' :
                    'text-white opacity-80 hover:opacity-100 transition-opacity'
                  }
                  aria-label={rede.label || 'Rede social'}
                >
                  {rede.label || 'Rede'}
                </a>
              ))}
            </div>
          )}

          {/* Contato - se existir */}
          {(globalData?.telefone || globalData?.emailContato) && (
            <div className={`mb-4 ${isFallback ? 'fallback-text' : 'opacity-80'}`}>
              {globalData?.telefone && (
                <span className="mx-2">{globalData.telefone}</span>
              )}
              {globalData?.emailContato && (
                <span className="mx-2">{globalData.emailContato}</span>
              )}
            </div>
          )}

          {/* Copyright */}
          <p className={`text-sm ${isFallback ? 'fallback-text' : 'opacity-60'}`}>
            © {ano} Sacramento Ação Pastoral. Todos os direitos reservados.
          </p>

        </div>
      </div>
    </footer>
  );
}
