export function Hero() {
  return (
    <header id="inicio" className="relative min-h-screen overflow-hidden bg-black flex flex-col justify-center">
      {/* BACKGROUND DECORATIVO (Opcional: apenas luzes sutis no fundo) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.05),transparent_70%)]"></div>
      </div>
      
      <div className="relative z-10 px-6 pt-24 pb-16 max-w-7xl mx-auto w-full">
        {/* A Grid agora controla os dois lados no PC */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LADO ESQUERDO: TEXTO E CONTEÚDO */}
          <div className="space-y-8 lg:space-y-10 order-2 lg:order-1">
            {/* Nome e Linha */}
            <div className="space-y-2 animate-fade-in">
              <span className="text-amber-500 font-bold tracking-[0.4em] uppercase text-sm block">
                Marcela Magalhães
              </span>
              <div className="h-[2px] w-16 bg-amber-500 shadow-[0_0_10px_#f59e0b]"></div>
            </div>

            {/* Título */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tighter text-white">
               Treinamento <span className="text-amber-500">Personalizado</span>
              </h1>

              {/* IMAGEM MOBILE: Visível apenas no celular */}
              <div className="lg:hidden w-full flex justify-center py-2">
                <div className="relative w-full max-w-[280px] aspect-square rounded-3xl overflow-hidden border-2 border-amber-500/20 shadow-2xl">
                  <img
                    src="/fotohero.jpg"
                    alt="Marcela Magalhães"
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 border-l-4 border-amber-500 pl-4 py-1 bg-amber-500/5">
                <span className="text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase">
                  Credenciada pela Federação Mineira <span className="text-amber-500">e Bacharel em Educação Física</span>
                </span>
              </div>


            </div>

            {/* Botões */}
            <div className="flex flex-col sm:flex-row gap-4">
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

            {/* Indicadores */}
            <div className="flex flex-wrap gap-4 pt-6 border-t border-white/10">
              {["100% Personalizado", "Método Científico","Resultados rápidos"].map((text) => (
                <div key={text} className="flex items-center gap-2 text-[10px] uppercase font-black text-gray-400">
                  <div className="w-1.5 h-1.5 bg-amber-500 rounded-full"></div>
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* LADO DIREITO: IMAGEM NO PC */}
          <div className="hidden lg:block order-1 lg:order-2">
            <div className="relative group">
              {/* Efeito de brilho atrás da imagem */}
              <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-[2.5rem] blur-2xl group-hover:opacity-75 transition-opacity"></div>
              
              {/* Moldura da Imagem */}
              <div className="relative rounded-[2.5rem] overflow-hidden border border-white/10 shadow-2xl aspect-[4/5]">
                <img 
                  src="/fotohero.jpg" 
                  alt="Marcela Magalhães"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                {/* Gradiente suave na base da imagem no PC */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
}