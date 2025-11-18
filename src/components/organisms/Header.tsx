'use client';

import { getGlobalData, isFallbackData } from '@/lib/api';
import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

// Fallback data profissional
const FALLBACK_MENU = [
  { id: 1, href: '#inicio', label: 'Início' },
  { id: 2, href: '#celebracoes', label: 'Celebrações' },
  { id: 3, href: '#pastorais', label: 'Pastorais' },
  { id: 4, href: '#contato', label: 'Contato' },
];

const FALLBACK_SITE = {
  nome: 'Capela Santa Clara',
};

export function Header() {
  const [globalData, setGlobalData] = useState<any>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const data = await getGlobalData();
        setGlobalData(data);
      } catch (error) {
        console.warn('🔧 Erro ao carregar dados do header - usando fallback');
        setGlobalData({});
      }
    }
    loadData();
  }, []);

  const isFallback = isFallbackData(globalData);

  // Dados com fallback elegante
  const nomeDoSite = globalData?.nomeDoSite || FALLBACK_SITE.nome;

  // Converte menu do Strapi para formato do Bolt ou usa fallback
  const navItems = globalData?.menuPrincipal?.map((item: any) => ({
    id: item.id,
    href: item.url || '#',
    label: item.label || 'Item Menu'
  })) || FALLBACK_MENU;

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo/Nome do Site com fallback visual */}
          <div className={isFallback ? 'fallback-text' : ''}>
            <h1 className="text-xl font-bold">
              {nomeDoSite}
            </h1>
          </div>

          {/* Menu Desktop */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item: any) => (
              <a
                key={item.id}
                href={item.href}
                className={isFallback ?
                  'text-gray-400 italic hover:text-gray-500' :
                  'text-[#2F4F4F] hover:text-[#1E3A3A] transition-colors'
                }
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Botão Mobile Menu */}
          <button
            className="md:hidden text-[#2F4F4F]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col space-y-4 pb-4">
            {navItems.map((item: any) => (
              <a
                key={item.id}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={isFallback ?
                  'text-gray-400 italic py-2' :
                  'text-[#2F4F4F] hover:text-[#1E3A3A] py-2 transition-colors'
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
