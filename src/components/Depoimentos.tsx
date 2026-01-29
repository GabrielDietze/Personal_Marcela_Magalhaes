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
    <section id="depoimentos" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Premium */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Resultados Reais</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            O que dizem nossos <span className="gradient-gold-text">alunos</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Transformações reais de pessoas reais. Veja como transformamos vidas através do treinamento personalizado.
          </p>
        </div>

        {/* Card de Depoimento Premium */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 border-2 border-amber-500/40 rounded-3xl p-10 md:p-16 shadow-gold-lg backdrop-blur-sm">
            {/* Decoração de citação */}
            <Quote className="absolute top-8 left-8 text-amber-500/20" size={120} aria-hidden="true" />
            
            <div className="relative z-10">
              {/* Estrelas */}
              <div className="flex items-center gap-1 mb-6">
                {Array.from({ length: depoimentos[currentIndex].nota }).map((_, i) => (
                  <Star
                    key={i}
                    className="text-amber-500 fill-amber-500"
                    size={28}
                    aria-hidden="true"
                  />
                ))}
              </div>
              
              {/* Depoimento */}
              <blockquote className="text-2xl md:text-3xl lg:text-4xl text-white leading-relaxed mb-10 font-light italic">
                "{depoimentos[currentIndex].texto}"
              </blockquote>
              
              {/* Autor */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <p className="font-bold text-amber-500 text-xl md:text-2xl mb-1">
                    {depoimentos[currentIndex].nome}
                  </p>
                  {depoimentos[currentIndex].objetivo && (
                    <p className="text-gray-400 text-base md:text-lg">
                      Objetivo: {depoimentos[currentIndex].objetivo}
                    </p>
                  )}
                </div>
                
                {/* Controles */}
                <div className="flex gap-3">
                  <button
                    onClick={prevDepoimento}
                    className="w-12 h-12 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Depoimento anterior"
                  >
                    <ChevronLeft className="text-amber-500" size={24} />
                  </button>
                  <button
                    onClick={nextDepoimento}
                    className="w-12 h-12 rounded-full bg-amber-500/20 hover:bg-amber-500/30 border border-amber-500/50 flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    aria-label="Próximo depoimento"
                  >
                    <ChevronRight className="text-amber-500" size={24} />
                  </button>
                </div>
              </div>
              
              {/* Indicadores */}
              <div className="flex justify-center gap-2 mt-8">
                {depoimentos.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-amber-500 w-12 shadow-gold'
                        : 'bg-amber-500/30 w-2 hover:bg-amber-500/50'
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
