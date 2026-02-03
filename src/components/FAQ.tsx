import { ChevronDown, HelpCircle } from 'lucide-react';
import { useState } from 'react';

interface Pergunta {
  pergunta: string;
  resposta: string;
}

const perguntas: Pergunta[] = [
  {
    pergunta: 'Como funciona a consultoria online?',
    resposta: 'A consultoria online funciona através de um aplicativo personalizado onde você recebe seu plano de treino mensal, vídeos explicativos de cada exercício, acompanhamento da evolução e suporte contínuo via WhatsApp. É ideal para quem busca flexibilidade sem abrir mão da qualidade profissional.'
  },
  {
    pergunta: 'Preciso ter equipamentos em casa para a consultoria online?',
    resposta: 'Não necessariamente! Os treinos são adaptados de acordo com os equipamentos disponíveis. Posso criar planos desde treinos com peso corporal até treinos com equipamentos de academia. O importante é adaptar o treino à sua realidade.'
  },
  {
    pergunta: 'Quantas vezes por semana devo treinar?',
    resposta: 'A frequência ideal varia de acordo com seu objetivo, disponibilidade e nível de condicionamento. Durante a anamnese inicial, definimos juntos a frequência ideal para você alcançar seus objetivos de forma eficiente e sustentável.'
  },
  {
    pergunta: 'Como é feito o acompanhamento da evolução?',
    resposta: 'O acompanhamento é feito através de gráficos e métricas no aplicativo, onde você registra seus treinos, medidas corporais e fotos de progresso. Além disso, há suporte contínuo via WhatsApp para tirar dúvidas e ajustar o treino conforme necessário.'
  },
  {
    pergunta: 'Posso mudar de objetivo durante o acompanhamento?',
    resposta: 'Claro! Os objetivos podem mudar e os treinos são atualizados mensalmente para refletir suas novas metas. A flexibilidade é uma das vantagens do acompanhamento personalizado.'
  },
  {
    pergunta: 'A consultoria presencial inclui avaliação física?',
    resposta: 'Sim! A consultoria presencial inclui anamnese detalhada, avaliação física inicial e acompanhamento contínuo da evolução. Cada sessão é uma oportunidade de ajustar técnica, intensidade e estratégias de treino.'
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const togglePergunta = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-14 md:py-24 lg:py-32 px-4 md:px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header — menor no mobile */}
        <div className="text-center mb-10 md:mb-16">
          <div className="inline-block mb-3 md:mb-6">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Dúvidas Frequentes</span>
          </div>
          
          <div className="mx-auto w-14 h-14 md:w-20 md:h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-6 border border-amber-500/30">
            <HelpCircle className="text-amber-500 w-8 h-8 md:w-12 md:h-12" aria-hidden="true" />
          </div>

          <h2 className="text-2xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            Perguntas <span className="gradient-gold-text">Frequentes</span>
          </h2>
          <p className="text-base md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Tire suas dúvidas sobre nossos serviços e metodologia
          </p>
        </div>

        {/* Accordion — mais compacto no mobile */}
        <div className="space-y-3 md:space-y-4 mb-8 md:mb-12">
          {perguntas.map((item, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-neutral-900/80 to-black border border-amber-500/20 md:border-2 rounded-xl md:rounded-2xl overflow-hidden hover:border-amber-500/50 transition-all duration-300 backdrop-blur-sm"
            >
              <button
                onClick={() => togglePergunta(index)}
                className="w-full px-4 md:px-8 py-4 md:py-6 text-left flex items-center justify-between gap-3 md:gap-4 focus:outline-none focus:ring-2 focus:ring-amber-500 rounded-xl md:rounded-2xl"
                aria-expanded={openIndex === index}
              >
                <span className="font-bold text-sm md:text-xl text-white pr-4 md:pr-8 flex-1 text-left">
                  {item.pergunta}
                </span>
                <ChevronDown
                  className={`text-amber-500 flex-shrink-0 w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>
              {openIndex === index && (
                <div className="px-4 md:px-8 pb-4 md:pb-6 animate-in fade-in slide-in-from-top-2 duration-300">
                  <div className="pt-3 md:pt-4 border-t border-amber-500/20">
                    <p className="text-gray-300 leading-relaxed text-sm md:text-lg">{item.resposta}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA — menor no mobile */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-br from-amber-500/10 to-amber-600/5 border border-amber-500/30 rounded-xl md:rounded-2xl p-5 md:p-12 max-w-2xl backdrop-blur-sm">
            <p className="text-base md:text-2xl text-gray-300 mb-4 md:mb-6 font-light">
              Ainda tem dúvidas? Entre em contato conosco!
            </p>
            <a
              href="https://wa.me/5531991873621"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 md:gap-3 bg-gradient-to-r from-amber-500 to-amber-600 text-black px-6 py-3 md:px-10 md:py-5 rounded-lg font-bold text-sm md:text-lg hover:shadow-gold-lg transition-all duration-300 hover:scale-105 focus:outline-none"
            >
              <span>Falar com a Marcela</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}