import { getGlobalData } from '@/lib/api';
import { slugify } from '@/lib/utils';
import Link from 'next/link';

export default async function Header() {
  const globalData = await getGlobalData();
  const { nomeDoSite, menuPrincipal } = globalData;

  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* ...código do nome do site... */}
        <div className="flex space-x-4">
          {menuPrincipal.map((item) => (
            <Link
              key={item.id}
              // 2. A lógica do fallback inteligente!
              href={item.url || `/${slugify(item.label)}`}
              className="text-gray-600 hover:text-blue-700"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
