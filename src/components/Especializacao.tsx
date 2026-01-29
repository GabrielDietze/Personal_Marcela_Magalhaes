import { Award, Star, CheckCircle, GraduationCap, BookOpen } from 'lucide-react';

export function Especializacao() {
  return (
    <section id="especializacao" className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-black via-neutral-950 to-black overflow-hidden">
      {/* Background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-amber-600 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Premium */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-amber-500 text-sm font-semibold tracking-widest uppercase">Credenciais</span>
          </div>
          
          {/* AJUSTE AQUI: mx-auto para centralizar o contêiner e flex para centralizar o ícone dentro */}
          <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/30">
            <Award className="text-amber-500" size={48} aria-hidden="true" />
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Formação e <span className="gradient-gold-text">Especialização</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto font-light">
            Profissional qualificada com formação sólida e especializações focadas em resultados científicos
          </p>
        </div>

        {/* Cards Premium */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Formação */}
          <div className="group bg-gradient-to-br from-neutral-900/80 to-black border-2 border-amber-500/30 rounded-3xl p-10 hover:border-amber-500/60 transition-all duration-500 hover:shadow-gold-lg hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/30 group-hover:scale-110 transition-transform">
              <GraduationCap className="text-amber-500" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-bold mb-8 text-white">Formação</h3>
            <ul className="space-y-4">
              {[
                'Bacharel em Educação Física',
                'Credenciada pela Federação Mineira',
                'Cursos especializados em Biomecânica do Movimento',
                'Cursos em Composição Corporal e Avaliação Física',
                'Cursos de Reabilitação de Lesões e Correção Postural'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Star className="text-black" size={14} aria-hidden="true" />
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Áreas de Atuação */}
          <div className="group bg-gradient-to-br from-neutral-900/80 to-black border-2 border-amber-500/30 rounded-3xl p-10 hover:border-amber-500/60 transition-all duration-500 hover:shadow-gold-lg hover:-translate-y-2 backdrop-blur-sm">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-500/20 to-amber-600/10 rounded-2xl flex items-center justify-center mb-6 border border-amber-500/30 group-hover:scale-110 transition-transform">
              <BookOpen className="text-amber-500" size={32} aria-hidden="true" />
            </div>
            <h3 className="text-3xl font-bold mb-8 text-white">Áreas de Atuação</h3>
            <ul className="space-y-4">
              {[
                'Hipertrofia e Emagrecimento',
                'Definição Muscular',
                'Reabilitação e Fortalecimento',
                'Condicionamento Físico',
                'Treinamento Esportivo',
                'Qualidade de Vida'
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 bg-gradient-to-br from-amber-500 to-amber-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="text-black" size={14} aria-hidden="true" />
                  </div>
                  <span className="text-gray-300 text-lg leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Destaque Premium */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-amber-500/10 via-black to-amber-600/10 border-2 border-amber-500/30 rounded-3xl p-10 md:p-16 text-center backdrop-blur-sm shadow-gold">
            <p className="text-xl md:text-2xl text-white leading-relaxed font-light">
              Cada especialização foi escolhida com <strong className="gradient-gold-text font-semibold">cuidado científico</strong> para garantir que você receba o melhor atendimento baseado em evidências, não em "achismos". Sua transformação merece <strong className="gradient-gold-text font-semibold">excelência profissional</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}