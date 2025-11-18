import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import { Toaster } from 'sonner';
import { cn } from '@/lib/utils';
import "./globals.css";

// Importações CORRETAS dos organisms
import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";

// Fontes elegantes do Bolt
const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap',
});

const sourceSans = Source_Sans_3({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Capela Santa Clara - Celebrações e Pastoral",
  description: "Site oficial da Capela Santa Clara - Comunidade unida na fé e no serviço",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={cn('scroll-smooth', playfair.variable, sourceSans.variable)}>
      <body className={cn(
        'min-h-screen bg-[#F5F5DC] antialiased flex flex-col',
        'font-sans'
      )}>
        {/* Header com fallback + Strapi ready */}
        <Header />
        
        {/* Conteúdo principal */}
        <main className="flex-grow">
          {children}
        </main>
        
        {/* Footer com fallback + Strapi ready */}
        <Footer />
        
        {/* Toaster para notificações (do Bolt) */}
        <Toaster position="top-right" richColors />
      </body>
    </html>
  );
}
