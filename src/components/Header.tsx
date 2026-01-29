import { Menu, X } from 'lucide-react';

interface HeaderProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export function Header({ mobileMenuOpen, setMobileMenuOpen }: HeaderProps) {
  const menuItems = [
    { href: '#depoimentos', label: 'Resultados' },
    { href: '#metodologia', label: 'Como Funciona' },
    { href: '#servicos', label: 'Planos' },
    { href: '#contato', label: 'Contato' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-amber-500/20 px-6 py-4">
      <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
        <a href="#inicio" className="flex items-center gap-3" aria-label="Início">
          <img 
            src="/logo[1].png" 
            alt="Marcela Magalhães - Personal Trainer" 
            className="h-12 w-auto" 
            loading="eager"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
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

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-amber-500 p-2 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded"
          aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-amber-500/20 z-40">
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
