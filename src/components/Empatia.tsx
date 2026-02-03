import { AlertCircle, Clock, Heart, ArrowRight } from 'lucide-react';

export function Empatia() {
  return (
    <section id="empatia" className="relative py-14 md:py-24 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Premium — menor no mobile */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-block mb-3 md:mb-6">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Você não está sozinho</span>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Você já passou por <span className="gradient-gold-text">isso?</span>
          </h2>
          <p className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Muitas pessoas enfrentam os mesmos desafios. Identificamos e resolvemos.
          </p>
        </div>

        {/* Cards Premium — mais compactos no mobile */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 mb-10 md:mb-16">
          <div className="group relative bg-gradient-to-br from-neutral-900/50 to-black border border-amber-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-gold-lg hover:-translate-y-2 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                <AlertCircle className="text-amber-500 w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-amber-500 transition-colors">
                Treina e não vê resultados?
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-4 md:mb-6">
                Você segue treinos genéricos, mas seu corpo não responde como esperado. O problema não é você: é a falta de personalização científica.
              </p>
             
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-neutral-900/50 to-black border border-amber-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-gold-lg hover:-translate-y-2 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                <Heart className="text-amber-500 w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-amber-500 transition-colors">
                Sente dores ou desconforto?
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-4 md:mb-6">
                Dores nas costas, joelhos ou ombros que limitam seus treinos. Isso não é normal e pode ser corrigido com a metodologia certa baseada em biomecânica.
              </p>
            </div>
          </div>

          <div className="group relative bg-gradient-to-br from-neutral-900/50 to-black border border-amber-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 hover:border-amber-500/50 transition-all duration-500 hover:shadow-gold-lg hover:-translate-y-2 backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent rounded-xl md:rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="relative z-10">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center mb-4 md:mb-6 border border-amber-500/30 group-hover:scale-110 transition-transform duration-300">
                <Clock className="text-amber-500 w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
              </div>
              <h3 className="text-lg md:text-2xl font-bold mb-3 md:mb-4 text-white group-hover:text-amber-500 transition-colors">
                Falta de tempo ou motivação?
              </h3>
              <p className="text-gray-300 leading-relaxed text-sm md:text-lg mb-4 md:mb-6">
                Rotina corrida, sem tempo para academia. Você precisa de um método que se adapte à sua vida, não o contrário. Treine onde e quando quiser.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Premium — menor no mobile */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-xl md:rounded-2xl p-5 md:p-12 max-w-4xl backdrop-blur-sm">
            <p className="text-base md:text-3xl text-white mb-4 md:mb-6 font-light">
              <strong className="gradient-gold-text font-bold">A boa notícia:</strong> Existe uma solução que resolve todos esses problemas de uma vez.
            </p>
            <a
              href="#metodologia"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 md:px-10 md:py-5 rounded-lg font-bold text-sm md:text-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 focus:ring-offset-black"
            >
              <span>Descobrir a Solução</span>
              <ArrowRight size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
