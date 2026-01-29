import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CTAFloating() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // O botão aparece após 300px de scroll se não tiver sido fechado manualmente
      if (window.scrollY > 300) {
        if (!isClosed) setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Verifica a posição inicial caso a página já comece scrollada
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isClosed]);

  // Se o usuário fechou ou ainda não scrollou o suficiente, não renderiza nada
  if (!isVisible || isClosed) return null;

  return (
    <div 
      className="fixed bottom-6 right-6 z-[9999] animate-in fade-in slide-in-from-bottom-4 duration-500"
      style={{ transition: 'all 0.3s ease' }}
    >
      <div className="group relative bg-gradient-to-r from-amber-500 to-amber-600 text-black rounded-full shadow-[0_10px_40px_rgba(245,158,11,0.4)] p-4 md:p-5 flex items-center justify-center">
        
        {/* Botão de Fechar */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsClosed(true);
          }}
          className="absolute -top-2 -right-2 bg-black text-white rounded-full p-1.5 hover:bg-neutral-800 transition-colors border border-amber-500/20 z-10"
          aria-label="Fechar"
        >
          <X size={14} />
        </button>

        {/* Link do WhatsApp */}
        <a
          href="https://wa.me/5531991873621?text=Olá%20Marcela!%20Gostaria%20de%20saber%20mais%20sobre%20seu%20treinamento%20personalizado."
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 font-black text-sm md:text-base hover:opacity-90 transition-opacity"
        >
          <MessageCircle size={24} className="fill-current" />
          <span className="whitespace-nowrap uppercase tracking-tight">Falar no WhatsApp</span>
        </a>

        {/* Efeito de brilho externo (Glow) no hover no PC */}
        <div className="absolute inset-0 rounded-full bg-amber-500 blur-lg opacity-0 group-hover:opacity-20 transition-opacity pointer-events-none"></div>
      </div>
    </div>
  );
}