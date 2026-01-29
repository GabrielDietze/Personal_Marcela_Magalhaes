import { MessageCircle, Instagram, Mail } from 'lucide-react';

export function Contato() {
  return (
    <section id="contato" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header Premium */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Vamos Conversar</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Entre em <span className="gradient-gold-text">Contato</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Agradeço a confiança e estou à disposição para ajudá-lo a conquistar seus objetivos
          </p>
        </div>

        {/* Card Premium */}
        <div className="bg-gradient-to-br from-neutral-900/80 to-black border-2 border-amber-500/30 rounded-3xl p-10 md:p-16 shadow-gold-lg backdrop-blur-sm">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Informações de Contato */}
            <div>
              <h3 className="text-3xl font-bold mb-8 text-white">Informações de Contato</h3>
              <div className="space-y-6">
                <a
                  href="https://wa.me/5531991873621"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 rounded-xl hover:border-amber-500/60 hover:bg-amber-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
                    <MessageCircle className="text-amber-500" size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide">WhatsApp</p>
                    <p className="font-bold text-lg text-white">+55 31 99187-3621</p>
                  </div>
                </a>

                <a
                  href="https://instagram.com/_marcelamagal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/30 rounded-xl hover:border-amber-500/60 hover:bg-amber-500/20 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl flex items-center justify-center border border-amber-500/30 group-hover:scale-110 transition-transform">
                    <Instagram className="text-amber-500" size={28} aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 uppercase tracking-wide">Instagram</p>
                    <p className="font-bold text-lg text-white">@_marcelamagal</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Assinatura Premium */}
            <div className="bg-gradient-to-br from-black to-neutral-900 border-2 border-amber-500/30 rounded-2xl p-10 flex flex-col justify-center">
              <div>
                <p className="text-2xl font-bold gradient-gold-text mb-2">
                  Marcela Magalhães
                </p>
                <p className="text-gray-400 text-lg">
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
