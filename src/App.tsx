import { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Empatia } from './components/Empatia';
import { Depoimentos } from './components/Depoimentos';
import { Metodologia } from './components/Metodologia';
import { Especializacao } from './components/Especializacao';
import { Servicos } from './components/Servicos';
import { FAQ } from './components/FAQ';
import { Contato } from './components/Contato';
import { Footer } from './components/Footer';
import { CTAFloating } from './components/CTAFloating';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
      {/* AIDA: Atenção */}
      <Hero />
      {/* AIDA: Interesse */}
      <Empatia />
      {/* AIDA: Desejo - Prova Social */}
      <Depoimentos />
      {/* AIDA: Desejo - Solução */}
      <Metodologia />
      {/* AIDA: Desejo - Autoridade */}
      <Especializacao />
      {/* AIDA: Ação */}
      <Servicos />
      {/* Remover Objeções */}
      <FAQ />
      {/* Conversão Final */}
      <Contato />
      <Footer />
      <CTAFloating />
    </div>
  );
}

export default App;
