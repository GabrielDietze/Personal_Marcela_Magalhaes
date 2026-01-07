import { Award, Mail, Instagram, CheckCircle, Star, MessageCircle, Menu, X } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header/Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-600/20 via-black to-black"></div>
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-lg border-b border-amber-500/20 px-6 py-4 flex justify-between items-center">
          <div className="max-w-7xl mx-auto w-full flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img src="/logo[1].png" alt="Marcela Magalhães" className="h-12 w-auto" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#sobre" className="hover:text-amber-500 transition-colors">Sobre</a>
            <a href="#especializacao" className="hover:text-amber-500 transition-colors">Especialização</a>
            <a href="#servicos" className="hover:text-amber-500 transition-colors">Serviços</a>
            <a href="#contato" className="hover:text-amber-500 transition-colors">Contato</a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-amber-500 p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-0 right-0 bg-black/95 backdrop-blur-lg border-b border-amber-500/20 z-40">
            <div className="px-6 py-4 space-y-4">
              <a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg hover:text-amber-500 transition-colors py-2"
              >
                Sobre
              </a>
              <a
                href="#especializacao"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg hover:text-amber-500 transition-colors py-2"
              >
                Especialização
              </a>
              <a
                href="#servicos"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg hover:text-amber-500 transition-colors py-2"
              >
                Serviços
              </a>
              <a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-lg hover:text-amber-500 transition-colors py-2"
              >
                Contato
              </a>
            </div>
          </div>
        )}

        <div className="relative z-10 px-6 pt-32 pb-16 max-w-7xl mx-auto min-h-screen flex flex-col justify-center">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight animate-fade-in">
                <span className="text-amber-500">Marcela Magalhães</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed animate-fade-in-delay">
                Credenciada pela Federação Mineira e profissional de Educação Física.
                Especializada em treinamento personalizado para alcançar seus objetivos com eficiência.
              </p>
            </div>
            <div className="hidden md:block animate-fade-in-delay">
              <div className="relative w-full max-w-md mx-auto">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30 shadow-2xl shadow-amber-500/20">
                  <img src="/Imagem do WhatsApp de 2025-10-05 à(s) 10.58.16_f9609f85.jpg" alt="Marcela Magalhães" className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-16 md:mt-20 animate-fade-in-delay-2">
            <a href="#sobre" className="group flex flex-col items-center gap-2 text-amber-500/60 hover:text-amber-500 transition-all duration-300">
              <div className="w-8 h-12 border-2 border-current rounded-full flex items-start justify-center p-2">
                <div className="w-1 h-2 bg-current rounded-full animate-scroll"></div>
              </div>
            </a>
          </div>
        </div>
      </header>

      {/* Sobre Section */}
      <section id="sobre" className="py-16 px-6 bg-gradient-to-b from-black to-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30 max-w-sm md:max-w-none mx-auto">
                <img src="/Imagem do WhatsApp de 2025-10-05 à(s) 10.58.15_64f7e4f2.jpg" alt="Marcela Magalhães" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-bold mb-6 text-amber-500">Meu Objetivo</h2>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Minha missão é ajudar você a conquistar seus objetivos de forma eficiente e rápida,
                com um atendimento personalizado que se adapta às suas necessidades.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300">Treinamento totalmente personalizado</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300">Acompanhamento contínuo da evolução</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={24} />
                  <p className="text-gray-300">Foco em resultados rápidos e sustentáveis</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Especialização Section */}
      <section id="especializacao" className="py-16 px-6 bg-neutral-950">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Award className="text-amber-500 mx-auto mb-4" size={48} />
            <h2 className="text-4xl font-bold mb-4">Formação e <span className="text-amber-500">Especialização</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profissional qualificada com formação sólida e especializações focadas em resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-amber-500">Formação</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <Star className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Bacharel em Educação Física</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Credenciada pela Federação Mineira</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Cursos especializados em Biomecânica do Movimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Cursos em Composição Corporal e Avaliação Física</span>
                </li>
                <li className="flex items-start gap-3">
                  <Star className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Cursos de Reabilitação de Lesões e Correção Postural</span>
                </li>
              </ul>
            </div>

            <div className="bg-black border border-amber-500/20 rounded-xl p-8 hover:border-amber-500/40 transition-all">
              <h3 className="text-2xl font-bold mb-6 text-amber-500">Áreas de Atuação</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Hipertrofia e Emagrecimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Definição Muscular</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Reabilitação e Fortalecimento</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Condicionamento Físico</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Treinamento Esportivo</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span>Qualidade de Vida</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços e Preços Section */}
      <section id="servicos" className="py-16 px-6 bg-gradient-to-b from-neutral-950 to-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Serviços e <span className="text-amber-500">Investimento</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Escolha o plano ideal para sua jornada de transformação
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Consultoria Presencial */}
            <div className="bg-gradient-to-br from-amber-500/10 to-black border-2 border-amber-500 rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-4">Consultoria Presencial</h3>
                <p className="text-gray-400 mb-4">Duração: 1 hora</p>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Na consultoria presencial, você terá um atendimento exclusivo, com um treinamento totalmente personalizado e focado nos seus objetivos.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-amber-500 text-lg">Inclui:</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Anamnese detalhada para adaptar o treino às suas necessidades individuais</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Consultoria online com planos de treinamento atualizados mensalmente</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Acesso ao aplicativo de treino personalizado</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Suporte contínuo via WhatsApp e aplicativo</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Acompanhamento da evolução por gráficos claros e objetivos</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Alongamentos e exercícios de mobilidade para melhorar flexibilidade e prevenir lesões</span>
                </div>
              </div>

              <div className="bg-black/50 rounded-xl p-6 mb-6 border border-amber-500/30">
                <div className="text-center">
                  <div className="flex items-center justify-center gap-4 mb-2">
                    <span className="text-2xl text-gray-500 line-through">R$150</span>
                    <span className="text-5xl font-bold text-amber-500">R$120</span>
                  </div>
                  <p className="text-amber-400 font-semibold text-lg">VALOR PROMOCIONAL</p>
                  <p className="text-gray-400 text-sm mt-2">por aula de 1 hora</p>
                </div>
              </div>

              <p className="text-sm text-gray-400 italic mb-6 text-center">
                Cada sessão presencial oferece 1 hora de acompanhamento completo, com orientação técnica, correções em tempo real e foco no seu desenvolvimento contínuo.
              </p>

              <a href="https://wa.me/5531991873621?text=Olá%20Marcela!%20Tenho%20interesse%20na%20Consultoria%20Presencial.%20Gostaria%20de%20mais%20informações." target="_blank" rel="noopener noreferrer" className="w-full bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Solicitar Consultoria Presencial
              </a>
            </div>

            {/* Consultoria Online */}
            <div className="bg-black border-2 border-amber-500/30 rounded-2xl p-8 hover:scale-105 transition-transform">
              <div className="text-center mb-6">
                <h3 className="text-3xl font-bold mb-4">Consultoria Online</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                O programa de consultoria online oferece a mesma qualidade do presencial, com a comodidade de poder treinar em qualquer lugar. Cada plano de treinamento é completamente personalizado, atualizado mensalmente e acompanhado por um suporte contínuo, garantindo evolução e resultados consistentes.
              </p>

              <div className="space-y-4 mb-6">
                <h4 className="font-semibold text-amber-500 text-lg">Inclui:</h4>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Plano de treinamento totalmente personalizado de acordo com seu objetivo</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Atualizações mensais para garantir evolução constante</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Suporte contínuo via aplicativo e WhatsApp</span>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="text-amber-500 flex-shrink-0 mt-1" size={20} />
                  <span className="text-gray-300">Vídeos explicativos e acompanhamento detalhado da evolução</span>
                </div>
              </div>

              <div className="bg-neutral-900/50 rounded-xl p-6 mb-6 border border-amber-500/20">
                <h4 className="font-semibold text-amber-500 text-lg mb-4">Valores:</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Mensal</span>
                    <div className="text-right">
                      <span className="text-xl font-bold text-amber-500">R$299,99</span>
                      <p className="text-xs text-amber-400">valor promocional</p>
                    </div>
                  </div>
                  <div className="border-t border-amber-500/10 pt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">Bimestral</span>
                      <span className="text-xl font-bold text-amber-500">R$399,99</span>
                    </div>
                    <p className="text-sm text-gray-500 text-right">2x R$214,50 ou à vista</p>
                  </div>
                  <div className="border-t border-amber-500/10 pt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">Trimestral</span>
                      <span className="text-xl font-bold text-amber-500">R$529,99</span>
                    </div>
                    <p className="text-sm text-gray-500 text-right">3x R$199,99 ou à vista</p>
                  </div>
                  <div className="border-t border-amber-500/10 pt-3">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-gray-300">Semestral</span>
                      <span className="text-xl font-bold text-amber-500">R$729,99</span>
                    </div>
                    <p className="text-sm text-gray-500 text-right">6x R$129,99 ou à vista</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-gray-400 italic mb-6 text-center">
                A consultoria online é ideal para quem busca flexibilidade, praticidade e resultados reais sem abrir mão da qualidade profissional.
              </p>

              <a href="https://wa.me/5531991873621?text=Olá%20Marcela!%20Tenho%20interesse%20na%20Consultoria%20Online.%20Gostaria%20de%20mais%20informações%20sobre%20os%20planos." target="_blank" rel="noopener noreferrer" className="w-full bg-amber-500 text-black px-6 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-all inline-flex items-center justify-center gap-2">
                <MessageCircle size={20} />
                Solicitar Consultoria Online
              </a>
            </div>
          </div>

          {/* Diferencial Section */}
          <div className="max-w-4xl mx-auto mt-12 bg-gradient-to-r from-amber-500/10 via-black to-amber-500/10 border border-amber-500/30 rounded-2xl p-8">
            <div className="text-center">
              <Star className="text-amber-500 mx-auto mb-4" size={40} />
              <p className="text-gray-300 leading-relaxed text-lg">
                Tanto na modalidade online quanto presencial, o grande diferencial está na qualidade do acompanhamento, no planejamento estratégico do treino e na dedicação em cada detalhe para que você alcance seus objetivos com segurança, constância e motivação. Não é apenas um treino: é um processo estruturado para transformar sua rotina, sua performance e sua saúde.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato Section */}
      <section id="contato" className="py-16 px-6 bg-black">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Entre em <span className="text-amber-500">Contato</span></h2>
            <p className="text-gray-400">
              Agradeço a confiança e estou à disposição para ajudá-lo a conquistar seus objetivos.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-500/10 to-black border border-amber-500/30 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
                <div className="space-y-4">
                  <a href="https://wa.me/5531991873621" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-colors group">
                    <div className="bg-amber-500/20 p-3 rounded-lg group-hover:bg-amber-500/30 transition-colors">
                      <MessageCircle className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">WhatsApp</p>
                      <p className="font-semibold">+55 31 99187-3621</p>
                    </div>
                  </a>

                  <a href="https://instagram.com/_marcelamagal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-300 hover:text-amber-500 transition-colors group">
                    <div className="bg-amber-500/20 p-3 rounded-lg group-hover:bg-amber-500/30 transition-colors">
                      <Instagram className="text-amber-500" size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-gray-500">Instagram</p>
                      <p className="font-semibold">@_marcelamagal</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-black rounded-xl p-6 border border-amber-500/20">
                <p className="text-gray-300 leading-relaxed mb-4">
                  Atenciosamente,
                </p>
                <p className="text-xl font-bold text-amber-500 mb-1">
                  Marcela Magalhães
                </p>
                <p className="text-gray-400">
                  Personal Trainer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-950 border-t border-amber-500/20 py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <div className="flex items-center justify-center gap-2 mb-4">
            <img src="/logo[1].png" alt="Marcela Magalhães" className="h-8 w-auto" />
          </div>
          <p className="text-sm">
            Personal Trainer | Credenciada pela Federação Mineira
          </p>
          <p className="text-xs mt-2 text-gray-500">
            © 2025 Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
