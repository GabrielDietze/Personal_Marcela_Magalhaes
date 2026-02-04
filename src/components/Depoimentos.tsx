import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

interface Depoimento {
  nome: string;
  texto: string;
  nota: number;
  objetivo?: string;
}

const depoimentos: Depoimento[] = [
  {
    nome: 'Ana Silva',
    texto: 'A Marcela transformou completamente minha relação com o exercício. Em 3 meses já vi resultados incríveis e me sinto muito mais confiante!',
    nota: 5,
    objetivo: 'Emagrecimento'
  },
  {
    nome: 'Carlos Mendes',
    texto: 'Treino online há 6 meses e nunca tive tanta evolução. O acompanhamento é excepcional e os treinos são sempre desafiadores.',
    nota: 5,
    objetivo: 'Hipertrofia'
  },
  {
    nome: 'Mariana Costa',
    texto: 'Profissional extremamente dedicada e atenciosa. Me ajudou a recuperar de uma lesão e hoje estou mais forte do que nunca!',
    nota: 5,
    objetivo: 'Reabilitação'
  },
];

export function Depoimentos() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextDepoimento = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevDepoimento = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section id="depoimentos" className="relative py-10 md:py-16 lg:py-24 px-4 md:px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Premium */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-block mb-4 md:mb-6">
            <span className="text-amber-500 text-xs md:text-sm font-semibold tracking-widest uppercase">Resultados Reais</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            O que dizem nossos <span className="gradient-gold-text">alunos</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto font-light px-2">
            Transformações reais de pessoas reais. Veja como transformamos vidas através do treinamento personalizado.
          </p>
        </div>

        {/* Card de Depoimento — caixa mais compacta (mobile e PC) */}
        <div className="max-w-2xl md:max-w-3xl mx-auto px-1">
          <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border border-amber-500/40 rounded-2xl md:rounded-3xl p-6 md:p-8 lg:p-10 shadow-gold-lg backdrop-blur-sm">
            {/* Decoração de citação */}
            <Quote className="absolute top-4 left-4 md:top-6 md:left-6 text-amber-500/20 w-16 h-16 md:w-20 md:h-20" aria-hidden="true" />
            
            <div className="relative z-10">
              {/* Estrelas */}
              <div className="flex items-center gap-0.5 mb-4 md:mb-5">
                {Array.from({ length: depoimentos[currentIndex].nota }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-amber-500 fill-amber-500 flex-shrink-0"
                    size={20}
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              {/* Depoimento */}
              <blockquote className="text-base md:text-lg lg:text-xl text-white leading-relaxed mb-6 md:mb-8 font-light italic">
                "{depoimentos[currentIndex].texto}"
              </blockquote>
              
              {/* Autor */}
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="min-w-0">
                  <p className="font-bold text-amber-500 text-base md:text-lg lg:text-xl mb-0.5">
                    {depoimentos[currentIndex].nome}
                  </p>
                  {depoimentos[currentIndex].objetivo && (
                    <p className="text-gray-400 text-sm md:text-base">
                      Objetivo: {depoimentos[currentIndex].objetivo}
                    </p>
                  )}
                </div>
                
                {/* Controles */}
                <div className="flex gap-2 flex-shrink-0">
                  <button
                    onClick={prevDepoimento}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="text-amber-500" size={20} />
                  </button>
                  <button
                    onClick={nextDepoimento}
                    className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="text-amber-500" size={20} />
                  </button>
                </div>
              </div>
              
              {/* Indicadores */}
              <div className="flex justify-center gap-1.5 mt-6 md:mt-6">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-1.5 md:h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-amber-500 w-8 md:w-10 shadow-gold'
                        : 'bg-amber-500/30 w-1.5 md:w-2 hover:bg-amber-500/50'
                    }`}
                    aria-label={`Ir para depoimento ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
