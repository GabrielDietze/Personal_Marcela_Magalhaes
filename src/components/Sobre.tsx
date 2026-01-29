import { CheckCircle } from 'lucide-react';

export function Sobre() {
  return (
    <section id="sobre" className="py-16 px-6 bg-gradient-to-b from-black to-neutral-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30 max-w-sm md:max-w-none mx-auto">
              <img
                src="/Imagem do WhatsApp de 2025-10-05 à(s) 10.58.15_64f7e4f2.jpg"
                alt="Marcela Magalhães trabalhando"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl font-bold mb-6 text-amber-500">Por que escolher a Marcela?</h2>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Minha missão é ajudar você a conquistar seus objetivos de forma eficiente e rápida,
              com um atendimento personalizado que se adapta às suas necessidades. Não é apenas treino: é uma transformação completa.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <p className="text-gray-300">Treinamento totalmente personalizado</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <p className="text-gray-300">Acompanhamento contínuo da evolução</p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} aria-hidden="true" />
                <p className="text-gray-300">Foco em resultados rápidos e sustentáveis</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

