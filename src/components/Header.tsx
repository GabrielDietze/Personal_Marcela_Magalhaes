import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const menuItems = [
    { href: '#depoimentos', label: 'Resultados' },
    { href: '#metodologia', label: 'Como Funciona' },
    { href: '#servicos', label: 'Planos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b px-6 py-2.5 transition-all duration-200 md:px-8 md:py-3
        ${scrolled
          ? 'bg-black/95 backdrop-blur-lg border-amber-500/20'
          : 'bg-black border-amber-500/20 md:border-transparent'
        }
        md:border-b
      `}
    >
      {/* Antes do scroll: fundo preto igual à hero (uniforme). Após scroll: blur + borda. Mobile: borda sempre visível. */}
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center md:grid md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-4">
        <a href="#inicio" className="flex items-center gap-3 md:justify-self-start" aria-label="Início">
          <img 
            src="/logo[1].png" 
            alt="Marcela Magalhães - Personal Trainer" 
            className="h-9 md:h-14 w-auto object-contain" 
            loading="eager"
          />
        </a>

        {/* Desktop Menu - centralizado */}
        <div className="hidden md:flex gap-6 justify-self-center text-sm">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="hover:text-amber-500 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop: CTA no header | Mobile: botão do menu */}
        <div className="flex items-center justify-end gap-4 md:justify-self-end">
          <a
            href="#contato"
            className="hidden md:inline-flex px-4 py-2 bg-amber-500 text-black font-bold rounded-lg text-xs hover:bg-amber-400 transition-colors focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            AGENDAR CONSULTORIA
          </a>
          <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-amber-500 p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-14 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-amber-500/20 z-40">
          <div className="px-6 py-4 space-y-4">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg hover:text-amber-500 transition-colors py-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
