import { CheckCircle, MessageCircle, Sparkles, Zap } from 'lucide-react';
export function Servicos() {
  const planosOnline = [
    { periodo: 'Mensal', valor: 'R$299,99', popular: true },
    { periodo: 'Bimestral', valor: 'R$399,99', popular: false, parcelas: '2x R$214,50' },
    { periodo: 'Trimestral', valor: 'R$529,99', popular: false, parcelas: '3x R$199,99' },
    { periodo: 'Semestral', valor: 'R$729,99', popular: false, parcelas: '6x R$129,99' }
  ];

  const beneficiosPresencial = [
    'Anamnese detalhada e avaliação completa',
    'Plano de treinamento atualizado mensalmente',
    'Acesso ao aplicativo personalizado',
    'Suporte contínuo via WhatsApp e app',
    'Acompanhamento com gráficos de evolução',
    'Alongamentos e exercícios de mobilidade'
  ];

  const beneficiosOnline = [
    'Plano totalmente personalizado por objetivo',
    'Atualizações mensais para evolução constante',
    'Suporte contínuo via app e WhatsApp',
    'Vídeos explicativos de cada exercício',
    'Acompanhamento detalhado da evolução'
  ];

  return (
    <section id="servicos" className="relative py-16 md:py-24 px-6 bg-black overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-[120px]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block mb-4">
            <span className="text-amber-500 text-sm font-bold tracking-[0.3em] uppercase block mb-2">Marcela Magalhães</span>
            <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent"></div>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Escolha seu <span className="text-amber-500">Plano Ideal</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          
          {/* CARD 1: CONSULTORIA PRESENCIAL - Brilho Ajustado */}
          <div className="group relative bg-neutral-900/40 border-2 border-amber-500/20 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:border-amber-500/40 hover:-translate-y-2">
            
            {/* Glow Effect mais suave (reduzido de 20 para 10) */}
            <div className="absolute -inset-0.5 bg-amber-500/10 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

            <div className="relative z-10">
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 whitespace-nowrap">
                <div className="bg-amber-500 text-black px-6 py-2 rounded-full font-bold text-xs shadow-md flex items-center gap-2">
                  <Sparkles size={14} /> MAIS POPULAR EM BH
                </div>
              </div>

              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Consultoria Presencial</h3>
                <p className="text-amber-500/80 font-medium">Foco total e correção em tempo real</p>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-6 mb-8 text-center">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <span className="text-xl text-gray-500 line-through font-light">R$150</span>
                  <span className="text-5xl font-bold text-white tracking-tighter">R$120</span>
                </div>
                <span className="text-amber-500 font-bold text-sm tracking-widest uppercase">Valor por Sessão</span>
              </div>

              <ul className="space-y-4 mb-10">
                {beneficiosPresencial.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Botão com sombra removida para limpar o visual */}
              <a href="https://wa.me/5531991873621" target="_blank" rel="noopener noreferrer"
                className="w-full py-5 bg-amber-500 hover:bg-amber-400 text-black font-bold rounded-2xl flex items-center justify-center gap-3 transition-all active:scale-95 shadow-lg">
                <MessageCircle size={22} /> Agendar Sessão
              </a>
            </div>
          </div>

          {/* CARD 2: CONSULTORIA ONLINE */}
          <div className="group relative bg-neutral-900/40 border-2 border-white/5 rounded-[2.5rem] p-8 md:p-10 transition-all duration-500 hover:border-amber-500/20 hover:-translate-y-2">
            <div className="relative z-10">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">Consultoria Online</h3>
                <p className="text-gray-400">Treine onde e quando quiser</p>
              </div>

              <div className="space-y-3 mb-8">
                {planosOnline.map((plano, i) => (
                  <div key={i} className={`flex justify-between items-center p-4 rounded-2xl border transition-colors ${plano.popular ? 'bg-amber-500/10 border-amber-500/40' : 'bg-white/5 border-white/5'}`}>
                    <div>
                      <span className="text-white font-bold block">{plano.periodo}</span>
                      {plano.parcelas && <span className="text-[10px] text-gray-500 uppercase tracking-wider">{plano.parcelas}</span>}
                    </div>
                    <span className="text-xl font-bold text-amber-500">{plano.valor}</span>
                  </div>
                ))}
              </div>

              <ul className="space-y-4 mb-10">
                {beneficiosOnline.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <CheckCircle className="text-amber-500 shrink-0 mt-1" size={18} />
                    <span className="text-sm md:text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <a href="https://wa.me/5531991873621" target="_blank" rel="noopener noreferrer"
                className="w-full py-5 border border-amber-500/50 text-amber-500 hover:bg-amber-500/10 font-bold rounded-2xl flex items-center justify-center gap-3 transition-all">
                <Zap size={20} /> Escolher Plano Online
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}