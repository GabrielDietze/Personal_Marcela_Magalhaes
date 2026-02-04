import { Smartphone, MessageCircle, TrendingUp, Shield, CheckCircle2, ArrowRight } from 'lucide-react';

export function Metodologia() {
  return (
    <section id="metodologia" className="relative py-10 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Premium — menor no mobile */}
        <div className="text-center mb-10 md:mb-20">
          <div className="inline-block mb-3 md:mb-6">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Metodologia Científica</span>
          </div>
          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Como funciona a <span className="gradient-gold-text">Metodologia</span>
          </h2>
          <p className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Um sistema completo e estruturado baseado em ciência para garantir seus resultados
          </p>
        </div>

        {/* Conteúdo Principal — mais compacto no mobile */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center mb-12 md:mb-20">
          {/* Texto Principal */}
          <div className="space-y-5 md:space-y-8">
            <div>
              <h3 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                Treine sem dores: Metodologia baseada em <span className="gradient-gold-text">Biomecânica</span>
              </h3>
              <p className="text-base md:text-xl text-gray-300 leading-relaxed font-light">
                Diferente de treinos genéricos, cada exercício é planejado considerando sua postura, histórico de lesões e objetivos específicos. Isso significa <strong className="text-amber-500 font-semibold">segurança, eficiência e resultados duradouros</strong>.
              </p>
            </div>

            <div className="space-y-4 md:space-y-6">
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg md:rounded-xl hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <Shield className="text-amber-500 w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-base md:text-lg mb-0.5 md:mb-1">Prevenção de Lesões</p>
                  <p className="text-gray-400 text-sm md:text-base">Correção postural e fortalecimento preventivo baseado em biomecânica</p>
                </div>
              </div>
              <div className="flex items-start gap-3 md:gap-4 p-4 md:p-6 bg-gradient-to-br from-amber-500/10 to-transparent border border-amber-500/20 rounded-lg md:rounded-xl hover:border-amber-500/40 transition-all">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0 border border-amber-500/30">
                  <TrendingUp className="text-amber-500 w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                </div>
                <div className="min-w-0">
                  <p className="text-white font-bold text-base md:text-lg mb-0.5 md:mb-1">Resultados Acelerados</p>
                  <p className="text-gray-400 text-sm md:text-base">Movimentos otimizados para máxima eficiência e resultados mais rápidos</p>
                </div>
              </div>
            </div>
          </div>

          {/* Processo Premium — mais compacto no mobile */}
          <div className="bg-gradient-to-br from-neutral-900/80 to-black border border-amber-500/30 md:border-2 rounded-2xl md:rounded-3xl p-6 md:p-10 backdrop-blur-sm shadow-gold">
            <h4 className="text-lg md:text-3xl font-bold mb-5 md:mb-8 gradient-gold-text">O Processo Completo</h4>
            <div className="space-y-4 md:space-y-6">
              {[
                { num: '1', title: 'Avaliação Detalhada', desc: 'Anamnese completa, análise postural e definição de objetivos' },
                { num: '2', title: 'Plano Personalizado', desc: 'Treino criado exclusivamente para você, com base em biomecânica' },
                { num: '3', title: 'Acompanhamento Contínuo', desc: 'Ajustes mensais e suporte via app e WhatsApp' },
                { num: '4', title: 'Evolução Constante', desc: 'Gráficos de progresso e atualizações para manter resultados' }
              ].map((step, index) => (
                <div key={index} className="flex items-start gap-3 md:gap-4 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-amber-500 to-amber-600 text-black rounded-lg md:rounded-xl flex items-center justify-center font-bold text-base md:text-lg flex-shrink-0 group-hover:scale-110 transition-transform shadow-gold">
                    {step.num}
                  </div>
                  <div className="flex-1 pt-0.5 min-w-0">
                    <p className="text-white font-bold text-base md:text-lg mb-0.5 md:mb-1">{step.title}</p>
                    <p className="text-gray-400 text-sm md:text-base">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Diferenciais Premium — mais compactos no mobile */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8">
          {[
            { icon: Smartphone, title: 'App Personalizado', desc: 'Acesse seu treino a qualquer hora, em qualquer lugar' },
            { icon: MessageCircle, title: 'Suporte 24/7', desc: 'Tire dúvidas e receba orientações quando precisar' },
            { icon: TrendingUp, title: 'Acompanhamento Real', desc: 'Gráficos e métricas para ver sua evolução' }
          ].map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group bg-gradient-to-br from-neutral-900/50 to-black border border-amber-500/20 rounded-xl md:rounded-2xl p-5 md:p-8 text-center hover:border-amber-500/50 hover:shadow-gold transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl md:rounded-2xl flex items-center justify-center mx-auto mb-4 md:mb-6 border border-amber-500/30 group-hover:scale-110 transition-transform">
                  <Icon className="text-amber-500 w-6 h-6 md:w-8 md:h-8" aria-hidden="true" />
                </div>
                <h4 className="text-base md:text-xl font-bold mb-2 md:mb-3 text-white">{item.title}</h4>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
