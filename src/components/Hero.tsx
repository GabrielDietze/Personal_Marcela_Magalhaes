export function Hero() {
  return (
    <header id="inicio" className="relative min-h-screen md:min-h-[78vh] overflow-hidden bg-black flex flex-col justify-center">
      {/* Mobile: foto como fundo, posicionada à direita + overlay para legibilidade */}
      <div className="absolute inset-0 z-0 lg:hidden" aria-hidden>
        <div
          className="absolute inset-0 bg-no-repeat bg-[length:90%]"
          style={{
            backgroundImage: "url('/marcela-hero.png')",
            backgroundPosition: "right center",
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      {/* Background: luzes sutis + brilho dourado (desktop e mobile) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.05),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_85%_50%,rgba(245,158,11,0.12),transparent_55%)]"></div>
        {/* Linhas decorativas sutis em dourado */}
        <div className="absolute inset-0 opacity-[0.06]" aria-hidden="true">
          <div className="absolute top-1/4 right-0 w-1/2 h-px bg-gradient-to-l from-amber-500 to-transparent"></div>
          <div className="absolute top-1/3 right-0 w-1/3 h-px bg-gradient-to-l from-amber-500/80 to-transparent"></div>
          <div className="absolute bottom-1/3 right-0 w-2/5 h-px bg-gradient-to-l from-amber-500/60 to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 px-6 pt-12 pb-14 md:pt-10 md:pb-12 md:px-8 w-full max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 md:gap-8 lg:gap-10 xl:gap-12 gap-12 items-center lg:items-end">
          
          {/* LADO ESQUERDO: texto (mobile = coluna única; PC = metade esquerda) */}
          <div className="space-y-8 md:space-y-6 lg:space-y-8 xl:space-y-10 order-2 lg:order-1">
            {/* Linha de boas-vindas */}
            <div className="space-y-2 animate-fade-in">
              <span className="text-amber-500 font-bold tracking-[0.35em] uppercase text-xs md:text-sm block">
                Bem-vindo à Consultoria
              </span>
              <div className="h-[2px] w-16 bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
            </div>

            {/* Título principal: Personal Marcela Magalhães */}
            <div className="space-y-3 md:space-y-4 lg:space-y-5">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.1] tracking-tighter text-white">
                <span className="block lg:inline">Personal</span>{' '}
                <span className="block lg:inline text-amber-500">Marcela</span>{' '}
                <span className="block lg:inline text-amber-500">Magalhães</span>
              </h1>

              {/* Subtítulo de autoridade: logo abaixo do nome, fonte menor, estilo discreto */}
              <p className="text-[10px] md:text-xs text-gray-400 font-medium tracking-wide leading-snug border-l-2 border-amber-500/50 pl-3 py-0.5">
                Credenciada pela Federação Mineira e <span className="text-amber-500/90">Bacharel em Educação Física</span>
              </p>
            </div>

            {/* CTAs — no mobile aparecem antes da imagem */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-3">
              <a
                href="#metodologia"
                className="group px-8 py-4 bg-amber-500 text-black font-black rounded-xl transition-all shadow-lg text-center text-sm md:text-base hover:scale-105 active:scale-95"
              >
                QUERO SABER MAIS
              </a>
              <a
                href="https://wa.me/5531991873621"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 border-2 border-white/20 text-white font-bold rounded-xl backdrop-blur-md text-center text-sm md:text-base hover:bg-white/5 transition-all"
              >
                Falar no WhatsApp
              </a>
            </div>

            {/* Indicadores — oculto no mobile */}
            <div className="hidden md:flex flex-wrap gap-4 md:gap-3 md:pt-4 pt-6 border-t border-white/10">
              {["100% Personalizado", "Método Científico", "Resultados rápidos"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-[10px] uppercase font-black text-gray-400">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* PC: lado direito — imagem */}
          <div className="hidden lg:flex order-1 lg:order-2 justify-center items-end">
            <div className="relative w-full max-w-lg flex justify-center scale-[0.9] origin-bottom">
              {/* Camadas de brilho ATRÁS da foto — se a imagem tiver transparência, aparecerão aqui */}
             <div className="absolute -right-8 top-1/2 -translate-y-1/2 w-80 h-[28rem] bg-amber-500/20 blur-3xl rounded-full" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-md bg-amber-500/5 rounded-full blur-2xl" />
              {/* Linhas decorativas sutis */}
              <div className="absolute top-0 right-0 w-32 h-px bg-gradient-to-l from-amber-500/30 to-transparent" />
              <div className="absolute bottom-1/4 right-0 w-24 h-px bg-gradient-to-l from-amber-500/20 to-transparent" />
              {/* Foto: use PNG com canal alpha (fundo transparente) para o recorte aparecer */}
              <img
                src="/marcela-hero.png"
                alt="Marcela Magalhães - Personal Trainer"
                className="relative w-full h-auto object-contain object-center drop-shadow-2xl max-h-[90vh]"
              />
              {/* Últimos 15% da imagem desvanecem no preto do fundo */}
              <div
                className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_0%,transparent_85%,#000_100%)]"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}