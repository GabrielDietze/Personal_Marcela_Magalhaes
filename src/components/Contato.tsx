import { MessageCircle, Instagram, Mail } from 'lucide-react';

export function Contato() {
  return (
    <section id="contato" className="relative py-10 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header — menor no mobile */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 md:mb-6">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Vamos Conversar</span>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Entre em <span className="gradient-gold-text">Contato</span>
          </h2>
          <p className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Agradeço a confiança e estou à disposição para ajudá-lo a conquistar seus objetivos
          </p>
        </div>

        {/* Card — mais compacto no mobile */}
        <div className="bg-gradient-to-br from-neutral-900/80 to-black border border-amber-500/30 md:border-2 rounded-2xl md:rounded-3xl p-5 md:p-16 shadow-gold-lg backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-xl md:text-3xl font-bold mb-5 md:mb-8 text-white">Informações de Contato</h3>
              <div className="space-y-4 md:space-y-6">
                <a
                  href="https://wa.me/5531991873621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 rounded-lg md:rounded-xl hover:border-amber-500/60 hover:bg-amber-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                    <MessageCircle className="text-amber-500 w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 mb-0.5 md:mb-1 uppercase tracking-wide">WhatsApp</p>
                    <p className="font-bold text-base md:text-lg text-white">+55 31 99187-3621</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/_marcelamagal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 rounded-lg md:rounded-xl hover:border-amber-500/60 hover:bg-amber-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <div className="w-11 h-11 md:w-14 md:h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform flex-shrink-0">
                    <Instagram className="text-amber-500 w-6 h-6 md:w-7 md:h-7" aria-hidden="true" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs md:text-sm text-gray-400 mb-0.5 md:mb-1 uppercase tracking-wide">Instagram</p>
                    <p className="font-bold text-base md:text-lg text-white">@_marcelamagal</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Assinatura — menor no mobile */}
            <div className="bg-gradient-to-br from-black to-neutral-900 border border-amber-500/30 md:border-2 rounded-xl md:rounded-2xl p-5 md:p-10 flex flex-col justify-center">
              <div>
                <p className="text-lg md:text-2xl font-bold gradient-gold-text mb-1 md:mb-2">
                  Marcela Magalhães
                </p>
                <p className="text-gray-400 text-sm md:text-lg">
                  Personal Trainer | Credenciada pela Federação Mineira
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
